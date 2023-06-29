import * as express from "express";
import * as bcrypt from "bcrypt";
import { isLoggedIn, isNotLoggedIn } from "./middleware";
import User from "../models/user";
import * as passport from "passport";
import Post from "../models/post";

const router = express.Router();

// ts가 타입추론은 해주지만 실제 로직이 어떻게 돌아가는지 모르는 부분이기 때문에 typeerror 가 발생됨
router.get("/", isLoggedIn, (req, res) => {
  const user = req.user!.toJSON();
  delete user.password;
  return res.json(user);
});

router.post("/", async (req, res, next) => {
  try {
    const exUser = await User.findOne({
      where: {
        userId: req.body.userId,
      },
    });
    if (exUser) {
      return res.status(403).send("이미 사용 중인 아이디입니다.");
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12); // 뒤에 숫자가 길수록 보안성이 좋아지지만 암호화하는 시간도 길어짐 trade-off ~
    const newUser = await User.create({
      nickname: req.body.nickname,
      userId: req.body.userId,
      password: hashedPassword,
    });
    return res.status(200).json(newUser);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("./login", isNotLoggedIn, (req, res, next) => {
  passport.authenticate("local", (err: Error, user: User, info: { message: string }) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.message);
    }
    return req.login(user, async (loginErr: Error) => {
      try {
        if (loginErr) {
          return next(loginErr);
        }
        const fullUser = await User.findOne({
          where: { id: user.id },
          include: [
            {
              model: Post,
              as: "Posts",
              attributes: ["id"],
            },
            {
              model: User,
              as: "Followings",
              attributes: ["id"],
            },
            {
              model: User,
              as: "Followers",
              attributes: ["id"],
            },
          ],
          attributes:
            // ['id', 'nickname', 'userId'], // 위아래 둘중에 하나만 쓰면 됨
            {
              exclude: ["password"],
            },
        });
        return res.json(fullUser);
      } catch (e) {
        console.error(e);
        return next(e);
      }
    });
  })(req, res, next);
});

router.post("./logout", (req, res) => {
  req.logout((err) => {
    console.error(err);
  });
  req.session.destroy(() => {
    res.send("logged out 성공 !");
  });
});
interface IUser extends User {
  PostCount: number;
  FollowingCount: number;
  FollowerCount: number;
}
router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { id: parseInt(req.params.id, 10) },
      include: [
        {
          model: Post,
          as: "Posts",
          attributes: ["id"],
        },
        {
          model: User,
          as: "Followings",
          attributes: ["id"],
        },
        {
          model: User,
          as: "Followers",
          attributes: ["id"],
        },
      ],
      attributes: ["id", "nickname"],
    });
    if (!user) {
      return res.status(404).send("no user");
    }
    const jsonUser = user.toJSON() as IUser;
    jsonUser.PostCount = jsonUser.Posts!.length;
    jsonUser.FollowingCount = jsonUser.Followings!.length;
    jsonUser.FollowerCount = jsonUser.Followers!.length;

    return res.json(jsonUser);
  } catch (err) {
    console.error(err);
    return next(err);
  }
});

router.get("/:id/followings", isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { id: parseInt(req.params.id, 10) || (req.user && req.user.id) || 0 },
    });
    if (!user) return res.status(404).send("no user");
    const follower = await user.getFollowings({
      attributes: ["id", "nickname"],
    });
  } catch (err) {
    console.error(err);
    return next(err);
  }
});
