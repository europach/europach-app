import React, { Component } from "react";
import { Button } from '../../assets/styles/common';
import { CheckboxList, CheckboxItem, CancelButton, CheckboxListTitle, ButtonContainer, ButtonWrapper, CheckboxText } from './styles';
import { LOGICS } from '../../logics/logics';

const BasicCheckbox = ({ label, isSelected, onCheckboxChange, name }) => (
  <label>
    <input
      type="checkbox"
      name={name}
      checked={isSelected}
      onChange={onCheckboxChange}
    />

    <CheckboxText>{ label }</CheckboxText>
  </label>
)

export class LogicMultiSelect extends Component {
  state = {
    checkboxes: Object.keys(LOGICS).reduce(
      (logics, {filter}) => ({
        ...logics,
        [filter]: false
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

  createCheckbox = ({title, filter}, key) => (
    <CheckboxItem key={key}>
      <BasicCheckbox
        label={title}
        isSelected={this.state.checkboxes[filter]}
        onCheckboxChange={this.handleCheckboxChange}
        key={filter}
        name={filter}
      />
    </CheckboxItem>
  );

  createCheckboxes = () => Object.keys(LOGICS).map((logicKey, index) => this.createCheckbox(LOGICS[logicKey], index));

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