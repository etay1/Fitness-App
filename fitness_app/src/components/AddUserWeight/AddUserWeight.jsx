import React from "react";
import styles from "../Form/form.module.css";
import UserWeightForm from "../Form/UserWeightForm";

function AddUserWeight({ isAddUserWeightPopupOpen, closeAddUserWeightPopup }) {
	return (
		<div className={`modal ${isAddUserWeightPopupOpen ? "active" : ""}`}>
			<div className='overlay'>
				<div className='container'>
					<div>
						<h1 className={styles["title-form"]}>Record Weight</h1>
						<UserWeightForm closeAddUserWeightPopup={closeAddUserWeightPopup} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddUserWeight;
