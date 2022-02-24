import { Route, BrowserRouter, Routes } from 'react-router-dom';
import About from '../pages/About';
import AllDocs from '../pages/AllDocs';
import Commands from '../pages/Commands';
import Dashboard from '../pages/Dashboard';
import Notifications from '../pages/Notifications';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="about" element={<About />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="commands" element={<Commands />} />
        <Route path="all-docs" element={<AllDocs />} />
      </Routes>
    </BrowserRouter>
  );
}
