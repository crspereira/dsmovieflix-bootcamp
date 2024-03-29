import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import history from 'core/utils/history';
import { makePrivateRequest } from 'core/utils/requests';

import './styles.scss';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
  movieId: string;
};

const SaveReview = ({ movieId }: Props) => {
  const [review, setReview] = useState('');

  const saveReview = () => {
    const payload = {
      movieId,
      text: review,
    };

    makePrivateRequest({
      url: '/reviews',
      method: 'POST',
      data: payload,
    })
      .then(() => {
        //history.push(`/movies`);
        //history.push(`/movies/${movieId}`);
        toast.success('Avaliação salva com sucesso 😄', {delay: 500, onClose: () => history.go(0)});
      })
      .catch(() => {
        toast.error('Ocorreu um erro ao salvar sua avaliação 😕');
      });
  };

  const handleChangeReviewText = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setReview(event.target.value);
  };

  return (
    <div className="post-new-review-container">
      <textarea
        value={review}
        placeholder="Digite aqui sua avaliação"
        className="new-review-text"
        onChange={handleChangeReviewText}
      />

      <button className="new-review-button" onClick={saveReview}>
        <span className="new-review-button-text">Salvar avaliação</span>
      </button>
      <ToastContainer />
    </div>
  );
};

export default SaveReview;
