import './styles.scss';

const MovieDetails = () => {
  return (
    <div className="movie-details-container">
      <div className="movie-details-content">
        <div className="movie-details-image-container">
          <img
            src="URL do Filme"
            alt="Título Alternativo"
            className="movie-details-image"
          />
        </div>

        <div className="movie-details-info">
          <h1 className="movie-details-title">Título do Livro</h1>
          <span className="movie-details-year">Ano do Livro</span>
          <h3 className="movie-details-subtitle">SubTítulo do Livro</h3>
          <div className="movie-details-description-container">
            <p className="movie-details-description-text">Sinópse do Livro</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
