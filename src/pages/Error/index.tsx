import React from "react";

import "./index.scss";

const ErrorPage = () => {
  return (
    <div className="error-wrapper">
      <h1 className="error-header">Error ocurred</h1>
      <p className="error-text">
        Dear user the character hasn't been founded please turn back to the home
        page
      </p>
    </div>
  );
};

export default ErrorPage;
