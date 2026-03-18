import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ArticlePage from './pages/ArticlePage';

export default function App() {
  return (
    <Router>
      <div className="selection:bg-brand-accent selection:text-brand-dark min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
      </div>
    </Router>
  );
}