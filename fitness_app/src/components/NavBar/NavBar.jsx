import React from 'react';
import './NavBar.css';

const NavBar = ({supabase, session}) => {
    return (
      <nav className="NavBar">
        <html lang="en">
          <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
              rel="stylesheet"
            />
            <link href="./NavBar.css" rel="stylesheet" />
          </head>
          <body>
            <nav className="navbar">
              <button onClick={() => document.body.classList.toggle("open")} className="burger"></button>
              <button className="button">Home</button>
              <div className="dropdowns">
                <div className="dropdown">
                  <button className="button">
                    Heading 1
                  </button>
                  <div className="dropdown-menu">
                    <button>Corey</button>
                    <button>Elijah</button>
                    <button>Ephrem</button>
                  </div>
                </div>
                <div className="dropdown">
                  <button className="button">
                    Heading 2
                  </button>
                  <div className="dropdown-menu">
                    <button>Gary</button>
                    <button>Kyle</button>
                    <button>Tyler</button>
                  </div>
                </div>
                <div className="dropdown">
                  <button className="button">
                    Heading 3
                  </button>
                  <div className="dropdown-menu">
                    <button>John</button>
                    <button>Steve</button>
                    <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
                  </div>
                </div>
              </div>
            </nav>
          </body>
        </html>
      </nav>
    );
  };
  
  export default NavBar;

