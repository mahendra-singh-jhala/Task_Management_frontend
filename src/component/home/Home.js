import LeftSidebar from './sidebar/LeftSidebar'
import RightSidebar from './sidebar/RightSidebar'
import { Route, Routes } from 'react-router-dom'
import AllTask from '../task/AllTask'
import Complete from '../task/Complete'
import Pending from '../task/Pending'
import Overdue from '../task/Overdue'

const Home = () => {
    return (
        <div className="grid grid-row-12 gap-2 bg-gray-800">
            <div className="row-span-2">
                <LeftSidebar />
            </div>
            <div className="row-span-10">
                <div className="grid grid-cols-12">
                    <div className="col-span-7 bg-gray-700 overflow-y-auto rounded-lg">
                        <Routes>
                            <Route path="/" element={<AllTask />} />
                            <Route path="complete" element={<Complete />} />
                            <Route path="pending" element={<Pending />} />
                            <Route path="overdue" element={<Overdue />} />
                        </Routes>
                    </div>
                    <div className="col-span-5">
                        <RightSidebar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
