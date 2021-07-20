import React, { Component } from "react";
import { Input } from "../Input/Input";
import { FormContainer } from "./Form.styles";
import { fields, items } from "./options";
import { Checkbox } from "../Checkbox/Checkbox";
const storage = JSON.parse(localStorage.getItem("formData"));
console.log(`storage`, storage);
const initialState = {
  name: "",
  phoneNumber: "",
  email: "",
  access: [],
};

export class Form extends Component {
  state = { ...initialState };

  componentDidMount() {
    console.log("componentDidMount");
    if (storage) {
      this.setState(storage);
    }
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    this.setState({ [name]: type === "checkbox" ? checked : value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  handleCheckboxChange = (label) => {
    this.setState((prevState) =>
      prevState.access.includes(label)
        ? {
            access: prevState.access.filter((item) => item !== label),
          }
        : { access: [...prevState.access, label] }
    );

    // this.setState((prevState) => {
    //   if (prevState.access.includes(label)) {
    //     return {
    //       access: prevState.access.filter((item) => item !== label),
    //     };
    //   }
    //   return { access: [...prevState.access, label] };
    // });
  };

  render() {
    console.log("render");
    return (
      <FormContainer onSubmit={this.handleSubmit}>
        {fields?.map((field) => (
          <Input
            key={field.id}
            label={field.label}
            name={field.name}
            value={this.state[field.name]}
            handleChange={this.handleChange}
          />
        ))}

        {items?.map((item) => (
          <Checkbox
            key={item}
            label={item}
            handleCheckboxChange={this.handleCheckboxChange}
            checked={this.state.access.includes(item)}
          />
        ))}

        <button type="submit">сохранить</button>
      </FormContainer>
    );
  }
}
