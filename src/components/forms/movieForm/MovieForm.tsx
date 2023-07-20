import React from 'react';
import InputField from '../../inputField/InputField';
import Container from '../../container/Container';
import styles from './MovieForm.module.css';
import SubmitButton from '../../buttons/SubmitButton';
import { yupResolver } from '@hookform/resolvers/yup';
import { MovieProps } from '../../../props/MoviesProps';
import { movieSchema } from '../../../validations/MovieSchema';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormValues {
  id: number;
  rating: number;
  title: string;
  releasedYear: number;
  description: string;
}

type Props = {
  onSubmit: (movie: MovieProps) => void;
  initialValues: any;
};

const MovieForm = ({ onSubmit, initialValues }: Props) => {
  // const initialValues = {
  //   title: '',
  //   rating: undefined,
  //   releasedYear: undefined,
  //   description: '',
  // };
  const form = useForm<MovieProps>({
    defaultValues: initialValues,
    resolver: yupResolver(movieSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onCreateMovie: SubmitHandler<MovieProps> = async (movie: MovieProps) => {
    // alert(JSON.stringify(movie));
    console.log(movie);
    const isValid = await movieSchema.isValid(movie);
    console.log(isValid);
    if (isValid) {
      onSubmit(movie);
      console.log('good');
    }
  };

  return (
    <Container width="600px">
      <form className={styles.form} onSubmit={handleSubmit(onCreateMovie)}>
        <InputField type="text" label="title" name="title" register={register} required />
        {errors.title && <span>{errors.title?.message}</span>}

        <div className={styles.formGroup}>
          <InputField type="number" label="rating" name="rating" register={register} required />
          {errors.rating && <span>{errors.rating?.message}</span>}

          <InputField type="number" label="released Year" name="releasedYear" register={register} required />
          {errors.releasedYear && <span>{errors.releasedYear?.message}</span>}
        </div>

        <InputField rows={5} label="Description" name="description" register={register} required />
        {errors.description && <span>{errors.description?.message}</span>}

        <SubmitButton>Submit</SubmitButton>
      </form>
    </Container>
  );
};

export default MovieForm;
