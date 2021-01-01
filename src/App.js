import React, { useState, useEffect } from 'react';
import { HatchGrid } from './AppStyles';
import { createCalendar } from './HatchArray';
import Hatch from './Hatch';
import { Howl } from 'howler';
import './App.css';

/**Brukt howler for å lage lydeffekter, gratis lydeffekter fra freesound.org
 * https://github.com/goldfire/howler.js#documentation
 * https://freesound.org/data/previews/264/264981_3370213-lq.mp3
 * https://freesound.org/data/previews/322/322275_5260872-lq.mp3
 */

function App() {
  // UseStates for å endre variabler i browseren.
  const [hatches, setHatches] = useState([]);
  const [christmas, setChristmas] = useState('');
  const [clikedHatch, setClickedHatch] = useState(true);

  // sjekk om den finnes en kalender inne på localStorage hvis ikke lages det en kalender
  // skjer kun i starten når den laster inn
  useEffect(() => {
    const calendar = localStorage.calendar
      ? JSON.parse(localStorage.calendar)
      : createCalendar();
    setHatches(calendar);
  }, []);

  //Legger endringer i lukene i localStorage
  useEffect(() => {
    hatches.length && localStorage.setItem('calendar', JSON.stringify(hatches));
  }, [hatches]);

  // Sjekker om alle lukene er åpnet da skal scenen byttes.
  // Ønsket å ta funksjonen ut med fikk en error på det. At den ikke var i bruk når den var utenfor
  //Ønsket å bruke clear på hatchene men det funka ikke så måtte slette de en etter en.

  // Denne håndtere flip funksjonen
  // finner hatchen som iden tilhører ...(spread operator) for å hente variablene og kun endre open.
  //!hatch.open(denne vil gjøre det omendt) returner (: hatchen)

  const handleFlipHatch = (id) => {
    if (clikedHatch) {
      setClickedHatch(false);

      const updatedHatches = hatches.map((hatch) =>
        hatch.id === id ? { ...hatch, open: true } : hatch
      );
      soundPlay(
        'https://freesound.org/data/previews/264/264981_3370213-lq.mp3'
      );
      setHatches(updatedHatches);
      remover(id);
    }
  };

  // soundPLay brukes når man trykker på en av lukkene eller når alle er åpne da sendes en lydfil til denne funksjonen
  // som spilles av.

  const soundPlay = (src) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
  };

  const remover = (id) => {
    const newList = hatches.filter((hatch) => hatch.id !== id);
    setTimeout(() => {
      setHatches(newList);
      if (hatches === undefined || hatches.length === 1) {
        // array empty or does not exist
        setChristmas('Merry Christmas!!!');
        soundPlay(
          'https://freesound.org/data/previews/322/322275_5260872-lq.mp3'
        );
        localStorage.clear();
      }
      setClickedHatch(true);
    }, 4000);
  };

  return (
    <>
      <h1>{christmas}</h1>
      <HatchGrid>
        {hatches.map((hatch) => (
          <Hatch
            key={hatch.id}
            hatchData={hatch}
            handleClick={handleFlipHatch}
          />
        ))}
      </HatchGrid>
    </>
  );
}

export default App;
