import React, { useState } from "react";

import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import gameData from "./gameData";

export default function App() {


  

  return (
    <>
      <Header />
      <Main gameData={gameData} />
      <Footer />
    </>
  );
}
