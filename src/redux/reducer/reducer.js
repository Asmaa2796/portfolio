import {
  getSkills,getWork
} from "../type/type";

const initialState = {
  skills: [],
  work: [],
};
export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case getSkills:
      return { ...state, skills: action.data };
    case getWork:
      return { ...state, work: action.data };
    default:
      return state;
  }
};
