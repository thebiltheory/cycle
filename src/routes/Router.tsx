import { Route, BrowserRouter, Routes } from 'react-router-dom';
import About from '../pages/About';
import Dashboard from '../pages/Dashboard';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
