
import { Switch, Route } from 'react-router-dom';
import { Menu } from './components/menu/Menu';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
      <Menu />
    </div>
  );
}

export default App;
