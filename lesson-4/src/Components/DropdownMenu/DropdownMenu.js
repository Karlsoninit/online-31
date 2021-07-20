import React, { Component } from "react";
import { Button } from "../Button/Button";

export class DropDownMenu extends Component {
  state = { isVisible: false };

  toggle = () => {
    this.setState((prevState) => ({ isVisible: !prevState.isVisible }));
  };

  render() {
    return (
      <div>
        {this.state.isVisible && this.props.children}
        <Button toggle={this.toggle} isVisible={this.state.isVisible} />
      </div>
    );
  }
}
