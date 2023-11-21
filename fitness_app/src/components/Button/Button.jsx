import React from "react";
import styles from "../Form/form.module.css";

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
