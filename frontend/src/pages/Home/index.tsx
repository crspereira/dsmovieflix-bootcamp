import { ReactComponent as MainImage } from 'core/assets/images/main-image.svg';

import './styles.scss';
import Auth from './Auth';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-title-container">
          <div className="home-content-container">
            <h1>Avalie Filmes</h1>
            <h2>Diga o que você achou do seu filme favorito</h2>
          </div>
          <div className="home-image-container">
            <MainImage data-testid="main-image"/>
          </div>
        </div>
        <div data-testid="auth" className="home-authcard-container">  
          <Auth />
        </div>
      </div>
    </div>
  );
};

export default Home;
