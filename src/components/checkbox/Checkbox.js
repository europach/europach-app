import React from "react";
import { StyledCheckbox, HiddenCheckbox } from "./styles";

export const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
  <div>
    <label>
      <HiddenCheckbox
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
      />

      <StyledCheckbox isSelected={isSelected}>
        { label }
      </StyledCheckbox>
    </label>
  </div>
);

export const BasicCheckbox = ({ label, isSelected, onCheckboxChange }) => (
  <label>
    <input
      type="checkbox"
      name={label}
      checked={isSelected}
      onChange={onCheckboxChange}
    />

    { label }
  </label>
)