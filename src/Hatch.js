import React from 'react';
import { StyledHatch } from './HatchStyles';

// Funksjonal component

/**
 * Det ligger to divs opp på hverandre en framside og en bakside den siste diven visses('back').
 * Så egentlig visser vi baksiden, men den har en z-index på 1 og framsiden på 2 slik at kun framsiden visses i starten.
 * Når man trykker på luken vil open gå fra false til true. Og fronten roteres (front open kjøres) kun det css-en gjør.
 * Og back siden endrer z-verdien blir 2 slik at den visses over framsiden
 *
 */

/**
 * Tar inn objectet og fordeler properties
 *.front --> visser nummeret,  &.open --> flipper ruten
 *.back --> visser teksten og har z-verdi på 1, &.open--> gir z-verdi på 2 slik at den visses over
 */

const Hatch = ({ hatchData: { id, nr, text, img, open }, handleClick }) => (
  <StyledHatch background={img} onClick={() => handleClick(id)}>
    <div className={open ? 'front open' : 'front'}>
      <p>{nr}</p>
    </div>
    <div className={open ? 'back open' : 'back'}>
      <p>{text}</p>
    </div>
  </StyledHatch>
);

export default Hatch;
