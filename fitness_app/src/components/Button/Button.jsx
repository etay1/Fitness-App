import React from "react";
import styles from "../forms/form.module.css";

function Button({ text, type, onClick, className, disabled }) {
	return (
		<button
			className={`${styles["form-btn"]} ${className}`}
			onClick={onClick}
			type={type}
			disabled={disabled}
		>
			{text}
		</button>
	);
}
export default Button;
