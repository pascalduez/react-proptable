// @flow
// import React from 'react';


export type ReacComponent = {
  propTypes: Object,
  defaultProps: Object,
  displayName: string,
  __docgenInfo: {
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
};

export type ExtractedProps = {
  [key: string]: Property,
};

export type Properties = Array<Property>;
