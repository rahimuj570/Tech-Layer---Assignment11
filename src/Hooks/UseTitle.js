import React from "react";
import { Helmet } from "react-helmet-async";

const UseTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} - Tech Layer</title>
    </Helmet>
  );
};

export default UseTitle;
