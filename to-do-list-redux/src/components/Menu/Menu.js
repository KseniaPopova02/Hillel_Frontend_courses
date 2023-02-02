import React from "react";
import { changeTabs } from "../../actions/todosActions";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";

const Menu = () => {
  const dispatch = useDispatch();

  const handleClickOnTabs = (id) => {
    return () => {
      dispatch(changeTabs(id));
    };
  };

  return (
    <div>
      <Button onClick={handleClickOnTabs("ALL")}>ALL</Button>
      <Button onClick={handleClickOnTabs("IN_PROGRESS")}>IN PROGRESS</Button>
      <Button onClick={handleClickOnTabs("COMPLETED")}>COMPLETED</Button>
    </div>
  );
};

export default Menu;
