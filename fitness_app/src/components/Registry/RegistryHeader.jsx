import React from "react";
import styles from "./ExerciseRegistry.module.css";

const RegistryHeader = ({ page_title, button_name, onClickFunc }) => {

	return (
		<div className={styles["exercise-registry-header"]}>
			<h1 className={styles["title"]}>{page_title}</h1>
			<div className={styles["exercise-registry-buttons"]}>
				<button className={styles["add-button"]} onClick={() => onClickFunc()}>
					{button_name}
				</button>
			</div>

		</div>
	);
};

export default RegistryHeader;
