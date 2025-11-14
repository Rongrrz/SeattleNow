import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export function App() {
  return (
    <BrowserRouter basename="/SeattleHourly">
      <div className="flex min-h-screen flex-col bg-neutral-950 text-neutral-100">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
