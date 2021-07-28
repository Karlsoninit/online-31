import React, { useCallback } from "react";
import Buttons from "./Buttons";

function App() {
  const [count, setCounter] = React.useState(0);

  const onPlus = useCallback(() => setCounter((count) => count + 1), []);

  const onMinus = useCallback(() => setCounter((count) => count - 1), []);

  return (
    <div className="App">
      <h1>{count}</h1>
      <Buttons onPlus={onPlus} onMinus={onMinus} />
    </div>
  );
}

export default App;
