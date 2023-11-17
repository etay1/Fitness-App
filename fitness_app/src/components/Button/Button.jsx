import React from "react";
import styles from "../Form/form.module.css";

function Button({text, onClick }) {
    return (
        <button className = {styles["form-btn"]}  onClick={onClick}>
            {text}
        </button>
    );
}
export default Button;