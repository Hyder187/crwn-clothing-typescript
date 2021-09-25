export interface IUser {
  displayName: string;
  email: string;
}

export interface IUserAction {
  type: string;
  payload: IUser | string | null;
}

export interface IUserState {
  currentUser: IUser | null;
  error: string | null;
}

export interface IEmailPassword {
  email: string;
  password: string;
}
