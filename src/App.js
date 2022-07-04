import React from "react";
import { useSelector } from "react-redux";

import Home from "./features/Home/Home";
import ModalBox from "./features/Modal/ModalBox";

import "./App.css";

function App() {
  const modal = useSelector((state) => state.modal.isOpen);
  
  return (
    <>
      <div className="App">
        <Home />
        {modal ? <ModalBox /> : null}
      </div>
    </>
  );
}

export default App;
