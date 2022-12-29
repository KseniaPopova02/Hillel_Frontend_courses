import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border: 5px solid #f56eb3;
  border-radius: 5px;
  padding: 5px;
  &:focus {
    border-color: #7f167f;
    outline: none;
  }
`;

const StyledBtn = styled.button`
  background-color: #fff;
  border-radius: 5px;
  border: 5px solid #f56eb3;
  margin-left: 40px;
  &:hover {
    border-color: #7f167f;
  }
`;

const StyledContainer = styled.form`
  display: flex;
  justify-content: center;
  padding: 30px;
`;

const Input = ({ getUserData }) => {
  const [inputValue, setInputValue] = useState("");

  const changeValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <StyledContainer
      onSubmit={(e) => {
        e.preventDefault();
        getUserData(inputValue);
      }}
    >
      <StyledInput
        value={inputValue}
        onChange={changeValue}
        type="text"
        placeholder="UserName"
      />
      <StyledBtn>Search</StyledBtn>
    </StyledContainer>
  );
};

export default Input;
