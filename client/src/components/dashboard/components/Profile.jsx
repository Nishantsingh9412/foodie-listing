import React, { useState } from 'react';

import Header from '../Header';
import Sidebar from '../Sidebar';


const Profile = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-1">
                <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
                <h2>This is Profile Pahe</h2>
            </div>
        </div>
    );
};

export default Profile;
