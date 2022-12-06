import styled from "styled-components";
import { Component } from "react";

class Nav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const Nav = styled.div`
      border: 2px solid #303247;
      padding: 30px;
    `;
    return (
      <Nav>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </Nav>
    );
  }
}

export default Nav;
