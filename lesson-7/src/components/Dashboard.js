import React from "react";
import { Modal } from "./Modal";
const BUTTON_STYLES = {
  position: "relative",
  zIndex: 1,
};

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "red",
  padding: "10px",
};

export function Dashboard() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div style={BUTTON_STYLES}>
        <button onClick={() => setIsOpen(true)}>open modal</button>
        <Modal isOpen={isOpen} onClose={setIsOpen}>
          best modal !!
        </Modal>
      </div>

      <div style={OTHER_CONTENT_STYLES}>Other content</div>
    </>
  );
}
