import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast';
import { FaEdit, FaTrash } from 'react-icons/fa';

import { deleteWebListAction, getWebListCRBAction } from '../../../../redux/action/weblist'
import EditModal from './EditModal';



const Website = ({ website, onDelete, localUserId }) => {
    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const handleConfirmDelete = (id) => {
        dispatch(deleteWebListAction(id)).then((res) => {
            if (res.success) {
                toast.success('Website Deleted Successfully')
            } else {
                toast.error('Failed to delete Website')
            }
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            dispatch(getWebListCRBAction(localUserId))
        })
    }

    const handleDelete = (id) => {
        console.log(16, "id  :", id);
        toast((t) => (
            <span>
                Are you sure you want to delete this Listed Website?
                <button
                    onClick={() => {
                        handleConfirmDelete(id);
                        toast.dismiss(t.id);
                    }}
                    className="ml-2 px-3 py-1 bg-red-600 text-white rounded"
                >
                    Yes
                </button>
                <button
                    onClick={() => toast.dismiss(t.id)}
                    className="ml-2 px-3 py-1 bg-gray-600 text-white rounded"
                >
                    No
                </button>
            </span>
        ));
    };  

    const handleEdit = (website) => {
    }

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <Toaster />
            <img className="w-full h-48 object-cover sm:h-56 md:h-64 lg:h-72 xl:h-80" src={website.restroImage} alt={website.restroName} />
            <div className="px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="font-bold text-xl mb-2">{website.restroName}</div>
                    <div className="flex space-x-2">
                        <FaEdit
                            className="text-blue-500 cursor-pointer"
                            onClick={() =>
                                toggleModal()
                            }
                        />
                        <FaTrash
                            className="text-red-500 cursor-pointer"
                            onClick={() => handleDelete(website?._id)}
                        />
                    </div>
                </div>
                <p className="text-gray-700 text-base">
                    Location: {website.restroLocation}
                </p>
                <p className="text-gray-700 text-base">
                    Type: {website.restroType}
                </p>
                <p className="text-gray-700 text-base">
                    Delivery Fees: {website.deliveryFees} {website.deliveryFeesCurrency}
                </p>
                <p className="text-gray-700 text-base">
                    Delivery Time: {website.deliveryTime} mins
                </p>
                <p className="text-gray-700 text-base">
                    Rating: {website.restroRating}
                </p>
            </div>
            <EditModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                toggleModal={toggleModal}
                website={website}
                localUserId={localUserId}
            />
        </div>
    );
};

const WebsiteList = () => {
    const dispatch = useDispatch();
    const localUserData = JSON.parse(localStorage.getItem('Profile'));
    const localUserId = localUserData?._id;
    console.log("localUserId  :", localUserId)
    const allListedWebsites = useSelector((state) => state.webList)
    const allWebsites = allListedWebsites?.weblist
    console.log("allListedWebsites  :", allListedWebsites)

    useEffect(() => {
        dispatch(getWebListCRBAction(localUserId))
    }, [localUserId])


    return (
        <div className="container mx-auto px-4">
            {allWebsites?.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {allWebsites.map((website) => (
                        <Website
                            website={website}
                            key={website._id}
                            localUserId={localUserId}
                        />
                    ))}
                </div>
            ) : (
                <p className="text-center mt-2 text-themeRed font-bold bg-gray-100 p-4 rounded-lg shadow-md">
                    No websites available
                </p>
            )}
        </div>
    )
}

export default WebsiteList
