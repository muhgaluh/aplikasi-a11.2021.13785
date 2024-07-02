import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Profile( props ) {
  return (
    <div className="container">
      <p className="display-4"> {props.name} </p>
      <p className="display-5"> {props.nim} </p>
    </div>
  );
}

export default Profile;