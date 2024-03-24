import { Movie } from 'core/types/movie';
import './styles.scss';

const MovieDetails = () => {

  const movie: Movie = {
    id: 1,
    title: 'Bob Esponja',
    subTitle: 'O Incrível Resgate',
    year: 2020,
    imgUrl:
      'https://image.tmdb.org/t/p/w533_and_h300_bestv2/wu1uilmhM4TdluKi2ytfz8gidHf.jpg',
    synopsis:
      'Onde está Gary? Segundo Bob Esponja, Gary foi "caracolstrado" pelo temível Rei Poseidon e levado para a cidade perdida de Atlantic City. Junto a Patrick Estrela, ele sai em uma missão de resgate ao querido amigo, e nesta jornada os dois vão conhecer novos personagens e viver inimagináveis aventuras.',
    genre: {
      id: 1,
      name: 'Comédia',
    },
  };


  return (
    <div className="movie-details-container">
      <div className="movie-details-content">
        <div className="movie-details-image-container">
          <img
            src={movie.imgUrl}
            alt={movie.title}
            className="movie-details-image"
          />
        </div>

        <div className="movie-details-info">
          <h1 className="movie-details-title">{movie.title}</h1>
          <span className="movie-details-year">{movie.year}</span>
          <h3 className="movie-details-subtitle">{movie.subTitle}</h3>
          <div className="movie-details-description-container">
            <p className="movie-details-description-text">{movie.synopsis}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
