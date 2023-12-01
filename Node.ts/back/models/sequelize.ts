// index, sequelize, user 의 순환참조(typescript에서는 에러가 잡히지 않아도 runtime시에는 오류발생)를 방지하기 위해 sequelize.ts 를 만들어 파일을 관리함
// 일방향 참조를 하게되면 순환참조를 방지할수 있다
// runtime일때 -> 순환 참조시 두 모듈중 하나가 빈객체 ({})로 처리되어 문제가 발생함

import { Sequelize } from "sequelize";
import config from "../config/config";

// process.env.Node_Env 는 typescript에서 타입 추론이 어려워 assertion 을 달아준다.
const env = (process.env.Node_Env as "production" | "test" | "development") || "development";
const { database, username, password } = config[env];

// Sequelize 가 class, sequelize가 instance
const sequelize = new Sequelize(database, username, password, config[env]);

export { sequelize };
export default sequelize;
