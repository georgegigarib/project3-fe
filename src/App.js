import logo from './logo.svg';
import './App.css';
import Audio from './components/audio.component.jsx';
import drumPadObj from './components/data'

const App = () => {



  return (
    <div className="App">
      <header className="App-header">
        <h2>Drum Machine</h2>
        <div id="drum-machine" >
         <Audio drumPadObj={drumPadObj}/>
        </div>
      </header>
    </div>
  );
}

export default App;
