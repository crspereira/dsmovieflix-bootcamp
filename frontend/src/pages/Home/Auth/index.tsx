import './styles.scss';
import Login from './Login';

const Auth = () => {
  return (
    <div data-testid="login" className="auth-form-container">
     <Login />
    </div>
  );
};

export default Auth;
