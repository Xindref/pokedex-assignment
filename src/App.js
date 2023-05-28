import './App.css';
import Pokedex from './Pokedex';
import Pokemon from './Pokemon';

function App() {
  return (
    <div>
      <h1 className='page-title'>Pokedex</h1>
      <div className='card-container'>
        <Pokedex pokemon={Pokemon} />
      </div>
    </div>
  );
}

export default App;
