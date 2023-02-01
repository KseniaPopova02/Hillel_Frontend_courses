import { createStore } from "redux";
import todosReducer from "./reducer/todosReducer";

const store = createStore(todosReducer);

export default store;
