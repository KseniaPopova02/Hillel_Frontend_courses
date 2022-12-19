import React, { Component } from "react";
import styled from "styled-components";

//переписать названия констант
const Li = styled.li`
  padding-right: 115px;
  padding-bottom: 20px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const CheckBox = styled.input`
  margin-right: 25px;
  cursor: pointer;
`;

const Delete = styled.button`
  font-size: 12px;
  padding: 10px;
  border-radius: 10px;
  background-color: #a680e3;
  color: #fff;
  border: none;
  text-transform: uppercase;
  margin-left: 15px;
  &:hover {
    background-color: #8e6ec0;
  }
`;

class TodoItem extends Component {
  render() {
    const Span = styled.span`
      width: 100px;
      display: inline-block;
      overflow-wrap: break-word;
      ${this.props.data.isDone
        ? "text-decoration:line-through;"
        : "text-decoration: none"}
    `;
    return (
      <Li>
        <Div>
          <CheckBox
            //we are getting here a date from the state about is item checked or not
            checked={this.props.data.isDone}
            onChange={(e) => {
              //we are calling checkedFunction that is = to handleCheck in todoList component
              this.props.checkedFunction(this.props.data.id, e.target.checked);
            }}
            type="checkbox"
          ></CheckBox>
          <Span>{this.props.data.title}</Span>
          <Delete
            onClick={() => {
              this.props.deleteFunction(this.props.data.id);
            }}
          >
            delete
          </Delete>
        </Div>
      </Li>
    );
  }
}
export default TodoItem;
