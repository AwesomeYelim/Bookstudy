import {
  Model,
  DataTypes,
  BelongsToManyAddAssociationsMixin,
  HasManyAddAssociationsMixin,
  HasManyAddAssociationMixin,
} from "sequelize";
import { dbType } from ".";
import Hashtag from "./hashtag";
import Image from "./image";
import { sequelize } from "./sequelize";

class Post extends Model {
  public readonly id!: number;
  public content!: string;
  public readonly createdAt!: Date;
  public readonly updateAt!: Date;

  public addHashtags!: BelongsToManyAddAssociationsMixin<Hashtag, number>;
  public addImage!: HasManyAddAssociationMixin<Image, number>;
  public addImages!: HasManyAddAssociationsMixin<Image, number>;
}

Post.init(
  {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Post",
    tableName: "post",
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
  }
);

export const associate = (db: dbType) => {
  db.Post.belongsTo(db.User);
  db.Post.hasMany(db.Comment);
  db.Post.hasMany(db.Image);
  db.Post.belongsTo(db.Post, { as: "Retweet" });
  db.Post.belongsToMany(db.Hashtag, { through: "PostHashtag" });
  db.Post.belongsToMany(db.User, { through: "Like", as: "Likers" });
};

export default Post;
