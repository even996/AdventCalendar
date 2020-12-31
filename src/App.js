import React, {useState, useEffect} from "react";
import {HatchGrid} from './AppStyles';
import {createCalendar} from './HatchArray';
import Hatch from './Hatch';
import {Howl} from 'howler';
import './App.css';

/**Brukt howler for å lage lydeffekter, gratis lydeffekter fra freesound.org
 * https://github.com/goldfire/howler.js#documentation
 * https://freesound.org/data/previews/264/264981_3370213-lq.mp3
 * https://freesound.org/data/previews/322/322275_5260872-lq.mp3
 */




function App() {


  // UseStates for å endre variabler i browseren.
  const [hatches, setHatches] = useState([]);
  const [christmas, setChristmas] = useState("");

  
  // sjekk om den finnes en kalender inne på localStorage hvis ikke lages det en kalender
  // skjer kun i starten når den laster inn 
  useEffect(() => {
    const calendar = localStorage.calendar
      ? JSON.parse (localStorage.calendar)
      : createCalendar();
    setHatches(calendar);
  }, []);


  //Legger endringer i lukene i localStorage
  useEffect(() => {
    hatches.length && localStorage.setItem('calendar', JSON.stringify(hatches));
  },[hatches]);

  // Sjekker om alle lukene er åpnet da skal scenen byttes.
  // Ønsket å ta funksjonen ut med fikk en error på det. At den ikke var i bruk når den var utenfor
  //Ønsket å bruke clear på hatchene men det funka ikke så måtte slette de en etter en.
  useEffect(() =>{
    const openHatches = hatches.filter(hatch => hatch.open === true);
    if(openHatches.length >= 24){
      setTimeout(() => {
        const newList = hatches.filter(hatch => hatch.open === false);
        setChristmas("Merry Christmas!!!");
        soundPlay('https://freesound.org/data/previews/322/322275_5260872-lq.mp3')
        setHatches(newList);
        localStorage.clear();
      }, 4000);

    }
    
}, [hatches]);

  // Denne håndtere flip funksjonen
  // finner hatchen som iden tilhører ...(spread operator) for å hente variablene og kun endre open.
  //!hatch.open(denne vil gjøre det omendt) returner (: hatchen)

  const handleFlipHatch = id => {
    const updatedHatches = hatches.map(hatch =>
        hatch.id === id ? {...hatch, open: !hatch.open} : hatch
      );
      soundPlay('https://freesound.org/data/previews/264/264981_3370213-lq.mp3');
      setHatches(updatedHatches);
  };

  // soundPLay brukes når man trykker på en av lukkene eller når alle er åpne da sendes en lydfil til denne funksjonen
  // som spilles av.
  
  const soundPlay = (src) =>{
    const sound = new Howl({
      src,
      html5:true
    })
    sound.play();
  }
    
  return (
    <>
    <h1>{christmas}</h1> 
    <HatchGrid>
    {hatches.map (hatch => 
    <Hatch key={hatch.id}
    hatchData = {hatch}
    handleClick={handleFlipHatch}
    />)}
    </HatchGrid>
    </>
  );
}

export default App;
