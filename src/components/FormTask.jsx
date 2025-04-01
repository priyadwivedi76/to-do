import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { addTask, editTask } from '../redux/slices/taskSlice';

const FormTask = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const editingTask = location.state?.task || null;

  // Initialize state correctly
  const [title, setTitle] = useState(editingTask ? editingTask.title : '');
  const [description, setDescription] = useState(editingTask ? editingTask.description : '');

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
  
    if (editingTask) {
      dispatch(editTask({ id: editingTask.id, updatedTask: { title, description } }));
    } else {
      dispatch(addTask({ title, description, date: new Date().toLocaleDateString() }));
    }
  
    navigate('/'); // Redirect to Home
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className='text-4xl mb-10 font-bold'>{editingTask ? 'Edit Task' : 'Add Task'}</h1>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
          className="flex-1 p-2 bg-gray-700 text-gray-300 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task Description"
          className="flex-1 p-2 bg-gray-700 text-gray-300 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          {editingTask ? 'Update Task' : 'Add Task'}
        </button>
      </form>
    </div>
  );
};

export default FormTask;
