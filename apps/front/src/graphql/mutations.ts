import { gql } from '@apollo/client';

export const CREATE_USER = gql `
  mutation CreateUser(
    $username: String!,
    $email: String!,
    $password: String!,
    $gender: String,
    $birthdate: Date,
    $firstname: String,
    $lastname: String
  ) {
    register(
      input: {
        username: $username,
        email: $email,
        password: $password,
        gender: $gender,
        birthdate: $birthdate,
        firstname: $firstname,
        lastname: $lastname
      }
    ) {
      jwt
      user {
        id
        email
        confirmed
        username
        profile {
          data {
            attributes {
              firstname
              lastname
              gender
            }
          }
        }
      }
    }
  }
`;

export const LOGIN = gql `
  mutation Login($email: String!, $password: String!) {
    login(input: { identifier: $email, password: $password }) {
      jwt
      user {
        id
        username
        email
        profile {
          data {
            attributes {
              gender
              firstname
              lastname
              birthdate
            }
          }
        }
      }
    }
  }
`;

export const CREATE_MESSAGE = gql `
  mutation CreateUser($content: String!, $conversationId: ID!, $profileId: ID!) {
    createMessage(data: { content: $content, conversation: $conversationId, profile: $profileId }) {
      data {
        attributes {
          content
        }
      }
    }
  }
`;
