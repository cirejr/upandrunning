import React from "react";
import { LoginForm } from "../../_components/login-form";
import { PlusCornerCard } from "@/app/(docs)/components/_components/plus-section";
import { RegisterForm } from "../../_components/register-form";

export default function Resgister() {
  return (
    <PlusCornerCard className='glass flex h-fit w-[400px] flex-col items-center justify-center'>
      <RegisterForm />
    </PlusCornerCard>
  );
}
