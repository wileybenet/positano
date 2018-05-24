import React from 'react';
import Input from './Input';

const YES = 'yes';
const NO = 'no';

const YesNo = ({ yes = 'Yes', no = 'No', checkedValue, onChange, error }) => (
  <div>
    <Input
      name={yes}
      type="radio"
      value={YES}
      checked={checkedValue === YES}
      onChange={evt => onChange(evt, YES)}
    />
    <Input
      name={no}
      type="radio"
      value={NO}
      checked={checkedValue === NO}
      onChange={evt => onChange(evt, NO)}
      error={error}
    />
  </div>
);

export default YesNo;
