import React from 'react';
import styles from './MovieList.module.css';

const MovieList = ({ movies }) => {
    return (
        <div className={styles.movieList}>
            {movies.map((movie) => (
                <div key={movie._id} className={styles.movieItem}>
                    <div className={styles.movieTitle}>{movie.title}</div>
                    <div className={styles.movieGenre}>{movie.genre}</div>
                    <div className={styles.movieShowtime}>{movie.showtime}</div>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
