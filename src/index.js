import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Image } from "react-bootstrap";
import NavBar from "./components/Navbar";
import Cards from "./components/Cards";
import Popup from "./components/Popup";
import background from "./img/Background.jpg";
import Logo from "./img/Logo.png";

function App() {
  const [popupShow, setPopupShow] = useState(true);

  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{
        width: "100vw",
        height: "100vh",
        margin: "0",
        padding: "0",

        backgroundImage: `url("${background}")`,
        backgroundSize: "100% 100vh",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "bottom center",

        justifyContent: "space-between",
      }}
    >
      <NavBar />
      <Image src={Logo} alt="#" height="50%" width="100%" fluid />
      <Cards setTrigger={setPopupShow(true)} />
      <Popup show={popupShow} onHide={() => setPopupShow(false)} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
