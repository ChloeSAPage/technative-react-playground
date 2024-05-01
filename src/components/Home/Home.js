import React from "react";
import styles from "./Home.module.css";
import { DUCKS } from "../../assets/data";

function Home() {
    return (
        <div className={styles.wrapper}>
            <h2>Home</h2>
            <img
                src={DUCKS[2]}
                alt="Mallard"
            />
        </div>
    );
}

export default Home;
