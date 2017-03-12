// @flow
// import React from 'react';


export type ReactComponent = {
  name: string,
  displayName: string,
  defaultProps?: Object,
  propTypes?: {
    [key: string]: Function,
  },

  __docgenInfo?: {
    description: string,
    props: Object,
  },
};

export type Property = {
  name: string,
  type: {
    name: string,
  },
  defaultValue?: {
    value: string,
  },
  required?: boolean,
  description?: string,

  flowType?: {
    name: string,
    type?: string,
    row?: string,
    elements?: Array<Object>,
    signature?: Object,
  },
};

export type ExtractedProps = {
  [key: string]: Property,
};

// $FlowFixMe
export type Properties = Array<Property>;
