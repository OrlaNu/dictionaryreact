import './App.css';
import Dictionary from './Components/Dictionary'

function App() {
  return (
    <div className="App">
      <div className='container'>
      <header>
      </header>
      <main className='Main'>
        <Dictionary defaultKeyword="Sunset"/>
      </main>
      <footer className='App-footer'>
        Coded by Órla
      </footer>
      </div>
    </div>
  );
}

export default App;
