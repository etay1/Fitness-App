import React from "react";
import styles from "../forms/form.module.css";

function Button({ text, type, onClick, className, disabled, style }) {
	return (
		<button
			className={`${styles["form-btn"]} ${className}`}
			onClick={onClick}
			type={type}
			disabled={disabled}
			style={style}
		>
			{text}
		</button>
	);
}
export default Button;
