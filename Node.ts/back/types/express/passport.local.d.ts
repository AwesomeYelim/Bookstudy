declare module "passport-local" { // toplevel 이어야 함
  import { Strategy as PassportStrategy } from "passport"; // 안쪽에 import 시켜줘야함
  export interface IVerifyOptions {
    [key: string]: string;
  }

  export interface IStrategyOptions {
    usernameFiled: string;
    passwordFiled: string;
  }
  // 여기서는 상대 경로로 import 해올수 없음
  export interface Done {
    // 앞에 인자가 optional 인경우 뒤에 인자가 required 일수 없음
    (error: Error | any, user?: any, options?: IVerifyOptions): void;
  }
  export interface VerifyFunction {
    (username: string, password: string, done: Done): void | Promise<any>;
  }
  export class Strategy extends PassportStrategy {
    constructor(options: IStrategyOptions, verify: VerifyFunction);
  }
}
