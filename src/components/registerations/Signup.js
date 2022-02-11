import React from 'react';

function Signup(props) {
  return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
            <button className="close-btn">close</button>
            { props.children }
        </div>
    </div>
  ) : "";
}

export default Signup;
