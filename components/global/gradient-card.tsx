import React from "react";

export default function GradientCard({
  icon,
  title,
  description,
  children,
  isBottomShaded,
}: {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  isBottomShaded?: boolean;
}) {
  return (
    <div className='relative mx-auto h-auto max-w-[360px]'>
      <div className='absolute inset-10 bg-white opacity-30 blur-2xl dark:bg-gradient-to-r dark:from-blue-500 dark:to-purple-500'></div>
      <div className='relative overflow-hidden rounded-lg border border-gray-400 border-opacity-30 bg-slate-600 bg-opacity-20 p-6 backdrop-blur-xl backdrop-filter dark:border-gray-500 dark:bg-gray-900 dark:bg-opacity-20'>
        <div className='z-30'>
          {icon}
          <h3 className='mb-2 text-xl font-bold'>{title}</h3>
          {description && (
            <p className='mb-4 text-muted-foreground'>{description}</p>
          )}
        </div>
        {children}
      </div>
      {isBottomShaded && (
        <div className='absolute inset-x-0 -bottom-3 h-48 bg-gradient-to-t from-white to-transparent dark:bg-gradient-to-t dark:from-black dark:from-10% dark:to-transparent' />
      )}
    </div>
  );
}
