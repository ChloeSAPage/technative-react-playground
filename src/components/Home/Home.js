import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { MALLARDS } from "../../assets/data";
import quack from "../../assets/Quack.mp3";

function PrevButton({ previous }) {
    return <button onClick={previous}>Previous</button>;
}

function NextButton({ next }) {
    return <button onClick={next}>Next</button>;
}

function QuackButton() {
    function playQuack() {
        const audio = new Audio(quack);
        audio.play();
    }

    return <button onClick={playQuack}>QUACK</button>;
}

function Home() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = startCarousel();
        return () => {
            clearInterval(interval);
        };
    }, []);

    function startCarousel() {
        setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % MALLARDS.length);
        }, 3000);
    }

    function previous({ interval }) {
        setIndex((prevIndex) => (prevIndex - 1 + MALLARDS.length) % MALLARDS.length);
    }

    function next({ interval }) {
        setIndex((prevIndex) => (prevIndex + 1) % MALLARDS.length);
    }

    return (
        <div className={styles.wrapper}>
            <h2>Home</h2>
            <img src={MALLARDS[index]} alt="Mallard" className={styles.img} />
            <div>
                <PrevButton index={index} previous={previous} />
                <QuackButton />
                <NextButton index={index} next={next} />
            </div>
        </div>
    );
}

export default Home;
