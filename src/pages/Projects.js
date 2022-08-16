import MyCard  from "../components/MyCard.js";

import Sudoku from "../assets/sudoku.png";
import Life from "../assets/dna.png";
import Github from "../assets/github.png";
import TicTacToe from "../assets/tic-tac-toe.png";
import Internet from "../assets/internet.png";

const Projects = () => {

    const generatorLanguages = ["JS", "HTML", "CSS", "Bootstrap"];
    const searchLanguages = ["Angular", "DotNet", "TS", "HTML", "CSS", "Bootstrap"]
    const conwaysLanguages = ["JS","HTML", "CSS", "Bootstrap"];
    const tictactoeLanguages = ["Java"];
    const thispageLanguages = ["React", "JS", "HTML", "CSS"];

    const generatorDescription = "A sudoku generator with the ability to check answers when completed.";
    const searchDescription = "A university project for searching github repos and users.";
    const conwaysDescriptioin = "My first JS project. Implements Conway's Game of Life algorithm with simple UI.";
    const tictactoeDescription = "A group University Project implementing 5x5 TicTacToe of which I worked on the AI.";
    const thispageDescription = "My introduction into the lovely world of React!";

    return (
        <>
        <div className="card-group-header">
            <div className="typed-container projects-typed-container">
                <h2 className="typed-out long-message">
                    Click each card to visit!
                </h2>
                <h2 className="static">
                    Click each card to visit!
                </h2>
            </div>
        </div>
        <div className="card-group">
            <MyCard 
                project="Sudoku Generator" 
                image={Sudoku}
                link="https://esromgile.github.io/sudoku-generator/"
                languages={generatorLanguages}
                description={generatorDescription}
                ></MyCard>
            <MyCard 
                project="Github Search" 
                image={Github}
                link="https://elimorse-project3.azurewebsites.net/"
                languages={searchLanguages}
                description={searchDescription}
                ></MyCard>
            <MyCard 
                project="Game of Life" 
                image={Life}
                link="https://esromgile.github.io/game-of-life/"
                languages={conwaysLanguages}
                description={conwaysDescriptioin}
                ></MyCard>
            <MyCard 
                project="5x5 Tic-Tac-Toe" 
                image={TicTacToe}
                link="https://github.com/EsromGile/Super-Tic-Tac-Toe"
                languages={tictactoeLanguages}
                description={tictactoeDescription}
                ></MyCard>
            <MyCard
                project="This React Page!"
                image={Internet}
                link="https://esromgile.github.io/"
                languages={thispageLanguages}
                description={thispageDescription}
                ></MyCard>
        </div>
        </>
    )
};
  
export default Projects;