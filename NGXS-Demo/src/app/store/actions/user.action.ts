import { User } from "../model/user.model";

export namespace UserActions{

  export class RegisterLoggedInUser {
    static readonly type: `[User] Register logged in user`;

    constructor(public payload: User) {

    }
  }
}
