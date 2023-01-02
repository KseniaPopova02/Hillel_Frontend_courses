import React, { Component } from "react";
import styled from "styled-components";
import Api from "../../api/Api";
import { API_TODOS_PATH } from "../../api/paths";
import TodoItem from "./TodoItem";
import Menu from "../Menu/Menu";

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
      type: "all",
    };
  }
  //function that is changing state of type
  handleClickOnTabs = (type) => {
    this.setState({ type: type });
  };
  //give the function to the menu component as a prop
  //onclick in the item on the menu call the function

  //when element loads on a page it will get todos from the API and save them in the state
  componentDidMount() {
    Api.get(API_TODOS_PATH).then((items) =>
      this.setState({ todoItems: items })
    );
  } //как только компоненет отрисуется вызовeтся жизненый цикл
  
  //for whatching the input changes and save the value to the state
  handleOnChange = (e) => {
    this.setState({ value: e.target.value });
  };
  //watching the form submit\
  //checking if input isnt't empty

  handleAddSubmit = (e) => {
    e.preventDefault();
    if (this.state.value === "") return;
    //creating the todo item
    const item = {
      title: this.state.value,
      isDone: false,
    };
    //setting the state from line 61
    //clearing input

    Api.post(API_TODOS_PATH, item)
      .then((createdItem) => {
        this.setState({
          todoItems: [...this.state.todoItems, createdItem],
          value: "",
        });
      })
      .catch((error) => {
        alert("Something went wrong");
      });
  };
  //clear btn
  handleClearClick = (e) => {
    e.preventDefault();
    Promise.all(
      this.state.todoItems.map((element) =>
        Api.delete(API_TODOS_PATH, element.id)
      )
    ).then(() => {
      this.setState({ todoItems: [] }).catch((error) => {
        alert("Something went wrong");
      });
    });
  };

  //delete btn
  handleDeleteClick = (id) => {
    Api.delete(API_TODOS_PATH, id)
      .then(() => {
        const newTodoItems = this.state.todoItems.filter((el) => {
          if (id === el.id) {
            return false;
          }
          return true;
        });
        this.setState({
          todoItems: newTodoItems,
        });
      })
      .catch((error) => {
        alert("Something went wrong");
      });
  };
  //to handle the check and change the is done value
  handleCheck = (id, checked) => {
    Api.patch(API_TODOS_PATH, id, { isDone: checked }).then(() => {
      const newTodoItems = this.state.todoItems.map((item) => {
        if (id === item.id) {
          return { ...item, isDone: checked };
        }
        return item;
      });
      this.setState({ todoItems: newTodoItems });
    });
  };
  render() {
    return (
      <div>
        <Menu
          currentType={this.state.type}
          changeTypeFunction={this.handleClickOnTabs}
        />
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
          {this.state.todoItems.map((item) => {
            //check type in state and isDone of items
            if (
              (this.state.type === "inprogress" && item.isDone) ||
              (this.state.type === "completed" && !item.isDone)
            ) {
              return;
            }

            //props named as checkedFunction it will = function handleCheck
            return (
              <TodoItem
                data={item}
                checkedFunction={this.handleCheck}
                deleteFunction={this.handleDeleteClick}
              />
            );
          })}
        </ActionList>
      </div>
    );
  }
}

export default TodoList;
