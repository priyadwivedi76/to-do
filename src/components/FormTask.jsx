import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { addTask, editTask } from '../redux/slices/taskSlice';

const FormTask = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    
    const editingTask = location.state?.task || null;

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('Medium');

    useEffect(() => {
        if (editingTask) {
            setTitle(editingTask.title);
            setDescription(editingTask.description);
            setPriority(editingTask.priority || 'Medium');
        }
    }, [editingTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        if (editingTask) {
            dispatch(editTask({ id: editingTask.id, updatedTask: { title, description, priority } }));
        } else {
            dispatch(addTask({ id: Date.now(), title, description, priority, date: new Date().toLocaleDateString() }));
        }

        navigate('/');
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-gray-100 shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-5 text-gray-900 text-center">
                {editingTask ? 'Edit Task' : 'Add New Task'}
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter Task Title"
                    className="p-3 text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter Task Description"
                    className="p-3 border text-gray-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <div className="flex items-center justify-between">
                    <label className="text-gray-600 font-medium">Priority:</label>
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="p-2 text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="High">🔥 High</option>
                        <option value="Medium">⚡ Medium</option>
                        <option value="Low">✅ Low</option>
                    </select>
                </div>
                <button 
                    type="submit" 
                    className="mt-3 bg-blue-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition">
                    {editingTask ? 'Update Task' : 'Add Task'}
                </button>
            </form>
        </div>
    );
};

export default FormTask;


