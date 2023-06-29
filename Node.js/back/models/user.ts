import {
  Model,
  DataTypes,
  BelongsToManyGetAssociationsMixin,
  HasManyGetAssociationsMixin,
  BelongsToManyAddAssociationMixin,
  BelongsToManyRemoveAssociationMixin,
} from "sequelize";
import { dbType } from ".";
import Post from "./post";
import { sequelize } from "./sequelize";

class User extends Model {
  public readonly id!: number;
  public nickname!: string;
  public userId!: string;
  public password!: string;
  public readonly createdAt!: Date; // readonly 붙은것은 sequelize에서 자체적으로 관리해주는것(변경할 필요 x)
  public readonly updateAt!: Date;

  public readonly Posts?: Post[];
  public readonly Followings?: User[];
  public readonly Followers?: User[];

  public addFollowings!: BelongsToManyAddAssociationMixin<User, number>;
  public getFollowings!: BelongsToManyGetAssociationsMixin<User>;
  public removeFollowing!: BelongsToManyRemoveAssociationMixin<User, number>;
  public getFollowers!: BelongsToManyGetAssociationsMixin<User>;
  public removeFollower!: BelongsToManyRemoveAssociationMixin<User, number>;
  public getPosts!: HasManyGetAssociationsMixin<User>;
}

User.init(
  {
    nickname: {
      type: DataTypes.STRING(20),
    },
    userId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "user",
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);

export const associate = (db: dbType) => {
  db.User.hasMany(db.Post, { as: "Posts" });
  db.User.belongsToMany(db.User, { through: "Follow", as: "Followers", foreignKey: "followingId" }); // as 와 foreignKey가 가리키는것이 반대여야함
  db.User.belongsToMany(db.User, { through: "Follow", as: "Followings", foreignKey: "followerId" });
};

export default User;
