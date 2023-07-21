import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../../inputField/InputField';
import { registerSchema } from '../../../validations/RegisterSchema';
import SubmitButton from '../../buttons/SubmitButton';
import Container from '../../container/Container';
import { UserRegisterProps } from '../../../props/UserProps';

type Props = {
  onSubmit: (user: UserRegisterProps) => void;
};

const RegisterForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const onRegister = async (user: UserRegisterProps) => {
    console.log(user);
    const isValid = await registerSchema.isValid(user);

    if (isValid) {
      onSubmit(user);
    }
  };

  return (
    <div>
      <Container width="400px">
        <h1>Register</h1>

        <form onSubmit={handleSubmit(onRegister)}>
          <InputField type="text" label="Username" name="username" register={register} required />
          {errors.username && <span>{errors.username?.message}</span>}
          <InputField type="text" label="Email" name="email" register={register} required />
          {errors.email && <span>{errors.email?.message}</span>}

          <InputField type="password" label="Password" name="password" register={register} required />
          {errors.password && <span>{errors.password?.message}</span>}

          <InputField type="password" label="Confirm Password" name="confirmPassword" register={register} required />
          {errors.confirmPassword && <span>{errors.confirmPassword?.message}</span>}

          <SubmitButton>Confirm</SubmitButton>
        </form>
      </Container>
    </div>
  );
};

export default RegisterForm;
