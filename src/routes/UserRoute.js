import React, { useState } from 'react'
import Home from '../component/home/Home'
import Login from '../page/auth/Login'
import Register from '../page/auth/Register'
import CreateTask from '../component/task/CreateTask'
import Navbar from '../component/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from '../page/pagenotfound/PageNotFound'

const UserRoute = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <Navbar onClick={() => setShow(true)} />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home/*" element={<Home />} />
                <Route path="*" element={<PageNotFound />}/>
            </Routes>
            {show && (
                <CreateTask onClose={() => setShow(false)} />
            )}
        </div>
    )
}

export default UserRoute
