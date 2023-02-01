import React, { useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import Menu from "../Menu/Menu";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  deleteAll,
  deleteTodo,
  toggleTodo,
} from "../../actions/todosActions";

const InputWrapper = styled.form``;
const InputText = styled.input``;
const Button = styled.button``;
const ActionList = styled.ul``;

const TodoList = () => {
  //states
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const { todos, currentView } = useSelector((state) => state);

  const todosToShow = todos.filter((item) => {
    if (currentView === "IN_PROGRESS") {
      return !item.isDone;
    }
    if (currentView === "COMPLETED") {
      return item.isDone;
    }
    return item;
  });
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      return;
    }
    dispatch(
      addTodo({
        title: value,
        isDone: false,
      })
    );
    setValue("");
  };

  const handleClearSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteAll());
  };

  const handleDeleteButton = (id) => {
    dispatch(deleteTodo(id));
  };
  console.log(currentView);
  const toggleStatus = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <>
      <Menu />
      <InputWrapper onSubmit={handleAddSubmit}>
        <InputText onChange={handleOnChange} value={value} type="text" />
        <Button type="submit">Add</Button>
        <Button onClick={handleClearSubmit} type="button">
          Clear
        </Button>
      </InputWrapper>
      <ActionList>
        {todosToShow.map((item) => {
          return (
            <TodoItem
              isDone={item.isDone}
              id={item.id}
              toggleStatus={toggleStatus}
              handleDelete={handleDeleteButton}
              key={item.id}
            >
              {item.title}
            </TodoItem>
          );
        })}
      </ActionList>
    </>
  );
};

export default TodoList;
