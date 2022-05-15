import React from "react";
import PropTypes from "prop-types";

function TypeWhatsappLink({ type, setType }) {
  return (
    <div className="message received" value={type} onChange={({ target: { value } }) => setType(value)}>
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
