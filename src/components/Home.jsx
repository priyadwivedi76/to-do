import React from 'react'
import { useNavigate } from 'react-router-dom';
import TodoCard from './TodoCard';
import { useSelector } from 'react-redux';
const Home = () => {
    const tasks = useSelector((state) => state.tasks);
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate('/form');
    }
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
            {tasks.map((item,index)=>{
                const {title,id,description,date}=item
                return (
                 <>  
                <TodoCard key={index} title={title} id={id} description={description} date={date} />
                </> 
                )
            })}
        </div>
      </div>
      </>
    );
}

export default Home