import { ServerModel } from "src/app/models/server.model";


export interface State {
  servers: ServerModel[]
}

const initial_state: State = {
  servers: [
    new ServerModel("USA Server", "1"),
    new ServerModel("Europe Server", "2"),
  ]
}
export function ServersReducer(state = initial_state, action) {
  return state;
}
