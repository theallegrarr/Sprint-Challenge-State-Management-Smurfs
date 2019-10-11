import * as types from './actionTypes';

const initialSmurfs = {
  smurfs: [],
  form: {
    name: '',
    age: '',
    height: '',
  },
};

export function smurfReducer(state = initialSmurfs, action) {
  switch (action.type) {
    case types.ON_INPUT_CHANGE:
      return {
        ...state,
        smurf: {
          ...state.smurf,
          form: {
            ...state.form,
            [action.payload.name]: action.payload.value,
          }
        }
      };
    case types.ADD_SMURFS:    
      return {
        ...state,
        smurfs: state.smurfs.concat(action.payload)
      }
    default:
      return state;
  }
}