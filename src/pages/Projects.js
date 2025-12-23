import MyCard from "../components/MyCard.js";

import Calculus from "../assets/calculus.png"
import Allocator from "../assets/generous.png"
import Capstone from "../assets/stars.png"
import Sudoku from "../assets/sudoku.png";
import Life from "../assets/dna.png";
import Github from "../assets/github.png";

const Projects = () => (
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
                project="C Allocators"
                image={Allocator}
                link={"https://github.com/EsromGile/em-allocators"}
                languages={["C"]}
                description={"A small library of custom C general purpose allocators."}
            ></MyCard>
            <MyCard
                project="Sudoku Generator"
                image={Sudoku}
                link="https://esromgile.github.io/sudoku-generator/"
                languages={["JS", "HTML", "CSS", "Bootstrap"]}
                description={"A sudoku generator with the ability to check answers when completed."}
            ></MyCard>
            <MyCard
                project="Game of Life"
                image={Life}
                link="https://esromgile.github.io/game-of-life/"
                languages={["JS", "HTML", "CSS", "Bootstrap"]}
                description={"My first JS project. Implements Conway's Game of Life algorithm with simple UI."}
            ></MyCard>
            <MyCard
                project="Capstone Project"
                image={Capstone}
                link={"https://github.com/uco-capstone/capstone"}
                languages={["Dart", "Flutter"]}
                description={"A customizable to-do application with reminders and a cosmetic rewards system."}
            ></MyCard>
            <MyCard
                project="Calculus Notes"
                image={Calculus}
                link={"https://esromgile.github.io/calcnotes/calc-notes.html"}
                languages={["LaTeX"]}
                description={"A collection of some of my calculus notes written in LaTeX."}
            >/</MyCard>
            <MyCard
                project="This React Page!"
                image={Github}
                link="https://github.com/EsromGile/EsromGile.github.io"
                languages={["React", "JS", "HTML", "CSS"]}
                description={"A responsive personal page built with React.js."}
            ></MyCard>
        </div>
    </>
);

export default Projects;