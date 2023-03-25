import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function UserFormLayout() {
    return (
        <div className="container mx-auto">
            <h2 className='text-center my-5'>USER</h2>
            <nav className='mb-4 d-flex gap-2 justify-content-center'>
                <NavLink
                    className={({ isActive }) => isActive ? "btn btn-primary w-25" : "btn "}
                    to="login">Login</NavLink>
                <NavLink
                    className={({ isActive }) => isActive ? "btn btn-primary w-25" : "btn "}
                    to="Register">Register</NavLink>
            </nav>

            <main>
                <Outlet />
            </main>
        </div>
    )
}
