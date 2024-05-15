import styles from "./DuckTracker.module.css";
import Counter from "../Counter/Counter";

function DuckTracker() {
    return (
        <div className={styles.wrapper}>
            <h2>Track Your Ducks</h2>
            <img src="images/mallardsonarock.jpg" alt="Mallard in the rain" />
            <Counter />
        </div>
    );
}

export default DuckTracker;
