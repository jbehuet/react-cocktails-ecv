
import { Switch, Route } from 'react-router-dom';
import { Menu } from './components/menu/Menu';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { ApplicationProvider } from './domain/application.store';

import './App.css';

function App() {
  return (
    <ApplicationProvider>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/cocktail/:id' component={Home} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
        <Menu />
      </div>
    </ApplicationProvider>
  );
}

export default App;
