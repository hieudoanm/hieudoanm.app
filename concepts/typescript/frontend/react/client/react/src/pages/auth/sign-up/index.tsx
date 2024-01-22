import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ReactSVG from '../../../assets/react.svg';

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const signUp = (event: any) => {
    event.preventDefault();
    if (username === 'username' && password === 'password') {
      navigate(`/apps/table`);
    }
  };

  return (
    <Container>
      <main className="flex h-screen w-full items-center justify-center">
        <div className="w-full max-w-lg rounded border px-8 py-16 shadow-2xl">
          <form onSubmit={signUp}>
            <div className="flex flex-col gap-8">
              <div className="mx-auto w-32">
                <Link to="/">
                  <img src={ReactSVG} alt="React" />
                </Link>
              </div>
              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-4xl font-bold uppercase">Welcome</h1>
                <p className="text-gray-500">Create new account to continue</p>
              </div>
              <div className="flex flex-col gap-4">
                <TextField
                  id="username"
                  name="username"
                  label="Username"
                  placeholder="Username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  required
                />
                <TextField
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  label="Password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    ),
                  }}
                  required
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <FormControlLabel control={<Checkbox />} label="Remember" />
                  <Link to="/password/forget">
                    <p className="text-blue-500">
                      Forget{' '}
                      <span className="hidden md:inline">Your Password</span>?
                    </p>
                  </Link>
                </div>
                <Button type="submit" variant="contained">
                  Sign Up
                </Button>
                <Link to="/auth/sign-in" className="text-center text-blue-500">
                  Sign In
                </Link>
              </div>
            </div>
          </form>
        </div>
      </main>
    </Container>
  );
};

export default SignUpPage;
