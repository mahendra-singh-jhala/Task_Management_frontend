import { PieChart, Pie, Cell } from 'recharts';
import logoImage from '../../../asset/logo.png'
import { useSelector } from 'react-redux';

const RightSidebar = () => {
	const task = useSelector(state => state.task?.task?.data?.task)
	const user = (JSON.parse(localStorage.getItem("token") || "{}").user) || []
	
	// calculate the complete and pending tasks
	let complete = 0, pending = 0, overdue = 0;
	if (task && Array.isArray(task)) {
		complete = task.filter(task => task.status === "inactive").length;
		pending = task.filter(task => task.status === "active").length;
		overdue = task.filter(task => {
			const dueDate = new Date(task.dueDate);
			return dueDate < new Date() && task.status === "active";
		}).length;
	}
	const total = complete + pending
	// Data for Pie Chart
	const data = [
		{ name: 'Completed', value: complete, color: '#45CE30' },
		{ name: 'Pending', value: pending, color: '#FF3031' },
	];

	return (
		<div className="h-screen grid grid-rows-12 gap-2 px-4">
			<div className="row-span-2 flex items-center justify-center bg-gray-700 rounded-lg">
				<img className="w-16 h-16 rounded-full bg-white" alt="logoImage" src={logoImage} />
				<div>
					<h1 className="text-2xl font-bold text-white ml-6"> {user?.firstname} </h1>
					<h1 className="text-2xl font-bold text-white ml-6"> {user?.lastname} </h1>
				</div>
			</div>
			<div className="row-span-4 mt-4">
				<div className="grid grid-cols-4 gap-2">
					<div className="col-span-2">
						<p className="text-md md:text-xl font-medium text-gray-400">Total Tasks : </p>
						<h1 className="text-3xl font-semibold text-gray-200 border-l-4 border-purple-400 ps-5 mt-2"> {total} </h1>
					</div>
					<div className="col-span-2">
						<p className="text-md md:text-xl font-medium text-gray-400">In Progress : </p>
						<h1 className="text-3xl font-semibold text-gray-200 border-l-4 border-yellow-400 ps-5 mt-2"> {pending} </h1>
					</div>
				</div>
				<div className="grid grid-cols-4 gap-2 mt-8">
					<div className="col-span-2">
						<p className="text-md md:text-xl font-medium text-gray-400">Overdue : </p>
						<h1 className="text-3xl font-semibold text-gray-200 border-l-4 border-red-400 ps-5 mt-2"> {overdue} </h1>
					</div>
					<div className="col-span-2">
						<p className="text-md md:text-xl font-medium text-gray-400">Complete : </p>
						<h1 className="text-3xl font-semibold text-gray-200 border-l-4 border-green-400 ps-5 mt-2"> {complete} </h1>
					</div>
				</div>
			</div>
			<h1 className="row-span-1 text-xl font-semibold text-white">Activity</h1>
			<div className="row-span-5 bg-gray-700 rounded-lg text-center py-4">
				<h1 className="text-md text-white font-semibold">Completed vs Pending Tasks</h1>
				<p className="text-sm text-white">Tasks completion status</p>
				<div className="flex flex-col items-center justify-center">
					<PieChart width={150} height={150}>
						<Pie
							data={data}
							dataKey="value"

							innerRadius="40%"
							outerRadius="80%"
							fill="#8884d8"
							paddingAngle={0}
						>
							{data.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={entry.color} />
							))}
						</Pie>
					</PieChart>
					<div>
						<span className="text-3xl text-gray-400 font-bold">{complete}</span>
						<p className="text-md font-medium text-gray-200 tracking-wide">Tasks</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RightSidebar
