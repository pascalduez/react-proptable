// @flow

import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Button from './Button';
import sources from '!!raw!./Button';

import PropTable from '../../src';

storiesOf('Button', module)
  .add('From component', () => (
    <div>
      <Button label="Hello" />

      <PropTable component={Button} />
    </div>
  ))
  .add('From sources', () => (
    <div>
      <Button label="Hello" />

      <PropTable component={sources} />
    </div>
  ));
