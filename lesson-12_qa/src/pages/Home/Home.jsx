import React from "react";
import { useHistory, useLocation } from "react-router-dom";
export default function Home() {
  const history = useHistory();
  const location = useLocation();

  return (
    <div>
      <h1>HOME PAGE</h1>
    </div>
  );
}

// ['/', '/about']
