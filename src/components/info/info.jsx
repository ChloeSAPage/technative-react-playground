import styles from "./info.module.css";
import { DUCKS } from "../../assets/data";

function Info() {
    return (
        <div className={styles.wrapper}>
            <h2>Other Ducks</h2>
            <p>Other Ducks are pretty too</p>
            <DuckSection DUCKS={DUCKS} />
        </div>
    );
}

function DuckInfo({ DUCK }) {
    return (
        <div className={styles.duckcontainer}>
            <div className={styles.ducks}>
                <h3>{DUCK.name}</h3>
                <img src={DUCK.image} alt={DUCK.name}></img>
            </div>
            <p className={styles.description}>{DUCK.description}</p>
        </div>
    );
}

function DuckSection({ DUCKS }) {
    return DUCKS.map((duck) => <DuckInfo key={duck.name} DUCK={duck} />);
}

export default Info;
