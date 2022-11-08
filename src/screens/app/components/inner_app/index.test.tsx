import React from 'react';
import {
  RecoilRoot,
} from 'recoil';
import renderer from 'react-test-renderer';
import {
  MockTheme, wait,
} from '@tests/utils';
import {
  createMockClient, createMockSubscription,
} from 'mock-apollo-client';

import { ApolloProvider } from '@apollo/client';
import {
  BlocksListenerDocument,
  BlocksDocument,
} from '@graphql/types/general_types';
import InnerApp from '.';
// import Blocks from '.';
// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// // // ==================================
// // // mocks
// // // ==================================
// jest.mock('./hooks', () => ({
//   useChainHealthCheck: (props) => <div id="useChainHealthCheck" {...props} />,
// }));

// const mockI18n = {
//   t: (key: string) => key,
//   lang: 'en',
// };
// jest.mock('next-translate/useTranslation', () => () => mockI18n);

// const toggleNavMenus = jest.fn();
// const mockI18n = {
//   t: (key: string) => key,
//   lang: 'en',
// };
// // jest.mock('@material-ui/core/Drawer', () => (props) => <div id="drawer" {...props} />);
// jest.mock('next-translate/useTranslation', () => () => mockI18n);
// jest.mock('next/router', () => ({
//   useRouter: () => ({
//     locales: ['en', 'zh'],
//     pathname: '/app/home',
//     query: {
//       key: 'val',
//     },
//   }),
// }));

const mockClient = createMockClient();

jest.mock('./hooks', () => ({
  useChainHealthCheck: () => mockClient,
}
));

// const mockI18n = {
//   t: (key: string) => key,
//   lang: 'en',
// };
// jest.mock('next-translate/useTranslation', () => () => mockI18n);

// jest.mock('react-toastify', () => ({
//   toast: jest.fn(),
// }));

// jest.mock('./hooks', () => ({
//   useChainHealthCheck: () => {
//     return {
//       chainActive: true,
//       isClient: false,
//     };
//   },
// }
// ));
// const mockClient = createMockClient();

// // jest.mock('next-translate/useTranslation', () => () => ({
// //   lang: 'en',
// // }));
// jest.mock('@src/graphql/client', () => ({
//   useApollo: () => mockClient,
// }));

// // ==================================
// // unit tests
// // ==================================
// describe('screen: App/InnerApp', () => {
//   it('matches snapshot', () => {
//     const component = renderer.create(
//       <RecoilRoot>
//         <MockTheme>
//           <InnerApp
//             router={{} as any}
//             Component={() => <div id="component" />}
//             pageProps={{
//               props: 'props',
//             }}
//           />
//         </MockTheme>
//       </RecoilRoot>,
//     );
//     const tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });
// });

// const mockClient = createMockClient();

// // jest.mock('next-translate/useTranslation', () => () => ({
// //   lang: 'en',
// // }));
// jest.mock('@src/graphql/client', () => ({
//   useApollo: () => mockClient,
// }));

// const mockI18n = {
//   t: (key: string) => key,
//   lang: 'en',
// };

// jest.mock('next-translate/useTranslation', () => () => mockI18n);

// ==================================
// unit tests
// ==================================
// describe('screen: _app/InnerApp', () => {
//   it('matches snapshot', () => {
//     renderer.act(() => {
//       component = renderer.create(
// <InnerApp
//   router={{
//   } as any}
//   Component={() => <div id="component" />}
//   pageProps={{
//     props: 'props',
//   }}
// />,
//       );
//       const tree = component.toJSON();
//       expect(tree).toMatchSnapshot();
//     });

//     afterEach(() => {
//       jest.clearAllMocks();
//     });
//   });
// });

// // ==================================
// // unit tests
// // ==================================
// describe('screen: _app/InnerApp', () => {
//   beforeEach(() => {
//     component = renderer.create(
//       <RecoilRoot>
//         <MockTheme>
// <InnerApp
//   router={{
//   } as any}
//   Component={() => <div id="component" />}
//   pageProps={{
//     props: 'props',
//   }}
// />
//         </MockTheme>
//       </RecoilRoot>,
//     );
//   });

//   it('it renders', () => {
//     const tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });

// afterEach(() => {
//   jest.clearAllMocks();
// });

// const mockBlocksListenerDocument = {
//   data: {
//     blocks: [
//       {
//         height: 379643,
//         txs: 2,
//         hash: 'D0243447726B8BD7AE94BF4F98E536A647959194E870AB8566CB833A3CC847F6',
//         timestamp: '2021-05-24T05:28:05.839448',
//         validator: {
//           validatorInfo: {
//             operatorAddress: 'desmosvaloper1h5f3dywec65v9qulxkmcv3e6yujyh3zm0ghhl3',
//           },
//         },
//       },
//     ],
//   },
// };

// const mockBlocksDocument = jest.fn().mockResolvedValue({
//   data: {
//     blocks: [
//       {
//         height: 379634,
//         txs: 2,
//         hash: '017E26F5C11E4C140AA1836E40315C00253EDBC9D69A475A4ABEDDD1FF0FE967',
//         timestamp: '2021-05-24T05:27:11.092332',
//         validator: {
//           validatorInfo: {
//             operatorAddress: 'desmosvaloper1zm3l7p8n5dxqeadsfxy3rd0j3c2knnx3chg77a',
//             self_delegate_address: 'desmos1zm3l7p8n5dxqeadsfxy3rd0j3c2knnx3x6q250',
//           },
//           validatorDescriptions: [
//             {
//               moniker: 'Simply Staking',
//               identity: null,
//             },
//           ],
//         },
//       },
//     ],
//     total: {
//       aggregate: {
//         count: 379619,
//       },
//     },
//   },
// });

// ==================================
// unit tests
// ==================================
describe('screen: _app/InnerApp', () => {
  it('matches snapshot', () => {
    // const mockClient = createMockClient();
    // const mockSubscription = createMockSubscription();

    // mockClient.setRequestHandler(
    //   BlocksListenerDocument,
    //   () => mockSubscription,
    // );

    // mockClient.setRequestHandler(
    //   BlocksDocument,
    //   mockBlocksDocument,
    // );

    // let component;

    renderer.act(() => {
      component = renderer.create(
        // {/* <ApolloProvider client={mockClient}> */}
        // <MockTheme>
        <InnerApp
          router={{
          } as any}
          Component={() => <div id="component" />}
          pageProps={{
            props: 'props',
          }}
        />,
        // </MockTheme>
        //  {/* </ApolloProvider> */}
      //  {/* </RecoilRoot>, */}
      );
    });
    // await wait();

    // renderer.act(() => {
    //   mockSubscription.next(mockBlocksListenerDocument);
    // });

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
