import ReactDOM from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#fff",
  padding: "50px",
  zIndex: 1000,
};

const MODAL_OVERLAY = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0,0,0, .7)",
  zIndex: 1000,
};

export const Modal = ({ isOpen, children, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div style={MODAL_OVERLAY}>
      <div style={MODAL_STYLES}>
        <div>{children}</div>
        <button onClick={() => onClose(false)}>close modal</button>
      </div>
    </div>,
    document.getElementById("modal")
  );
};
