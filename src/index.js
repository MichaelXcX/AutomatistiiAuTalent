import React from "react";
import ReactDOM from "react-dom";

import { Image } from "react-bootstrap";
import NavBar from "./components/Navbar";
import Cards from "./components/Cards";
import background from "./img/theater-stage-with-red-curtains-vector.jpg";
import Logo from "./img/Logo.png";

ReactDOM.render(
  <div
    className="d-flex flex-column align-items-center "
    style={{
      width: "100vw",
      height: "100vh",
      margin: "0",
      padding: "0",

      backgroundImage: `url("${background}")`,
      backgroundSize: "cover",
      backgroundPosition: "center center",

      justifyContent: "space-between",
    }}
  >
    <NavBar />
    <Image src={Logo} alt="#" height="50%" width="100%" fluid />
    <Cards />
  </div>,
  document.getElementById("root")
);
