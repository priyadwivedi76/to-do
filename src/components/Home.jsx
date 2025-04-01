import React from 'react'
import { useNavigate } from 'react-router-dom';
import TodoCard from './TodoCard';
import { useSelector } from 'react-redux';
const Home = () => {
    const tasks = useSelector((state) => state.tasks.tasks) || [];  
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate('/form');
    }
    console.log(typeof tasks)
    return (
      <>
      <div className="main-section">
        <h1>My Todo App</h1>
        <div className="flex items-center justify-between h-10 w-full">
          <h1>List</h1>
          <button onClick={handleClick} className="hover:bg-blue-600 transition ease-in-ease-out duration-150 px-4 py-3 bg-blue-500 rounded-lg">Add</button>
        </div>
        {/* <FormTask /> */}
        <div className="container">
            {tasks && tasks.map((item,index)=>{
                return (
                  <>  
                    <TodoCard key={item.id} title={item.title} description={item.description} date={item.date} task={item} />
                  </> 
                )
            })}
        </div>
      </div>
      </>
    );
}

export default Home