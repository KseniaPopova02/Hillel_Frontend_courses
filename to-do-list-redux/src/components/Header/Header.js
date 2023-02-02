import React from "react";
import styled from "styled-components";
import CreateIcon from "@mui/icons-material/Create";

const Title = styled.div`
  display: flex;
  justify-content: center;
`;
const TitleText = styled.h1`
  margin: 20px;
  font-size: 35px;
`;

const Header = () => {
  return (
    <Title>
      <TitleText>Todo list</TitleText>
      <CreateIcon />
    </Title>
  );
};

export default Header;
