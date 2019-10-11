import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './state/actionCreators';

function mapStateToProps(state) {
  return {
    smurf: state.smurf,
    smurfs: state.smurfs,
  };
}

function Form(props) {
  const { smurf, form, changeInput, changeHeight, changeAge, postSmurf } = props;

  const onValueChange = event => {
    if(event.target.name==='name')changeInput(event.target.name, event.target.value);
    if(event.target.name==='age')changeAge(event.target.value);
    if(event.target.name==='height')changeHeight(event.target.value);
    console.log(smurf.form);
    
  };
  const onSubmit = event => {
    event.preventDefault();
    postSmurf(smurf.form.name, smurf.form.age, smurf.form.height);
  };

  return (
    <form className='form' onSubmit={onSubmit}>
      {/* <label>Smurf ID:
        <input className='box' value={smurf.form.id} onChange={onValueChange} name='id' />
      </label> */}
      <label>Name:
        <input className='box' value={smurf.form.name} onChange={onValueChange} name='name' />
      </label>
      <label>Age:
        <input className='box' value={smurf.form.age} onChange={onValueChange} name='age' />
      </label>
      <label>Height:
        <input className='box' value={smurf.form.height} onChange={onValueChange} name='height' />
      </label>
      <input className='submit' type='submit' />
    </form>
  );
}

export default connect(mapStateToProps, actionCreators)(Form);