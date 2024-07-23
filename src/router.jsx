import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./pages/Base/App";
import Error from "./pages/Error";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={App} />
        <Route exact path="/*" Component={Error} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
