import React, { Fragment } from "react";

const InputField = (props) => {
  return (
    <Fragment>
      <div className="row dex">
        <div className="col-lg-4 col-xs-4 de">
          <input
            type="text"
            value={props.newtodo}
            onChange={props.onInputChange}
            placeholder="Enter your Work Item"
          />
        </div>
        <div className="col-lg-4 col-xs-4 de">
          <input
            type="text"
            value={props.priority}
            onChange={props.newPriority}
            placeholder="Enter priority('High'/ 'Low'/ 'Medium')"
          />
        </div>
        <div className="col-lg-4 col-xs-4 de">
          <button className="b" onClick={props.createTodo}>
            Add To-do
          </button>
        </div>
      </div>{" "}
    </Fragment>
  );
};

export default InputField;
