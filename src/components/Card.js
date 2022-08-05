const Card = (props) => {
    return (
        <div className="card">
            <h2>{props.project}</h2>
            <img src={props.image} alt="" width="200" height="200"/>
            <p><a href={props.link}>Link</a></p>
            <ul className="card-languages">
                {props.languages.map(language => {
                    return <li>{language}</li>
                })}
            </ul>
        </div>
    )
};
  
export default Card;