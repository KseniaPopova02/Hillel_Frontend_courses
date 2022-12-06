import styled from "styled-components";
import { Component } from "react";

class Header extends Component {
  render() {
    const HeaderSite = styled.div`
      padding: 30px;
    `;
    return (
      <HeaderSite>
        <h1>React site</h1>
      </HeaderSite>
    );
  }
}

export default Header;
