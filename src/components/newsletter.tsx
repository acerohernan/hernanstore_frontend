import React, { MouseEventHandler, useState, ChangeEventHandler } from "react";
import { Send } from "@material-ui/icons";

import "../styles/components/newsletter.scss";
import { emailRegex } from "../utils/regex";

function Newsletter() {
  const [isSended, setIsSended] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSendEmail: MouseEventHandler = () => {
    if (!emailRegex.test(email)) return setError(true);

    setError(false);
    setIsSended(true);
    setEmail("");
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.currentTarget.value);
  };

  return (
    <div className="app__newsletter">
      <h1 className="app__newsletter-title">Newsletter</h1>
      <div className="app__newsletter-description">
        Get timely updates from your favorite products.
      </div>
      <div className="app__newsletter-input_container">
        <input
          placeholder="Your email"
          type="text"
          className="app__newsletter-input"
          value={email}
          onChange={handleInputChange}
        />
        <button className="app__newsletter-button" onClick={handleSendEmail}>
          <Send />
        </button>
      </div>
      {isSended && !error && (
        <span style={{ color: "green" }}>
          Your email was successfully sended.
        </span>
      )}
      {error && (
        <span style={{ color: "red" }}>Please enter a valid email</span>
      )}
    </div>
  );
}

export default Newsletter;
