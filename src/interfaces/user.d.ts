declare interface Iuser {
  _id: string;
  saved: any[];
  name: string;
  email: string;
  createdAt: string;
  scope: "user" | "admin";
}

declare interface UserState {
  userDetails: Iuser | null;
  token: string | null;
}

declare interface UsersToken {
  token: string;
}
