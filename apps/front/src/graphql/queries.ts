import { gql } from "@apollo/client";

export const CURRENT_USER = gql`
  query CurrentUser {
    me {
      id
      confirmed
      username
      profile {
        data {
          attributes {
            birthdate
            firstname
            lastname
            gender
            avatar {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PROFILES = gql `
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
          address {
            data {
              attributes {
                street
                city
                country
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

export const GET_CONVERSATION_BY_PROFILE_ID = gql `
  query GetConversationByProfileId($id: ID!) {
    conversations(filters: { profiles: { id: { contains: $id } } }) {
      data {
        attributes {
          profiles {
            data {
              id
              attributes {
                firstname
                lastname
                birthdate
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
  }
`;
