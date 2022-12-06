import styled from "styled-components";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Button from "../components/Button/Button";
import MainContent from "../components/MainContent/MainContent";
import "./style/App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = { isDark: false };
    this.handler = this.handler.bind(this);
  }
  handler() {
    this.setState({
      isDark: !this.state.isDark,
    });
  }
  render() {
    const Container = styled.div`
      max-width: 1200px;
      margin: 0 auto;
      justify-content: space-between;
      background-color: ${this.state.isDark ? "#000000" : "#FFFFFF"};
      color: ${this.state.isDark ? "#FFFFFF" : "#000000"};
    `;

    const WrapperHeaderButton = styled.div`
      display: flex;
      justify-content: space-between;
    `;

    const WrapperMainContent = styled.div`
      display: flex;
      justify-content: space-between;
    `;
    return (
      <Container>
        <WrapperHeaderButton>
          <Header></Header>
          <Button handler={this.handler} dark={this.state.isDark}></Button>
        </WrapperHeaderButton>
        <WrapperMainContent>
          <MainContent></MainContent>
          <Nav></Nav>
        </WrapperMainContent>
      </Container>
    );
  }
}

export default App;
