import React from "react";
import IcoMoon from "react-icomoon";
const iconSet = require("../data/selection.json");

console.log("iconset is", iconSet);
const Icon = ({ ...props }) => {
  return <IcoMoon iconSet={iconSet} {...props} />;
};

export default Icon;