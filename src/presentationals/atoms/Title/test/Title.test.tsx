import React from 'react';
import {render} from '@testing-library/react-native';
// import { render } from 'react-native-testing-library'

import {Title} from '../Title';

describe('Title', () => {
  it('renders the title', () => {
    const title = 'Test Title';
    const {getByText} = render(<Title title={title} />);
    const titleText = getByText(title);
    expect(titleText).toBeDefined();
  });

  it('matches snapshot', () => {
    const title = 'Test Title';
    const {toJSON} = render(<Title title={title} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
