import React, { useState, useContext } from "react";
import { Input } from "../../ui/Input/Input";
import { SubmitButton } from "../../ui/SubmitButton/SubmitButton";
import { Form, InputBox } from "./TodoForm.styles";
import { v4 as uuid } from "uuid";
import { TodoContext } from "../../context/TodoContext";

export const TodoForm = () => {
  const { dispatch } = useContext(TodoContext);
  const [todo, setTodo] = useState({
    learn: "",
    description: "",
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({ type: "addTodo", payload: { ...todo, id: uuid() } });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputBox>
        <Input
          name="learn"
          label="что хочешь выучить ?"
          indentBottom
          value={todo.learn}
          onChange={handleChange}
        />
        <Input
          name="description"
          label="как планируешь учить ?"
          value={todo.description}
          onChange={handleChange}
        />
      </InputBox>
      <SubmitButton textContent="начать учить" />
    </Form>
  );
};
