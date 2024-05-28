import './index.css';
import './styles/style.css';
import './styles/data-tables.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Surat from './pages/Surat.jsx';
import Ruangan from './pages/Ruangan.jsx';
import AgendaAcara from './pages/AgendaAcara.jsx';
import AddSurat from './pages/AddSurat.jsx';

function App() {
  return (
    <header>
      <Sidebar />
      <Navbar />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='/surat' element={<Surat />} />
        <Route path='/ruangan' element={<Ruangan />} />
        <Route path='/agenda-acara' element={<AgendaAcara />} />
        <Route path='/add-surat' element={<AddSurat />} />
      </Routes>
    </header>
  );
}

export default App;
