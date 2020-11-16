import React, { useState } from "react";

import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import gameData from "./gameData";

export default function App() {
  const [tableView, settableView] = useState(true);
  const [showForm, setShowForm] = useState(false);

  function handleChangeView() {
    settableView((prev) => !prev);
  }

  function toggleForm() {
    setShowForm((prev) => !prev);
  }

  return (
    <>
      <Header
        tableView={tableView}
        onChangeView={handleChangeView}
        onToggleForm={toggleForm}
      />
      <Main gameData={gameData} tableView={tableView} showForm={showForm} />
      <Footer />
    </>
  );
}
