import React, { useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import UpdateTask from './UpdateTask';
import { deleteTask } from '../../state/task/Action';

const Overdue = () => {
	const dispatch = useDispatch();
	const [editTaskId, setEditTaskId] = useState(null);
	const task = useSelector(state => state.task?.task?.data?.task);

	// Calculate the overdue tasks by comparing the dueDate with the current date
	let overdueTasks
	if (task && Array.isArray(task)) {
		overdueTasks = task?.filter(task => {
			const dueDate = new Date(task.dueDate);
			return dueDate < new Date() && task.status === "active";
		});
	}

	// Delete the task
	const handleDelete = (id) => {
		dispatch(deleteTask(id));
	};

	// Function to format the dueDate into a readable date string
	const formatDueDate = (dueDate) => {
		return new Date(dueDate).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	};

	return (
		<div className="my-8 mx-10">
			<h1 className="text-2xl text-white font-bold uppercase border-b-2 border-white p-2">Overdue Tasks</h1>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
				{overdueTasks && overdueTasks.length > 0 &&
					overdueTasks.map((task) => (
						<div className="bg-white rounded-md shadow-md p-4 w-60 md:w-72 min-h-40 mt-10" key={task._id}>
							<h2 className="text-xl font-bold mb-2">{task?.title}</h2>
							<p className="text-gray-500 min-h-32">{task?.description}</p>
							<div className="mt-4 flex items-center justify-between">
								<span className="text-gray-400 text-sm md:text-md">{formatDueDate(task?.dueDate)}</span>
								<span className="text-red-500 font-medium">{task?.priority}</span>
								<div className="flex space-x-2">
									<FaEdit className="text-md md:text-xl text-blue-500 md:mr-2" onClick={() => setEditTaskId(task?._id)} />
									<FaTrash className="text-md md:text-xl text-red-500" onClick={() => handleDelete(task?._id)} />
								</div>
							</div>
							{editTaskId === task?._id && (
								<UpdateTask onClose={() => setEditTaskId(null)} taskId={task?._id} />
							)}
						</div>
					))
				}
			</div>
		</div>
	);
}

export default Overdue
