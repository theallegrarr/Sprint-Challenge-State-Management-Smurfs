import * as types from './actionTypes';

const initialSmurfs = {
  smurfs: [],
  form: {
    name: '',
    age: '',
    height: '',
  },
  editform: {
    id: '',
    name: '',
    age: '',
    height: '',
  },
};

export function smurfReducer(state = initialSmurfs, action) {
  console.log(action);
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
        smurfs: (action.payload)
      }
    case types.ON_SUBMIT:
      return {
        ...state,
        smurfs: (action.payload)
      }
    case types.ON_ID_EDIT:
          return {
            ...state,
            editform: {
              ...state.editform,
              id: (action.payload)
            }
          };
    case types.ON_NAME_EDIT:
        return {
          ...state,
          editform: {
            ...state.editform,
            name: (action.payload)
          }
        };
    case types.ON_AGE_EDIT:
        return {
          ...state,
          editform: {
            ...state.editform,
            age: (action.payload)
          }
        };
    case types.ON_HEIGHT_EDIT:
      console.log(state.editform);
        return {
          ...state,
          editform: {
            ...state.editform,
            height: (action.payload)
          }
        };
    default:
      return state;
  }
}