import { useForm } from 'react-hook-form';
import { useState } from 'react';

import { LoginData, makeLogin } from 'core/utils/requests';
import { saveSessionData } from 'core/utils/auth';
import { useHistory } from 'react-router';

import './styles.scss';
import ButtonIcon from 'core/components/ButtonIcon';

const Login = () => {
  const { register, handleSubmit } = useForm<LoginData>();
  const [hasError, setHasError] = useState(false);
  const history = useHistory();

  const onSubmit = (data: LoginData) => {
    makeLogin(data)
      .then((response) => {
        setHasError(false);
        saveSessionData(response.data);
        history.push('/movies');
      })
      .catch(() => {
        setHasError(true);
      });
  };

  return (
    <div className="login-container">
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {hasError && (
          <div className="alert">
            <p className="alert-text">Usuário ou senha inválidos!</p>
            <span className="close" onClick={() => setHasError(false)}>
              X
            </span>
          </div>
        )}

        <div className="mb-4">
          <input
            {...register('username', { required: true })}
            type="text"
            className="form-control form-control-lg base-input auth-input"
            placeholder="Email"
            name="username"
            data-testid="email"
          />
        </div>
        <div className="mb-2">
          <input
            {...register('password', { required: true })}
            type="password"
            className="form-control form-control-lg base-input auth-input"
            placeholder="Password"
            name="password"
            data-testid="password"
          />
        </div>
        <div className="login-submit">
          <ButtonIcon buttonTitle="Fazer Login" />
        </div>
      </form>
    </div>
  );
};

export default Login;
