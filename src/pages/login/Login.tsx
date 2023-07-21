import React, { useContext } from 'react';
import LoginForm from '../../components/forms/login/LoginForm';
import { LoginProps } from '../../props/UserProps';
import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../../api/user';
import { LoginContext } from '../../contexts/LoginContext';

const Login = () => {
  const { auth, setAuth } = useContext(LoginContext);

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

      console.log(getUser);
    } else {
      console.log('nera');
    }
  };
  return <LoginForm onSubmit={handleLogin}></LoginForm>;
};

export default Login;
