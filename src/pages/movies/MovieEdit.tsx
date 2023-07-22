import React from 'react';
import MovieForm from '../../components/forms/movie/MovieForm';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getMovie, updateMovie } from '../../api/movies';
import { MovieProps } from '../../props/MoviesProps';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const MovieEdit = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const { isLoading, data: movie } = useQuery({
    queryKey: ['recipe', Number(movieId)],
    queryFn: () => getMovie(Number(movieId)),
  });

  const updateMovieMutation = useMutation({
    mutationFn: updateMovie,
    onSuccess: () => {
      toast.success('Movie was edited Successfully!');
      navigate('/');
    },
    onError: () => {
      toast.error('Something Went Wrong Try Again');
      navigate(`/notFound`);
    },
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
