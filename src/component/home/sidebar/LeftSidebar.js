import TooltipRight from "../tooltip/TooltipRight"
import { MdDashboard } from "react-icons/md";
import { MdTask } from "react-icons/md";
import { MdOutlinePendingActions } from "react-icons/md";
import { MdOutlineAlarmOff } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../state/auth/Action";

const LeftSidebar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // Function to handle logout
    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    }

    return (
        <div className="grid grid-cols-12 gap-2 bg-gray-700 mt-20 rounded-lg">
            <div className="col-span-10 flex items-center">
                <div className="text-center">
                    <Link to="/home">
                        <TooltipRight tooltipText="All Task" icon={<MdDashboard />} />
                    </Link>
                </div>
                <div className="text-center">
                    <Link to="/home/complete">
                        <TooltipRight tooltipText="Complete" icon={<MdTask />} />
                    </Link>
                </div>
                <div className="text-center">
                    <Link to="/home/pending">
                        <TooltipRight tooltipText="Pending" icon={<MdOutlinePendingActions />} />
                    </Link>
                </div>
                <div className="text-center">
                    <Link to="/home/overdue">
                        <TooltipRight tooltipText="Overdue" icon={<MdOutlineAlarmOff />} />
                    </Link>
                </div>
            </div>
            <div className="col-span-2">
                <div className="text-center" onClick={handleLogout}>
                    <TooltipRight tooltipText="Logout" icon={<IoIosLogOut />} />
                </div>
            </div>
        </div>
    )
}

export default LeftSidebar
