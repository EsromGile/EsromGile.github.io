import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faJsSquare, faReact, faHtml5, faCss3, faAngular} from '@fortawesome/free-brands-svg-icons';

const MyCard = (props) => {

    let spanFontSize = 16;

    return (
        <a className="card" href={props.link} target="_blank" rel="noreferrer">

            <h2 className='card-header'>{props.project}</h2>
            <div className="card-languages">
                <span style={{fontSize: spanFontSize}}>Tools:</span>
                {props.languages.map(language => {
                    switch (language) {
                        case "Vanilla": 
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
                            return <div>.NET</div>
                        default:
                            return <></>
                    }
                })}
            </div>
            <img className='card-img' src={props.image} alt="" width="200" height="200"/>
        </a>
    )
};
  
export default MyCard;