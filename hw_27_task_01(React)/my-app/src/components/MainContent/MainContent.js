import styled from "styled-components";
import { Component } from "react";

class MainContent extends Component {
  render() {
    const MainContent = styled.div`
      padding: 30px;
      border: 2px solid #303247;
      max-width: 790px;
    `;
    return (
      <MainContent>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          consequuntur corrupti. Rem eum accusamus voluptatibus, inventore enim
          cupiditate ad nostrum in quisquam facilis modi asperiores veniam,
          rerum nobis? Consequatur ipsa illo in rem deleniti, quasi officiis
          dolore nostrum quo minus magnam reprehenderit dicta ratione itaque
          laboriosam nam quia! Ullam deserunt at nihil odio nemo exercitationem
          ab quasi adipisci delectus?
        </p>
      </MainContent>
    );
  }
}

export default MainContent;
