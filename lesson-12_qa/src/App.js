import "./App.css";
import Menu from "./Components/Menu/Menu";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Map from "./pages/Map/Map";
function App() {
  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/map">
          <Map />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// const handleGoBack = () => {
//   if (location.state) {
//     history.push(location.state.from);
//     return;
//   }

//   history.push(routes.HOME);
// };

{
  /* <Link
              to={{
                pathname: `/movies/${id}`,
                state: {
                  from: location,
                },
              }}
            ></Link> */
}
