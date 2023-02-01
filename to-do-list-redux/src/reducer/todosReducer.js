// import { isDocument } from "@testing-library/user-event/dist/utils";
import {
  ADD_TODO,
  CLEAR_ALL,
  DELETE_TODO,
  TOGGLE_TODO,
  CHANGE_TABS,
} from "../actions/actionTypes";

const initialState = {
  todos: [],
  currentView: "ALL",
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const lastTodoId =
        state.todos[state.todos.length - 1]?.id || Math.random();
      const id = lastTodoId + Math.random();

      return {
        ...state,
        todos: [...state.todos, { ...action.payload, id }],
      };
    case CLEAR_ALL:
      return {
        ...state,
        todos: [],
      };
    case DELETE_TODO:
      const newTodos = state.todos.filter((el) => {
        return action.payload !== el.id;
      });
      return {
        ...state,
        todos: newTodos,
      };
    case TOGGLE_TODO:
      const updatedTodos = state.todos.map((el) => {
        if (action.payload === el.id) {
          return { ...el, isDone: !el.isDone };
        }
        return el;
      });
      return {
        ...state,
        todos: updatedTodos,
      };
    case CHANGE_TABS:
      return {
        ...state,
        currentView: action.payload,
      };
    default:
      return state;
  }
};

export default todosReducer;
