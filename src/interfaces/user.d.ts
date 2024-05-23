declare interface Iuser {
  _id: string;
  saved: any[];
  name: string;
  email: string;
  createdAt: string;
  scope: "user" | "admin";
}

declare interface OauthIuser {
  email: string;
  picture: string | undefined;
  name: string;
  exp: Date;
  expires_in: Date;
}

declare interface UserState {
  token: string | null;
  userType: null | "google_user" | "app_user";
}
