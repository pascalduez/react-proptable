// @flow
/* eslint-disable no-restricted-syntax, no-continue */
import React from 'react';
// import { parse } from 'react-docgen';
import type { ReacComponent, ExtractedProps } from '../types';


export default function getPropTypes(component: ReacComponent): ExtractedProps {
  if (component.__docgenInfo) {
    return fromDocgen(component);
  }

  return fromReact(component);
}


// function fromSource(component: string) {
//   let props = {};
//
//   if (typeof component === 'string') {
//     props = parse(component).props;
//   }
//
//   return props;
// }


function fromDocgen(component: ReacComponent): ExtractedProps {
  const props = {};

  for (const [key, val] of Object.entries(component.__docgenInfo.props)) {
    props[key] = val;
    props[key].name = key;
  }

  return props;
}


function fromReact(component: ReacComponent): ExtractedProps {
  const reactPropTypes = new Map();
  const componentPropTypes = {};

  if (!component.propTypes) {
    return componentPropTypes;
  }

  for (const [name, type] of Object.entries(React.PropTypes)) {
    reactPropTypes.set(type, name);
    reactPropTypes.set(type.isRequired, name);
  }

  for (const [name, prop] of Object.entries(component.propTypes)) {
    const type = { name: reactPropTypes.get(prop) || 'custom' };
    const required = typeof prop.isRequired === 'function';
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
