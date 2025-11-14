const GITHUB_URL = 'https://github.com/Rongrrz/SeattleHourly';
const GITHUB_TEXT = 'project on Github';

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-900 py-3 text-center text-sm text-neutral-400">
      SeattleHourly · 2025 · WIP · See the{' '}
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-blue-500 hover:underline"
      >
        {GITHUB_TEXT}
      </a>
      .
    </footer>
  );
}
