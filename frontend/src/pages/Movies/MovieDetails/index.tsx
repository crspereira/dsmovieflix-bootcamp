import { Movie } from 'core/types/movie';
import './styles.scss';
import axios from 'axios';
import { BASE_URL } from 'core/utils/requests';
import { useEffect, useState } from 'react';

const MovieDetails = () => {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    axios.get(BASE_URL + '/movies/2').then((response) => {
      setMovie(response.data);
      console.log(response.data);
    });
  }, []);

  axios.get(BASE_URL + '/movies/2').then((response) => {
    setMovie(response.data);
    console.log(response.data);
  });

  return (
    <div className="movie-details-container">
      <div className="movie-details-content">
        <div className="movie-details-image-container">
          <img
            src={movie?.imgUrl}
            alt={movie?.title}
            className="movie-details-image"
          />
        </div>

        <div className="movie-details-info">
          <h1 className="movie-details-title">{movie?.title}</h1>
          <span className="movie-details-year">{movie?.year}</span>
          <h3 className="movie-details-subtitle">{movie?.subTitle}</h3>
          <div className="movie-details-description-container">
            <p className="movie-details-description-text">{movie?.synopsis}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
