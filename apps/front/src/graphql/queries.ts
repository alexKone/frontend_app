import { gql } from "@apollo/client";

export const ME = gql`
  query Me {
    me {
      id
      profile {
        data {
          attributes {
            firstname
            gender
          }
        }
      }
    }
  }
`;

export const GET_PROFILES = gql`
  query GetProfiles($gender: String!) {
    profiles(filters: { gender: { ne: $gender } }) {
      data {
        id
        attributes {
          firstname
          lastname
          birthdate
          gender
          user {
            data {
              attributes {
                username
              }
            }
          }
        }
      }
      meta {
        pagination {
          total
        }
      }
    }
  }
`;

export const GET_PROFILE = gql`
  query GetProfile($id: ID!) {
    profile(id: $id) {
      data {
        id
        attributes {
          firstname
          lastname
          birthdate
          gender
          information {
            data {
              attributes {
                description
                children
                hijra
                maritalStatus
                origin
                smoke
                language
                profileSearching
                sport
              }
            }
          }
          conversations {
            data {
              id
              attributes {
                messages {
                  data {
                    attributes {
                      content
                      status
                    }
                  }
                }
              }
            }
          }
          user {
            data {
              attributes {
                username
              }
            }
          }
        }
      }
    }
  }
`;
