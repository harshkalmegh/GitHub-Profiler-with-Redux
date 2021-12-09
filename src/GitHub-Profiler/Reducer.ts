import { FETCH_PROFILE, FETCH_REPOSITORY } from "./Actions";

const InitialValue = {
  count: 0,
};

const Fetch_GitHub = (state = InitialValue, action: any) => {
    console.log("State and action : ", state, action);
  switch (action.type) {
    case FETCH_PROFILE:
      return { ...state, count: state.count + 1 };
    case FETCH_REPOSITORY:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default Fetch_GitHub