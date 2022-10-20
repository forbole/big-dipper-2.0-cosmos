export const LatestBlockHeightListenerDocument = /* GraphQL */`
  subscription LatestBlockHeightListener($offset: Int = 0) {
    height: block(order_by: {slot: desc}, limit: 1, offset: $offset) {
      slot
    }
  }
`;

export const LatestBlockHeightDocument = /* GraphQL */`
  query LatestBlockHeight($offset: Int = 0) {
    height: block(order_by: {slot: desc}, limit: 1, offset: $offset) {
      slot
    }
  }
`;
