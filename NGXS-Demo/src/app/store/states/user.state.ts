import { Action, State, StateContext } from "@ngxs/store";
import { User } from "../model/user.model";
import { Injectable } from "@angular/core";
import { UserActions } from "../actions/user.action";

export interface UserStateModel {
  loggedInUser: User
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    loggedInUser: {} as User
  }
})
@Injectable()
export class UserState {
  @Action(UserActions.RegisterLoggedInUser)
  registerLoggedInUser(ctx: StateContext<UserStateModel>, action: UserActions.RegisterLoggedInUser ): void{

  }
}
