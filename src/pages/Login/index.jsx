import { useState } from 'react';

import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from '@mui/material';
import login from 'hooks/services/authService';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (username, password) => {
    const data = await login(username, password);
    if (data?.token) {
      try {
        localStorage.setItem('token', data.token);
        navigate('/app');
      } catch (error) {
        console.error('Error storing token in localStorage:', error);
      }
    } else {
      console.log('Unauthorized');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>
          <form>
            <TextField
              label="Username"
              fullWidth
              margin="normal"
              variant="outlined"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <TextField
              label="Password"
              fullWidth
              margin="normal"
              variant="outlined"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => {
                handleLogin(username, password);
              }}
            >
              Log In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
