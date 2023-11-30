import React from "react";
import CategoryToggle from "../../CategoryToggle/CategoryToggle";
import SubSessionForm from "../../forms/SubSessionForm";
import { useCategory } from "../../../hooks/useCategory";
import styles from "../Popups.module.css";

function AddSubSession({ isAddSubSessionPopupOpen, closeAddSubSessionPopup }) {
	const { category, changeCategory } = useCategory("strength");
	return (
		<div className={`modal ${isAddSubSessionPopupOpen ? "active" : ""}`}>
			<div className='overlay'>
				<div className='container'>
					<div>
						<h1 className={styles["title-form"]}>Add A Workout</h1>

						<CategoryToggle
							category={category}
							changeCategory={changeCategory}
						/>
						<SubSessionForm
							closeAddSubSessionPopup={closeAddSubSessionPopup}
							category={category}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddSubSession;
