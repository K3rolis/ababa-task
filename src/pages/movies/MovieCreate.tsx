import React from 'react';
import MovieForm from '../../components/forms/movieForm/MovieForm';
import { useMutation } from '@tanstack/react-query';
import { createMovie } from '../../api/movies';
import { MovieProps } from '../../props/MoviesProps';

const MovieCreate = () => {
  const createMovieMutation = useMutation({
    mutationFn: createMovie,
    onSuccess: (data: any) => {
      console.log('issisaugojo');
      //   toast.success('Recipe was created Successfully!');
      //   navigate(`/recipes/category/${data.data.categoryId}/recipe/${Number(data.data.id)}`);
    },
    // onError: () => navigate(`/notFound`),
  });
  const handleSubmit = (movie: any) => {
    createMovieMutation.mutate({
      ...movie,
    });
  };
  return <MovieForm onSubmit={handleSubmit} initialValues={{} as MovieProps}></MovieForm>;
};

export default MovieCreate;
