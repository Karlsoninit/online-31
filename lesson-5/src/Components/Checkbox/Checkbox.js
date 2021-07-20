import React, { Component } from "react";

export class Checkbox extends Component {
  state = {
    isChecked: false,
  };

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;

    this.setState(({ isChecked }) => ({
      isChecked: !isChecked,
    }));

    handleCheckboxChange(label);
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    // console.log(`prevState`, prevState);
    // console.log(`prevProps`, prevProps);
    // console.log(`checked`, this.props.checked);
    if (prevProps.checked !== this.props.checked) {
      this.setState({ isChecked: this.props.checked });
    }
  }

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <div>
        <label>
          <input
            type="checkbox"
            value={label}
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
          />
          {label}
        </label>
      </div>
    );
  }
}
