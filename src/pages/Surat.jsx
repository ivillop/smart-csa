import DataTable from 'datatables.net-dt';
import profile from '../assets/profile.png';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa6';

function Surat() {
  useEffect(() => {
    const table = new DataTable('#surat', {
      language: {
        search: '_INPUT_',
        searchPlaceholder: 'Search',
      },
    });

    return () => {
      table.destroy(false);
    };
  }, []);

  return (
    <main className='white-bg'>
      <div className='surat-header'>
        <h1>List Surat</h1>
        <div className='add-surat'>
          <Link className='add-button' to='/add-surat'>
            <FaPlus />
            <p>Tambah Surat</p>
          </Link>
        </div>
        <div className='surat-list'>
          <table id='surat' className='display' style={{ width: '100%' }}>
            <thead>
              <tr>
                <th>Dibuat oleh</th>
                <th>Judul Acara</th>
                <th>Status</th>
                <th>Dibuat tanggal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='first-td'>
                  <img src={profile} alt='profile' />
                  Raden Akbar
                </td>
                <td>Seminar</td>
                <td>ACC</td>
                <td>20-11-2024</td>
              </tr>
              <tr>
                <td className='first-td'>
                  <img src={profile} alt='profile' />
                  Raden Akbar
                </td>
                <td>Seminar</td>
                <td>ACC</td>
                <td>20-11-2024</td>
              </tr>
              <tr>
                <td className='first-td'>
                  <img src={profile} alt='profile' />
                  Raden Akbar
                </td>
                <td>Seminar</td>
                <td>ACC</td>
                <td>20-11-2024</td>
              </tr>
              <tr>
                <td className='first-td'>
                  <img src={profile} alt='profile' />
                  Raden Akbar
                </td>
                <td>Seminar</td>
                <td>ACC</td>
                <td>20-11-2024</td>
              </tr>
              <tr>
                <td className='first-td'>
                  <img src={profile} alt='profile' />
                  Raden Akbar
                </td>
                <td>Seminar</td>
                <td>ACC</td>
                <td>20-11-2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default Surat;
