import profile from '../assets/profile.png';
import { useLocation, Link } from 'react-router-dom';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { FaRightFromBracket } from 'react-icons/fa6';

function Navbar() {
  const location = useLocation();
  let title = 'Dashboard';
  if (location.pathname === '/surat') {
    title = 'Surat';
  } else if (location.pathname === '/ruangan') {
    title = 'Ruangan';
  } else if (location.pathname === '/agenda-acara') {
    title = 'Agenda Acara';
  }

  return (
    <>
      <nav>
        <div className='menu-description'>
          <h1>Menu {title}</h1>
          <p>Selamat datang $nama</p>
        </div>
        <Menu>
          <div className='menu-list'>
            <MenuButton>
              <img src={profile} alt='profile' />
            </MenuButton>
            <Transition
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'>
              <MenuItems
                anchor='bottom end'
                className='mt-2 text-end w-32 origin-top-right shadow px-0.5 rounded border-black/5 bg-white hover:bg-gray-100 p-1 text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none'>
                <MenuItem>
                  <Link
                    className='flex text-black items-center justify-start px-2 gap-3'
                    to='/login'>
                    <FaRightFromBracket />
                    Logout
                  </Link>
                </MenuItem>
              </MenuItems>
            </Transition>
          </div>
        </Menu>
      </nav>
    </>
  );
}

export default Navbar;
