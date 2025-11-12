import type { ReactNode } from 'react';

type StyledCardProps = {
  title: string;
  className?: string;
  children?: ReactNode;
  topright?: ReactNode;
};

// TODO:
// Split card into two parts:
// Top part for card title (with border-b)
// Bottom part for everything else

// TODO:
// Lightmode for cards and in general, use Jotai w/ persistece
export function StyledCard({ title, className = '', children, topright }: StyledCardProps) {
  return (
    <section
      className={`rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4 shadow-sm transition-all hover:shadow-md hover:shadow-blue-500/5 ${className}`}
    >
      <header className="mb-2 flex items-start justify-between">
        <h2 className="text-lg font-semibold text-neutral-100">{title}</h2>
        {topright}
      </header>
      <div className="text-sm text-neutral-300">{children}</div>
    </section>
  );
}
