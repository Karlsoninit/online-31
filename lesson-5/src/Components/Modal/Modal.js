import React from "react";
import { Backdrop, Container } from "./Modal.styles";
import { Button } from "../Button/Button";

export const Modal = ({ children, openModal, confirmSubmit }) => {
  return openModal ? (
    <Backdrop>
      <Container>
        <h2>вы уверены что хотите дать права на:</h2>
        {children}
        <Button text="отклонить" />
        <Button text="подтведить" toggle={confirmSubmit} />
      </Container>
    </Backdrop>
  ) : null;
};
