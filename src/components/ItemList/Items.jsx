import React from "react";
import { useSelector, useDispatch } from "react-redux";
/** Reducers */
import {
  toggleSelectedOf,
  individualDeletion,
  selectItem,
} from "../../features/reducers/itemSlice";
/** Styles */
import { ItemStyled } from "./ItemStyled.js";
/**
 * ! Component
 * * AslanSN - 22-07-02
 * @returns COMPONENT - React
 */
const Items = () => {
  const dispatch = useDispatch();
  const list = useSelector(selectItem);
  const selected = (id) => {
    dispatch(toggleSelectedOf(id));
  };
  const deletion = (id) => {
    dispatch(individualDeletion(id));
  };

  return (
    <ul>
      {list.map((item) => (
        <ItemStyled
          className={item.isSelected ? "selected" : null}
          key={item.id}
          onClick={() => selected(item.id)}
          onDoubleClick={() => deletion(item.id)}>
          {item.content}{console.log(item)}
        </ItemStyled>
      ))}
    </ul>
  );
};

export default Items;
