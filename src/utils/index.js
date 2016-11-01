import React from 'react';


export default function getPropTypes(component) {
  if (component.__docgenInfo) {
    return fromDocgen(component);
  }

  return fromReact(component);
}


function fromDocgen(component) {
  const props = {};

  for (const [key, val] of Object.entries(component.__docgenInfo.props)) {
    props[key] = val;
    props[key].name = key;
  }

  return props;
}


function fromReact(component) {
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
