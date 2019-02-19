import React, { Component } from "react";
import Checkbox from "./Checkbox";
import { BasicCheckbox } from './Checkbox/Checkbox';

const OPTIONS = ["routing"];

class LogicMultiSelect extends Component {
  state = {
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    ),
    showEventsAcrossStories: false
  };

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  handleEventsAcrossStoriesChange = () => {
    this.setState(prevState => ({
      showEventsAcrossStories: !prevState.showEventsAcrossStories
    }));
  }

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
    const { children } = this.props;

    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          { this.createCheckboxes() }

          <BasicCheckbox
            label={'Show events from other stories'}
            isSelected={this.state.showEventsAcrossStories}
            onCheckboxChange={this.handleEventsAcrossStoriesChange}
          />

          { children }
          <div>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LogicMultiSelect;