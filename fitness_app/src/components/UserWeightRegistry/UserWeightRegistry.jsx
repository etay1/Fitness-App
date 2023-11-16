import React from 'react'
import Sidebar from '../SideBar/SideBar'
import { supabase } from '../../supabase/client'
import { useAuthStateListener } from '../../supabase/session'
import styles from './UserWeightRegistry.module.css'
import { useEffect } from 'react'
import { useModalState } from '../../hooks/useModalState'
import { useLocation } from 'react-router-dom'
import AddUserWeight from '../AddUserWeight/AddUserWeight'

const UserWeightRegistry = () => {
    
    const session = useAuthStateListener();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    var clickIdentifier = params.get('clickIdentifier');

    const {
        isOpen: isAddUserWeightModalOpen,
        openModal: openAddUserWeightModal,
        closeModal: closeAddUserWeightModal,
      } = useModalState(false);

    useEffect(() => {
        if(clickIdentifier == "adduserweight"){
          openAddUserWeightModal();
        }
      }, [clickIdentifier]);

  return (
    <div className={styles["user-weight-registry"]}>
        
    <div>
      <Sidebar supabase={supabase} session={session}/>
    </div>


    <AddUserWeight
        isAddUserWeightPopupOpen={isAddUserWeightModalOpen}
        closeAddUserWeightPopup={closeAddUserWeightModal}
        session={session}
      />
  </div>
    )
}

export default UserWeightRegistry