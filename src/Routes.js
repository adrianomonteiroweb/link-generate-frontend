import React from "react";
import { Routes, Route } from "react-router-dom";

import WhatsappMessage from "./componentes/WhatsappMessage";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WhatsappMessage />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
