import TodoList from "./components/todos/TodoList";
import { Component } from "react";
import styled from "styled-components";
import "../src/styles/app.css";

const Container = styled.div`
  margin: 30px auto;
`;

const ToDoListWrapper = styled.div`
  width: calc(100vw - 30px);
  max-width: 500px;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  margin: 0 auto;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <ToDoListWrapper>
          <TodoList />
        </ToDoListWrapper>
      </Container>
    );
  }
}

export default App;
