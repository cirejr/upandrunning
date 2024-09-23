"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { Console } from "console";

export async function signIn(formData: FormData) {
  const supabase = createClient();

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

export async function signUp(formData: FormData) {
  const supabase = createClient(); // Make sure to initialize Supabase properly with your keys

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
