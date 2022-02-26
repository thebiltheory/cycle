import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import AllDocs from '../pages/AllDocs';
import Board from '../pages/Board';
import Commands from '../pages/Commands';
import Dashboard from '../pages/Dashboard';
import Notifications from '../pages/Notifications';
import Search from '../pages/Search';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="search" element={<Search />} />
      <Route path="notifications" element={<Notifications />} />
      <Route path="commands" element={<Commands />} />
      <Route path="all-docs" element={<AllDocs />} />
      <Route path="about" element={<About />} />
      <Route path="boards/:id" element={<Board />} />
    </Routes>
  );
}
