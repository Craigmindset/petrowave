-- Run this in the Supabase SQL editor before using the request quote form.

create extension if not exists pgcrypto;

create table if not exists public.quote_requests (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  company text not null,
  email text not null,
  phone text not null,
  service_type text not null,
  project_location text not null,
  timeline text not null,
  budget text not null,
  details text not null,
  created_at timestamptz not null default now()
);

alter table public.quote_requests enable row level security;

drop policy if exists "Only authenticated admins can read quote requests" on public.quote_requests;
create policy "Only authenticated admins can read quote requests"
on public.quote_requests
for select
to authenticated
using (
  public.is_super_admin(auth.uid())
  or exists (
    select 1
    from public.admin_users au
    where au.id = auth.uid()
      and au.role in ('editor', 'author')
  )
);

drop policy if exists "Only service role can insert quote requests" on public.quote_requests;
create policy "Only service role can insert quote requests"
on public.quote_requests
for insert
to service_role
with check (true);