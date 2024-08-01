import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaTachometerAlt,
    FaCog,
    FaUtensils
} from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar }) => {

    const navigate = useNavigate();


    return (
        <>
            <div className="md:hidden flex flex-col gap-20 bg-[#59111c] text-white p-5">
                <FaTachometerAlt
                    className="cursor-pointer"
                    onClick={
                        () => navigate('/dashboard')
                    }
                />
                <FaUtensils
                    className="cursor-pointer"
                    onClick={
                        () => navigate('/dashboard/listing')
                    }
                />
                <FaCog
                    className="cursor-pointer"
                    onClick={
                        () => navigate('/dashboard/profile')
                    }
                />
            </div>
            <aside className={`w-64 bg-[#59111c] text-white h-full ${isOpen ? 'block' : 'hidden'} md:block transition-all duration-300`}>
                <nav className="flex flex-col p-4 space-y-2">
                    <p
                        onClick={
                            () => navigate('/dashboard')
                        }
                        style={{ cursor: 'pointer' }}
                        className="flex items-center py-2 px-3 hover:bg-gray-700 rounded transition duration-300 active:bg-gray-600"
                    >
                        <FaTachometerAlt className="mr-2" /> Dashboard
                    </p>
                    <p
                        onClick={
                            () => navigate('/dashboard/listing')
                        }
                        style={{ cursor: 'pointer' }}
                        className="flex items-center py-2 px-3 hover:bg-gray-700 rounded transition duration-300 active:bg-gray-600"
                    >
                        <FaUtensils className="mr-2" /> List restaurant
                    </p>
                    <p
                        onClick={
                            () => navigate('/dashboard/profile')
                        }
                        style={{ cursor: 'pointer' }}
                        className="flex items-center py-2 px-3 hover:bg-gray-700 rounded transition duration-300 active:bg-gray-600"
                    >
                        <FaCog className="mr-2" /> Settings
                    </p>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;