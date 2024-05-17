import DataTable from 'datatables.net-dt';
import profile from '../assets/profile.png';
import { useEffect } from 'react';
import { FaRegClock, FaRegCalendarDays, FaCircleCheck } from 'react-icons/fa6';

function Dashboard() {
  useEffect(() => {
    // Initialize DataTables
    const table = new DataTable('#dashboard');

    // Cleanup on component unmount
    return () => {
      table.destroy(false);
    };
  }, []);

  return (
    <main>
      <div className='peminjaman-ruangan'>
        <h1>Peminjaman Ruangan</h1>
        <div className='peminjaman-list'>
          <img src={profile} alt='profile' />
          <div className='peminjaman-description'>
            <p>Ruang 107</p>
            <p>@Aria</p>
          </div>
          <div className='peminjaman-date'>
            <FaRegClock />
            <div className='time-description'>
              <p>Time</p>
              <p>12.00 PM</p>
            </div>
            <FaRegCalendarDays />
            <div className='date-description'>
              <p>Date</p>
              <p>12/12/2022</p>
            </div>
          </div>
          <FaCircleCheck size={'40px'} color={'#006769'} />
        </div>
        <div className='peminjaman-list'>
          <img src={profile} alt='profile' />
          <div className='peminjaman-description'>
            <p>Ruang 107</p>
            <p>@Aria</p>
          </div>
          <div className='peminjaman-date'>
            <FaRegClock />
            <div className='time-description'>
              <p>Time</p>
              <p>12.00 PM</p>
            </div>
            <FaRegCalendarDays />
            <div className='date-description'>
              <p>Date</p>
              <p>12/12/2022</p>
            </div>
          </div>
          <FaCircleCheck size={'40px'} color={'#006769'} />
        </div>
      </div>
      <div className='status-surat'>
        <h1>Status Surat</h1>
        <table id='dashboard' className='display' style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Pelaksana</th>
              <th>Tempat</th>
              <th>Status</th>
              <th>Tanggal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Raden Akbar</td>
              <td>CSA</td>
              <td>Ruang 111</td>
              <td>Dipakai</td>
              <td>2011-04-25</td>
            </tr>
            <tr>
              <td>Raden Akbar</td>
              <td>CSA</td>
              <td>Ruang 111</td>
              <td>Dipakai</td>
              <td>2011-07-25</td>
            </tr>
            <tr>
              <td>Raden Akbar</td>
              <td>CSA</td>
              <td>Ruang 111</td>
              <td>Dipakai</td>
              <td>2011-04-25</td>
            </tr>
            <tr>
              <td>Raden Akbar</td>
              <td>CSA</td>
              <td>Ruang 111</td>
              <td>Dipakai</td>
              <td>2011-07-25</td>
            </tr>
            <tr>
              <td>Raden Akbar</td>
              <td>CSA</td>
              <td>Ruang 111</td>
              <td>Dipakai</td>
              <td>2011-07-25</td>
            </tr>
            <tr>
              <td>Raden Akbar</td>
              <td>CSA</td>
              <td>Ruang 111</td>
              <td>Dipakai</td>
              <td>2011-07-25</td>
            </tr>
            <tr>
              <td>Raden Akbar</td>
              <td>CSA</td>
              <td>Ruang 111</td>
              <td>Dipakai</td>
              <td>2011-07-25</td>
            </tr>
            <tr>
              <td>Raden Akbar</td>
              <td>CSA</td>
              <td>Ruang 111</td>
              <td>Dipakai</td>
              <td>2011-07-25</td>
            </tr>
            <tr>
              <td>Raden Akbar</td>
              <td>CSA</td>
              <td>Ruang 111</td>
              <td>Dipakai</td>
              <td>2011-07-25</td>
            </tr>
            <tr>
              <td>Raden Akbar</td>
              <td>CSA</td>
              <td>Ruang 111</td>
              <td>Dipakai</td>
              <td>2011-07-25</td>
            </tr>
            <tr>
              <td>Raden Akbar</td>
              <td>CSA</td>
              <td>Ruang 111</td>
              <td>Dipakai</td>
              <td>2011-07-25</td>
            </tr>
            <tr>
              <td>Raden Akbar</td>
              <td>CSA</td>
              <td>Ruang 111</td>
              <td>Dipakai</td>
              <td>2011-07-25</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Dashboard;
