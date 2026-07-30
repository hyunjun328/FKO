-- 로그인 없이 게시글을 작성하는 FKO 게스트 커뮤니티의 데이터베이스를 만든다.
create extension if not exists pgcrypto;

create table if not exists public.community_posts (
  id bigint generated always as identity primary key,
  nickname text not null check (char_length(nickname) between 2 and 20),
  title text not null check (char_length(title) between 2 and 100),
  body text not null check (char_length(body) between 2 and 3000),
  password_hash text not null,
  created_at timestamptz not null default now()
);

alter table public.community_posts enable row level security;

drop policy if exists "public read community posts" on public.community_posts;
create policy "public read community posts" on public.community_posts for select using (true);

revoke all on table public.community_posts from anon, authenticated;

create or replace view public.community_post_feed as
  select id, nickname, title, body, created_at
  from public.community_posts;

revoke all on public.community_post_feed from public, anon, authenticated;
grant select on public.community_post_feed to anon;

create or replace function public.create_guest_post(
  p_nickname text,
  p_title text,
  p_body text,
  p_password text
) returns void
language plpgsql
security definer
set search_path = public, extensions
as $$
begin
  if char_length(trim(p_password)) < 6 then
    raise exception '비밀번호는 6자 이상이어야 합니다.';
  end if;

  insert into public.community_posts (nickname, title, body, password_hash)
  values (trim(p_nickname), trim(p_title), trim(p_body), crypt(p_password, gen_salt('bf')))
  return;
end;
$$;

revoke all on function public.create_guest_post(text, text, text, text) from public;
grant execute on function public.create_guest_post(text, text, text, text) to anon;

create table if not exists public.community_comments (
  id bigint generated always as identity primary key,
  target_id text not null check (char_length(target_id) between 3 and 160),
  nickname text not null check (char_length(nickname) between 2 and 20),
  body text not null check (char_length(body) between 2 and 1000),
  password_hash text not null,
  created_at timestamptz not null default now()
);

create index if not exists community_comments_target_created_at_idx
  on public.community_comments (target_id, created_at desc);

alter table public.community_comments enable row level security;

drop policy if exists "public read community comments" on public.community_comments;
create policy "public read community comments" on public.community_comments for select using (true);

revoke all on table public.community_comments from anon, authenticated;

create or replace view public.community_comment_feed as
  select id, target_id, nickname, body, created_at
  from public.community_comments;

revoke all on public.community_comment_feed from public, anon, authenticated;
grant select on public.community_comment_feed to anon;

create or replace function public.create_guest_comment(
  p_target_id text,
  p_nickname text,
  p_body text,
  p_password text
) returns void
language plpgsql
security definer
set search_path = public, extensions
as $$
begin
  if char_length(trim(p_password)) < 6 then
    raise exception '비밀번호는 6자 이상이어야 합니다.';
  end if;

  insert into public.community_comments (target_id, nickname, body, password_hash)
  values (trim(p_target_id), trim(p_nickname), trim(p_body), crypt(p_password, gen_salt('bf')))
  return;
end;
$$;

revoke all on function public.create_guest_comment(text, text, text, text) from public;
grant execute on function public.create_guest_comment(text, text, text, text) to anon;
