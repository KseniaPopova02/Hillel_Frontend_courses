import Header from "./components/Header/Header";
import TodoList from "./components/Todos/TodoList";
import styled from "styled-components";
import "./styles/normalize.css";

const Container = styled.div`
  margin: 30px auto;
  background-color: #89cff0;
  border-radius: 10px;
  padding: 15px;
`;
const ToDoListWrapper = styled.div`
  width: calc(100vw - 30px);
  max-width: 350px;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  margin: 30px auto;
`;

function App() {
  return (
    <Container>
      <Header />
      <ToDoListWrapper>
        <TodoList />
      </ToDoListWrapper>
    </Container>
  );
}

export default App;
