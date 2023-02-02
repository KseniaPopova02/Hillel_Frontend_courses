import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";

const Li = styled.li`
  margin: 15px 0;
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Text = styled.span`
  font-weight: bold;
  font-size: 20px;
`;

const TodoItem = ({ children, isDone, id, handleDelete, toggleStatus }) => {
  const onDelete = () => {
    handleDelete(id);
  };

  const toggleCheckbox = () => {
    toggleStatus(id);
  };
  return (
    <Li>
      <Div>
        <input
          color="default"
          checked={isDone}
          onChange={toggleCheckbox}
          type="checkbox"
        ></input>
        <Text>{children}</Text>
        <Button variant="contained" onClick={onDelete}>
          Delete
        </Button>
      </Div>
    </Li>
  );
};

export default TodoItem;
