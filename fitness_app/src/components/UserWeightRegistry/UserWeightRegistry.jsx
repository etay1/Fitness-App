import React, { useEffect } from "react";
import Sidebar from "../SideBar/SideBar";
import { supabase } from "../../supabase/client";
import { useAuthStateListener } from "../../supabase/session";
import styles from "./UserWeightRegistry.module.css";
import { useModalState } from "../../hooks/useModalState";
import { useLocation } from "react-router-dom";
import AddUserWeight from "../AddUserWeight/AddUserWeight";

function UserWeightRegistry() {
  // Ensure that the session is initialized before using it
  const session = useAuthStateListener();

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const clickIdentifier = params.get("clickIdentifier");

  // Destructure the useModalState hook
  const {
    isOpen: isAddUserWeightModalOpen,
    openModal: openAddUserWeightModal,
    closeModal: closeAddUserWeightModal,
  } = useModalState(false);

  useEffect(() => {
    if (clickIdentifier === "adduserweight") {
      openAddUserWeightModal();
    }
  }, [clickIdentifier, openAddUserWeightModal]);
  // Display a loading state or redirect if the session is not available
  if (!session) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page">
      <div className="sidebar-container">
        {/* Pass supabase and session to Sidebar */}
        <Sidebar supabase={supabase} session={session} />
      </div>
      <div className="content">
        <div className={styles["user-weight-registry-header"]}>
          <h1 className={styles["title"]}>User Weight Registry</h1>
          <div className={styles["exercise-registry-buttons"]}>
            <button
              className={styles["add-button"]}
              onClick={() => openAddUserWeightModal()}
            >
              Add User Weight Entry
            </button>
          </div>
        </div>

        <AddUserWeight
          isAddUserWeightPopupOpen={isAddUserWeightModalOpen}
          closeAddUserWeightPopup={closeAddUserWeightModal}
          session={session}
        />
      </div>
    </div>
  );
}

export default UserWeightRegistry;
