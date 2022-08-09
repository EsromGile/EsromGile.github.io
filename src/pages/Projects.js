import MyCard  from "../components/MyCard.js";

import Sudoku from "../assets/sudoku.png";
import Life from "../assets/dna.png";
import Github from "../assets/github.png";
import TicTacToe from "../assets/tic-tac-toe.png";
import Internet from "../assets/internet.png";

const Projects = () => {

    const generatorLanguages = ["Vanilla", "HTML", "CSS"];
    const searchLanguages = ["Angular", "DotNet", "HTML", "CSS"]
    const conwaysLanguages = ["Vanilla","HTML", "CSS"];
    const tictactoeLanguages = ["Java"];
    const thispageLanguages = ["React", "HTML", "CSS"];

    return (
        <>
        <span className="card-group-header">
            Click each card to visit!
        </span>
        <div className="card-group">
            <MyCard 
                project="Sudoku Generator" 
                image={Sudoku}
                link="https://esromgile.github.io/sudoku-generator/"
                languages={generatorLanguages}
                ></MyCard>
            <MyCard 
                project="Github Search" 
                image={Github}
                link="https://elimorse-project3.azurewebsites.net/"
                languages={searchLanguages}
                ></MyCard>
            <MyCard 
                project="Game of Life" 
                image={Life}
                link="https://esromgile.github.io/game-of-life/"
                languages={conwaysLanguages}
                ></MyCard>
            <MyCard 
                project="5x5 Tic-Tac-Toe" 
                image={TicTacToe}
                link="https://github.com/EsromGile/Super-Tic-Tac-Toe"
                languages={tictactoeLanguages}
                ></MyCard>
            <MyCard
                project="This React Page!"
                image={Internet}
                link="https://esromgile.github.io/"
                languages={thispageLanguages}
                ></MyCard>
        </div>
        </>
    )
};
  
export default Projects;