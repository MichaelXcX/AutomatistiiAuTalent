import React from "react";

import { Image } from "react-bootstrap";
import NavBar from "./components/Navbar";
import Cards from "./components/Cards";
import Popup from "./components/Popup";
import background from "./img/Background.jpg";
import Logo from "./img/Logo.png";
import Sponsori from "./components/Sponsori";

function Main() {
  const [popupShow, setPopupShow] = React.useState(false);

  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{
        position: "relative",
        width: "100vw",
        height: "auto",
        margin: "0",
        padding: "0",

        backgroundImage: `url("${background}")`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "bottom center",

        justifyContent: "space-between",

        boxSizing: "border-box",
      }}
    >
      <NavBar />
      <Image src={Logo} alt="#" height="50%" width="100%" fluid />
      <Cards setTrigger={() => setPopupShow(true)} />
      <Popup show={popupShow} onHide={() => setPopupShow(false)} />
      <Sponsori />
    </div>
  );
}

export default Main;
