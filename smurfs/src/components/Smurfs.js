import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './state/actionCreators';

export default connect(mapStateToProps, actionCreators)(Smurfs);

function mapStateToProps(state) {
  return {
    smurf: state.smurf,
    smurfs: state.smurfs,
  };
}

function Smurfs(props) {
  const { smurf, getSmurf } = props;

  useEffect(() => {
     getSmurf();
     console.log(smurf.smurfs);
  }, []);
  
  return (
    <>
      {smurf.smurfs.length ? (
        <ol type="1">
          {smurf.smurfs.map(smurfi => (
            <div className='user-card'>
              <div className='user-details'>
                <h3>{smurfi.name}</h3>
                <h4>{smurfi.age}</h4>
              <p>{smurfi.height}</p>
            </div>
          </div>
          ))}
        </ol>
      ) : (
        <p>No Smurfs for Now</p>
      )}
    </>
  );
}