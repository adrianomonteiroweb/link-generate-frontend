import React from "react";
import PropTypes from "prop-types";

function ReceivedMessage({ content, status }) {
  const response = status
    ? `Legal, seu número é ${content}. Se quiser mandar também uma breve mensagem, digite-a agora ou aperte em enviar novamente.`
    : `Seu número ${content} é inválido, tente novamente.`;

  return content.length > 1
    ? (
      <div className="message received">
        {response}
      </div>
    )
    : [];
}

ReceivedMessage.propTypes = {
  content: PropTypes.string,
}.isRequired;

export default ReceivedMessage;
