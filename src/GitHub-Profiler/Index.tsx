import { connect } from "react-redux";
import { FETCH_PROFILE, FETCH_REPOSITORY } from "./Actions";
import Homepage from "./Homepage";

const dispatch = (dispatch: any) => {
  console.log("dispatch : ", dispatch);
  return {
    FETCH_PROFILE: () => {
      dispatch({ type: FETCH_PROFILE });
    },
    FETCH_REPOSITORY: () => {
      dispatch({ type: FETCH_REPOSITORY });
    },
  };
};

const state = (state: any) => {
  console.log("State : ", state);

  return {
    counter: state.calculateReducer,
  };
};

export default connect(state, dispatch)(Homepage);
