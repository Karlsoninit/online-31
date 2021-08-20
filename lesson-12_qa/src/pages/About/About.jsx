import React from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
export default function About() {
  const history = useHistory();
  const location = useLocation();

  console.log("location :>> ", location);
  const handleGoBack = () => {
    if (location.state) {
      history.push(location.state.from);
      return;
    }

    history.push("/");
  };

  //   const goBack = () => {
  //     history.goBack();
  //   };

  return (
    <div>
      <h1>About page</h1>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
}
