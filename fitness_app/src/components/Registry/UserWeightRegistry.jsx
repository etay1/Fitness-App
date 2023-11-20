import React, { useEffect } from "react";
import Sidebar from "../SideBar/SideBar";
import { supabase } from "../../supabase/client";
import { useAuthStateListener } from "../../supabase/session";
import styles from "./Registry.module.css";
import { useModalState } from "../../hooks/useModalState";
import AddUserWeight from "../AddUserWeight/AddUserWeight";

function UserWeightRegistry() {
  const session = useAuthStateListener();
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
        <button
          className={styles["add-button"]}
          onClick={() => openAddUserWeightModal()}
        >
          Add User Weight
        </button>
      </div>

      {/* <AddUserWeight
        isAddUserWeightPopupOpen={isAddUserWeightModalOpen}
        closeAddUserWeightPopup={closeAddUserWeightModal}
        session={session}
      /> */}
    </div>
  );
}

export default UserWeightRegistry;
