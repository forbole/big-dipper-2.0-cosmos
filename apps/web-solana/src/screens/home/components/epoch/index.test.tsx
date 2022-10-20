import React from 'react';
import renderer from 'react-test-renderer';
import {
  MockTheme,
  wait,
} from '@tests/utils';
import { createMockClient } from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import {
  EpochDocument,
} from '@graphql/types';
import Epoch from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);

jest.mock('@components', () => ({
  Box: (props) => <div id="box" {...props} />,
}));

jest.mock('next-translate/Trans', () => (
  (props) => <div id="Trans" {...props} />
));

const mockEpoch = jest.fn().mockResolvedValue({
  data: {
    averageSlotTimePerHour: [
      {
        averageTime: 0.5312172714745062,
      },
    ],
    block: [
      {
        slot: 110782714,
      },
    ],
  },
});

// ==================================
// unit tests
// ==================================
describe('screen: Home/Epoch', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();
    mockClient.setRequestHandler(
      EpochDocument,
      mockEpoch,
    );

    let component;
    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockTheme>
            <Epoch />
          </MockTheme>
        </ApolloProvider>,
      );
    });

    await wait();

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ className: 'makeStyles-chartLabel' }).children[2]).toEqual('256');
    expect(component.root.findByProps({ className: 'makeStyles-chartPercentLabel' }).children[0]).toEqual('44');
    expect(component.root.findByProps({ id: 'Trans' }).props.values.hours).toEqual(33);
    expect(component.root.findByProps({ id: 'Trans' }).props.values.minutes).toEqual(30);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
