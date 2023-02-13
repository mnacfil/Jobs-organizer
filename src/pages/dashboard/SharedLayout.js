import React from 'react';
import { Navbar, SmallSidebar, BigSidebar } from '../../components';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
    return (
        <main className='dashboard'>
            <BigSidebar />
            <SmallSidebar />
            <div>
                <Navbar />
                <div className="dashboard-page">
                    <Outlet />
                </div>
            </div>
        </main>
    )
}

export default SharedLayout;
