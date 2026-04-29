-- Run this in Supabase SQL Editor for project ldsjqryexlnbcfyoequu

create table if not exists public.admin_users (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  role text not null check (role in ('super_admin', 'editor', 'author')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_admin_users_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_admin_users_updated_at on public.admin_users;
create trigger trg_admin_users_updated_at
before update on public.admin_users
for each row
execute function public.set_admin_users_updated_at();

alter table public.admin_users enable row level security;

create or replace function public.is_super_admin(p_user_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.admin_users
    where id = p_user_id
      and role = 'super_admin'
  );
$$;

drop policy if exists "Admins can read own record" on public.admin_users;
create policy "Admins can read own record"
on public.admin_users
for select
to authenticated
using (auth.uid() = id);

drop policy if exists "Only super admins can manage users" on public.admin_users;
create policy "Only super admins can manage users"
on public.admin_users
for all
to authenticated
using (public.is_super_admin(auth.uid()))
with check (public.is_super_admin(auth.uid()));

-- Bootstrap one admin login user (run once in SQL editor).
-- Credentials requested:
-- email: irediacraig@gmail.com
-- password: 12345678
-- Note: rotate this password after first login.

create extension if not exists pgcrypto;

do $$
declare
  v_email text := 'irediacraig@gmail.com';
  v_password text := '12345678';
  v_user_id uuid;
begin
  select id into v_user_id
  from auth.users
  where email = v_email;

  if v_user_id is null then
    v_user_id := gen_random_uuid();

    insert into auth.users (
      id,
      instance_id,
      aud,
      role,
      email,
      encrypted_password,
      email_confirmed_at,
      raw_app_meta_data,
      raw_user_meta_data,
      created_at,
      updated_at,
      confirmation_token,
      email_change,
      email_change_token_new,
      recovery_token
    )
    values (
      v_user_id,
      '00000000-0000-0000-0000-000000000000',
      'authenticated',
      'authenticated',
      v_email,
      crypt(v_password, gen_salt('bf')),
      now(),
      '{"provider":"email","providers":["email"]}',
      '{}'::jsonb,
      now(),
      now(),
      '',
      '',
      '',
      ''
    );

    insert into auth.identities (
      id,
      user_id,
      identity_data,
      provider,
      provider_id,
      created_at,
      updated_at
    )
    values (
      gen_random_uuid(),
      v_user_id,
      jsonb_build_object('sub', v_user_id::text, 'email', v_email),
      'email',
      v_email,
      now(),
      now()
    );
  end if;

  insert into public.admin_users (id, email, role)
  values (v_user_id, v_email, 'super_admin')
  on conflict (id) do update
  set email = excluded.email,
      role = excluded.role,
      updated_at = now();
end
$$;

-- Content tables for admin dashboard publishing

create or replace function public.set_row_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.career_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  closing_date date not null,
  thumbnail_url text,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.media_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  image_url text not null,
  short_description text not null,
  full_description text not null,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  image_url text not null,
  short_description text not null,
  full_description text not null,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists trg_career_posts_updated_at on public.career_posts;
create trigger trg_career_posts_updated_at
before update on public.career_posts
for each row
execute function public.set_row_updated_at();

drop trigger if exists trg_media_posts_updated_at on public.media_posts;
create trigger trg_media_posts_updated_at
before update on public.media_posts
for each row
execute function public.set_row_updated_at();

drop trigger if exists trg_blog_posts_updated_at on public.blog_posts;
create trigger trg_blog_posts_updated_at
before update on public.blog_posts
for each row
execute function public.set_row_updated_at();

alter table public.career_posts enable row level security;
alter table public.media_posts enable row level security;
alter table public.blog_posts enable row level security;

drop policy if exists "Authenticated users can read career posts" on public.career_posts;
drop policy if exists "Public can read career posts" on public.career_posts;
create policy "Public can read career posts"
on public.career_posts
for select
to public
using (true);

drop policy if exists "Admins can manage career posts" on public.career_posts;
create policy "Admins can manage career posts"
on public.career_posts
for all
to authenticated
using (
  public.is_super_admin(auth.uid())
  or exists (
    select 1
    from public.admin_users au
    where au.id = auth.uid()
      and au.role in ('editor', 'author')
  )
)
with check (
  public.is_super_admin(auth.uid())
  or exists (
    select 1
    from public.admin_users au
    where au.id = auth.uid()
      and au.role in ('editor', 'author')
  )
);

drop policy if exists "Authenticated users can read media posts" on public.media_posts;
create policy "Authenticated users can read media posts"
on public.media_posts
for select
to authenticated
using (true);

drop policy if exists "Admins can manage media posts" on public.media_posts;
create policy "Admins can manage media posts"
on public.media_posts
for all
to authenticated
using (
  public.is_super_admin(auth.uid())
  or exists (
    select 1
    from public.admin_users au
    where au.id = auth.uid()
      and au.role in ('editor', 'author')
  )
)
with check (
  public.is_super_admin(auth.uid())
  or exists (
    select 1
    from public.admin_users au
    where au.id = auth.uid()
      and au.role in ('editor', 'author')
  )
);

drop policy if exists "Authenticated users can read blog posts" on public.blog_posts;
create policy "Authenticated users can read blog posts"
on public.blog_posts
for select
to authenticated
using (true);

drop policy if exists "Admins can manage blog posts" on public.blog_posts;
create policy "Admins can manage blog posts"
on public.blog_posts
for all
to authenticated
using (
  public.is_super_admin(auth.uid())
  or exists (
    select 1
    from public.admin_users au
    where au.id = auth.uid()
      and au.role in ('editor', 'author')
  )
)
with check (
  public.is_super_admin(auth.uid())
  or exists (
    select 1
    from public.admin_users au
    where au.id = auth.uid()
      and au.role in ('editor', 'author')
  )
);
