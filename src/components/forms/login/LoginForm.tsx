import React from 'react';
import InputField from '../../inputField/InputField';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { loginSchema } from '../../../validations/LoginSchema';
import SubmitButton from '../../buttons/SubmitButton';
import { LoginProps } from '../../../props/UserProps';

type Props = {
  onSubmit: (user: LoginProps) => void;
};
const Login = ({ onSubmit }: Props) => {
  const { register, handleSubmit } = useForm<LoginProps>({ resolver: yupResolver(loginSchema) });

  const onLogin = (user: LoginProps) => {
    onSubmit(user);
  };

  return (
    <div>
      <h1>Login form</h1>
      <form onSubmit={handleSubmit(onLogin)}>
        <InputField type="text" label="Username" name="username" register={register} required />
        <InputField type="text" label="password" name="password" register={register} required />

        <SubmitButton>Submit</SubmitButton>
      </form>
    </div>
  );
};

export default Login;
