import React, { useState } from 'react';
import Task from "./Task";
import TaskGenerator from "./TaskGenerator";
import tasklist from './taskarray';


const data = tasklist.map((item)=>{
  console.log(item);
   return (
    <Task {...item} />
   )
});

const Main = () => {
  const [task, setTask] = useState(data);
  const addTask = (event)=>{
    console.log("button is clicked");
  }
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div className="w-1/2 mt-8">
          <TaskGenerator />
          {task}
        </div>
      </div>
    </>
  );
};

export default Main;
