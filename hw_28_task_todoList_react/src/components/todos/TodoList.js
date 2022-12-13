import React, { Component } from "react";
import styled from "styled-components";
import Api from "../../api/Api";
import { TODOS } from "../../api/paths";
import TodoItem from "./TodoItem";

const ActionList = styled.ul`
  margin-left: 25px;
  margin-top: 15px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #a680e3;
  color: #fff;
  border: none;
  text-transform: uppercase;
  &:hover {
    background-color: #8e6ec0;
  }
`;
const InputText = styled.input`
  border: 2px solid #e3e8fc;
  padding: 5px 5px;
  border-radius: 10px;
`;

const InputWrapper = styled.form`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
`;

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [],
      value: "",
    };
  }

  componentDidMount() {
    Api.get(TODOS).then((items) => this.setState({ todoItems: items }));
  }
  handleOnChange = (e) => {
    this.setState({ value: e.target.value });
  };
  handleAddSubmit = (e) => {
    e.preventDefault();
    if (this.state.value === "") return;
    const item = {
      id: Math.random(),
      title: this.state.value,
      isDone: false,
    };
    this.setState({ todoItems: [...this.state.todoItems, item], value: "" });
  };
  handleClearClick = (e) => {
    e.preventDefault();

    this.setState({ todoItems: [] });
  };

  handleCheck = (id) => {
    const newTodoItems = this.state.todoItems.map((item) => {
      if (id === item.id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    this.setState({ todoItems: newTodoItems });
  };
  render() {
    return (
      <div>
        <InputWrapper onSubmit={this.handleAddSubmit}>
          <InputText
            onChange={this.handleOnChange}
            value={this.state.value}
            type="text"
          />
          <Button type="submit">ADD</Button>
          <Button onClick={this.handleClearClick}>Clear</Button>
        </InputWrapper>
        <ActionList>
          {this.state.todoItems.map((item) => (
            <TodoItem data={item} checkedFunction={this.handleCheck} />
          ))}
        </ActionList>
      </div>
    );
  }
}

export default TodoList;

//доделать чекбоксы и кнопка удаления и стили и статус тудушки
