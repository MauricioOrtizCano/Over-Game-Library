import './App.css';
import { Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Home from './components/Home/Home';
import DetailVideogame from './components/DetailVideogame/DetailVideogame';
import CreateGame from './components/CreateGame/CreateGame';

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <MainPage />
      </Route>

      <Route exact path='/home'>
        <Home />
      </Route>

      <Route exact path='/videogame/:id'>
        <DetailVideogame />
      </Route>

      <Route exact path='/create_game'>
        <CreateGame />
      </Route>
    </div>
  );
}

export default App;
