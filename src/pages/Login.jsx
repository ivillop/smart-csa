import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Logic untuk autentikasi pengguna
    console.log('Login successful');
    navigate('/');
  };

  return (
    <>
      <div className='login-page'>
        <form onSubmit={handleLogin}>
          <h2>Login to your account</h2>
          <div className='login-page__email'>
            <label>Email</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='login-page__password'>
            <label>Password</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type='submit'>Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
