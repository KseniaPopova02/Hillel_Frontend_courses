import React from "react";
import { changeTabs } from "../../actions/todosActions";
import { useDispatch } from "react-redux";

const Menu = () => {
  const dispatch = useDispatch();

  const handleClickOnTabs = (id) => {
    return () => {
      dispatch(changeTabs(id));
    };
  };

  return (
    <div>
      <button onClick={handleClickOnTabs("ALL")}>ALL</button>
      <button onClick={handleClickOnTabs("IN_PROGRESS")}>IN PROGRESS</button>
      <button onClick={handleClickOnTabs("COMPLETED")}>COMPLETED</button>
    </div>
  );
};

export default Menu;
