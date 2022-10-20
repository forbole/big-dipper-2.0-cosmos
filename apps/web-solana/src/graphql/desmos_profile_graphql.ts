export const DesmosProfileDocument = /* GraphQL */`
query DesmosProfile($address: String) {
  profile(where: {address: {_eq: $address}}, limit: 1) {
    address
    bio
    dtag
    nickname
    profilePic: profile_pic
    coverPic: cover_pic
    chainLinks: chain_links {
      creationTime: creation_time
      externalAddress: external_address
      chainConfig: chain_config {
        name
        id
      }
    }
    applicationLinks: application_links (where: {state: {_eq: "APPLICATION_LINK_STATE_VERIFICATION_SUCCESS"}}){
      username
      creationTime: creation_time
      application
    }
    creationTime: creation_time
  }
}
`;

// use this query if address is a link and not owner
export const DesmosProfileLinkDocument = /* GraphQL */`
query DesmosProfileLink($address: String) {
  profile (where: {chain_links: {external_address: {_eq: $address}}}){
    address
    bio
    dtag
    nickname
    profilePic: profile_pic
    coverPic: cover_pic
    chainLinks: chain_links {
      creationTime: creation_time
      externalAddress: external_address
      chainConfig: chain_config {
        name
        id
      }
    }
    applicationLinks: application_links (where: {state: {_eq: "APPLICATION_LINK_STATE_VERIFICATION_SUCCESS"}}){
      username
      creationTime: creation_time
      application
    }
    creationTime: creation_time
  }
}
`;
