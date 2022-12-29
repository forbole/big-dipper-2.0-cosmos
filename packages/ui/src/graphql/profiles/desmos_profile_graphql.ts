export const DesmosProfileDocument = /* GraphQL */ `
  query DesmosProfile($addresses: [String!]) {
    profile(where: { address: { _in: $addresses } }, limit: 20) {
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
        }
      }
      applicationLinks: applications_links(
        where: { state: { _eq: "APPLICATION_LINK_STATE_VERIFICATION_SUCCESS" } }
      ) {
        username
        creationTime: creation_time
        application
      }
      creationTime: creation_time
    }
  }
`;

// use this query if address is a link and not owner
export const DesmosProfileLinkDocument = /* GraphQL */ `
  query DesmosProfileLink($addresses: [String!]) {
    profile(where: { chain_links: { external_address: { _in: $addresses } } }) {
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
        }
      }
      applicationLinks: applications_links(
        where: { state: { _eq: "APPLICATION_LINK_STATE_VERIFICATION_SUCCESS" } }
      ) {
        username
        creationTime: creation_time
        application
      }
      creationTime: creation_time
    }
  }
`;

// use this query if using dtag
export const DesmosProfileDtagDocument = /* GraphQL */ `
  query DesmosProfileDtag($dtag: String) {
    profile(where: { dtag: { _ilike: $dtag } }, limit: 20) {
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
        }
      }
      applicationLinks: applications_links(
        where: { state: { _eq: "APPLICATION_LINK_STATE_VERIFICATION_SUCCESS" } }
      ) {
        username
        creationTime: creation_time
        application
      }
      creationTime: creation_time
    }
  }
`;
