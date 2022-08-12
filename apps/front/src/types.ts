export type ProfileList = {
  profiles: {
      data: ProfileListItem[],
      meta: {
        pagination: {
          total: number
        }
      }
    }
  }

export type ProfileListItem = {
  id: string,
  attributes: {
    firstname: string;
    lastname: string;
    birthdate: string;
    gender: 'female'|'male';
    user: {
      data: {
        attributes: {
          username: string;
        }
      }
    }
  }
}

export type AuthGoogleStateType = {
  jwt: string;
  user: GoogleUserType
};
export type GoogleUserType = {
  id: number;
  provider: string;
}
