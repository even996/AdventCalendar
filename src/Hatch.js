import React from 'react';
import { StyledHatch} from './HatchStyles';

/**
 * Funksjonal component
 * Hatchen henter inn dataen og bestemmer hvilken div som skal kjøres
 * Ut fra hvem som er åpen og ikke
 * @param {*} param0 
 */

 // Strucktur out the properties --> destruckter tar inn objectet og fordeler props
 // setter forskjellige navn på klassen avhenig av om de er åpen eller ikke
 // To class Name på hver div for å si at den skal orderes på open boolean. 
 // .front --> visser nummeret,  &.open --> flipper ruten
 // .back --> visser teksten og har z-verdi på 1, &.open--> gir z-verdi på 2 slik at den visses over
const Hatch = ({ hatchData : {id, nr, text, img, open}, handleClick}) => (
    <StyledHatch background={img} onClick={() => handleClick(id)}>
        <div className={open ? "front open" : "front"}>
            <p>{nr}</p>
        </div>
        <div className={open ? "back open" : "back"}>
            <p>{text}</p>
        </div>
    </StyledHatch>

)

export default Hatch;