/* eslint-disable */

// export const TxByAddressDocument = /* GraphQL */`
//   query TxByAddress($address: _text, $endSlot: bigint, $startSlot: bigint, $limit: Int = 50, $offset: Int = 0) {
//     instructions: instructions_by_address_aggregate(
//       args: {addresses: $address, programs: "{}", end_slot: $endSlot, start_slot: $startSlot},
//       limit: $limit,
//       offset: $offset,
//       order_by: {slot: desc, tx_signature: asc},
//       distinct_on: tx_signature
//     ) {
//       nodes {
//         transaction {
//           signature
//           slot
//           success
//           numInstructions: num_instructions
//           block {
//             timestamp
//           }
//         }
//       }
//     }
//   }
// `;

export const TxByAddressDocument = /* GraphQL */`
query TxByAddress($address: String!, $current: String! = "", $limit: Int! = 50) {
  transactionsByAddress: transactions_by_address_2(args: {target: $address, current: $current, limit: $limit}, order_by: {slot: desc, index: desc}) {
    signature
    slot
    success
    numInstructions: num_instructions
    block {
      timestamp
    }
  }
}
`;

export const TxByAddressCountDocument = /* GraphQL */`
  query TxByAddressCount($address: _text, $endSlot: bigint, $startSlot: bigint) {
    txCount: instructions_by_address_aggregate(args: {addresses: $address, programs: "{}", end_slot: $endSlot, start_slot: $startSlot}, distinct_on: tx_signature) {
      aggregate {
        count
      }
    }
  }
`;
