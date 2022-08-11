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
                </div>
                <div>
                    <h1 className='static'>Hi, I'm Eli Morse!</h1>
                </div>
            </div>

            <div className="home-container">
                <div className="home-left">
                    {/* <h2 className='home-subheader'>Get To Know Me</h2>
                    <p className='home-text'> */}
                        //stuff goes here
                    {/* </p> */}
                </div>
                <div className="home-right">
                    {/* <h2 className='home-subheader'>Skills & Experience</h2>
                    <p className='home-text'> */}
                        //stuff goes here
                    {/* </p> */}
                </div>

            </div>
        </div>
    )
};
  
export default Home;