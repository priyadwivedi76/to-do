import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TodoCard from './TodoCard';

const Home = () => {
    const tasks = useSelector((state) => state.tasks.tasks) || [];  
    const navigate = useNavigate();

    return (
      <>
      <div className="main-section">
        <h1 className="text-3xl font-bold text-gray-700 mb-4">My Todo App</h1>
        <div className="flex items-center justify-between h-10 w-full">
          <h2 className="text-xl font-semibold">Task List</h2>
          <button 
            onClick={() => navigate('/form')} 
            className="hover:bg-blue-600 transition ease-in-out duration-150 px-4 py-3 bg-blue-500 rounded-lg text-white">
            Add Task
          </button>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {tasks.length > 0 ? (
                tasks.map((task) => (
                  <TodoCard key={task.id} task={task} />
                ))
            ) : (
                <p className="text-center text-gray-500 mt-4">No tasks added yet.</p>
            )}
        </div>
      </div>
      </>
    );
};

export default Home;


