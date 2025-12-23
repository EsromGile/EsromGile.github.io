import LanguageDict from "./LanguageDict";

const ProjectCard = (props) => (
    <a className="card" href={props.link} target="_blank" rel="noreferrer">
        <h2 className='card-header'>{props.project}</h2>
        <div className="card-languages">
            <span style={{ fontSize: 16 }}>Tools:</span>
            {props.languages.map(language => <LanguageDict language={language} />)}
        </div>
        <img className='card-img' src={props.image} alt="" width="200" height="200" />
        <p className='card-description'>{props.description}</p>
    </a>
);

export default ProjectCard;