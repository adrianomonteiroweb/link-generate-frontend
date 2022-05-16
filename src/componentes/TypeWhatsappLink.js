import React from "react";
import PropTypes from "prop-types";

import "./typeWhatsappLink.css";

function TypeWhatsappLink({ setType }) {
  return (
    <div className="message received" onChange={({ target: { value } }) => setType(value)}>
      <div>
        <span>Selecione entre whatsapp Desktop ou mobile e click em enviar.</span>
      </div>
      <select className="select-type">
        <option value="api">Smartphone</option>
        <option value="web">Web</option>
      </select>
    </div>
  );
}

TypeWhatsappLink.propTypes = {
  setType: PropTypes.func,
}.isRequired;

export default TypeWhatsappLink;
