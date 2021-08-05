import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import db from "../../../fbConfig";
import { Input } from "../../../ui/Input/Input";
import { Form, RegisterContainer } from "./Register.styles";

const Register = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const createUser = async (userInfo) => {
    try {
      const { email, password } = userInfo;
      const userCredential = await db
        .auth()
        .createUserWithEmailAndPassword(email, password);

      console.log(`userCredential`, userCredential);
    } catch (error) {
      console.log("error", error.response);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    createUser(value);
  };

  return (
    <RegisterContainer>
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
          Зарегистрироватся
        </Button>
        <Link to="/login">войти</Link>
      </Form>
    </RegisterContainer>
  );
};

export default Register;
