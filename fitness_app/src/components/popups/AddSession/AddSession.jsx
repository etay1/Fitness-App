import React from "react";
import styles from "../Popups.module.css";
import SessionForm from "../../forms/SessionForm";

function AddSession({ isAddSessionPopupOpen, closeAddSessionPopup }) {
	return (
		<div className={`modal ${isAddSessionPopupOpen ? "active" : ""}`}>
			<div className='overlay'>
				<div className='container'>
					<div>
						<h1 className={styles["title-form"]}>Add Session</h1>
						<SessionForm closeAddSessionPopup={closeAddSessionPopup} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddSession;
