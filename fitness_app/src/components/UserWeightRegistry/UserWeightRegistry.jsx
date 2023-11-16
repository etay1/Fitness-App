import React, { useEffect } from "react";
import Sidebar from "../SideBar/SideBar";
import { supabase } from "../../supabase/client";
import { useAuthStateListener } from "../../supabase/session";
import styles from "./UserWeightRegistry.module.css";
import { useModalState } from "../../hooks/useModalState";
import { useLocation } from "react-router-dom";
import AddUserWeight from "../AddUserWeight/AddUserWeight";

function UserWeightRegistry() {
  const session = useAuthStateListener();
  // const location = useLocation();
  // const params = new URLSearchParams(location.search);
  // var clickIdentifier = params.get('clickIdentifier');

  // const {
  //   isOpen: isAddUserWeightModalOpen,
  //   openModal: openAddUserWeightModal,
  //   closeModal: closeAddUserWeightModal,
  // } = useModalState(false);

  // useEffect(() => {
  //   if (clickIdentifier === 'adduserweight') {
  //     openAddUserWeightModal();
  //   }
  // }, [clickIdentifier]);

  return (
    <div className="page">
      <div className="sidebar-container">
        <Sidebar supabase={supabase} session={session} />
      </div>

      <div className={styles["user-weight-registry-header"]}>
        <h1 className={styles["title"]}>User Weight Registry</h1>
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
