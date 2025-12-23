import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const FONT_SIZE = 14;

const AttributesButton = () => (
    <button className="attributes">
        Attributes
        <FontAwesomeIcon style={{ marginLeft: 5, marginTop: 3 }} icon={faInfoCircle}></FontAwesomeIcon>
    </button>
);

const Attributes = () => (
    <Popup
        position="top right"
        trigger={AttributesButton}
    >
        <span style={{ padding: 8 }}>Images provided by: </span>
        <ul>
            <li style={{ fontSize: FONT_SIZE }}><a href="https://www.flaticon.com/free-icons/dna" title="dna icons">Dna icons created by Freepik - Flaticon</a></li>
            <li style={{ fontSize: FONT_SIZE }}><a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Freepik - Flaticon</a></li>
            <li style={{ fontSize: FONT_SIZE }}><a href="https://www.flaticon.com/free-icons/sudoku" title="sudoku icons">Sudoku icons created by Freepik - Flaticon</a></li>
            <li style={{ fontSize: FONT_SIZE }}><a href="https://www.flaticon.com/free-icons/game" title="game icons">Game icons created by Freepik - Flaticon</a></li>
            <li style={{ fontSize: FONT_SIZE }}><a href="https://www.flaticon.com/free-icons/internet" title="internet icons">Internet icons created by Freepik - Flaticon</a></li>
            <li style={{ fontsize: FONT_SIZE }}><a href="https://www.flaticon.com/free-icons/rating" title="rating icons">Rating icons created by Muhajir - Flaticon</a></li>
            <li style={{ fontsize: FONT_SIZE }}><a href="https://www.flaticon.com/free-icons/charity" title="charity icons">Charity icons created by Freepik - Flaticon</a></li>
            <li style={{ fontsize: FONT_SIZE }}><a href="https://www.flaticon.com/free-icons/calculus" title="calculus icons">Calculus icons created by Freepik - Flaticon</a></li>
        </ul>
    </Popup>
);

export default Attributes;
