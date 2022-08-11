import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faRing, faGlasses } from '@fortawesome/free-solid-svg-icons';

const Home = () => {

    let margin = 20;
    let iconFontSize = 40;
    
    return (
        <div className="about-page">  
            <div className="home-header">
                <div>
                    <h1 className='typed-out'>Hi, I'm Eli Morse!</h1>
                    {/* <span className="hand-waving"></span> */}
                </div>
            </div>
            <div className="home-container container-left">
                <h2 className="home-container-header header-left">
                    Student<FontAwesomeIcon style={{marginLeft: margin, fontSize: iconFontSize}} icon={faBook}></FontAwesomeIcon>
                </h2>
                <p className="home-container-text">
                    I am a Senior Software Engineering Student at the University of Oklahoma and set to graduate in May 2023.
                </p>
            </div>
            <div className="home-container container-right">
                <h2 className="home-container-header header-left hidden">
                    Spouce<FontAwesomeIcon style={{marginLeft: margin, fontSize: iconFontSize}} icon={faRing}></FontAwesomeIcon>
                </h2>
                <p className="home-container-text">
                    //text goes here//
                </p>
                <h2 className="home-container-header header-right">
                    Spouce<FontAwesomeIcon style={{marginLeft: margin, fontSize: iconFontSize}} icon={faRing}></FontAwesomeIcon>
                </h2>
            </div>
            <div className="home-container container-left">
                <h2 className="home-container-header header-left">
                    Nerd<FontAwesomeIcon style={{marginLeft: margin, fontSize: iconFontSize}} icon={faGlasses}></FontAwesomeIcon>
                </h2>
                <p className="home-container-text">
                    //text goes here//
                </p>
            </div>
        </div>
    )
};
  
export default Home;