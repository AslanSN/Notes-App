import React from "react";
import { useDispatch } from "react-redux";
//Components
import { PrimaryButtonStyled } from "../Styled/Buttons/PrimaryButtonStyled";
import { SecondaryButtonStyled } from "../Styled/Buttons/SecondaryButtonStyled";
import { InputStyled } from "../Styled/InputStyled";
import { Overlay } from "../Styled/OverlayStyled";
//Reducers
import { toggleIsOpen } from "../../features/reducers/modalSlice";
import { addItem } from "../../features/reducers/itemSlice.js";
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
