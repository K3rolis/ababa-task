import React from 'react';
import styles from './MovieCard.module.css';
import { MovieProps } from '../../props/MoviesProps';
import { Link } from 'react-router-dom';
import { AiFillDelete, AiFillEdit, AiFillStar } from 'react-icons/ai';

type Props = {
  props: MovieProps;
  handleDelete?: (id: number) => void;
};
const MovieCard = ({ handleDelete, props }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.imageBox}>
          <img className={styles.image} src="https://image.tmdb.org/t/p/w300/gPbM0MK8CP8A174rmUwGsADNYKD.jpg" alt="" />
        </div>
        <div className={styles.movieContent}>
          <span className={styles.title}>{props.title}</span>
          <div className={styles.metaData}>
            <div className={styles.ratingBox}>
              <AiFillStar className={styles.star} />
              <span className={styles.rating}>{props.rating}</span>
            </div>
            <span className={styles.releaseDate}>{props.releasedYear}</span>
          </div>
          <p className={styles.description}>{props.description}</p>
        </div>
      </div>
      <div className={styles.actions}>
        <Link to={`/movies/edit/${props.id}`} title="Edit">
          <AiFillEdit className={styles.icon} />
        </Link>

        <button onClick={() => handleDelete!(props.id!)} title="Delete">
          <AiFillDelete className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
