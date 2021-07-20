import React, { cloneElement } from "react";

export const Wrapper = ({ children }) => {
  return (
    <div>
      <h2>its a big problem use children</h2>
      {children}
    </div>
  );
};
