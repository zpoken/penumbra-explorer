import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Mobile from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Tag: (props) => <div id="Tag" {...props} />,
  SingleTransactionMobile: (props) => <div id="SingleTransactionMobile" {...props} />,
  Loading: (props) => <div id="Loading" {...props} />,
  Result: (props) => <div id="Result" {...props} />,
}));

jest.mock('react-virtualized-auto-sizer', () => ({ children }: any) => children({
  height: 600, width: 600,
}));

const mockUseContext = jest.fn(() => ({
  items: [{
    slot: '812,768,640',
    signature: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
    type: [
      'System Program',
      'Transfer',
    ],
    amount: 123,
    success: true,
    time: 1615187146246,
  }],
  hasNextPage: false,
  isNextPageLoading: true,
}));

// ==================================
// unit tests
// ==================================
describe('screen: Home/Blocks/Mobile', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Mobile useContext={mockUseContext} />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});