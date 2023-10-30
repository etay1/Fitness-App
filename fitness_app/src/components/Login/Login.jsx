import React from "react";
import "./Login.css";
import photo from "../../images/photo.jpg";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export const Login = ({ supabase }) => {
  const passwordPolicy = {
    minLength: process.env.GOTRUE_PASSWORD_MIN_LENGTH || 6,
  };

  return (
    <div className="page">
      <div className="container ctn-login">
        {/* container item 1 */}
        <div className="box left-box-lgn">
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

        <div className="box right-box-lgn">
          <img src={photo} alt="gym_photo" className="img-lgn" />
        </div>
      </div>
    </div>
  );
};
