import { Movie } from 'core/types/movie';
import MovieCard from './MovieCard';
import './styles.scss';
import { Link } from 'react-router-dom';

const Movies = () => {

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
    <div className="movies-container">
      <Link to={ `/movies/1` }>
        <MovieCard movie={movie} />
      </Link>
      <MovieCard movie={movie} />
      <MovieCard movie={movie} />
      <MovieCard movie={movie} />
    </div>
  );
};

export default Movies;
