import React from "react";
import styles from "../styles/Registry.module.css";

const RegistryHeader = ({ page_title, button_name, onClickFunc }) => {

	return (
		<div className={styles["registry-header"]}>
			<h1 className={styles["registry-title"]}>{page_title}</h1>
			<div className={styles["registry-buttons"]}>
				<button className={styles["add-button"]} onClick={() => onClickFunc()}>
					{button_name}
				</button>
			</div>

		</div>
	);
};

export default RegistryHeader;
