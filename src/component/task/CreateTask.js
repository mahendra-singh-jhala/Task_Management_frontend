import { useDispatch } from "react-redux";
import { createTask, getTask } from "../../state/task/Action";

const CreateTask = ({ onClose }) => {
    const dispatch = useDispatch()

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target)
        const userData = {
            title: data.get("title"),
            description: data.get("description"),
            dueDate: data.get("date"),
            priority: data.get("priority"),
            status: data.get("complete") === "on" ? "inactive" : "active"
        }
        dispatch(createTask(userData))
        onClose();
    }

    return (
        <div className="flex items-center justify-center fixed inset-0 bg-black bg-opacity-50 h-screen z-50">
            <div className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 min-w-96 relative" >
                <div className="flex justify-center mb-4 relative">
                    <h1 className="text-xl font-bold mr-4 text-white mb-4"> Add New Task </h1>
                    <button onClick={onClose} className="text-xl font-bold mr-4 absolute -top-4 -right-10 bg-gray-300 text-red-600 rounded-full p-1 px-3"> X </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-white text-sm font-bold mb-2 tracking-widest">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="rounded w-full py-2 px-3 bg-slate-500 text-gray-200 leading-tight focus:outline-none"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-white text-sm font-bold mb-2 tracking-widest">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            className="text-sm rounded w-full py-2 px-3 bg-slate-500 text-gray-200 leading-tight focus:outline-none"
                            rows={4}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-white text-sm font-bold mb-2 tracking-widest">
                            Due Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            className="rounded w-full py-2 px-3 bg-slate-500 text-gray-200 leading-tight focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="priority" className="block text-white text-sm font-bold mb-2 tracking-widest">
                            Select Priority
                        </label>
                        <select
                            id="priority"
                            name="priority"
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
                                id="complete"
                                name="complete"
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

export default CreateTask
