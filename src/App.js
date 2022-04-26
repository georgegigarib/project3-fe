import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import sound1 from './audio/Cev_H2.mp3';
import sound2 from './audio/Dsc_Oh.mp3';
import sound3 from './audio/Heater-1.mp3';
import sound4 from './audio/Heater-2.mp3';
import sound5 from './audio/Heater-3.mp3';
import sound6 from './audio/Heater-4_1.mp3';
import sound7 from './audio/Heater-6.mp3';
import sound8 from './audio/Kick_n_Hat.mp3';
import sound9 from './audio/RP4_KICK_1.mp3';

const drumPadObj = [
{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Heater-1',
  url: sound1 },

{
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Heater-2',
  url: sound2 },

{
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Heater-3',
  url: sound3 },

{
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Heater-4',
  url: sound4 },

{
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Clap',
  url: sound5 },

{
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Open-HH',
  url: sound6 },

{
  keyCode: 90,
  keyTrigger: 'Z',
  id: "Kick-n'-Hat",
  url: sound7 },

{
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Kick',
  url: sound8 },

{
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Closed-HH',
  url: sound9 }];

const App = () => {

  document.addEventListener('keydown', handleKeyPress);
  
  let [mykey, setmykey] = useState('');

 function handleKeyPress(event){
  if (drumPadObj.some((key) => {
      return key.keyCode === event.keyCode;
  })){
    playSound(event.keyCode);
  }
 }
 function playSound(keyCode){
  const sound = document.getElementById(keyCode);
  sound.currentTime = 0;
  console.log(keyCode);
  sound.play();
 }
 function sii(e){
   var mySound = e.target.children[0].id;
   playSound(mySound)
 }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="drum-machine" >
        <div id="display">
        {drumPadObj.map(({keyCode, keyTrigger, url}) => {
          return(
            <div className="drum-pad" onClick={sii} key={keyCode} >
            <audio  controls id={keyCode} src={url} />
            {keyTrigger}
            </div>
            )
        })}
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
