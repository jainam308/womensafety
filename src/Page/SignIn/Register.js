import React, { useState } from 'react';
import { auth } from './firebase';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { useAuthValue } from './AuthContext';
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Avatar,
  CssBaseline,
  Paper,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setTimeActive } = useAuthValue();

  const validatePassword = () => {
    let isValid = true;
    if (password !== '' && confirmPassword !== '') {
      if (password !== confirmPassword) {
        isValid = false;
        setError('Passwords do not match');
      }
    }
    return isValid;
  };

  const register = (e) => {
    e.preventDefault();
    setError('');
    if (validatePassword()) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              setTimeActive(true);
              navigate('/verify-email');
            })
            .catch((err) => alert(err.message));
        })
        .catch((err) => setError(err.message));
    }
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', borderRadius: '25px' }}>
        <div className="auth__form-container">
          <Avatar style={{ margin: '0 auto', backgroundColor: '#007BFF' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" className="text-center">
            Sign up
          </Typography>
          {error && (
            <div className="auth__error">{error}</div>
          )}
          <form onSubmit={register} style={{ marginTop: '16px' }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="current-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="termsCheck"
              />
              <label className="form-check-label" htmlFor="termsCheck">
                I agree to all statements in <Link to="#!">Terms of service</Link>
              </label>
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: '16px' }}
            >
              Register
            </Button>
          </form>
          <Grid container justifyContent="flex-end" style={{ marginTop: '16px' }}>
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </Container>
  );
}

export default Register;
