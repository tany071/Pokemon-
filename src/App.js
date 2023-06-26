import { Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import FetchData from "./FetchData";
import Details from "./Details";
// import axios from 'axios';
// import FetchData from "./FetchData";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<FetchData/>}/>
      <Route path="/:index/:name" element={<Details/>}></Route>
    </Routes>
    </>
  );
}

export default App;
