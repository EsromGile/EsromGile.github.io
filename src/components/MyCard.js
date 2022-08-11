import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faJsSquare, faReact, faHtml5, faCss3, faAngular} from '@fortawesome/free-brands-svg-icons';

import { TypescriptPlainIcon, DotnetcorePlainIcon } from 'react-devicons';

const MyCard = (props) => {

    let spanFontSize = 16;
    let color = "black";

    return (
        <a className="card" href={props.link} target="_blank" rel="noreferrer">

            <h2 className='card-header'>{props.project}</h2>
            <div className="card-languages">
                <span style={{fontSize: spanFontSize}}>Tools:</span>
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
                            return <div><DotnetcorePlainIcon color={color}/></div>
                        case "TS":
                            return <div><TypescriptPlainIcon color={color}/></div>
                        default:
                            return <></>
                    }
                })}
            </div>
            <img className='card-img' src={props.image} alt="" width="200" height="200"/>
            <p className='card-description'>{props.description}</p>
        </a>
    )
};
  
export default MyCard;