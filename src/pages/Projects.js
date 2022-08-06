import MyCard  from "../components/MyCard.js";

import Sudoku from "../assets/sudoku.png";
import Life from "../assets/game-of-life.gif";
import Github from "../assets/github-brands.svg";
import TicTacToe from "../assets/tic-tac-toe.png";
import Hand from "../assets/hand-point-up-solid.svg";

const Projects = () => {

    const generatorLanguages = ["Vanilla", "HTML", "CSS"];
    const searchLanguages = ["Angular", "DotNet", "HTML", "CSS"]
    const conwaysLanguages = ["Vanilla","HTML", "CSS"];
    const tictactoeLanguages = ["Java"];
    const thispageLanguages = ["React", "HTML", "CSS"];

    return (
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
                project="Conway's Game of Life" 
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
                project="This Page!"
                image={Hand}
                link={null}
                languages={thispageLanguages}
                ></MyCard>
        </div>
    )
};
  
export default Projects;