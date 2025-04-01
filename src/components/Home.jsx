import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoCard from './TodoCard';
import { useSelector } from 'react-redux';

const Home = () => {
    const tasks = useSelector((state) => state.tasks.tasks) || [];  
    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = sessionStorage.getItem("isAuthenticated");
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [navigate]);

    const handleClick = () => {
        navigate('/form');
    };

    const sortedTasks = [...tasks].sort((a, b) => {
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
    });

    return (
      <>
        <div className="main-section">
          <h1 className="text-4xl font-bold mb-5">My Todo App</h1>
          <div className="flex items-center justify-between h-10 w-full">
            <h1 className="text-xl font-semibold">List</h1>
            <button 
              onClick={handleClick} 
              className="hover:bg-blue-600 transition ease-in-ease-out duration-150 px-4 py-3 bg-blue-500 rounded-lg text-white">
              Add Task
            </button>
          </div>
          <div className="container mt-5">
              {sortedTasks.length > 0 ? sortedTasks.map((item) => (
                <TodoCard key={item.id} task={item} />
              )) : (
                <p className="text-gray-500 mt-5 text-center">No tasks found. Click "Add Task" to create one.</p>
              )}
          </div>
        </div>
      </>
    );
};

export default Home;

