import './styles.scss';
import ButtonIcon from './ButtonIcon';

const Login = () => {
  return (
    <div className="login-container">
      <h1>LOGIN</h1>
      <form>
        <div className="mb-4" >
          <input
            type="text"
            className="form-control form-control-lg base-input auth-input"
            placeholder="Email"
            name="username"
          />
        </div>
        <div className="mb-2">
          <input
            type="password"
            className="form-control form-control-lg base-input "
            placeholder="Password"
            name="password"
          />
        </div>
        <div className="login-submit">
          <ButtonIcon buttonTitle="Fazer Login"/>
        </div>
      </form>
    </div>
  );
};

export default Login;
