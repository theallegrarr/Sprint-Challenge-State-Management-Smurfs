import axios from 'axios';
import * as types from './actionTypes';

export function changeInput(value) {
  
  return {
    type: types.ON_INPUT_CHANGE,
    payload: value,
  };
}

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

