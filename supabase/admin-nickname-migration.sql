-- 관리자 작성글과 댓글을 모든 이용자에게 구분해 보여 주는 마이그레이션
alter table public.community_posts add column if not exists is_admin boolean not null default false;
alter table public.community_comments add column if not exists is_admin boolean not null default false;

create or replace view public.community_post_feed as
  select id, nickname, title, body, is_admin, created_at
  from public.community_posts;

create or replace view public.community_comment_feed as
  select id, target_id, nickname, body, is_admin, created_at
  from public.community_comments;

create or replace function public.create_guest_post(
  p_nickname text,
  p_title text,
  p_body text
) returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_nickname text;
  v_content text;
  v_interval interval;
  v_is_admin boolean;
begin
  v_nickname := coalesce(nullif(auth.jwt() -> 'user_metadata' ->> 'username', ''), trim(p_nickname), '익명 1');
  v_is_admin := coalesce((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin', false);
  v_content := lower(trim(p_title) || ' ' || trim(p_body));
  v_interval := case when auth.uid() is null then interval '15 seconds' else interval '60 seconds' end;

  if v_content ~ '(https?://|www\\.|bit\\.ly|t\\.me|telegram|텔레그램|카카오톡|오픈채팅|바카라|카지노|대출|[0-9]{2,3}[-.[:space:]][0-9]{3,4}[-.[:space:]][0-9]{4})' then
    raise exception '광고·연락처 유도 문구와 외부 링크는 작성할 수 없습니다.';
  end if;
  if v_content ~ '(씨발|시발|ㅅㅂ|병신|ㅂㅅ|개새끼|좆|fuck|bitch|nigger)' then
    raise exception '욕설이나 혐오 표현은 작성할 수 없습니다.';
  end if;
  if exists (
    select 1 from public.community_posts
    where nickname = v_nickname and created_at > now() - v_interval
  ) then
    raise exception '작성 간격 제한이 적용 중입니다. 잠시 후 다시 시도해 주세요.';
  end if;
  insert into public.community_posts (nickname, title, body, is_admin)
  values (v_nickname, trim(p_title), trim(p_body), v_is_admin);
end;
$$;

create or replace function public.create_guest_comment(
  p_target_id text,
  p_nickname text,
  p_body text
) returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_nickname text;
  v_content text;
  v_interval interval;
  v_is_admin boolean;
begin
  v_nickname := coalesce(nullif(auth.jwt() -> 'user_metadata' ->> 'username', ''), trim(p_nickname), '익명 1');
  v_is_admin := coalesce((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin', false);
  v_content := lower(trim(p_body));
  v_interval := case when auth.uid() is null then interval '3 seconds' else interval '8 seconds' end;

  if v_content ~ '(https?://|www\\.|bit\\.ly|t\\.me|telegram|텔레그램|카카오톡|오픈채팅|바카라|카지노|대출|[0-9]{2,3}[-.[:space:]][0-9]{3,4}[-.[:space:]][0-9]{4})' then
    raise exception '광고·연락처 유도 문구와 외부 링크는 작성할 수 없습니다.';
  end if;
  if v_content ~ '(씨발|시발|ㅅㅂ|병신|ㅂㅅ|개새끼|좆|fuck|bitch|nigger)' then
    raise exception '욕설이나 혐오 표현은 작성할 수 없습니다.';
  end if;
  if exists (
    select 1 from public.community_comments
    where nickname = v_nickname and created_at > now() - v_interval
  ) then
    raise exception '작성 간격 제한이 적용 중입니다. 잠시 후 다시 시도해 주세요.';
  end if;
  if (
    select count(*) from public.community_comments
    where nickname = v_nickname and created_at > now() - interval '10 minutes'
  ) >= 15 then
    raise exception '10분 동안 작성할 수 있는 댓글 수를 초과했습니다.';
  end if;
  insert into public.community_comments (target_id, nickname, body, is_admin)
  values (trim(p_target_id), v_nickname, trim(p_body), v_is_admin);
end;
$$;
