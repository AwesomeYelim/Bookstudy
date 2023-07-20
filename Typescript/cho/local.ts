import passport from "passport";
import { Strategy } from "passport-local";

interface Option {
  usernameField: string;
  passwordField: string;
  passReqToCallback: boolean;
}

interface Done {}
interface Callback {
  (userId: string, password: string, done: Done): void;
}
interface CallbackWithReq {
  (req: Express.Request, userId: string, password: string, done: Done): void;
}

declare class S {
  constructor(option: Option, callback: Callback);
  constructor(option: Option, callback: CallbackWithReq);
  authenticate(): void;
}

const s: S = new S(
  {
    usernameField: "userId",
    passwordField: "password",
    passReqToCallback: true,
  },
  async () => {
    try {
    } catch (err) {}
  }
);

export default () => {
  passport.use("local", s);
};
