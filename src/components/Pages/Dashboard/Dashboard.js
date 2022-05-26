import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-4xl text-blue-400 text-center'>Welcome to Dashboard</h2>
                <Outlet></Outlet>

            </div>

        </div>
    );
};

export default Dashboard;