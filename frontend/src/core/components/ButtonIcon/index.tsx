import { ReactComponent as Arrow } from 'core/assets/images/arrow.svg';
import './styles.scss';

type Props = {
  buttonTitle: string;
};

const ButtonIcon = ({ buttonTitle }: Props) => {
  return (
    <button className="auth-button-container">
      <div className="auth-button-text">
        {buttonTitle}
      </div>
      <div className="auth-button-image-container">
        <Arrow data-testid="arrow-image" />
      </div>
    </button>
  );
};

export default ButtonIcon;
