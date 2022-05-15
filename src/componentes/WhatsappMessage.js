import React, { useEffect, useState } from "react";

import { phoneVerify } from "../utils/functions";

import ReceivedMessage from "./ReceivedMessage";
import SendMessage from "./SendMessage";
import TypeWhatsappLink from "./TypeWhatsappLink";
import GeneratedLink from "./GeneratedLink";

import "./whatsappMessage.css";

function WhatsappMessage() {
  const [field, setField] = useState("");
  const [data, setData] = useState([[]]);
  const [whatsapp, setPhone] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("api");
  const [statusPhone, setStatusPhone] = useState(false);
  const [statusMessage, setStatusMessage] = useState(false);
  const [statusType, setStatusType] = useState(false);

  const formatedPhone = field.replace(/^(\d\d)(\d{5})(\d{4})/, "($1) $2-$3");

  function handleClick() {
    if (field.length > 0) {
      setData([...data, <SendMessage key={data.length} content={field} />]);
    }

    if (phoneVerify(formatedPhone)) {
      setPhone(field);
      setStatusPhone(true);
    } else if (statusPhone && !statusMessage) {
      const value = field.length > 1
        ? field
        : "";

      setMessage(value);
      setStatusMessage(true);
    } else if (statusMessage) {
      setStatusType(true);
    }

    document.querySelector(".input-msg").value = "";
  }

  useEffect(() => {
    setData([
      ...data,
      <ReceivedMessage
        key={data.length}
        content={formatedPhone}
        status={phoneVerify(formatedPhone)}
      />]);
  }, [statusPhone]);

  useEffect(() => {
    if (statusMessage) {
      setData([...data, <TypeWhatsappLink key={data.length} type={type} setType={setType} />]);
    }
  }, [statusMessage]);

  useEffect(() => {
    setField("");
    const content = document.querySelector(".conversation-container");
    content.scrollTop = content.scrollHeight;
  }, [data]);

  useEffect(() => {
    if (statusType) {
      setData([...data, <GeneratedLink key={data.length} request={{ whatsapp, message, type }} />]);
    }
  }, [statusType]);

  return (
    <div className="chat">
      <h2 className="title" data-cy="title">WhatsApp Link Generate</h2>
      <div className="chat-container">
        <div className="bar">
          <div className="back">
            <i className="zmdi zmdi-arrow-left">{}</i>
          </div>
          <div className="avatar">
            <img src="" alt="TakeBlip" />
          </div>
          <div className="name">
            <span>TakeBlip</span>
            <span className="status">online</span>
          </div>
          <div className="actions more">
            <i className="zmdi zmdi-more-vert">{}</i>
          </div>
          <div className="actions attachment">
            <i className="zmdi zmdi-attachment-alt">{}</i>
          </div>
          <div className="actions">
            <i className="zmdi zmdi-whatsapp">{}</i>
          </div>
        </div>
        <div className="conversation">
          <div className="conversation-container">
            <div className="message sent">
              Olá, como posso criar um link whatsapp?
              <span className="metadata">
                <span className="tick">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="15"
                    id="msg-dblcheck-ack"
                    x="2063"
                    y="2076"
                  >
                    <path
                      d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
                      fill="#4fc3f7"
                    />
                  </svg>
                </span>
              </span>
            </div>
            <div className="message received">
              Olá, tudo bem? É muito fácil. Digite seu número whatsapp com DDD.
            </div>
            {data.map((render) => render)}
          </div>
          <form className="conversation-compose">
            <div className="emoji">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                id="smiley"
                x="3147"
                y="3209"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.153 11.603c.795 0 1.44-.88 1.44-1.962s-.645-1.96-1.44-1.96c-.795 0-1.44.88-1.44 1.96s.645 1.965 1.44 1.965zM5.95 12.965c-.027-.307-.132 5.218 6.062 5.55 6.066-.25 6.066-5.55 6.066-5.55-6.078 1.416-12.13 0-12.13 0zm11.362 1.108s-.67 1.96-5.05 1.96c-3.506 0-5.39-1.165-5.608-1.96 0 0 5.912 1.055 10.658 0zM11.804 1.01C5.61 1.01.978 6.034.978 12.23s4.826 10.76 11.02 10.76S23.02 18.424 23.02 12.23c0-6.197-5.02-11.22-11.216-11.22zM12 21.355c-5.273 0-9.38-3.886-9.38-9.16 0-5.272 3.94-9.547 9.214-9.547a9.548 9.548 0 0 1 9.548 9.548c0 5.272-4.11 9.16-9.382 9.16zm3.108-9.75c.795 0 1.44-.88 1.44-1.963s-.645-1.96-1.44-1.96c-.795 0-1.44.878-1.44 1.96s.645 1.963 1.44 1.963z"
                  fill="#7d8489"
                />
              </svg>
            </div>
            <input
              className="input-msg"
              name="input"
              data-cy="field"
              placeholder="Type a message"
              autoComplete="off"
              onChange={({ target: { value } }) => setField(value)}
            />
            <div className="photo">
              <i className="zmdi zmdi-camera">{}</i>
            </div>
            <button type="button" className="send" data-cy="send" onClick={handleClick}>
              <div className="circle">
                <i className="zmdi zmdi-mail-send">{}</i>
              </div>
            </button>
          </form>
        </div>
        <button type="button" data-cy="copy">Copiar Link</button>
      </div>
    </div>
  );
}

export default WhatsappMessage;
