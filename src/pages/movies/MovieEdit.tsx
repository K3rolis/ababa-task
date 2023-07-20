import React from 'react';
import MovieForm from '../../components/forms/movieForm/MovieForm';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getMovie, updateMovie } from '../../api/movies';
import { MovieProps } from '../../props/MoviesProps';
import { useParams } from 'react-router-dom';

const MovieEdit = () => {
  const { movieId } = useParams();

  const { isLoading, data: movie } = useQuery({
    queryKey: ['recipe', Number(movieId)],
    queryFn: () => getMovie(Number(movieId)),
  });

  const updateMovieMutation = useMutation({
    mutationFn: updateMovie,
    onSuccess: (data) => {
      console.log('successfully edited');
      //   toast.success('Recipe was created Successfully!');
      //   navigate(`/recipes/category/${data.data.categoryId}/recipe/${Number(recipeId)}`);
    },
    // onError: () => navigate(`/notFound`),
  });

  if (isLoading) return <h1>Loading...</h1>;

  const handleSubmit = (movie: MovieProps) => {
    console.log(movie);
    updateMovieMutation.mutate({
      id: Number(movieId),
      ...movie,
    });
  };

  console.log(movie);

  return <MovieForm onSubmit={handleSubmit} initialValues={movie}></MovieForm>;
};

export default MovieEdit;
