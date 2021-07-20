import React, { Component } from "react";
import { Form } from "./Components/Form/Form";
import { DropDownMenu } from "./Components/DropdownMenu/DropdownMenu";
import { Modal } from "./Components/Modal/Modal";
class App extends Component {
  state = { data: {}, openModal: false, isVisible: false };

  getCurrentFormData = (data) => {
    const formSuccess = Object.entries(data).every(
      (formElement) => formElement[1].length > 0
    );
    if (formSuccess) {
      this.setState({ data, openModal: true });
    }
  };

  confirmSubmit = () => {
    console.log("confirm modal ");
    this.setState({ openModal: false, isVisible: false });
    localStorage.setItem("formData", JSON.stringify(this.state.data));
  };

  toggle = () => {
    this.setState((prevState) => ({ isVisible: !prevState.isVisible }));
  };

  render() {
    const { openModal, data, isVisible } = this.state;
    return (
      <>
        <DropDownMenu isVisible={isVisible} toggle={this.toggle}>
          <Form onSubmit={this.getCurrentFormData} />
        </DropDownMenu>
        <Modal openModal={openModal} confirmSubmit={this.confirmSubmit}>
          {data.access?.map((elem) => (
            <h2 key={elem}>{elem}</h2>
          ))}
        </Modal>
      </>
    );
  }
}

export default App;
