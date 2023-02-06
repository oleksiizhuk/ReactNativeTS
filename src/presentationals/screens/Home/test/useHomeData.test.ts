import {renderHook} from '@testing-library/react-native';
import {useHomeData} from '../hook';
import {act} from 'react-test-renderer';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));
describe('useHomeData', () => {
  it('returns onNavigationPress', () => {
    const {result} = renderHook(() => useHomeData());

    expect(result).toMatchSnapshot();
  });

  it('should navigation to BottomTabNavigator', () => {
    const {result} = renderHook(() => useHomeData());

    act(() => result.current.onNavigationPress());
    expect(mockNavigate).toHaveBeenCalled();
  });
});
