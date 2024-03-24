import './styles.scss'

const SaveReview = () => {

  return (
    <div className="post-new-review-container">
      <textarea
        value="Review"
        placeholder="Digite aqui sua avaliação"
        className="new-review-text"
      />

      <button
        className="new-review-button"
      >
        <span className="new-review-button-text">Salvar avaliação</span>
      </button>
    </div>
  )
}

export default SaveReview