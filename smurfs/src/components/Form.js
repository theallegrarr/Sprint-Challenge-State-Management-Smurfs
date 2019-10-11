import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './state/actionCreators';

function Form({ smurf, changeInput }) {
  const form = smurf.form;

  const onValueChange = event => {
    changeInput(event.target.value);
  };
  const onSubmit = event => {
    event.preventDefault();
    console.log(form);
    // getUser(form.value);
  };

  return (
    <form className='form' onSubmit={onSubmit}>
      <label>Smurf ID:
        <input className='box' value={form.value} onChange={onValueChange} name='id' />
      </label>
      <label>Name:
        <input className='box' value={form.value} onChange={onValueChange} name='name' />
      </label>
      <label>Age:
        <input className='box' value={form.value} onChange={onValueChange} name='age' />
      </label>
      <label>Height:
        <input className='box' value={form.value} onChange={onValueChange} name='height' />
      </label>
      <input className='submit' type='submit' />
    </form>
  );
}

export default connect(
  state => state,
  actionCreators,
)(Form);