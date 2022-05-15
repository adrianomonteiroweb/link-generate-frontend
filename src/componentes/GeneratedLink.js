import React, { useState } from "react";
import PropTypes from "prop-types";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { fetch } from "../utils/functions";

async function getLink(request, setLink) {
  const { data: { whatsapp } } = await fetch(request);

  await setLink(whatsapp);
}

function GeneratedLink({ request }) {
  const [link, setLink] = useState(false);
  const [statusCopy, setStatusCopy] = useState(false);

  getLink(request, setLink);

  return link
    ? (
      <div className="message received">
        <CopyToClipboard
          text={link}
          onCopy={() => setStatusCopy(true)}
        >
          <span>{`Click para copiar seu link: ${link}`}</span>
        </CopyToClipboard>
        <p>{ statusCopy && "Copiado com sucesso!"}</p>
      </div>
    )
    : [];
}

GeneratedLink.propTypes = {
  request: PropTypes.shape(),
}.isRequired;

export default GeneratedLink;
