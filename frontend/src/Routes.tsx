import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'core/components/NavBar';
import Movies from 'pages/Movies';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movies">
        <Movies/>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
