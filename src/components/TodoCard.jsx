import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteTask } from '../redux/slices/taskSlice';

const TodoCard = ({ task }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(task.id)
  const handleLearn=()=>{
    navigate(`/learn/${task.id}`);
    return false; // Prevent default link behavior (to navigate to learn page)
  }
  return (
  <div className="bg-white px-5 py-4 rounded shadow flex flex-row gap-2 hover:bg-gray-100 transition ease-in-out transform hover:scale-105">
    <div className='flex flex-col'>
      <div className='flex items-center justify-between gap-5 my-2'>
        <h3 className="lg:text-xl md:text-xl text-md font-semibold text-gray-500">{task.title}</h3>
        <button onClick={handleLearn} className="lg:text-lg md:text-lg text-md text-gray-500 opacity-50 hover:text-blue-600">
          Learn More
        </button>
      </div>
        <div>
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
    </div>  
  </div>
  );
};

export default TodoCard;
