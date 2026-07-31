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
grant select on public.community_post_feed to anon;

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
begin
  insert into public.community_posts (nickname, title, body)
  values (trim(p_nickname), trim(p_title), trim(p_body));
  return;
end;
$$;

revoke all on function public.create_guest_post(text, text, text) from public;
grant execute on function public.create_guest_post(text, text, text) to anon;

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
grant select on public.community_comment_feed to anon;

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
begin
  insert into public.community_comments (target_id, nickname, body)
  values (trim(p_target_id), trim(p_nickname), trim(p_body));
  return;
end;
$$;

revoke all on function public.create_guest_comment(text, text, text) from public;
grant execute on function public.create_guest_comment(text, text, text) to anon;

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
grant select on public.community_prediction_summary to anon;

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
grant execute on function public.upsert_guest_prediction(text, text, uuid) to anon;
