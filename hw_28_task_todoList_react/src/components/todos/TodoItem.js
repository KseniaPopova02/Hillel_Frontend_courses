import React, { Component } from "react";
import styled from "styled-components";

//переписать названия констант
const Li = styled.li`
  padding-right: 115px;
  padding-bottom: 20px;
`;

const Div = styled.div`
  display: flex;
  align-items: flex-start;
`;

const CheckBox = styled.input`
  margin-right: 25px;
  cursor: pointer;
`;

const Span = styled.span`
  width: 100px;
  display: inline-block;
  overflow-wrap: break-word;
`;

class TodoItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <Li>
        <Div>
          <CheckBox
            checked={data.isDone}
            onChange={() => {
              this.props.checkedFunction(data.id);
            }}
            type="checkbox"
          ></CheckBox>
          <Span>{data.title}</Span>
        </Div>
      </Li>
    );
  }
}
export default TodoItem;
