import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteTask } from '../redux/slices/taskSlice';
const TodoCard = ({ title, description, date,task, onEdit }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="bg-white px-5 py-4 rounded shadow flex flex-col gap-2 hover:bg-gray-100 transition ease-in-ease-out hover:scale-110">
      <div className='flex gap-4'>
        <h3 className="lg:text-xl md:text-xl text-md font-semibold text-gray-500">{title}</h3>
        <button className="lg:text-lg md:text-lg text-md text-gray-500 opacity-50 hover:text-blue-600">Learn More</button>
      </div>
      <p className="lg:text-lg md:text-lg text-md text-gray-500">{description}</p>
      <span className='text-sm text-gray-500 opacity-70'>{date}</span>
      <div className="flex justify-between items-center text-md text-gray-400">
        <div className="flex items-center justify-start gap-3">
          <button  onClick={() => navigate('/form', { state: { task } })} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-yellow-600 transition">Edit</button>
          <button onClick={() => dispatch(deleteTask(task.id))} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard