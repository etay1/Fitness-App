import React from "react";
import Header from "./components/Header";
import Sidebar from "../../components/SideBar/SideBar";
import AccountForm from "../../components/forms/AccountSettingsForm";
import styles from "./styles/Registry.module.css";



const AccountSettings = ({ isSignup, onSubmit }) => {

    return (

        <div className='page'>
            <div className='sidebar-container'>
                <Sidebar />
            </div>
            <div className='content'>
                <div className={styles["account-settings"]}>
                  <Header
                        page_title='Account Settings'
                    />
     
                </div>
                    <div className={styles["account-form-ctn"]}>
                        <AccountForm isSignup={isSignup} onSubmit={onSubmit} />
                    </div>
            </div>
        </div>
    );
};

export default AccountSettings;