import React, { useState, useEffect } from "react";

const PolicyLazy = React.lazy(() =>
  import("../../components/Policy/Policy" /* webpackChunkName: "policy-page" */)
);

const DropDownMenu = () => {
  const [state, setState] = useState(false);

  const toggle = () => {
    setState((prev) => !prev);
  };

  return (
    <>
      {state && <PolicyLazy />}
      <button onClick={toggle}>show policy</button>
    </>
  );
};

export default DropDownMenu;
