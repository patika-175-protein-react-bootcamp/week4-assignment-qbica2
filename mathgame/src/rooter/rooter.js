import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Results from "../pages/Results";

function Rooter() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
}

export default Rooter;