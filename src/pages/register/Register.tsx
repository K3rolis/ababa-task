import React from 'react';
import RegisterForm from '../../components/forms/register/RegisterForm';
import { UserRegisterProps } from '../../props/UserProps';
import { createUser } from '../../api/user';
import { useMutation } from '@tanstack/react-query';

const Register = () => {
  const createUserMutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      console.log('good');
    },
  });

  const handleNewUser = (user: UserRegisterProps) => {
    const UserData = {
      username: user.username,
      email: user.email,
      password: user.password,
    };
    createUserMutation.mutate(UserData);
  };

  return <RegisterForm onSubmit={handleNewUser}></RegisterForm>;
};

export default Register;
