const Home = () => {
    
    return (
        <div className="about-page">  
            <div className="home-header">
                <div className="typed-container home-typed-container">
                    <h1 className='typed-out'>
                        Hi, I'm Eli Morse!
                    </h1>
                    <h1 className='static'>
                        Hi, I'm Eli Morse!
                    </h1>
                </div>
            </div>
            <div className="home-container">
                <div className="home-left">
                    <p className="home-text">
                        I am a Software Engineering student at the University of Central Oklahoma
                        with an expected graduation date of May 2023.
                    </p>
                    <p>
                        My inquisitive nature leads me to spending much of my free time learning about 
                        various topics and developing new skills. A few of my interests include: computer science,
                        linguistics, mathematics, music, and technology.
                    </p>
                    <p>
                        As a well-organized, self-driven, and team-oriented individual, I pride myself on problem
                        solving skills and attention to detail.
                    </p>
                </div>
                <div className="home-right">
                    <ul className="experience-list">
                        <li>
                            Previous:
                            <ul className="experience-sublist">
                                <li>
                                    Java / C++ / JS / HTML / CSS / React / SQL / .NET Core
                                </li>
                                <li>
                                    Data Structures & Algorithms
                                </li>
                                <li>
                                    Object Oriented Programming
                                </li>
                                <li>
                                    Software Engineering / Design Patterns
                                </li>
                                <li>
                                    Relational Database
                                </li>
                            </ul>
                        </li>
                        <li>
                            Upcoming: 
                            <ul className="experience-sublist">
                                <li>
                                    Python / Flutter
                                </li>
                                <li>
                                    Algorithms for Machine Learning
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
};
  
export default Home;