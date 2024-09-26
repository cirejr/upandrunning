"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { signUpWithPassword } from "../auth/actions";
import { loginSchema, registerSchema } from "./auth-schema";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaSpinner } from "react-icons/fa6";
import { MailIcon } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}
type RegisterFormValues = z.infer<typeof registerSchema>;

export function RegisterForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema), // Use a schema for registration
  });

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);

    try {
      const res = await signUpWithPassword(formData);
      if (res.success) {
        toast.success("Account created successfully!");
        router.push("/admin"); 
      } else if (res.error) {
        toast.error(res.error || "An error occurred, please try again");
      }
    } catch (error) {
      toast.error("An error occurred, please try again");
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <div className={cn("grid gap-6 dark w-full", className)} {...props}>
      <h1 className='text-3xl font-semibold'>Create an account</h1>
      <p className='text-muted-foreground'>Join us by creating a new account</p>
      <Separator className='h-px w-full bg-border' />
      <form onSubmit={onSubmit}>
        <div className='grid gap-2 space-y-4 text-muted-foreground'>
          {/* Name Field */}
          <div className='grid gap-3'>
            <Label htmlFor='name'>Name</Label>
            <Input
              id='name'
              placeholder='Your Name'
              type='text'
              autoCapitalize='none'
              autoCorrect='off'
              disabled={isLoading}
              className='glass'
              {...register("name")}
            />
            {errors.name && (
              <p className='text-sm text-red-500'>{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div className='grid gap-3'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              placeholder='name@example.com'
              type='email'
              autoCapitalize='none'
              autoComplete='email'
              autoCorrect='off'
              disabled={isLoading}
              className='glass'
              {...register("email")}
            />
            {errors.email && (
              <p className='text-sm text-red-500'>{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className='grid gap-3'>
            <Label htmlFor='password'>Password</Label>
            <Input
              id='password'
              placeholder='• • • • • • • • • • • •'
              type='password'
              autoCapitalize='none'
              autoCorrect='off'
              disabled={isLoading}
              className='glass'
              {...register("password")}
            />
            {errors.password && (
              <p className='text-sm text-red-500'>{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className='grid gap-3'>
            <Label htmlFor='confirmPassword'>Confirm Password</Label>
            <Input
              id='confirmPassword'
              placeholder='• • • • • • • • • • • •'
              type='password'
              autoCapitalize='none'
              autoCorrect='off'
              disabled={isLoading}
              className='glass'
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className='text-sm text-red-500'>
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <Button disabled={isLoading} size='lg'>
            {isLoading && <FaSpinner className='mr-2 h-4 w-4 animate-spin' />}
            <MailIcon className='mr-2 h-4 w-4' />
            Sign up with email
          </Button>
        </div>
      </form>
      <div className='text-sm text-muted-foreground'>
        <h4>Already have an account?</h4>
        <Link href='/auth/login'>
          Log in <span className='text-primary'>here</span>
        </Link>
      </div>
    </div>
  );
}
