import { useDispatch, useSelector } from "react-redux";
import styles from "./RandomDuck.module.css";
import { fetchDuckImage } from "./RandomDuckSlice";

function RandomDuck() {
    const duckImage = useSelector((state) => state.randomDuck.imageURL);
    const dispatch = useDispatch();

    return (
        <div className={styles.wrapper}>
            <h2>Get a random duck</h2>
            <img src={duckImage} alt="Ducks" />
            <button
                className={styles.button}
                onClick={() => dispatch(fetchDuckImage())}
            >
                Get new duck
            </button>
        </div>
    );
}

export default RandomDuck;
