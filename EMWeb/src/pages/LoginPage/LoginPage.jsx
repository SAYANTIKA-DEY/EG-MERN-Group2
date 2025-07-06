import React, { usestate} from 'react';
import { useNavigate } from 'react-router-dom';
import LoginPage from '../../components/LoginPage/LoginPage';
import './LoginPage.css';
const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = usestate('');
  const [password, setPassword] = usestate('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    if (username === 'admin' && password === 'password') {
      navigate('/home'); // Redirect to home page on successful login
    }
    else {
      alert('Invalid username or password');
    }
    }
    return (
        <div className="login-page-container">
            <LoginPage
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            />
        </div>
        );
}
export default LoginPage;
