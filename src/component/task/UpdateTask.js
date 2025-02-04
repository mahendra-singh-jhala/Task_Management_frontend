import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "../../state/task/Action";
import { useEffect, useState } from "react";

const UpdateTask = ({ onClose, taskId }) => {
    const dispatch = useDispatch()
    const task = useSelector(state => state.task.task.data.task.find(t => t._id === taskId));
    const [taskData, settaskData] = useState({
        title: "",
        description: "",
        dueDate: "",
        priority: "",
        status: "",
        complete: false
    });

    // useEffect to fetch
    useEffect(() => {
        if (task) {
            settaskData({
                title: task.title,
                description: task.description,
                dueDate: task.dueDate,
                priority: task.priority,
                status: task.status,
                complete: task.status === "inactive"
            });
        }
    }, [task]);

    // Function to handle input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            settaskData({ ...taskData, [name]: checked });
        } else {
            settaskData({ ...taskData, [name]: value });
        }
    };

    // Function to handle submit
    const handleSubmit = async (e) => {
        e.preventDefault()
        const updatedTaskData = { ...taskData, status: taskData.complete ? "inactive" : "active" };
        dispatch(updateTask(updatedTaskData, taskId))
        onClose();
    };

    return (
        <div className="flex items-center justify-center fixed inset-0 bg-black bg-opacity-50 h-screen z-50">
            <div className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 min-w-96 relative" >
                <div className="flex justify-center mb-4 relative">
                    <h1 className="text-xl font-bold mr-4 text-white mb-4"> Update Task </h1>
                    <button onClick={onClose} className="text-xl font-bold mr-4 absolute -top-4 -right-10 bg-gray-300 text-red-600 rounded-full p-1 px-3"> X </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-white text-sm font-bold mb-2 tracking-widest">
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={taskData.title}
                            onChange={handleChange}
                            className="rounded w-full py-2 px-3 bg-slate-500 text-gray-200 leading-tight focus:outline-none"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-white text-sm font-bold mb-2 tracking-widest">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={taskData.description}
                            onChange={handleChange}
                            className="text-sm rounded w-full py-2 px-3 bg-slate-500 text-gray-200 leading-tight focus:outline-none"
                            rows={4}
                        />
                    </div>
                    <div className="mb-4">
                        <label  htmlFor="dueDate" className="block text-white text-sm font-bold mb-2 tracking-widest">
                            Due Date
                        </label>
                        <input
                            type="date"
                            name="dueDate"
                            value={taskData.dueDate}
                            onChange={handleChange}
                            className="rounded w-full py-2 px-3 bg-slate-500 text-gray-200 leading-tight focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="priority" className="block text-white text-sm font-bold mb-2 tracking-widest">
                            Select Priority
                        </label>
                        <select
                            name="priority"
                            value={taskData.priority}
                            onChange={handleChange}
                            className="rounded w-full py-2 px-3 bg-slate-500 text-gray-200 leading-tight focus:outline-none"
                        >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                name="complete" 
                                checked={taskData.complete}
                                onChange={handleChange}
                                className="form-checkbox"

                            />
                            <span className="ml-2 text-white text-sm font-bold tracking-widest">Completed</span>
                        </label>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="rounded w-full py-2 px-3 bg-slate-500 text-gray-200 leading-tight focus:outline-none focus:shadow-outline hover:text-gray-800"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateTask
