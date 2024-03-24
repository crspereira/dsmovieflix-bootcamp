import { ReactComponent as Star } from 'core/assets/images/star-review.svg'
import './styles.scss'

const ListReviews = () => {

  return (
    <>
      <div>
        <Star className="ml-15" data-testid="star-image" />
        <span className="review-username">Review User Name</span>
      </div>
      <div className="review-text-container">
        <p className="review-text">
          Bloco Texto Review
        </p>
      </div>
    </>
  )
}

export default ListReviews