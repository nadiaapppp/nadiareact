import React from 'react';
import { Button } from 'react-bootstrap';

const TaskList = ({ tasks, deleteTask, showEditForm }) => {
  const getBackgroundColor = (status) => {
    switch (status) {
      case 'To Do':
        return '#f9e8fc'; 
      case 'In Progress':
        return '#e8e3ff'; 
      case 'Done':
        return '#e6f7e9';
      default:
        return '#f9f9f9'; 
    }
  };

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div 
          className="task-card" 
          key={task.id} 
          style={{ backgroundColor: getBackgroundColor(task.status) }}  
        >
          <div className="task-info">
            <p className="task-name">{index + 1}. {task.name}</p>
            <p class="priority high">Priority: High</p>

            <p className="status">Status: {task.status}</p>
            <p className="date">Date: {task.date}</p>
          </div>
          <div className="task-actions">
            <Button variant="outline-primary" onClick={() => showEditForm(task)}>
              ✏
            </Button>
            <Button variant="outline-danger" onClick={() => deleteTask(task.id)}>
              🗑
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;