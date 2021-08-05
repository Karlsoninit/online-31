import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import db from "../../../fbConfig";
import { Input } from "../../../ui/Input/Input";
import { Form, LoginContainer } from "./Login.styles";
import DropDownMenu from "../../../ui/DropDownMenu/DropDownMenu";

const Login = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const signInUser = async (userInfo) => {
    try {
      const { email, password } = userInfo;
      const userCredential = await db
        .auth()
        .signInWithEmailAndPassword(email, password);

      console.log(`userCredential`, userCredential);
    } catch (error) {
      console.log("error", error.response);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signInUser(value);
  };

  return (
    <LoginContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          name="email"
          id="email"
          label="Email"
          variant="outlined"
          indentBottom
          onChange={handleChange}
          value={value.email}
        />
        <Input
          name="password"
          id="password"
          label="Password"
          variant="outlined"
          indentBottom
          onChange={handleChange}
          value={value.password}
        />
        <Button variant="contained" color="primary" type="submit">
          Войти
        </Button>
        <Link to="/register">зарегистрироватся</Link>
        <DropDownMenu />
      </Form>
    </LoginContainer>
  );
};

export default Login;
