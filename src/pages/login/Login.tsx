import React, { useContext, useState } from 'react';
import LoginForm from '../../components/forms/login/LoginForm';
import { LoginProps } from '../../props/UserProps';
import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../../api/user';
import { LoginContext } from '../../contexts/LoginContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { setAuth } = useContext(LoginContext);
  const navigate = useNavigate();

  const [error, setError] = useState<string>('');

  const { isLoading, data: users } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });

  if (isLoading) return <h1>Loading...</h1>;

  const handleLogin = (loggedUser: LoginProps) => {
    const getUser = users.find(
      (user: LoginProps) => user.username.toLowerCase() === loggedUser.username.toLowerCase() && user.password === loggedUser.password
    );

    if (getUser) {
      setAuth({
        username: loggedUser.username,
        isLoggedIn: true,
      });

      navigate('/');
    } else {
      setError('Wrong username or password');
    }
  };
  return <LoginForm onSubmit={handleLogin} error={error}></LoginForm>;
};

export default Login;
