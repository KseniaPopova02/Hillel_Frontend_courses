import styled from "styled-components";
import { Component } from "react";

class Button extends Component {
  render() {
    const Button = styled.button`
      border: 2px solid #303247;
      padding: 10px;
      background-color: #fff;
    `;
    const Wrapper = styled.div`
      text-align: right;
    `;
    return (
      <Wrapper>
        <Button onClick={this.props.handler}>
          {this.props.dark ? "light mode" : "dark mode"}
        </Button>
      </Wrapper>
    );
  }
}

export default Button;
