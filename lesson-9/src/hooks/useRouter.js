import { Switch, Route, Redirect } from "react-router-dom";
import { Login, Register } from "../pages/auth";
import Dashboard from "../pages/Dashboard";
import PageNotFound from "../pages/PageNotFound";

const useRouter = (isUser) => {
  if (isUser) {
    return (
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        {/* <Route path="/404">
          <PageNotFound />
        </Route>
        <Redirect to="404" /> */}
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      {/* <Route path="/404">
        <PageNotFound />
      </Route>
      <Redirect to="404" /> */}
    </Switch>
  );
};

export default useRouter;
