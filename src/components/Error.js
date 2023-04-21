import React from 'react';
import { Link } from 'react-router-dom';
import { useRouteError } from 'react-router-dom';
//useRouterError is a hook that react-router-dom gives us
//it gives all information of error it does not let us throw error in our console
//it catches all routing error
import errorImage from "../assets/img/error.jpeg";

const Error= () => {
    const err=useRouteError();
    console.log(err);
  return (
    <div className="error-container">
      <h1 className="error-title">Oops!</h1>
      <img className="error-image" src={errorImage} alt="Error 404" />
      <h2 className="error-subtitle">Page {err.statusText}</h2>
      <Link to="/" className="error-link">Go back to home</Link>
    </div>
  );
};

export default Error;
