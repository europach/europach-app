import React from 'react'
import { StyledCheckbox, HiddenCheckbox } from './styles'

export const FakeCheckbox = ({ label, isSelected, onCheckboxChange }) => (
  <div>
    <label>
      <HiddenCheckbox
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
      />

      <StyledCheckbox isSelected={isSelected}>{label}</StyledCheckbox>
    </label>
  </div>
)

export const BasicCheckbox = ({
  label,
  isSelected,
  onCheckboxChange,
  name,
}) => (
  <label>
    <input
      type="checkbox"
      name={name}
      checked={isSelected}
      onChange={onCheckboxChange}
    />

    {label}
  </label>
)
