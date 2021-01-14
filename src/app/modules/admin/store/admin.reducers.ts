import * as fromAdminActions from "./admin.actions";

export interface State {
  adminName: string
}

const initialState: State = {
  adminName: "R in R"
}

export function AdminReducer(state = initialState, action: fromAdminActions.AdminActions) {
  switch (action.type) {
    case fromAdminActions.GET_ADMIN:
      { return { ...state } }
    default:
      { return { ...state } }
  }
}
