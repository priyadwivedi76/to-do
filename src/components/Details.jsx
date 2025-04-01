import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Details = () => {
  const { id } = useParams(); // Get the task ID from the URL
  const navigate = useNavigate();

  // Get task details from Redux store
  const task = useSelector((state) =>
    state.tasks.tasks.find((task) => task.id === Number(id))
  );

  if (!task) {
    return <h1 className="text-center text-red-500 text-xl">Task Not Found!</h1>;
  }

  return (
    <div className="min-w-lg mx-auto bg-white shadow-md p-6 rounded-lg mt-10">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">{task.title}</h1>
      <p className="text-lg text-gray-600 mb-4">{task.description}</p>
      <span className="text-sm text-gray-500 opacity-70">{task.date}</span>
      <div className="flex gap-5 mt-4">
        <button 
          onClick={() => navigate(-1)} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Go Back
        </button>
        <button 
          onClick={() => navigate(`/weather`)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Learn About Weather
        </button>
      </div>
    </div>
  );
};

export default Details;