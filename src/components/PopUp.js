import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export default function PopUp(){

    let size = 14;

    return(
        <>
            <Popup trigger=
                {<button className="attributes">
                    Attributes 
                    <FontAwesomeIcon style={{marginLeft: 5, marginTop: 3}} icon={faInfoCircle}></FontAwesomeIcon> 
                </button>}
            position="top right">
                <ul>
                    <li style={{fontSize: size}}><a href="https://www.flaticon.com/free-icons/profile" title="profile icons">Profile icons created by Prosymbols Premium - Flaticon</a></li>
                    <li style={{fontSize: size}}><a href="https://www.flaticon.com/free-icons/dna" title="dna icons">Dna icons created by Freepik - Flaticon</a></li>
                    <li style={{fontSize: size}}><a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Freepik - Flaticon</a></li>
                    <li style={{fontSize: size}}><a href="https://www.flaticon.com/free-icons/sudoku" title="sudoku icons">Sudoku icons created by Freepik - Flaticon</a></li>
                    <li style={{fontSize: size}}><a href="https://www.flaticon.com/free-icons/game" title="game icons">Game icons created by Freepik - Flaticon</a></li>
                    <li style={{fontSize: size}}><a href="https://www.flaticon.com/free-icons/internet" title="internet icons">Internet icons created by Freepik - Flaticon</a></li>
                </ul>
            </Popup>
        </>
    )
};
