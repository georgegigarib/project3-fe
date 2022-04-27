import {useState} from 'react';

const Audio = ({drumPadObj}) => {

    document.addEventListener('keydown', handleKeyPress);

    const [som, setSom] = useState('');

    function handleKeyPress(event){
     if (drumPadObj.some((key) => {
         return key.keyCode === event.keyCode;
     })){
       playSound(event.key.toUpperCase());
     }
    }
    function playSound(key){
     const sound = document.getElementById(key);
     sound.play();
     var si = drumPadObj.filter((keyfind) =>{
            return keyfind.keyTrigger === key
     })
     setSom(si[0].id);
     sound.currentTime = 0;
    }
    function sii(e){
      var mySound = e.target.children[0].id;
      console.log(mySound);
      playSound(mySound);
    }

return(

    <div id="drum-machine" >
    <div id="display">{som}</div>
   { drumPadObj.map(({keyCode, keyTrigger, url, id}) =>
          <div className="drum-pad" onClick={sii} key={keyCode}>
          <audio className="clip" controls id={keyTrigger} src={url} />
          {keyTrigger}
          </div>)}
          </div>
          )
}

export default Audio;
