import * as passport from "passport";
import User from "../models/user";
import { local } from "./local";

export default () => {
  // 로그인 할때 한번 실행
  passport.serializeUser((user, done) => {
    done(null, (user as User).id);
  });
  // 모든 요청시마다 매번실행
  passport.deserializeUser(async (id: number, done) => {
    try {
      const user = await User.findOne({
        where: { id },
      });
      return done(null, user); //req.user
    } catch (err) {
      console.error(err);
      return done(err);
    }
  });

  local();
};
