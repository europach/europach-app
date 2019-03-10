import React from 'react';
import { DateRedThin } from '../../assets/styles/common';
import Moment from 'react-moment';

export const DateRange = (props) => {
  const { startDate, endDate } = props;

  const buildStartDate = () => (
    <Moment format="D MMM YYYY" withTitle>
      { startDate }
    </Moment>
  )

  const buildEndDate = () => (
    <Moment format="D MMM YYYY" withTitle>
      { endDate }
    </Moment>
  )

  const buildSeperator = () => (
    <span>
      &nbsp;
      -
      &nbsp;
    </span>
  )

  const dateDefined = date => (
    date === "" || !date ? false : true
  )

  return (
    <DateRedThin>
      { dateDefined(startDate) && buildStartDate() }
      { dateDefined(startDate) && dateDefined(endDate) && buildSeperator() }
      { dateDefined(endDate) && buildEndDate() }
    </DateRedThin>
  )
}