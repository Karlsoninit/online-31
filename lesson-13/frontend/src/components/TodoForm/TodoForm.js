import React, { useState, useContext } from "react";
import { Input } from "../../ui/Input/Input";
import { SubmitButton } from "../../ui/SubmitButton/SubmitButton";
import { Form, InputBox } from "./TodoForm.styles";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo, postTodo } from "../../redux/actions";

export const TodoForm = () => {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState({
    learn: "",
    description: "",
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addTodo(todo));
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
