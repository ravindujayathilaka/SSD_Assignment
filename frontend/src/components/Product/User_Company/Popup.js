import React from "react";
 
const Popup = props => {
  return (
    <div className="popup-box111">
      <div className="boxCondition ">
        <span className="close-icon111" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};
 
export default Popup;