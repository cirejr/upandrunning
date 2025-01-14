"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Provider } from "@supabase/supabase-js";

import { signInWithOAuth, signInWithPassword } from "../auth/actions";
import { GithubButton, GoogleButton } from "./social-login-buttons";
import { loginSchema } from "./auth-schema";
import { cn } from "@/lib/utils";

import { Separator } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

import { FaSpinner } from "react-icons/fa6";
import { MailIcon } from "lucide-react";

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
            : res.error
        );
    } catch (error) {
      toast.error("une erreur est survenue veuillez ressayer");
    } finally {
      setIsLoading(false);
      setLoadingButton(null);
    }
  });

  const handleOAuthLogin = async (provider: Provider) => {
    setIsLoading(true);
    setLoadingButton(provider);
    try {
      await signInWithOAuth(provider);
    } catch (error) {
      toast.error("Une erreur est survenue, veuillez réessayer");
    } finally {
      setIsLoading(false);
      setLoadingButton(null);
    }
  };

  return (
    <div className={cn("grid gap-6 dark w-full", className)} {...props}>
      <h1 className="text-3xl font-semibold">Welcome back,</h1>
      <p className="text-muted-foreground">Log in into your account</p>
      <Separator className="h-px w-full bg-border" />

      <GoogleButton
        isLoading={isLoading}
        isLoadingButton={loadingButton === "google"}
        onClick={() => handleOAuthLogin("google")}
      />

      <GithubButton
        isLoading={isLoading}
        isLoadingButton={loadingButton === "github"}
        onClick={() => handleOAuthLogin("github")}
      />

      <div className="flex items-center justify-between gap-3 w-full ">
        <Separator className="h-px w-1/4 bg-border" />
        <p className="px-2 text-muted-foreground text-xs uppercase w-fit">
          Or continue with
        </p>
        <Separator className="h-px w-1/4 bg-border" />
      </div>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2 space-y-4 text-muted-foreground">
          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              className="glass"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="grid gap-3">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="• • • • • • • • • • • •"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              className="glass"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
          <Button disabled={isLoading} size="lg">
            {loadingButton === "email" && (
              <FaSpinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            <MailIcon className="mr-2 h-4 w-4" />
            Log in with email
          </Button>
        </div>
      </form>
      <div className="text-sm text-muted-foreground">
        <h4>Don&apos;t have an account?</h4>
        <Link href="/auth/register">
          Create one <span className="text-primary">here</span>
        </Link>
      </div>
    </div>
  );
}
