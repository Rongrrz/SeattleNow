import type { ReactNode } from 'react';

type WIPProps = {
  children: ReactNode;
};

export function WIP({ children }: WIPProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Dim + blur background content */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-neutral-900/70 backdrop-blur-sm" />

      {/* WIP label */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="rounded-lg border border-yellow-500/50 bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-400 shadow-md">
          🚧 Work In Progress
        </div>
      </div>

      {/* The actual content (dimmed underneath) */}
      <div className="relative opacity-40">{children}</div>
    </div>
  );
}
