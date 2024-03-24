import Navbar from 'core/components/NavBar';
import MovieCard from './MovieCard';
import './styles.scss';

const Movies = () => {
  return (
    <>
    <div>
      <Navbar />
    </div>
    <div className="movies-container">
      <MovieCard />
    </div>
    </>
  )
}

export default Movies;