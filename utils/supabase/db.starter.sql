
create table users (
  -- UUID from auth.users
  id uuid references auth.users not null primary key,
  full_name text,
  avatar_url text,
  -- The customer's billing address, stored in JSON format.
  billing_address jsonb,
  -- Stores your customer's payment instruments.
  payment_method jsonb
);
alter table users
  enable row level security;
create policy "Can view own user data." on users
  for select using ((select auth.uid()) = id);
create policy "Can update own user data." on users
  for update using ((select auth.uid()) = id);

/**
* This trigger automatically creates a user entry when a new user signs up via Supabase Auth.
*/
create function public.handle_new_user()
returns trigger
set search_path = ''
as $$
  begin
    insert into public.users (id, full_name, avatar_url)
    values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
    return new;
  end;
$$
language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row
    execute procedure public.handle_new_user();


-- Create customers table to map Paddle customer_id to email
create table customers (
    customer_id uuid references auth.users not null primary key,
    email text not null,
    created_at timestamp with time zone not null default now(),
    updated_at timestamp with time zone not null default now()
  );

-- Create subscription table to store webhook events sent by Paddle
create table subscriptions (
    subscription_id text primary_key,
    subscription_status text not null,
    price_id text null,
    product_id text null,
    scheduled_change text null,
    customer_id uuid references customers,
    created_at timestamp with time zone not null default now(),
    updated_at timestamp with time zone not null default now()
  );

-- Grant access to authenticated users to read the customers table to get the customer_id based on the email
alter table customers
  enable row level security;
create policy "Enable read access for authenticated users to customers" on "public"."customers" as PERMISSIVE for SELECT to authenticated using ( true );

-- Grant access to authenticated users to read the subscriptions table
alter table subscriptions
  enable row level security;
create policy "Enable read access for authenticated users to subscriptions" on "public"."subscriptions" as PERMISSIVE for SELECT to authenticated using ( true );