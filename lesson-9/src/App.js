import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useRouter } from "./hooks";
import Navigation from "./components/Navigation";
import logo from "./logo.svg";
import "./App.css";

const isUser = false;

function App() {
  let history = useHistory();
  const routing = useRouter(isUser);

  const path = isUser ? "/dashboard" : "/login";

  useEffect(() => {
    history.push(path);
  }, [history, path]);

  return (
    <div className="App">
      {/* <Navigation /> */}
      <header className="App-header">{routing}</header>
    </div>
  );
}

export default App;
