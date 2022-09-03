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
    gender: 'female' | 'male';
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


export interface IFormValues {
  email: string;
  password: string;
  // label: string;
  // Age: number;
}

export interface IProfile {
  id: string,
    attributes: {
      firstname: string;
      lastname: string;
      birthdate: string,
      gender: "male" | "female",
      user: {
        data: {
          attributes: {
            username: string
          }
        }
      }
    }
}
