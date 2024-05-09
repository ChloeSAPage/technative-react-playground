import React from "react";
import { useState } from "react";
import styles from "./form.module.css";

export default function Form() {
    const [input, setInput] = useState()
    const [isHidden, setIsHidden] = useState(true);

    function handleChange(event) {
        setInput(event.target.value);
        event.target.value === "" ? setIsHidden(true) : setIsHidden(false)
        return;
    }

    return (
        <>
            <input placeholder="Find a Duck..." onChange={handleChange}/>
            <p className={isHidden ? styles.hidden : ""}>You typed: {input} </p>
        </>
    )
}