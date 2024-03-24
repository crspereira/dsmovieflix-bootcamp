import './styles.scss'

const MovieCard = () => {
  return (
    <div className="movie-card-container">
      <img
        src="Endereço da Imagem"
        alt= "Título Alternativo"
        className="movie-image"
        data-testid="movie-image"
      />

      <div className="movie-info-container">
        <h3 className="movie-title">
          Título do Filme
        </h3>
        <span className="movie-year">Ano do Filme</span>
        <h4 className="movie-subtitle">SubTítulo do Filme</h4>
      </div>
    </div>
  )
}

export default MovieCard