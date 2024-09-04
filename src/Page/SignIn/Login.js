import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, TextField, Typography } from '@mui/material';
import { Email, Lock, Facebook, Instagram } from '@mui/icons-material'; // Import icons from Material-UI
import { signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from './AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setTimeActive } = useAuthValue();
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        if (!auth.currentUser.emailVerified) {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              setTimeActive(true);
              navigate('/verify-email');
            })
            .catch((err) => setError(err.message));
        } else {
          navigate('/Index');
        }
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'linear-gradient(to right, #3959ab, #1e3d79)' }}>
      <Container maxWidth="xs">
        <div style={{ textAlign: 'center', padding: '32px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.8)' }}>
          <h1 style={{ color: '#2196F3' }}>Log in</h1>
          {error && <div style={{ color: 'red', marginBottom: '16px' }}>{error}</div>}
          <form onSubmit={login} name="login_form" style={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              type="email"
              value={email}
              required
              label="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginBottom: '16px' }}
              InputProps={{ startAdornment: <Email style={{ color: '#2196F3' }} /> }}
            />
            <TextField
              type="password"
              value={password}
              required
              label="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginBottom: '16px' }}
              InputProps={{ startAdornment: <Lock style={{ color: '#2196F3' }} /> }}
            />
            <Button
              type="submit"
              variant="contained"
              className="loginButton"
              style={{ backgroundColor: '#2196F3', color: 'white', marginBottom: '16px' }}
            >
              Login
            </Button>
          </form>
          <p style={{ marginTop: '16px', color: '#333' }}>
            Don't have an account? <Link to="/register" style={{ color: '#2196F3' }}>Create one here</Link>
          </p>
          
         
        </div>
      </Container>
    </div>
  );
}

export default Login;
