import React from "react";
import styled from "styled-components";

const Li = styled.li``;
const Div = styled.div``;

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
          checked={isDone}
          onChange={toggleCheckbox}
          type="checkbox"
        ></input>
        <span>{children}</span>
        <button onClick={onDelete}>Delete</button>
      </Div>
    </Li>
  );
};

export default TodoItem;
