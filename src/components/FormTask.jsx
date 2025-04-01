import React from 'react'

const FormTask = () => {
  return (
        <div className="flex flex-col md:flex-row gap-3 mb-4">
          <input
            type="text"
            placeholder="Task Title"
            className="flex-1 p-2 bg-gray-700 text-gray-300 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Task Description"
            className="flex-1 p-2 bg-gray-700 text-gray-300 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Add Task</button>
        </div>
  )
}

export default FormTask