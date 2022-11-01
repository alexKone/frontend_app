import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser($email: String!, $password: String!, $username: String, $birthdate: Date, $gender: String) {
    register(
      input: {
        email: $email
        password: $password
        username: $username
        birthdate: $birthdate
        gender: $gender
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

export const LOGIN = gql`
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

export const CREATE_MESSAGE = gql`
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
