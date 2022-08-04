import './App.css';
import Dictionary from './Components/Dictionary'

function App() {
  return (
    <div className="App">
      <div className='container'>
      <header>
        <a href="#" className="btn btn-primary shadow">Hello</a>
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
