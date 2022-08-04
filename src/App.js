import './App.css';
import axios from 'axios';
import Dictionary from './Components/Dictionary'

function App() {
  return (
    <div className="App">
      <div className='container'>
      <header>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className='App-footer'>
        Coded by Órla
      </footer>
      </div>
    </div>
  );
}

export default App;
