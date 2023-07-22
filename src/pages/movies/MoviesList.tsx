import React, { useState } from 'react';
import styles from './MoviesList.module.css';
import classes from '../../components/buttons/Buttons.module.css';
import Container from '../../components/container/Container';
import { deleteMovie, getMovies } from '../../api/movies';
import { useMutation, useQuery } from '@tanstack/react-query';
import { MovieProps } from '../../props/MoviesProps';
import MovieCard from '../../components/movieCard/MovieCard';
import { LinkButton } from '../../components/buttons/Buttons';
import Title from '../../components/title/Title';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const MoviesList = () => {
  const [moviesDesc, setMoviesDesc] = useState<boolean>(false);

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

  const sort = movies.toReversed();

  return (
    <Container width="800px">
      <Title>Movies</Title>
      <div className={styles.header}>
        <span className={styles.hidden}></span>

        <div className={styles.sortingBox}>
          <span className={styles.sort}>Sort By Title</span>
          {moviesDesc ? (
            <AiOutlineArrowUp className={styles.icon} onClick={() => setMoviesDesc(false)} />
          ) : (
            <AiOutlineArrowDown className={styles.icon} onClick={() => setMoviesDesc(true)} />
          )}
        </div>

        <LinkButton className={`${styles.button} ${classes.outline}`}>
          <Link to={'/movies/create'}>Create New</Link>
        </LinkButton>
      </div>
      <div className={styles.moviesWrapper}>
        {(moviesDesc ? movies : sort).map((movie: MovieProps) => (
          <MovieCard key={movie.id} props={{ ...movie }} handleDelete={handleDelete} />
        ))}
      </div>
    </Container>
  );
};

export default MoviesList;
