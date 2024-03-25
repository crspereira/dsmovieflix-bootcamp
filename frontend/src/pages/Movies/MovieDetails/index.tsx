import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { Movie } from 'core/types/movie';
import { Review } from 'core/types/review';
import { getAccessTokenDecoded } from 'core/utils/auth';
import { makePrivateRequest } from 'core/utils/requests';
import ListReviews from './ListReviews';
import MovieInfoLoader from './MovieDetailsLoaders/MovieInfoLoader';
import MovieListReviewsLoader from './MovieDetailsLoaders/MovieListReviewsLoader';
import MovieSaveReviewLoader from './MovieDetailsLoaders/MovieSaveReviewLoader';
import SaveReview from './SaveReview';

import './styles.scss'

type ParamsType = {
  movieId: string
};

const MovieDetails = () => {
  const { movieId } = useParams<ParamsType>();
  const [movie, setMovie] = useState<Movie>();
  const [review, setReview] = useState<Review[]>();
  const [hasPermission, setHasPermission] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = useCallback(() => {
    makePrivateRequest({ url: `/movies/${movieId}` })
      .then(response => {
        setMovie(response.data)
        console.log(response.data)
        setIsLoading(false)
      });
  }, [movieId]);

  useEffect(() => {
    const currentUser = getAccessTokenDecoded();
    setHasPermission(currentUser.authorities.toString() === 'ROLE_MEMBER');

    getMovies();
  }, [getMovies]);

  const getReviews = useCallback(() => {
    makePrivateRequest({ url: `/movies/${movieId}/reviews` })
      .then(response => {
        setReview(response.data)
        console.log(response.data)
        setIsLoading(false)
      });
  }, [movieId]);

  useEffect(() => {
    const currentUser = getAccessTokenDecoded();
    setHasPermission(currentUser.authorities.toString() === 'ROLE_MEMBER');

    getReviews();
  }, [getReviews]);

  return (
    <div className="movie-details-container">
      {isLoading ? (
        <MovieInfoLoader />
      ) : (
        <div className="movie-details-content">
          <div className="movie-details-image-container">
            <img src={ movie?.imgUrl } alt={ movie?.title } className="movie-details-image" />
          </div>

          <div className="movie-details-info">
            <h1 className="movie-details-title">{ movie?.title }</h1>
            <span className="movie-details-year">{ movie?.year }</span>
            <h3 className="movie-details-subtitle">{ movie?.subTitle }</h3>
            <div className="movie-details-description-container">
              <p className="movie-details-description-text">

                { movie?.synopsis }
                
              </p>
            </div>
          </div>
        </div>
      )}

      {hasPermission && isLoading ? (
        <MovieSaveReviewLoader />
      ) : hasPermission && (
        <SaveReview movieId={ movieId } />
      )}

     {isLoading ? (<MovieListReviewsLoader />) : ( 
        review?.length !== 0 && (
          <div className="reviews-container">
            {review?.map(review => (
              <ListReviews review={ review } key={review.id} />
            ))}
          </div>
        )
      )};
    </div>
  );
};

export default MovieDetails