"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { Provider } from "@supabase/supabase-js";

const supabase = createClient();

export async function signInWithPassword(formData: FormData) {

  const dataToSend = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { data: authData, error } = await supabase.auth.signInWithPassword(
    dataToSend,
  );

  if (error) {
    console.log(error.message);
    return { error: error.message };
  }

  return { success: true, user: authData.user };
}

export async function signUpWithPassword(formData: FormData) {

  // Extracting form data
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const name = formData.get("name") as string;

  // Sign up user with Supabase
  const { error, data } = await supabase.auth.signUp({
    email,
    password,
  });

  // Handle any sign-up error
  if (error) {
    return { error: error.message };
  }

  return { success: true, user: data.user };
}

export async function signInWithOAuth(provider: Provider) {
  const { data, error } = await supabase.auth.signInWithOAuth({
  provider: provider,
  options: {
    redirectTo: 'http://localhost:3000/api/auth/callback',
  },
})

if (data.url) {
  redirect(data.url) 
}

}

