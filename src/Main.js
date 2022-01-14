import React from "react";

import { Image } from "react-bootstrap";

import NavBar from "./components/Navbar";
import Cards from "./components/Cards";
import Flex from "./components/Flex";

import background from "./img/Background.jpg";
import Logo from "./img/Logo.png";
import Sponsori from "./components/Sponsori";

function Main() {
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

        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <NavBar />
      <Image src={Logo} alt="#" height="50%" width="100%" fluid />
      <Flex />
      <Cards />
      <Sponsori />
    </div>
  );
}

export default Main;
