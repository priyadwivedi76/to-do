import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteTask } from '../redux/slices/taskSlice';

const priorityColors = {
  High: 'bg-red-500',
  Medium: 'bg-yellow-500',
  Low: 'bg-green-500'
};

const TodoCard = ({ task }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="bg-white px-5 py-4 rounded shadow flex flex-col gap-2 hover:bg-gray-100 transition ease-in-out transform hover:scale-105">
      <div className="flex justify-between items-center">
        <h3 className="lg:text-xl md:text-xl text-md font-semibold text-gray-500">{task.title}</h3>
        <span className={`text-white px-2 py-1 rounded ${priorityColors[task.priority]}`}>
          {task.priority}
        </span>
      </div>
      <p className="lg:text-lg md:text-lg text-md text-gray-500">{task.description}</p>
      <span className='text-sm text-gray-500 opacity-70'>{task.date}</span>
      <div className="flex justify-between items-center text-md text-gray-400">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate('/form', { state: { task } })} 
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
            Edit
          </button>
          <button 
            onClick={() => dispatch(deleteTask(task.id))} 
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;

