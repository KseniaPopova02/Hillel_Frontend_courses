import React, { Component } from "react";
import styled from "styled-components";

const Title = styled.div`
  display: flex;
  justify-content: center;
`;
const TitleText = styled.h1`
  margin: 20px;
  font-size: 35px;
`;

class Header extends Component {
  render() {
    return (
      <Title>
        <TitleText>My to do list!</TitleText>
      </Title>
    );
  }
}

export default Header;
