import React from "react";
import photo from "../../images/photo.jpg";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import styles from "./login.module.css";
import { supabase } from "../../supabase/client";

export const Login = () => {
	const passwordPolicy = {
		minLength: process.env.GOTRUE_PASSWORD_MIN_LENGTH || 6,
	};
	return (
		<div className={styles["login-page"]}>
			<div className={`container ${styles["ctn"]}`}>
				{/* container item 1 */}
				<div className={`box ${styles["left-box"]}`}>
					{/* left-box item 1 */}
					<div>
						<Auth
							supabaseClient={supabase}
							providers={[]}
							passwordPolicy={passwordPolicy}
							appearance={{
								theme: ThemeSupa,
								style: {
									button: { background: "#047aed", color: "white" },
									anchor: { color: "#047aed" },
								},
							}}
						/>
					</div>
				</div>

				<div className={`box ${styles["right-box"]}`}>
					<img src={photo} alt='gym_photo' className={styles["img"]} />
				</div>
			</div>
		</div>
	);
};
