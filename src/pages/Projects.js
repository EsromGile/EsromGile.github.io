import Card  from "../components/Card.js";

import Sudoku from "../assets/sudoku.png";
import Life from "../assets/game-of-life.gif";
import Github from "../assets/github-brands.svg";
import TicTacToe from "../assets/tic-tac-toe.png";
import Hand from "../assets/hand-point-up-solid.svg";

const Projects = () => {

    const generatorLanguages = ["Vanilla JS", "HTML", "CSS"];
    const searchLanguages = ["Angular TS", "C#", "HTML", "CSS"]
    const conwaysLanguages = ["Vanilla JS","HTML", "CSS"];
    const tictactoeLanguages = ["Java"];
    const thispageLanguages = ["React JS", "HTML", "CSS"];

    return (
        <div className="card-group">
            <Card 
                project="Sudoku Generator" 
                image={Sudoku}
                link="https://esromgile.github.io/sudoku-generator/"
                languages={generatorLanguages}
            ></Card>
            <Card 
                project="Github Search" 
                image={Github}
                link="https://elimorse-project3.azurewebsites.net/"
                languages={searchLanguages}
            ></Card>
            <Card 
                project="Conway's Game of Life" 
                image={Life}
                link="https://esromgile.github.io/game-of-life/"
                languages={conwaysLanguages}
            ></Card>
            <Card 
                project="5x5 Tic-Tac-Toe" 
                image={TicTacToe}
                link="https://github.com/EsromGile/Super-Tic-Tac-Toe"
                languages={tictactoeLanguages}
            ></Card>
            <Card
                project="This Page!"
                image={Hand}
                link={null}
                languages={thispageLanguages}
            ></Card>
        </div>
    )
};
  
export default Projects;