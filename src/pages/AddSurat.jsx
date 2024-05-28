function AddSurat() {
  return (
    <main className='white-bg'>
      <h1>Tambah Surat</h1>
      <form action=''>
        <label htmlFor='title'>Title</label>
        <input type='text' />
        <label htmlFor='post-image'>Post Image</label>
        <input type='file' accept='image/*,.pdf,.doc,.docx' />
        <label htmlFor='body'>Body</label>
        <textarea name='body'></textarea>
        <button type='submit'>Tambah</button>
      </form>
    </main>
  );
}

export default AddSurat;
