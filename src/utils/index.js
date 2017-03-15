// @flow
/* eslint-disable no-restricted-syntax, no-continue */
import React from 'react';
import get from 'lodash.get';
import { parse } from 'react-docgen';
import type { ReactComponent, ExtractedProps } from '../types';


export default function getPropTypes(component: ReactComponent): ExtractedProps {
  if (typeof component.__docgenInfo === 'object') {
    return fromDocgen(component);
  }

  if (typeof component === 'string') {
    return fromSource(component);
  }

  return fromReact(component);
}


function fromSource(component: string): ExtractedProps {
  let props = {};

  try {
    props = parse(component).props;
  } catch (ex) {
    // eslint-disable-next-line no-console
    console.error('Woops');
    return props;
  }

  Object.keys(props).forEach((name) => {
    if (!(name in props[name])) {
      props[name].name = name;
    }
  });

  return props;
}


export function fromDocgen(component: ReactComponent): ExtractedProps {
  const props = {};
  const docGenProps = get(component, '__docgenInfo.props');

  for (const [key, val] of Object.entries(docGenProps)) {
    props[key] = val;
    props[key].name = key;
  }

  return props;
}


export function fromReact(component: ReactComponent): ExtractedProps {
  const reactPropTypes = new Map();
  const componentPropTypes = {};

  if (!component.propTypes) {
    return componentPropTypes;
  }

  for (const [name, type] of Object.entries(React.PropTypes)) {
    reactPropTypes.set(type, name);
    // $FlowFixMe
    reactPropTypes.set(type.isRequired, name);
  }

  for (const [name, prop] of Object.entries(component.propTypes)) {
    const type = { name: reactPropTypes.get(prop) || 'custom' };
    // $FlowFixMe
    const required = typeof prop.isRequired !== 'function';
    componentPropTypes[name] = { name, type, required };
  }

  if (!component.defaultProps) {
    return componentPropTypes;
  }

  for (const [name, value] of Object.entries(component.defaultProps)) {
    if (typeof value === 'undefined') {
      continue;
    }

    if (!componentPropTypes[name]) {
      componentPropTypes[name] = { name };
    }

    componentPropTypes[name].defaultValue = { value };
  }

  return componentPropTypes;
}
