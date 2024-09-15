"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

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

  // Validate form inputs (email and password should already be validated on the front-end)
  if (!email || !password || !name) {
    return redirect("/error"); // Redirect to error if any field is missing
  }

  // Sign up user with Supabase
  const { error, data } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name, // Store the name in the user metadata
      },
    },
  });

  // Handle any sign-up error
  if (error) {
    return { error: error.message };
  }

  return { success: true, user: data.user };
}
