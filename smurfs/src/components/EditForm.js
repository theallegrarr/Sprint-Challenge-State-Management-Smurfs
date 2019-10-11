import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './state/actionCreators';

function mapStateToProps(state) {
  return {
    smurf: state.smurf,
    smurfs: state.smurfs,
  };
}

function EditForm(props) {
  const { smurf, putSmurf, editName, editAge, editHeight, editID } = props;

  const onValueChange = event => {
    if(event.target.name==='id')editID( event.target.value);
    if(event.target.name==='name')editName( event.target.value);
    if(event.target.name==='age')editAge(event.target.value);
    if(event.target.name==='height')editHeight(event.target.value);
  };
  const onSubmit = event => {
    event.preventDefault();
    putSmurf(smurf.editform.id, smurf.editform.name, smurf.editform.age, smurf.editform.height);
  };

  return (
    <form className='form' onSubmit={onSubmit}>
      <label>Smurf ID:
        <input className='box' value={smurf.editform.id} onChange={onValueChange} name='id' />
      </label>
      <label>Name:
        <input className='box' value={smurf.editform.name} onChange={onValueChange} name='name' />
      </label>
      <label>Age:
        <input className='box' value={smurf.editform.age} onChange={onValueChange} name='age' />
      </label>
      <label>Height:
        <input className='box' value={smurf.editform.height} onChange={onValueChange} name='height' />
      </label>
      <input className='submit' type='submit' />
    </form>
  );
}

export default connect(mapStateToProps, actionCreators)(EditForm);