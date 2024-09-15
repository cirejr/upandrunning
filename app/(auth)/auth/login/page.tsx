import React from "react";
import { LoginForm } from "../../_components/login-form";
import { PlusCornerCard } from "@/app/(docs)/components/_components/plus-section";

export default function Login() {
  return (
    <main className=''>
      <PlusCornerCard className='glass flex h-fit w-[400px] flex-col items-center justify-center'>
        <LoginForm />
      </PlusCornerCard>
    </main>
  );
}
