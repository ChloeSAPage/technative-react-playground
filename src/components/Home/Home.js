import React, { useState } from "react";
import styles from "./Home.module.css";
import { DUCKS } from "../../assets/data";
import quack from "../../assets/Quack.mp3";

function PrevButton({ previous }) {
    return <button onClick={previous}>Previous</button>;
}

function NextButton({ next }) {
    return <button onClick={next}>Next</button>;
}

function QuackButton(){
    function playQuack(){
        const audio = new Audio(quack)
        audio.play();
    }

    return <button onClick={playQuack}>QUACK</button>
}

function Home() {
    const [index, setIndex] = useState(0);

    function previous() {
        if (index === 0) {
            setIndex(DUCKS.length - 1);
        } else {
            setIndex(index - 1);
        }
    }

    function next() {
        if (index === DUCKS.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    return (
        <div className={styles.wrapper}>
            <h2>Home</h2>
            <img src={DUCKS[index]} alt="Mallard" className={styles.img} />
            <div>
                <PrevButton index={index} previous={previous} />
                <QuackButton />
                <NextButton index={index} next={next} />
            </div>
        </div>
    );
}

export default Home;
