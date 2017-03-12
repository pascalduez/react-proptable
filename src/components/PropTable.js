// @flow
import React from 'react';
import Table from './Table';
import getPropTypes from '../utils';
import type { ReactComponent, Properties } from '../types';

type Props = {
  title?: string,
  component: ReactComponent,
  className?: string,
};

const PropTable = ({ title, component, className, ...extraProps }: Props) => {
  const heading = title || `${component.displayName || ''} PropTypes`;
  const properties: Properties = Object.values(getPropTypes(component));

  return (
    <section className={className} {...extraProps}>
      {heading &&
        <h1>{heading}</h1>}
      <Table properties={properties} />
    </section>
  );
};


export default PropTable;
