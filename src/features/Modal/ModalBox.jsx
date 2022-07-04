import React from "react";
import { useDispatch } from "react-redux";
//Components
import { PrimaryButtonStyled } from "../Static/Styled/Buttons/PrimaryButtonStyled";
import { SecondaryButtonStyled } from "../Static/Styled/Buttons/SecondaryButtonStyled";
import { InputStyled } from "../Static/Styled/InputStyled";
import { Overlay } from "../Static/Styled/OverlayStyled";
//Reducers
import { toggleIsOpen } from "../reducers/modalSlice.js";
import { addItem } from "../reducers/itemSlice.js";
//Styles
import "./ModalBoxStyles.scss";
/**
 * ! Component
 * * AslanSN - 22-07-02
 * @returns COMPONENT - React
 */
const ModalBox = () => {
  const dispatch = useDispatch();
  /**
   * ! Submitter
   * ? Submits an item received from the input
   * @param {object} evt - Event
   */
  const submitItem = (evt) => {
    evt.preventDefault();

    const { target } = evt;
    const content = target.item.value;
    target.item.value = "";

    dispatch(addItem(content));
    dispatch(toggleIsOpen());
  };

  return (
    <Overlay>
      <card className="modal-card">
        <div className="modal-box">
          <p>Add item to list</p>
          <form onSubmit={submitItem}>
            <InputStyled
              name="item"
              type="text"
              placeholder="Type your item here..."
            />
            <footer>
              <PrimaryButtonStyled type="submit">ADD</PrimaryButtonStyled>
              <SecondaryButtonStyled onClick={() => dispatch(toggleIsOpen())}>
                CANCEL
              </SecondaryButtonStyled>
            </footer>
          </form>
        </div>
      </card>
    </Overlay>
  );
};

export default ModalBox;
