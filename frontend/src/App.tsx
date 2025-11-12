import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';

export function App() {
  return (
    <BrowserRouter basename="/SeattleNow">
      <div className="flex min-h-screen flex-col bg-neutral-950 text-neutral-100">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        <footer className="border-t border-neutral-800 bg-neutral-900 py-3 text-center text-sm text-neutral-400">
          SeattleNow, 2025
        </footer>
      </div>
    </BrowserRouter>
  );
}
