import React from 'react';
import { DateRedThin } from '../../assets/styles/common';
import { DateContainer } from './styles';

export const DateRange = (props) => {
  const { startDate, endDate } = props;

  const buildStartDate = () => (
    <DateContainer margin='0 8px 0 0'>{startDate}</DateContainer>
  )

  const buildEndDate = () => (
    <DateContainer margin='0 0 0 8px'>{endDate}</DateContainer>
  )

  const dateDefined = date => (
    date === "" || !date ? false : true
  )

  const buildSeperator = () => '-'

  return (
    <DateRedThin>
      { dateDefined(startDate) && buildStartDate() }
      { dateDefined(startDate) && dateDefined(endDate) && buildSeperator() }
      { dateDefined(endDate) && buildEndDate() }
    </DateRedThin>
  )
}