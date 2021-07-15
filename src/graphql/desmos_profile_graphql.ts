export const DesmosProfileDocument = /* GraphQL */`
query DesmosProfile($address: String) {
  profile(where: {address: {_eq: $address}}, limit: 1) {
    address
    bio
    dtag
    nickname
    profilePic: profile_pic
    chainLinks: chain_links {
      creationTime: creation_time
      externalAddress: external_address
      chainConfigId: chain_config_id
    }
    applicationLinks: application_links {
      username
      creationTime: creation_time
      application
    }
  }
}
`;

// use this query if address is a link and not owner
export const DesmosProfileLinkDocument = /* GraphQL */`
query DesmosProfileLink($address: String) {
  profile {
    address
    bio
    dtag
    nickname
    profilePic: profile_pic
    chainLinks: chain_links (where: { user_address: {_eq: $address}}){
      creationTime: creation_time
      externalAddress: external_address
      chainConfigId: chain_config_id
    }
    applicationLinks: application_links {
      username
      creationTime: creation_time
      application
    }
  }
}
`;
