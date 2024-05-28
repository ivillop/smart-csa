import logo from '../assets/logo.png';
import {
  FaCube,
  FaTicket,
  FaRegFolderOpen,
  FaRegEnvelope,
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside>
      <div className='aside-title'>
        <img src={logo} alt='logo' />
        <h1>Smart CSA</h1>
      </div>
      <ul>
        <li>
          <Link to='/'>
            <FaCube />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to='/surat'>
            <FaTicket />
            Surat
          </Link>
        </li>
        <li>
          <Link to='/ruangan'>
            <FaRegFolderOpen />
            Ruangan
          </Link>
        </li>
        <li>
          <Link to='/agenda-acara'>
            <FaRegEnvelope />
            Agenda Acara
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
