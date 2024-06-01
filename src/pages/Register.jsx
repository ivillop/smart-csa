import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Logic untuk mendaftarkan pengguna baru
    console.log('Registration successful');
    navigate('/login');
  };

  return (
    <>
      <div className='register-page'>
        <form onSubmit={handleRegister}>
          <h2>Register Account</h2>
          <div className='register-page__email'>
            <label>Email</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='register-page__password'>
            <label>Password</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type='submit'>Register</button>
        </form>
      </div>
    </>
  );
}

export default Register;
