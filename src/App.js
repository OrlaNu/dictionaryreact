import './App.css';
import Dictionary from './Components/Dictionary'
import Socials from './Components/Socials'


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
        <Socials />
      </footer>
      </div>
    </div>
  );
}

export default App;
