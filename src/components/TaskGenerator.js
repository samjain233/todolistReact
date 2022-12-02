import React, { useState } from 'react';
import tasklist from './taskarray';

const TaskGenerator = () => {
  const addTask = ()=>{
    const newTask = document.getElementById("newTask").value;
    const taskDate = document.getElementById("newDate").value;
    const taskTime = document.getElementById("newTime").value;
    const time = Date.parse(`${taskDate}T${taskTime}:00.000+05:30`);
    const object = {
      task : newTask ,
      date : taskDate,
      time : taskTime,
      scriptTime : time
    }
    tasklist.push(object);
    console.log(tasklist);
  }
  return (
    <>
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
          <button className="p-3 px-5 m-2 bg-blue-600 rounded-full hover:bg-blue-700 shadow-lg" onClick={addTask}>
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskGenerator;
