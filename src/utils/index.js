import React from 'react';


export default function extractPropTypes(component) {
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
    const type = reactPropTypes.get(prop) || 'custom';
    const required = typeof prop.isRequired === 'function';
    componentPropTypes[name] = { name, type, required };
  }

  if (!component.defaultProps) {
    return componentPropTypes;
  }

  for (const [name, value] of Object.entries(component.defaultProps)) {
    if (value === undefined) {
      continue;
    }

    if (!componentPropTypes[name]) {
      componentPropTypes[name] = { name };
    }

    componentPropTypes[name].defaultValue = value;
  }

  return componentPropTypes;
}
