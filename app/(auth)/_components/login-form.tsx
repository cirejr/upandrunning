"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { signInWithPassword } from "../auth/actions";
import { loginSchema } from "./auth-schema";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaGoogle, FaSpinner } from "react-icons/fa6";
import { GithubIcon, MailIcon } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}
type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [loadingButton, setLoadingButton] = React.useState<string | null>(null);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    setLoadingButton("email");

    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    try {
      const res = await signInWithPassword(formData);
      if (res.success) {
        toast.success("connecté(e)");
        router.push("/admin");
      } else if (res.error)
        toast.error(
          res.error === "Invalid login credentials"
            ? "Identifiants de connexion incorrects"
            : res.error,
        );
    } catch (error) {
      toast.error("une erreur est survenue veuillez ressayer");
    } finally {
      setIsLoading(false);
      setLoadingButton(null);
    }
  });

  const handleOAuthLogin = async (provider: string) => {
    setIsLoading(true);
    setLoadingButton(provider);

    // Simulate OAuth login process
    setTimeout(() => {
      setIsLoading(false);
      setLoadingButton(null);
      toast.success(`Logged in with ${provider}`);
    }, 2000);
  };

  return (
    <div className={cn("grid gap-6 dark w-full", className)} {...props}>
      <h1 className='text-3xl font-semibold'>Welcome back,</h1>
      <p className='text-muted-foreground'>Log in into your account</p>
      <Separator className='h-px w-full bg-border' />
      <form onSubmit={onSubmit}>
        <div className='grid gap-2 space-y-4 text-muted-foreground'>
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
          <div className='grid gap-3'>
            <Label htmlFor='password'>Password</Label>
            <Input
              id='password'
              placeholder='• • • • • • • • • • • •'
              type='password'
              autoCapitalize='none'
              autoComplete='current-password'
              autoCorrect='off'
              disabled={isLoading}
              className='glass'
              {...register("password")}
            />
            {errors.password && (
              <p className='text-sm text-red-500'>{errors.password.message}</p>
            )}
          </div>
          <Button disabled={isLoading} size='lg'>
            {loadingButton === "email" && (
              <FaSpinner className='mr-2 h-4 w-4 animate-spin' />
            )}
            <MailIcon className='mr-2 h-4 w-4' />
            Log in with email
          </Button>
        </div>
      </form>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          <span className='px-2 text-muted-foreground'>Or continue with</span>
        </div>
      </div>
      <Button
        variant='outline'
        type='button'
        disabled={isLoading}
        className='glass'
        onClick={() => handleOAuthLogin("GitHub")}
      >
        {loadingButton === "GitHub" ? (
          <FaSpinner className='mr-2 h-4 w-4 animate-spin' />
        ) : (
          <GithubIcon className='mr-2 h-4 w-4' />
        )}{" "}
        GitHub
      </Button>
      <Button
        variant='outline'
        type='button'
        disabled={isLoading}
        className='glass'
        onClick={() => handleOAuthLogin("Google")}
      >
        {loadingButton === "Google" ? (
          <FaSpinner className='mr-2 h-4 w-4 animate-spin' />
        ) : (
          <FaGoogle className='mr-2 h-4 w-4' />
        )}{" "}
        Google
      </Button>
      <div className='text-sm text-muted-foreground'>
        <h4>Don't have an account?</h4>
        <Link href='/auth/register'>
          Create one <span className='text-primary'>here</span>
        </Link>
      </div>
    </div>
  );
}



