import React, { Component } from "react";
import { Button } from '../../assets/styles/common';
import { CheckboxList, CheckboxItem, CancelButton, CheckboxListTitle, ButtonContainer, ButtonWrapper } from './styles';

const BasicCheckbox = ({ label, isSelected, onCheckboxChange, name }) => (
  <label>
    <input
      type="checkbox"
      name={name}
      checked={isSelected}
      onChange={onCheckboxChange}
    />

    { label }
  </label>
)

const OPTIONS = [
  "Best Practice",
  "Citizenship",
  "Collaborative Governance",
  "De/Criminalisation",
  "Dissent",
  "Evidence",
  "Humanitarianism",
  "Human Rights",
  "Moralizing",
  "Mutual Help",
  "Public Health",
  "Security",
  "routing"
];

export class LogicMultiSelect extends Component {
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

    this.props.onSubmit(
      Object.keys(this.state.checkboxes).filter(checkbox => this.state.checkboxes[checkbox]),
      this.state.showEventsAcrossStories
    )

    this.props.onClose();
  };

  createCheckbox = option => (
    <CheckboxItem>
      <BasicCheckbox
        label={option}
        isSelected={this.state.checkboxes[option]}
        onCheckboxChange={this.handleCheckboxChange}
        key={option}
        name={option}
      />
    </CheckboxItem>
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  render() {
    const { onClose } = this.props;

    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>

          <CheckboxList>
            <CheckboxListTitle>Include:</CheckboxListTitle>
            { this.createCheckboxes() }
          </CheckboxList>

          <div>
            <BasicCheckbox
              label={'Show events from other stories'}
              isSelected={this.state.showEventsAcrossStories}
              onCheckboxChange={this.handleEventsAcrossStoriesChange}
              name={'show-other-events'}
            />
          </div>

          <ButtonContainer>
            <ButtonWrapper>
              <CancelButton onClick={onClose}>Cancel</CancelButton>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button type="submit">Save</Button>
            </ButtonWrapper>
          </ButtonContainer>
        </form>
      </div>
    );
  }
}