import React, { Fragment, useState } from "react";
import ReactDom from "react-dom";
import InputField from "./components/InputField";
import Footer from "./components/Footer";
import Status from "./components/Status";

const App = () => {
  const [tasks, settasks] = useState([
    {
      task: "Take your dog for a walk!",
      isComplete: true,
      priority: "Low"
    },
    {
      task: "Exercise from 6AM - 8AM",
      isComplete: false,
      priority: "High"
    },
    {
      task: "Sleep from 9AM - 10AM",
      isComplete: false,
      priority: "Medium"
    }
  ]);

  const [task, newtask] = useState("");
  const [Priority, setnewpriority] = useState("");

  const freshTodo = (event) => {
    newtask(event.target.value);
  };

  const createPriority = (event) => {
    const newPriority = event.target.value;
    //marking the priority as title case
    const first = newPriority.slice(0, 1).toUpperCase();
    const last = newPriority.slice(1, newPriority.length);

    setnewpriority(first + last);
  };

  // adding the todo to actual array
  const addTodo = () => {
    const todoObject = {
      task: task,
      isComplete: false,
      priority: Priority
    };
    settasks(tasks.concat(todoObject));
  };
  //function that changes the status of the to d0
  const changeStatus = (index) => {
    settasks(
      tasks.map((task, taskIndex) => {
        if (index === taskIndex) {
          return {
            ...task,
            isComplete: !task.isComplete
          };
        }
        return task;
      })
    );
  };
  //function that calculates the number of high, medium and low priorities
  const countTodos = () => {
    let high = 0,
      medium = 0,
      low = 0;
    tasks.forEach((task) => {
      if (task.priority === "High") {
        high = high + 1;
      } else if (task.priority === "Medium") {
        medium = medium + 1;
      } else {
        low = low + 1;
      }
    });
    return [high, medium, low];
  };
  const [high, medium, low] = countTodos();

  //function that calculates the number of completed/ pending todos
  const todoStatus = () => {
    let pending = 0,
      completed = 0;
    tasks.forEach((task) => {
      if (task.isComplete) {
        completed = completed + 1;
      } else {
        pending = pending + 1;
      }
    });
    return [pending, completed];
  };
  const [pending, completed] = todoStatus();

  const deleteTodo = (index) => {
    settasks(
      tasks.map((task, taskIndex) => {
        if (index === taskIndex) {
          tasks.splice(index, 1);
        }
      })
    );
  };

  return (
    <Fragment>
      <h1 className="head">Your To-Do's List!</h1>
      <InputField
        newtodo={task}
        onInputChange={freshTodo}
        createTodo={addTodo}
        newPriority={createPriority}
        priority={Priority}
      />
      <div className="todosList">
        <ul>
          {tasks.map((taskObject, index) => {
            const removeTodo = () => {
              deleteTodo(index);
            };
            const toggleStatus = () => {
              changeStatus(index);
            };
            return (
              <li onClick={toggleStatus} key={index}>
                <div className="row">
                  <div className="col-lg-4 task">{taskObject.task}</div>
                  <div className="col-lg-4 task">
                    {taskObject.isComplete ? "✔️" : "⏱"}{" "}
                  </div>
                  <div className="col-lg-4 tasked">
                    <p>Priority: {taskObject.priority}</p>
                    <i onClick={removeTodo} className="fas fa-trash-alt"></i>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <hr />
        <Status
          high={high}
          medium={medium}
          low={low}
          pending={pending}
          completed={completed}
        />
      </div>
      <Footer />
    </Fragment>
  );
};

ReactDom.render(<App />, document.querySelector("#app"));
