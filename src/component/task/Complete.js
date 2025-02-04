import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../../state/task/Action';
import { FaEdit, FaTrash } from 'react-icons/fa';
import UpdateTask from './UpdateTask';

const Complete = () => {
    const dispatch = useDispatch()
    const [editTaskId, setEditTaskId] = useState(null);
    const task = useSelector(state => state.task?.task?.data?.task)

    // calculate the complete and pending tasks
    let complete
    if (task && Array.isArray(task)) {
        complete = task.filter(task => task.status === "inactive");
    }

    // delete the task
    const handleDelete = (id) => {
        dispatch(deleteTask(id));
    }

    // Function to format the dueDate into a readable date string
    const formatDueDate = (dueDate) => {
        return new Date(dueDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="my-8 mx-10">
            <h1 className="text-2xl text-white font-bold uppercase border-b-2 border-white p-2">Complete Tasks</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                {complete && complete.length >= 0 && complete.map((task) => (
                    <div className="bg-white rounded-md shadow-md p-4 w-60 md:w-72 min-h-40 mt-10">
                        <h2 className="text-xl font-bold mb-2"> {task?.title} </h2>
                        <p className="text-gray-500 min-h-32">{task?.description}</p>
                        <div className="mt-4 flex items-center justify-between">
                            <span className="text-gray-400 text-sm md:text-md"> {formatDueDate(task?.dueDate)} </span>
                            <span className="text-green-500 font-medium">{task?.priority}</span>
                            <div className="flex space-x-2">
                                <FaEdit className="text-md md:text-xl text-blue-500 md:mr-2" onClick={() => setEditTaskId(task?._id)} />
                                <FaTrash className="text-md md:text-xl text-red-500" onClick={() => handleDelete(task?._id)} />
                            </div>
                        </div>
                        {editTaskId === task?._id && (
                            <UpdateTask onClose={() => setEditTaskId(null)} taskId={task?._id} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Complete
