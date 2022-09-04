type ConversationEntityType = {
  id: string;
  attributes: {
    messages: {
      data: Array < MessageEntityType > ;
    };
  };
};

type MessageEntityType = {
  attributes: {
    content: string;
    status: string;
  };
};

export type ProfileListType = {
  profiles: {
    data: ProfileListItemType[];
    meta: {
      pagination: {
        total: number;
      };
    };
  };
};

export type ProfileListItemType = {
  id: string;
  attributes: {
    firstname: string;
    lastname: string;
    birthdate: string;
    gender: 'female' | 'male';
    user: {
      data: {
        attributes: {
          username: string;
        };
      };
    };
  };
};

export type AuthGoogleStateType = {
  jwt: string;
  user: GoogleUserType;
};
export type GoogleUserType = {
  id: number;
  provider: string;
};

export interface IFormValues {
  email: string;
  password: string;
  // label: string;
  // Age: number;
}

export interface IProfile {
  id: string;
  attributes: {
    firstname: string;
    lastname: string;
    birthdate: string;
    gender: 'male' | 'female';
    user: {
      data: {
        attributes: {
          username: string;
        };
      };
    };
  };
}

export type CurrentUserType = {
  confirmed: boolean;
  id: string;
  username: string;
  profile: {
    data: {
      id: string;
      attributes: {
        avatar ? : {
          data ? : string | null;
        };
        birthdate: string;
        lastname: string;
        gender: string;
      };
    };
  };
};

export type GetProfileType = {
  profile: {
    data: {
      id: string;
      attributes: {
        birthdate: string;
        firstname: string;
        lastname: string;
        gender: string;

        user: {
          data: {
            attributes: {
              username: string;
            };
          };
        };

        information: {
          data: {
            attributes: {
              children: number;
              description: string;
              hijra: string;
              maritalStatus: string;
              language: Array < string > ;
              origin: Array < string > ;
              profileSearch: string;
              smoke: boolean;
              sport: string;
            };
          };
        };


        address?: {
          data: {
            attributes: {
              street: string;
              city: string;
              country: string;
            };
          };
        };

        conversations: {
          data: Array < ConversationEntityType > ;
        };
      };
    };
  };
};
