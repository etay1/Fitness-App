import React from "react";
//import "./utils.Module.css";

function Button({text, onClick }) {
    return (
        <button className = "form-btn"  onClick={onClick}>
            {text}
        </button>
    );
}
export default Button;
