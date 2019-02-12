import React, { Component } from "react";
import Checkbox from "./Checkbox";

const OPTIONS = ["base", "routing", "library", "programming"];

class LogicMultiSelect extends Component {
  state = {
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    )
  };

  selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      this.setState(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected
        }
      }));
    });
  };

  selectAll = () => this.selectAllCheckboxes(true);
  deselectAll = () => this.selectAllCheckboxes(false);

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    this.props.onChange(
      Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
    )
  };

  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          {this.createCheckboxes()}

          <div>
            <button type="button" onClick={this.selectAll}>Check All</button>
            <button type="button" onClick={this.deselectAll}>Check None</button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LogicMultiSelect;