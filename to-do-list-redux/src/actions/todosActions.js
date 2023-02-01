import {
  ADD_TODO,
  CLEAR_ALL,
  DELETE_TODO,
  TOGGLE_TODO,
  CHANGE_TABS,
} from "./actionTypes";

const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

const deleteAll = () => {
  return {
    type: CLEAR_ALL,
  };
};

const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};

//одна функция на 3 табки

const changeTabs = (id) => {
  return {
    type: CHANGE_TABS,
    payload: id,
  };
};

export { addTodo, deleteAll, deleteTodo, toggleTodo, changeTabs };
