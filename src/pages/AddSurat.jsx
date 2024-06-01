import { useNavigate } from 'react-router-dom';

function AddSurat() {
  const navigate = useNavigate();

  const handleAddSurat = (e) => {
    e.preventDefault();
    // Logic untuk autentikasi pengguna
    console.log('Surat berhasil ditambahkan');
    navigate('/surat');
  };

  return (
    <main className='white-bg'>
      <h1>Tambah Surat</h1>
      <form
        action='add-surat__page'
        onSubmit={handleAddSurat}
        className='add-surat__page'>
        <div className='input-item'>
          <label htmlFor='title'>Title</label>
          <input type='text' />
        </div>
        <div className='input-item'>
          <label htmlFor='post-image'>Post Image</label>
          <input
            type='file'
            id='upload-file'
            accept='image/*,.pdf,.doc,.docx'
          />
        </div>
        <div className='input-item'>
          <label htmlFor='body'>Body</label>
          <textarea name='body'></textarea>
        </div>
        <button type='submit'>Tambah</button>
      </form>
    </main>
  );
}

export default AddSurat;
