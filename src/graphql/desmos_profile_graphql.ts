export const DesmosProfileDocument = /* GraphQL */`
query DesmosProfile($address: String) {
  profile(where: {address: {_eq: $address}}, limit: 1) {
    address
    bio
    dtag
    nickname
    profilePic: profile_pic
  }
}
`;
