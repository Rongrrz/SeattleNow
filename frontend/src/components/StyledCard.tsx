import type { ReactNode } from 'react';

type StyledCardProps = {
  title: string;
  className?: string;
  children?: ReactNode;
};

// TODO:
// Split card into two parts:
// Top part for card title (with border-b)
// Bottom part for everything else

// TODO:
// Lightmode for cards and in general, use Jotai w/ persistence
export function StyledCard({ title, className = '', children }: StyledCardProps) {
  return (
    <section
      className={`rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4 shadow-sm transition-all hover:shadow-md hover:shadow-blue-500/5 ${className}`}
    >
      <h2 className="mb-2 border-b border-neutral-700 pb-1 text-lg font-semibold text-neutral-100">
        {title}
      </h2>

      <div className="text-sm text-neutral-300">{children}</div>
    </section>
  );
}
