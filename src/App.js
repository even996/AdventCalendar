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
  // må bruke setHatches for å oppdatere arrayet når noe slettes eller bytter side.
  const [hatches, setHatches] = useState([]);
  const [christmas, setChristmas] = useState('');
  const [clikedHatch, setClickedHatch] = useState(true);

  // sjekk om den finnes en kalender inne på localStorage hvis ikke lages det en kalender
  // skjer kun når den refreser -->  []
  useEffect(() => {
    const calendar = localStorage.calendar
      ? JSON.parse(localStorage.calendar)
      : createCalendar();
    setHatches(calendar);
  }, []);

  //Legger endringer i lukene i localStorage
  // skjer hver gang lukene oppdateres --> [hatches]
  useEffect(() => {
    hatches.length && localStorage.setItem('calendar', JSON.stringify(hatches));
  }, [hatches]);

  // Denne håndtere flip funksjonen
  const handleFlipHatch = (id) => {
    // if setningen gjør at man kan snu et element om gangen. Blir endret til false når den kjører og endret til true
    // når remove methoden er ferdig.
    if (clikedHatch) {
      setClickedHatch(false);
      // finner hatchen som iden tilhører ...(spread operator) for å hente variablene og å kun endre open til true.
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

  // soundPlay brukes når man trykker på en av lukkene eller når alle er åpne da sendes en lydfil til denne funksjonen
  // som spilles av.

  const soundPlay = (src) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
  };

  const remover = (id) => {
    // filtrer vekk denne ene med iden
    const newList = hatches.filter((hatch) => hatch.id !== id);
    // Timeout funksjon på 4 sec slik at man kan lese kortet før det slettes.
    setTimeout(() => {
      setHatches(newList);
      if (hatches === undefined || hatches.length === 1) {
        // hvis alle er borte skal Merry Christmas kjøre.
        setChristmas('Merry Christmas!!!');
        soundPlay(
          'https://freesound.org/data/previews/322/322275_5260872-lq.mp3'
        );
        // Localstorage blir da fjernet slik at vi kan kjøre appen på nytt.
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
