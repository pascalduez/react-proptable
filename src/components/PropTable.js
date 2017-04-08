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


export default function PropTable({ title, component, className, ...extraProps }: Props) {
  const heading = title ||
    [component.displayName, 'PropTypes']
      .filter(Boolean)
      .join(' ');

  const properties: Properties = Object.values(getPropTypes(component));
  const hasProps = properties.length > 0;

  return (
    <section className={className} {...extraProps}>
      {heading &&
        <h1>{heading}</h1>}
      {hasProps
        ? <Table properties={properties} />
        : <p>Could not find any propType or type to document.</p>}
    </section>
  );
}
