import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import Login from "../Pages/auth/Login/Login";
// import Register from "../Pages/auth/Register/Register";
// import Menu from "../Pages/menu/Menu";

const LoginLazy = React.lazy(() =>
  import("../Pages/auth/Login/Login" /* webpackChunkName: "login-page" */)
);
const RegisterLazy = React.lazy(() =>
  import(
    "../Pages/auth/Register/Register" /* webpackChunkName: "register-page" */
  )
);
const MenuLazy = React.lazy(() =>
  import("../Pages/menu/Menu" /* webpackChunkName: "menu-page" */)
);

const Some = () => {
  return <h2>SOME SOME SOME SOME</h2>;
};

export const useRouter = (isAuthentication) => {
  if (isAuthentication) {
    return (
      <Switch>
        <Route exact path="/menu">
          <MenuLazy />
        </Route>
        <Route path="/menu/:id">
          <Some />
        </Route>
        {/* <Redirect to="/menu" /> */}
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/login">
        <LoginLazy />
      </Route>
      <Route path="/register">
        <RegisterLazy />
      </Route>
      {/* <Redirect to="/login" /> */}
    </Switch>
  );
};
