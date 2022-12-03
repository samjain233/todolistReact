const Task = (props) => {
  return (
    <>
      <div className="bg-blue-200 mt-2 rounded p-1 shadow-lg">
        <div className="flex flex-row w-full">
          <input type="checkbox" className="mx-1" ></input>
          <h1 className="mx-1 text-black">{props.task}</h1>
        </div>
          <button className="mx-1 float-right">
            <i className="fa fa-trash text-red-600" aria-hidden="true"></i>
          </button>
        <p className="text-sm mx-3 mt-3 mb-1">
          Due {props.time} , {props.date}
        </p>
      </div>
    </>
  );
};

export default Task;
