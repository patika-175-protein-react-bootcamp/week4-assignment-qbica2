import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";

function Rooter() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}

export default Rooter;