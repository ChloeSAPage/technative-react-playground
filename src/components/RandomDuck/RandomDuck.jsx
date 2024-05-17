import { useDispatch, useSelector } from "react-redux";
import styles from "./RandomDuck.module.css";
import { fetchDuckImage, selectDuckImage } from "./RandomDuckSlice";

function RandomDuck() {
    const duckImage = useSelector(selectDuckImage);
    const dispatch = useDispatch(); // dispatch thunk

    //console.log("Duck Image URL:", duckImage);

    return (
        <div className={styles.wrapper}>
            <h2>Get a random duck</h2>
            <img src={duckImage} alt="Ducks" />
            <button
                className={styles.button-85}
                onClick={() => dispatch(fetchDuckImage())}
            >
                Get new duck
            </button>
        </div>
    );
}

export default RandomDuck;
