import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        <p className="text-center">
          {" "}
          "✔"️ - represents that the to-do is completed <br />
          "⏱" - represents that the to-do is not yet completed <br />
          Click on the respective to-do to mark the to-do completed/ uncompleted
        </p>
      </footer>
    </Fragment>
  );
};

export default Footer;
