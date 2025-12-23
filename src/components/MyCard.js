import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faJsSquare, faReact, faHtml5, faCss3, faAngular, faTex } from '@fortawesome/free-brands-svg-icons';

import Latex from "../assets/latex_logo.png";

import { TypescriptPlainIcon, DotnetcorePlainIcon, BootstrapPlainIcon, CPlainIcon, DartPlainIcon, FlutterPlainIcon } from 'react-devicons';

const MyCard = (props) => {

    let color = "black";
    return (
        <a className="card" href={props.link} target="_blank" rel="noreferrer">

            <h2 className='card-header'>{props.project}</h2>
            <div className="card-languages">
                <span style={{ fontSize: 16 }}>Tools:</span>
                {props.languages.map(language => {
                    switch (language) {
                        case "JS":
                            return <div><FontAwesomeIcon icon={faJsSquare}></FontAwesomeIcon></div>
                        case "Java":
                            return <div><FontAwesomeIcon icon={faJava}></FontAwesomeIcon></div>
                        case "React":
                            return <div><FontAwesomeIcon icon={faReact}></FontAwesomeIcon></div>
                        case "HTML":
                            return <div><FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon></div>
                        case "CSS":
                            return <div><FontAwesomeIcon icon={faCss3}></FontAwesomeIcon></div>
                        case "Angular":
                            return <div><FontAwesomeIcon icon={faAngular}></FontAwesomeIcon></div>
                        case "DotNet":
                            return <div><DotnetcorePlainIcon color={color} /></div>
                        case "TS":
                            return <div><TypescriptPlainIcon color={color} /></div>
                        case "Bootstrap":
                            return <div><BootstrapPlainIcon color={color} /></div>
                        case "C":
                            return <div><CPlainIcon color={color} /></div>
                        case "Dart":
                            return <div><DartPlainIcon color={color} /></div>
                        case "Flutter":
                            return <div><FlutterPlainIcon color={color} /></div>
                        case "LaTeX":
                            return <div><FontAwesomeIcon icon={faTex} /></div>
                        default:
                            return <></>
                    }
                })}
            </div>
            <img className='card-img' src={props.image} alt="" width="200" height="200" />
            <p className='card-description'>{props.description}</p>
        </a>
    )
};

export default MyCard;