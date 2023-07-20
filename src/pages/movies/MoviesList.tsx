import React from 'react';
import styles from './MoviesList.module.css';
import Container from '../../components/container/Container';
import { deleteMovie, getMovies } from '../../api/movies';
import { useMutation, useQuery } from '@tanstack/react-query';
import { MovieProps } from '../../props/MoviesProps';
import MovieCard from '../../components/movieCard/MovieCard';

const MoviesList = () => {
  const {
    refetch,
    isLoading,
    data: movies,
  } = useQuery({
    queryKey: ['movies'],
    queryFn: getMovies,
  });

  const deleteMovieMutation = useMutation({
    mutationFn: deleteMovie,
    onSuccess: () => refetch(),
  });

  const handleDelete = (id: number) => {
    deleteMovieMutation.mutate(id);
  };

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <Container width="800px">
        <div className={styles.header}>
          <span>Sort By title</span>
        </div>
        <div className={styles.moviesWrapper}>
          {movies.map((movie: MovieProps) => (
            <MovieCard key={movie.id} props={{ ...movie }} handleDelete={handleDelete} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MoviesList;
