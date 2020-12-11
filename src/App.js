
import { Switch, Route, Redirect } from 'react-router-dom';
import { Menu } from './components/menu/Menu';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { ApplicationContext, ApplicationProvider } from './domain/application.store';

import './App.css';
import { useContext } from 'react';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { state } = useContext(ApplicationContext);
  return (
    <Route {...rest} render={props => state.isLoggedIn ? (
      <Component {...props} />
    ) : (
        <Redirect to="/login" />
      )
    } />
  )
}


function App() {
  return (
    <ApplicationProvider>
      <div className="App">
        <Switch>
          <Route path='/login' component={Auth} />
          <ProtectedRoute exact path='/' component={Home} />
          <ProtectedRoute path='/cocktail/:id' component={Home} />
          <ProtectedRoute path="/favorites" component={Favorites} />
          <Redirect to="/" />
        </Switch>
        <Menu />
      </div >
    </ApplicationProvider >
  );
}

export default App;
