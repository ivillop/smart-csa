import DataTable from 'datatables.net-dt';
import { useEffect } from 'react';

function AgendaAcara() {
  useEffect(() => {
    // Initialize DataTables
    const table = new DataTable('#agenda-acara', {
      language: {
        search: '_INPUT_',
        searchPlaceholder: 'Search',
      },
      pageLength: 10,
    });

    // Cleanup on component unmount
    return () => {
      table.destroy(false);
    };
  }, []);
  return (
    <main className='white-bg'>
      <div className='agenda-acara'>
        <table id='agenda-acara' className='display' style={{ width: '100%' }}>
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

export default AgendaAcara;
