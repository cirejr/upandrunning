import React from "react";

export default function AppLogo({
  team,
}: {
  team: { name: string; logo: React.ElementType; plan: string };
}) {
  return (
    <div className="flex items-start gap-2 px-1.5">
      <div className="flex justify-center items-center bg-primary rounded-sm w-8 h-8 text-primary-foreground">
        <team.logo className="w-5 h-5 shrink-0" />
      </div>
      <div className="flex-1 grid leading-tight">
        <div className="line-clamp-1 font-medium">{team.name}</div>
        <div className="text-muted-foreground text-xs overflow-hidden">
          <div className="line-clamp-1">{team.plan}</div>
        </div>
      </div>
    </div>
  );
}
