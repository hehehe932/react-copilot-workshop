// AddTaskForm.jsx
// Starter placeholder for the build-along.
// You will connect this to state in App.jsx!
function AddTaskForm() {
  return (
    <div className="add-task-form">
      <input
        type="text"
        className="add-task-input"
        placeholder="What needs to be done?"
      />
      <button className="btn btn-add">
        + Add Task
      </button>
    </div>
  );
}

export default AddTaskForm;
