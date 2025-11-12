import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-neutral-800 bg-neutral-900 px-6 py-3">
      <Link
        to="/"
        className="text-xl font-bold text-white hover:text-blue-400 transition"
      >
        SeattleNow
      </Link>

      <div className="flex gap-5 text-sm font-medium">
        <Link to="/" className="hover:text-blue-400 transition">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-400 transition">
          About
        </Link>
        <Link to="/contact" className="hover:text-blue-400 transition">
          Contact
        </Link>
      </div>
    </nav>
  );
}
