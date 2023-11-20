import React, { useEffect } from "react";
import Sidebar from "../SideBar/SideBar";
import { supabase } from "../../supabase/client";
import styles from "./Registry.module.css";
import { useModalState } from "../../hooks/useModalState";
import AddUserWeight from "../AddUserWeight/AddUserWeight";
import { useAuthStateListener } from "../../supabase/session";

function UserWeightRegistry({ session }) {
  const {
    isOpen: isAddUserWeightModalOpen,
    openModal: openAddUserWeightModal,
    closeModal: closeAddUserWeightModal,
  } = useModalState(false);

  return (
    <div className="page">
      <div className="sidebar-container">
        <Sidebar supabase={supabase} session={session} />
      </div>

      <div className="content">
        <div className={styles["registry-content"]}>
          <div className={styles["registry-header"]}>
            <h1 className={styles["registry-title"]}>User Weight Registry</h1>
            <div>
              <button
                className={styles["add-button"]}
                onClick={() => openAddUserWeightModal()}
              >
                Add User Weight
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <AddUserWeight
        isAddUserWeightPopupOpen={isAddUserWeightModalOpen}
        closeAddUserWeightPopup={closeAddUserWeightModal}
        session={session}
      /> */}
    </div>
  );
}

export default UserWeightRegistry;
