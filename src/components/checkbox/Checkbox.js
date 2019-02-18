import React from "react";
import { Button } from "./styles";

const CheckboxButton = ({ label, isSelected }) => (
  <Button isSelected={isSelected}>
    { label }
  </Button>
);

export const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
  <div>
    <label>
      <input
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
      />

      <CheckboxButton label={label} isSelected={isSelected} />
    </label>
  </div>
);