import React, { useState } from "react";
import Task from "./Task";

let tasklist = [];

const data = tasklist.map((item) => {
  console.log(item);
  return <Task {...item} />;
});

const Main = () => {
  const [task, setTask] = useState(data);
    const addTask = ()=>{
      const newTask = document.getElementById("newTask").value;
      const taskDate = document.getElementById("newDate").value;
      const taskTime = document.getElementById("newTime").value;
      const time = Date.parse(`${taskDate}T${taskTime}:00.000+05:30`);
      const object = {
        task : newTask ,
        date : taskDate,
        time : taskTime,
        scriptTime : time,
        isCompleted : false
      }
      tasklist.push(object);
      const data = tasklist.map((item) => {
        console.log(item);
        return <Task {...item} />;
      });
      setTask(data);
    }
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div className="sm:w-2/3 lg:w-1/2 w-11/12 mt-8">
          <div className="bg-blue-300 rounded shadow-lg mb-6">
            <input
              type="text"
              className="p-2 my-3 mx-[3%] w-[94%] border-2 border-black rounded shadow-lg"
              placeholder="Your New Task"
              id="newTask"
            />
            <input
              type="time"
              className="p-2 my-3 mx-[3%] w-[44%] border-2 border-black rounded shadow-lg"
              id="newTime"
            />
            <input
              type="date"
              className="p-2 my-3 mx-[3%] w-[44%] border-2 border-black rounded shadow-lg"
              id="newDate"
            />
            <div className="button flex justify-center">
              <button
                className="p-3 px-5 m-2 bg-blue-600 rounded-full hover:bg-blue-700 shadow-lg"
                onClick={addTask}
              >
                +
              </button>
            </div>
          </div>
          {task}
        </div>
      </div>
    </>
  );
};

export default Main;
