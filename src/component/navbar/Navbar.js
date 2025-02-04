import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../../asset/logo.png'

const Navbar = ({ onClick }) => {
    const location = useLocation();
    const auth = useSelector(state => state.auth)
    
    const isRegisterPage = location.pathname === "/register";
    
    return (
        <div>
            <nav className="bg-gray-700 text-white w-full fixed z-50">
                <div className="max-w-screen-xl mx-auto flex justify-between items-center p-2">
                    <Link to="/home" className="text-3xl tracking-tight font-serif font-bold bg-gradient-to-br from-zinc-400 via-gray-100 to-slate-600 hover:bg-gradient-to-bl text-transparent bg-clip-text flex items-center">
                        <img className="w-8 h-8 rounded-full bg-white" alt="logoImage" src={logoImage} />
                        <span className="ml-3"> TaskMaster </span>
                    </Link>
                    {!auth?.token ? (
                        <Link to={isRegisterPage ? "/" : "/register"} className="px-5 py-2 rounded-lg text-md font-bold bg-gradient-to-br from-zinc-400 to-slate-200 hover:bg-gradient-to-bl text-gray-800 transform transition-transform duration-300 hover:scale-90">
                            {isRegisterPage ? 'Sign In' : 'Sign Up'}
                        </Link>
                    ) : (
                        <button onClick={onClick} className="px-5 py-2 rounded-lg text-md font-bold bg-gradient-to-br from-zinc-400 to-slate-200 hover:bg-gradient-to-bl text-gray-800 transform transition-transform duration-300 hover:scale-90">
                            Add a new Task
                        </button>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar