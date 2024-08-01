import React, { useState } from 'react';

import Header from '../Header';
import Sidebar from '../Sidebar';
import WebsiteList from './subComponents/WebsiteList.jsx';


const DashboardOne = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-1">
                <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
                <WebsiteList />
            </div>
        </div>
    );
};

export default DashboardOne;
