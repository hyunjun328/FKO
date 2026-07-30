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
) returns public.community_posts
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  created_post public.community_posts;
begin
  if char_length(trim(p_password)) < 6 then
    raise exception '비밀번호는 6자 이상이어야 합니다.';
  end if;

  insert into public.community_posts (nickname, title, body, password_hash)
  values (trim(p_nickname), trim(p_title), trim(p_body), crypt(p_password, gen_salt('bf')))
  returning * into created_post;

  return created_post;
end;
$$;

revoke all on function public.create_guest_post(text, text, text, text) from public;
grant execute on function public.create_guest_post(text, text, text, text) to anon;
