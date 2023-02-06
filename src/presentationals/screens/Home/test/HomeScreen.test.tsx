import * as React from 'react';
import {render} from '@testing-library/react-native';
import {HomeScreen} from '../HomeScreen';

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));
describe('AutoHeightWebViewComponent', () => {
  it('should match snapshot', () => {
    const tree = render(<HomeScreen />);
    expect(tree).toMatchSnapshot();
  });
});
