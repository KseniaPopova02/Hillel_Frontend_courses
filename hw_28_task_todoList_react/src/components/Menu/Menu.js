import React, { Component } from "react";
import styled from "styled-components";

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const MenuComponent = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #fff;
  color: #000;
  font-size: 18px;
  transition: all 0.2;
  border: none;
  &:hover {
    text-decoration: underline;
  }
  ${(props) => props.isActive && "text-decoration: underline"};
`;
class Menu extends Component {
  render() {
    return (
      <MenuComponent>
        <MenuWrapper>
          <Button
            isActive={this.props.currentType === "all"}
            onClick={() => {
              this.props.changeTypeFunction("all");
            }}
          >
            All
          </Button>
          <Button
            isActive={this.props.currentType === "inprogress"}
            onClick={() => {
              this.props.changeTypeFunction("inprogress");
            }}
          >
            In progress
          </Button>
          <Button
            isActive={this.props.currentType === "completed"}
            onClick={() => {
              this.props.changeTypeFunction("completed");
            }}
          >
            Completed
          </Button>
        </MenuWrapper>
      </MenuComponent>
    );
  }
}

export default Menu;
