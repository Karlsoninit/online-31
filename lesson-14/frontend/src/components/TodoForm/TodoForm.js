import React, { useState, useContext } from "react";
import { Input } from "../../ui/Input/Input";
import { SubmitButton } from "../../ui/SubmitButton/SubmitButton";
import { Form, InputBox } from "./TodoForm.styles";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, postTodoOperation } from "../../redux/actions/todoAction";

export const TodoForm = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  const user = useSelector((state) => state.user);

  const [todo, setTodo] = useState({
    learn: "",
    description: "",
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(postTodoOperation(todo));
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  // if (todo.loader && user.loader) {
  //   return <h1>Идет загрузка</h1>;
  // }

  // if (todo.loader || user.loader) {
  //   return <h1>Идет загрузка</h1>;
  // }

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
