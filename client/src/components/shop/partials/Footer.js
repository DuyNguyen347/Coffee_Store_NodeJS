import React, { Fragment } from "react";
import moment from "moment";

const Footer = (props) => {
  return (
    <Fragment>
      <footer
        style={{ background: "black", color: "white" }}
        className="z-10 py-6 px-4 md:px-12 text-center"
      >
        Contact me: duynguyen347.study@gmail.com
      </footer>
    </Fragment>
  );
};

export default Footer;
