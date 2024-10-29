import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import pagesData from "@pages/pagesData";

const App = () => (
  <Router>
    <Routes>
      {pagesData.map(({ path, element }, index) => (
        <Route key={index} path={path} element={element} />
      ))}
    </Routes>
  </Router>
);

export default App;
