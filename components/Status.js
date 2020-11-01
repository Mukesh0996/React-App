import React, { Fragment } from "react";

const Status = (props) => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-lg-6">
          <h3>Priority Section</h3>
          <br />
          <p>Number of High Priority to-do's: {props.high} </p>
          <p>Number of Medium Priority to-do's: {props.medium} </p>
          <p>Number of Low Priority to-do's: {props.low} </p>
        </div>
        <div className="col-lg-6 end">
          <h3>Task Status section</h3>
          <br />
          <p>Number of completed Todos : {props.completed} </p>
          <p>Number of pending Todos : {props.pending}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Status;
