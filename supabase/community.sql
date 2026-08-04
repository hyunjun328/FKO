-- FKO 익명 게시글, 댓글, 승부예측 데이터를 안전하게 제공한다.
create table if not exists public.community_posts (
  id bigint generated always as identity primary key,
  nickname text not null check (char_length(nickname) between 2 and 20),
  title text not null check (char_length(title) between 2 and 100),
  body text not null check (char_length(body) between 2 and 3000),
  created_at timestamptz not null default now()
);

alter table public.community_posts drop column if exists password_hash;
alter table public.community_posts enable row level security;
revoke all on table public.community_posts from anon, authenticated;

create or replace view public.community_post_feed as
  select id, nickname, title, body, created_at
  from public.community_posts;

revoke all on public.community_post_feed from public, anon, authenticated;
grant select on public.community_post_feed to anon, authenticated;

drop function if exists public.create_guest_post(text, text, text, text);
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
begin
  v_nickname := coalesce(nullif(auth.jwt() -> 'user_metadata' ->> 'username', ''), trim(p_nickname), '익명 1');
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
  insert into public.community_posts (nickname, title, body)
  values (
    v_nickname,
    trim(p_title),
    trim(p_body)
  );
  return;
end;
$$;

revoke all on function public.create_guest_post(text, text, text) from public;
grant execute on function public.create_guest_post(text, text, text) to anon, authenticated;

create table if not exists public.community_comments (
  id bigint generated always as identity primary key,
  target_id text not null check (char_length(target_id) between 3 and 160),
  nickname text not null check (char_length(nickname) between 2 and 20),
  body text not null check (char_length(body) between 2 and 1000),
  created_at timestamptz not null default now()
);

alter table public.community_comments drop column if exists password_hash;
create index if not exists community_comments_target_created_at_idx
  on public.community_comments (target_id, created_at desc);
alter table public.community_comments enable row level security;
revoke all on table public.community_comments from anon, authenticated;

create or replace view public.community_comment_feed as
  select id, target_id, nickname, body, created_at
  from public.community_comments;

revoke all on public.community_comment_feed from public, anon, authenticated;
grant select on public.community_comment_feed to anon, authenticated;

drop function if exists public.create_guest_comment(text, text, text, text);
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
begin
  v_nickname := coalesce(nullif(auth.jwt() -> 'user_metadata' ->> 'username', ''), trim(p_nickname), '익명 1');
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
  insert into public.community_comments (target_id, nickname, body)
  values (
    trim(p_target_id),
    v_nickname,
    trim(p_body)
  );
  return;
end;
$$;

revoke all on function public.create_guest_comment(text, text, text) from public;
grant execute on function public.create_guest_comment(text, text, text) to anon, authenticated;

create table if not exists public.community_predictions (
  id bigint generated always as identity primary key,
  target_id text not null check (char_length(target_id) between 3 and 160),
  pick text not null check (char_length(pick) between 2 and 120),
  guest_id uuid not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (target_id, guest_id)
);

alter table public.community_predictions enable row level security;
revoke all on table public.community_predictions from anon, authenticated;

create or replace view public.community_prediction_summary as
  select target_id, pick, count(*)::integer as votes
  from public.community_predictions
  group by target_id, pick;

revoke all on public.community_prediction_summary from public, anon, authenticated;
grant select on public.community_prediction_summary to anon, authenticated;

create or replace function public.upsert_guest_prediction(
  p_target_id text,
  p_pick text,
  p_guest_id uuid
) returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.community_predictions (target_id, pick, guest_id)
  values (trim(p_target_id), trim(p_pick), p_guest_id)
  on conflict (target_id, guest_id)
  do update set pick = excluded.pick, updated_at = now();
  return;
end;
$$;

revoke all on function public.upsert_guest_prediction(text, text, uuid) from public;
grant execute on function public.upsert_guest_prediction(text, text, uuid) to anon, authenticated;

-- 커뮤니티 신고와 관리자 삭제 권한을 서버에서 처리한다.
create table if not exists public.community_reports (
  id bigint generated always as identity primary key,
  target_type text not null check (target_type in ('post', 'comment')),
  target_id text not null check (char_length(target_id) between 1 and 160),
  reporter_id uuid not null,
  created_at timestamptz not null default now(),
  unique (target_type, target_id, reporter_id)
);

create index if not exists community_reports_created_at_idx
  on public.community_reports (created_at desc);
alter table public.community_reports enable row level security;
revoke all on table public.community_reports from anon, authenticated;

create or replace function public.is_fko_admin() returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select coalesce((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin', false);
$$;

create or replace function public.create_community_report(
  p_target_type text,
  p_target_id text
) returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if auth.uid() is null then
    raise exception '신고하려면 로그인해야 합니다.';
  end if;
  if trim(p_target_type) not in ('post', 'comment') or char_length(trim(p_target_id)) = 0 then
    raise exception '신고 대상이 올바르지 않습니다.';
  end if;
  if trim(p_target_type) = 'post' and not exists (
    select 1 from public.community_posts where id::text = trim(p_target_id)
  ) then
    raise exception '존재하지 않는 게시글입니다.';
  end if;
  if trim(p_target_type) = 'comment' and not exists (
    select 1 from public.community_comments where id::text = trim(p_target_id)
  ) then
    raise exception '존재하지 않는 댓글입니다.';
  end if;
  insert into public.community_reports (target_type, target_id, reporter_id)
  values (trim(p_target_type), trim(p_target_id), auth.uid())
  on conflict (target_type, target_id, reporter_id) do nothing;
end;
$$;

create or replace function public.get_community_reports()
returns table (
  id bigint,
  target_type text,
  target_id text,
  created_at timestamptz,
  target_nickname text,
  target_title text,
  target_body text
)
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_fko_admin() then
    raise exception '관리자 권한이 필요합니다.';
  end if;
  return query
    select
      report.id,
      report.target_type,
      report.target_id,
      report.created_at,
      coalesce(post.nickname, comment.nickname, '삭제됨'),
      case when report.target_type = 'post' then coalesce(post.title, '삭제된 게시글') else '댓글' end,
      coalesce(post.body, comment.body, '삭제된 콘텐츠')
    from public.community_reports as report
    left join public.community_posts as post
      on report.target_type = 'post' and post.id::text = report.target_id
    left join public.community_comments as comment
      on report.target_type = 'comment' and comment.id::text = report.target_id
    order by report.created_at desc;
end;
$$;

create or replace function public.delete_community_post(p_post_id bigint)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_fko_admin() then
    raise exception '관리자 권한이 필요합니다.';
  end if;
  delete from public.community_comments where target_id = 'community-post:' || p_post_id::text;
  delete from public.community_reports where target_type = 'post' and target_id = p_post_id::text;
  delete from public.community_posts where id = p_post_id;
end;
$$;

create or replace function public.delete_community_comment(p_comment_id bigint)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_fko_admin() then
    raise exception '관리자 권한이 필요합니다.';
  end if;
  delete from public.community_reports where target_type = 'comment' and target_id = p_comment_id::text;
  delete from public.community_comments where id = p_comment_id;
end;
$$;

revoke all on function public.is_fko_admin() from public;
revoke all on function public.create_community_report(text, text) from public;
revoke all on function public.get_community_reports() from public;
revoke all on function public.delete_community_post(bigint) from public;
revoke all on function public.delete_community_comment(bigint) from public;
grant execute on function public.create_community_report(text, text) to authenticated;
grant execute on function public.get_community_reports() to authenticated;
grant execute on function public.delete_community_post(bigint) to authenticated;
grant execute on function public.delete_community_comment(bigint) to authenticated;

-- Supabase SQL Editor에서 본인 계정을 관리자 계정으로 지정한다.
-- update auth.users set raw_app_meta_data = coalesce(raw_app_meta_data, '{}'::jsonb) || '{"role":"admin"}'::jsonb where email = '<관리자아이디>@fko.local';
