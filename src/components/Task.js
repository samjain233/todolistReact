const Task = (props) => {
  return (
    <>
      <div className="bg-blue-200 mt-2 rounded p-1 shadow-lg">
        <div className="flex flex-row">
          <input type="checkbox" className="mx-1"></input>
          <h1 className="mx-1 text-black">
            sambhav jain is a good boy and he is the smartest pranneee on the
            planet
          </h1>
          <button className="mx-1"><i className="fa fa-trash text-red-600" aria-hidden="true"></i></button>
        </div>
        <p className="text-sm mx-3 mt-3 mb-1">Due 10:30 , Today</p>
      </div>
    </>
  );
};

export default Task;
