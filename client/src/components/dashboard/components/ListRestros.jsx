import React, { useState } from 'react';

import Header from '../Header';
import Sidebar from '../Sidebar';
import MainContent from '../MainContent';


const ListRestros = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-1">
                <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
                <MainContent />
            </div>
        </div>
    );
};

export default ListRestros;
