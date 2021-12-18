import React from "react";
import ReactDOM from "react-dom";
import Main from "./Components/Main";
import "./styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
