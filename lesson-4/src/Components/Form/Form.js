import React, { Component } from "react";
import { Input } from "../Input/Input";
import { FormContainer } from "./Form.styles";

const initialState = {
  name: "",
  number: "",
  email: "",
  createGroup: false,
  // createFaculties: false,
  // editTutorProfile: false,
};

export class Form extends Component {
  state = { ...initialState };

  reset = () => {
    this.setState(initialState);
  };

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    this.setState({ [name]: type === "checkbox" ? checked : value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  render() {
    const { name, number, email, createGroup } = this.state;

    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <Input
          label="enter your name"
          name="name"
          value={name}
          handleChange={this.handleChange}
        />
        <Input
          type="tel"
          label="enter your phone number"
          name="number"
          value={number}
          handleChange={this.handleChange}
        />
        <Input
          type="email"
          label="enter your email"
          name="email"
          value={email}
          handleChange={this.handleChange}
        />

        <label>
          Создание групп
          <input
            type="checkbox"
            name="createGroup"
            checked={createGroup}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">отправить</button>
      </FormContainer>
    );
  }
}
