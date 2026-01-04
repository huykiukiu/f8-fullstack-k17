const App = () => {
  const [tasks, setTasks] = React.useState([]);
  const [completedTask, setCompletedTask] = React.useState([]);
  const [stateUpdateTask, setStateUpdateTask] = React.useState([]);

  const handleAddTask = (value) => {
    setTasks([...tasks, value]);
    setCompletedTask([...completedTask, false]);
    setStateUpdateTask([...stateUpdateTask, false]);
  };
  const handleDeleteTask = (_index) => {
    setTasks(tasks.filter((_, index) => index !== _index));
    setCompletedTask(completedTask.filter((_, index) => index !== _index));
    setStateUpdateTask(stateUpdateTask.filter((_, index) => index !== _index));
  };
  const handleCompletedTask = (_index) => {
    const newCompletedTask = [...completedTask];
    newCompletedTask[_index] = !newCompletedTask[_index];
    setCompletedTask([...newCompletedTask]);
  };
  const handleOpenEditTask = (_index) => {
    const newStateUpdateTask = [...stateUpdateTask];
    newStateUpdateTask[_index] = !newStateUpdateTask[_index];
    setStateUpdateTask([...newStateUpdateTask]);
  };
  const handleUpdateTask = (_index, value) => {
    const newTasks = [...tasks];
    newTasks[_index] = value;
    setTasks([...newTasks]);
  };
  const handleChangeStateUpdateTask = (_index) => {
    const newStateUpdateTask = [...stateUpdateTask];
    newStateUpdateTask[_index] = !newStateUpdateTask[_index];
    setStateUpdateTask([...newStateUpdateTask]);
  };
  return (
    <>
      <Form onAddTask={handleAddTask} />
      <Task
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onCompleted={handleCompletedTask}
        completedTask={completedTask}
        onOpenEditTask={handleOpenEditTask}
        stateUpdateTask={stateUpdateTask}
        onUpdateTask={handleUpdateTask}
        onChangeStateUpdateTask={handleChangeStateUpdateTask}
      />
    </>
  );
};

const Form = ({ onAddTask }) => {
  const [value, setValue] = React.useState("");
  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };
  const handleAdd = (value) => {
    onAddTask(value);
    setValue("");
  };
  return (
    <form className="mb-5">
      <div className="flex">
        <input
          type="text"
          className="border border-purple-600 flex-1 placeholder:text-gray-500 px-3 py-2 outline-none text-white"
          placeholder="what is the task today?"
          onChange={handleChangeValue}
          value={value}
        ></input>
        <button
          type="button"
          className="bg-purple-600 text-white p-1 flex items-center cursor-pointer"
          onClick={() => handleAdd(value)}
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

const Task = ({
  tasks,
  onDeleteTask,
  onCompleted,
  completedTask,
  onOpenEditTask,
  stateUpdateTask,
  onUpdateTask,
  onChangeStateUpdateTask,
}) => {
  const [editValues, setEditValues] = React.useState(tasks);

  const handleChangeValue = (index, e) => {
    const newEditValues = [...editValues];
    newEditValues[index] = e.target.value;
    setEditValues(newEditValues);
  };
  const handleUpdateTask = (index) => {
    onChangeStateUpdateTask(index);
    onUpdateTask(index, editValues[index] ?? tasks[index]);
  };
  return (
    <>
      {tasks.map((task, index) => (
        <React.Fragment key={index}>
          <div
            className={
              stateUpdateTask[index]
                ? "bg-purple-600 flex items-center justify-between rounded-sm px-3 py-3 mb-5 hidden"
                : "bg-purple-600 flex items-center justify-between rounded-sm px-3 py-3 mb-5"
            }
          >
            <p
              id="task-title"
              className={
                completedTask[index]
                  ? `text-gray-400 text-xl cursor-pointer line-through`
                  : `text-white font-bold text-xl cursor-pointer`
              }
              onClick={() => onCompleted(index)}
            >
              {task}
            </p>
            <div className="flex items-center gap-2">
              <i
                className="fa-solid fa-pen-to-square text-white text-xl cursor-pointer"
                onClick={() => onOpenEditTask(index)}
              ></i>
              <i
                className="fa-solid fa-trash text-white text-xl cursor-pointer"
                onClick={() => onDeleteTask(index)}
              ></i>
            </div>
          </div>

          <div
            className={
              stateUpdateTask[index] ? "flex mb-5" : "flex mb-5 hidden"
            }
          >
            <input
              type="text"
              className="border border-purple-600 flex-1 placeholder:text-gray-500 px-3 py-2 outline-none text-white"
              placeholder="Enter task title here..."
              onChange={(e) => handleChangeValue(index, e)}
              value={editValues[index] ?? task}
            ></input>
            <button
              type="button"
              className="bg-purple-600 text-white p-1 flex items-center cursor-pointer"
              onClick={() => handleUpdateTask(index)}
            >
              Update Task
            </button>
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

const element = (
  <div id="container" className="bg-purple-600 min-h-screen pt-20">
    <div
      id="app"
      className="w-[500px] border mx-auto bg-[#1A1A40] rounded-sm px-10 pb-10"
    >
      <h1 className="text-white text-center text-3xl mt-5 font-semibold mb-5">
        Get Things Done !
      </h1>
      <App />
    </div>
  </div>
);
const root = document.querySelector("#root");
const container = ReactDOM.createRoot(root);
container.render(element);
