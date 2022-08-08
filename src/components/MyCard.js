import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faJsSquare, faReact, faHtml5, faCss3, faAngular} from '@fortawesome/free-brands-svg-icons';

const MyCard = (props) => {

    let link = <></>;
    if (props.link != null) {
        link = 
        <a className='card-button-container' href={props.link} target="_blank" rel="noreferrer">
            <button className='card-button'>Check it out!</button>
        </a>
    }

    return (
        <div className="card">

            <h2 className='card-header'>{props.project}</h2>
            <div className="card-languages">
                <span class="card-language-span">Tools:</span>
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
            {link}
        </div>
    )
};
  
export default MyCard;