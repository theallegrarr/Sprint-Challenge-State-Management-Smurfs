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
    case types.ON_NAME_CHANGE:
      return {
        ...state,
        form: {
          ...state.form,
          name: (action.payload)
        }
      };
    case types.ON_AGE_CHANGE:
        return {
          ...state,
          form: {
            ...state.form,
            age: (action.payload)
          }
        };
    case types.ON_HEIGHT_CHANGE:
        return {
          ...state,
          form: {
            ...state.form,
            height: (action.payload)
          }
        };
    case types.ADD_SMURFS:    
      return {
        ...state,
        smurfs: state.smurfs.concat(action.payload)
      }
    case types.ON_SUBMIT:
      return {
        ...state,
        smurfs: (action.payload)
      }
    default:
      return state;
  }
}