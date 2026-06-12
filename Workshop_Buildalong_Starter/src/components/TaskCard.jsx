// TaskCard.jsx
// Starter placeholder for the build-along.
// You will update this to display dynamic tasks and handle button clicks!
function TaskCard() {
  return (
    <div className="task-card">
      <div className="task-card-content">
        <p className="task-title">Sample Task Title</p>
        <span className="task-status status--pending">Pending</span>
      </div>

      <div className="task-card-actions">
        <button className="btn btn-toggle btn-toggle--done">Done</button>
        <button className="btn btn-delete">Delete</button>
      </div>
    </div>
  );
}

export default TaskCard;
