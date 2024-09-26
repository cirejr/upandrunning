"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { FaGoogle, FaSpinner } from "react-icons/fa6";
import { GithubIcon } from "lucide-react";

interface GoogleButtonProps {
  isLoading: boolean;
  isLoadingButton: boolean;
  onClick: () => Promise<void>;
}

export function GoogleButton({ isLoading, isLoadingButton, onClick }: GoogleButtonProps) {
  return (
    <Button
      variant='outline'
      type='button'
      disabled={isLoading}
      className='glass'
      onClick={onClick}
    >
      {isLoadingButton ? (
        <FaSpinner className='mr-2 h-4 w-4 animate-spin' />
      ) : (
        <FaGoogle className='mr-2 h-4 w-4' />
      )}{" "}
      Google
    </Button>
  );
}

interface GithubButtonProps {
  isLoading: boolean;
  isLoadingButton: boolean;
  onClick: () => Promise<void>;
}

export function GithubButton({ isLoading, isLoadingButton, onClick }: GithubButtonProps) {
  return (
    <Button
      variant='outline'
      type='button'
      disabled={isLoading}
      className='glass'
      onClick={onClick}
    >
      {isLoadingButton ? (
        <FaSpinner className='mr-2 h-4 w-4 animate-spin' />
      ) : (
        <GithubIcon className='mr-2 h-4 w-4' />
      )}{" "}
      GitHub
    </Button>
  );
}