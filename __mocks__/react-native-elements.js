import React, { PureComponent } from 'react';

function Filter() {
  return null;
}

const filtersNames = [
  'Button',
];

const filters = {};
filtersNames.forEach((name) => {
  filters[name] = Filter;
})

export default filters;
