import axios from 'axios';
import * as types from './actionTypes';

export function changeInput(name, value) {
  return {
    type: types.ON_NAME_CHANGE,
    payload: value,
  }
};

export function changeHeight(value) {
  return {
    type: types.ON_HEIGHT_CHANGE,
    payload: value,
  }
};

export function changeAge(value) {
  return {
    type: types.ON_AGE_CHANGE,
    payload: value,
  }
};


export function addSmurf(smurf) {
  return {
    type: types.ADD_SMURFS,
    payload: smurf,
  };
}

export const getSmurf = () => dispatch => {
  const smurfApi = `http://localhost:3333/smurfs`;
  const smurfPromise = axios.get(smurfApi);
  
  Promise.all([smurfPromise])
    .then(([smurfData]) => {
      console.log(smurfData);
      dispatch(addSmurf(smurfData.data)); // :)
    }).catch(e =>  console.log(e));
};


export const postSmurf = (name, age, height) => dispatch => {
  const smurfApi = `http://localhost:3333/smurfs`;
  const smurfPromise = axios.post(smurfApi, {name: name, age: age, height: height});
  
  Promise.all([smurfPromise])
    .then(([smurfData]) => {
      console.log(smurfData);
      dispatch(addSmurf(smurfData.data)); // :)
    }).catch(e =>  console.log(e));
};

export const putSmurf = (id, name, age, height) => dispatch => {
  const smurfApi = `http://localhost:3333/smurfs/${id}`;
  const smurfPromise = axios.put(smurfApi, {id: id, name: name, age: age, height: height});
  
  Promise.all([smurfPromise])
    .then(([smurfData]) => {
      
      dispatch(addSmurf(smurfData.data)); // :)
    }).catch(e =>  console.log(e));
};

export function editName(value) {
  return {
    type: types.ON_NAME_EDIT,
    payload: value,
  }
};

export function editHeight(value) {
  return {
    type: types.ON_HEIGHT_EDIT,
    payload: value,
  }
};

export function editAge(value) {
  return {
    type: types.ON_AGE_EDIT,
    payload: value,
  }
};

export function editID(value) {
  return {
    type: types.ON_ID_EDIT,
    payload: value,
  }
};