import { Redirect, Route, Router, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'core/components/NavBar';
import history from 'core/utils/history';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/Movies/MovieDetails';
import PrivateRoute from 'core/components/Routes/PrivateRoute';
import { isAuthenticated } from 'core/utils/auth';

const Routes = () => (
  <Router history={ history }>
    <Navbar />
    <Switch>
      <Redirect from="/" to="/login" exact />
      <Route path="/login" render={() => {
          return (isAuthenticated() ?
            <Redirect to='/movies' /> : <Home />
          )
        }}
      />

      <PrivateRoute path="/movies" exact>
        <Movies />
      </PrivateRoute>
      <Route path="/movies/:movieId">
        <MovieDetails />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
