// src/App.js
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>My Movie App</h1>
      <MovieList />
    </div>
  );
}

export default App;
