import React from "react";

export default function AppLogo({
  team,
}: {
  team: { name: string; logo: React.ElementType; plan: string };
}) {
  return (
    <div className="flex items-start gap-2 px-1.5">
      <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-primary text-primary-foreground">
        <team.logo className="h-5 w-5 shrink-0" />
      </div>
      <div className="grid flex-1 leading-tight">
        <div className="line-clamp-1 font-medium">{team.name}</div>
        <div className="overflow-hidden text-xs text-muted-foreground">
          <div className="line-clamp-1">{team.plan}</div>
        </div>
      </div>
    </div>
  );
}
