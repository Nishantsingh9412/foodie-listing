import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { getWebListCRBAction, updateWebListAction } from '../../../../redux/action/weblist';
import { useDispatch } from 'react-redux';

const EditModal = ({
    isOpen,
    setIsOpen,
    toggleModal,
    website,
    localUserId
}) => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        restroName: '',
        restroImage: '',
        deliveryFees: undefined,
        deliveryFeesCurrency: '',
        deliveryTime: undefined,
        deliveryType: '',
        restroLocation: '',
        restroType: '',
        restroRating: undefined,
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        if (!formData.restroName) {
            toast.error('Please enter restaurant name');
            return false;
        }
        if (!formData.restroImage) {
            toast.error('Please enter image URL');
            return false;
        }
        if (!formData.deliveryFees) {
            toast.error('Please enter delivery fees');
            return false;
        }
        if (!formData.deliveryFeesCurrency) {
            toast.error('Please enter delivery fees currency');
            return false;
        }
        if (!formData.deliveryTime) {
            toast.error('Please enter delivery time');
            return false;
        }
        if (!formData.deliveryType) {
            toast.error('Please select delivery type');
            return false;
        }
        if (!formData.restroLocation) {
            toast.error('Please enter location');
            return false;
        }
        if (!formData.restroType) {
            toast.error('Please select restaurant type');
            return false;
        }
        if (!formData.restroRating) {
            toast.error('Please enter rating');
            return false;
        }
        return true;
    }

    const handleEditWebsite = (e) => {
        e.preventDefault();
        console.log(formData);
        if (!validate()) {
            return;
        }
        setLoading(true);
        dispatch(updateWebListAction(
            website._id, formData
        )).then((res) => {
            // toast.success('Data submission successfully')
            if (res.success) {
                toast.success('Restaurant Updated successfully');
                setIsOpen(false);
            } else {
                toast.warn(res.message);
            }
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            setLoading(false);
            dispatch(getWebListCRBAction(localUserId));
            setFormData({
                restroName: '',
                restroImage: '',
                deliveryFees: undefined,
                deliveryFeesCurrency: '',
                deliveryTime: undefined,
                deliveryType: '',
                restroLocation: '',
                restroType: '',
                restroRating: undefined,
            });
        })

        // console.log(formData);
    };


    useEffect(() => {
        if (website) {
            setFormData({
                restroName: website.restroName,
                restroImage: website.restroImage,
                deliveryFees: website.deliveryFees,
                deliveryFeesCurrency: website.deliveryFeesCurrency,
                deliveryTime: website.deliveryTime,
                deliveryType: website.deliveryType,
                restroLocation: website.restroLocation,
                restroType: website.restroType,
                restroRating: website.restroRating,
                website: website.website,
            });
        }
    }, [isOpen]);


    // console.log(16, "website  :", website)
    // console.log(17, "localUserId  :", localUserId)
    // console.log(18, "isOpen  :", isOpen)
    // console.log(19, "setIsOpen  :", setIsOpen)
    // console.log(20, "toggleModal  :", toggleModal)

    return (
        <>
            {/* Main modal */}
            {isOpen && (
                <div
                    id="default-modal"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
                >
                    <div className="relative p-4 w-full max-w-2xl max-h-full">
                        {/* Modal content */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* Modal header */}
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {website?.restroName}
                                </h3>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={toggleModal}
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* Modal body */}
                            <div className="p-4 md:p-5 space-y-4">
                                <form onSubmit={handleEditWebsite} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Restaurant Name</label>
                                            <input
                                                type="text"
                                                name="restroName"
                                                value={formData.restroName}
                                                onChange={handleChange}
                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                placeholder="Enter restaurant name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Restaurant Image URL</label>
                                            <input
                                                type="text"
                                                name="restroImage"
                                                value={formData.restroImage}
                                                onChange={handleChange}
                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                placeholder="Enter image URL"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Delivery Fees</label>
                                            <input
                                                type="number"
                                                name="deliveryFees"
                                                value={formData.deliveryFees}
                                                onChange={handleChange}
                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                placeholder="Enter delivery fees"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Delivery Fees Currency</label>
                                            <input
                                                type="text"
                                                name="deliveryFeesCurrency"
                                                value={formData.deliveryFeesCurrency}
                                                onChange={handleChange}
                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                placeholder="Enter currency"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Delivery Time (in minutes)</label>
                                            <input
                                                type="number"
                                                name="deliveryTime"
                                                value={formData.deliveryTime}
                                                onChange={handleChange}
                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                placeholder="Enter delivery time"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Delivery Type</label>
                                            <select
                                                name="deliveryType"
                                                value={formData.deliveryType}
                                                onChange={handleChange}
                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            >
                                                <option value="">Select</option>
                                                <option value="Standard">Standard</option>
                                                <option value="Express">Express</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Restaurant Location</label>
                                            <input
                                                type="text"
                                                name="restroLocation"
                                                value={formData.restroLocation}
                                                onChange={handleChange}
                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                placeholder="Enter location"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Restaurant Type</label>
                                            <select
                                                name="restroType"
                                                value={formData.restroType}
                                                onChange={handleChange}
                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            >
                                                <option value="">Select</option>
                                                <option value="veg">Veg</option>
                                                <option value="non-veg">Non-Veg</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Restaurant Rating</label>
                                            <input
                                                type="number"
                                                name="restroRating"
                                                step="0.1"
                                                value={formData.restroRating}
                                                onChange={handleChange}
                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                placeholder="Enter rating (1-5)"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Website URL</label>
                                            <input
                                                type="text"
                                                name="website"
                                                value={formData.website}
                                                onChange={handleChange}
                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                placeholder="Enter website URL"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            disabled={loading}
                                            cursor={loading ? 'not-allowed' : 'pointer'}
                                            type="submit"
                                            className="w-full py-3 px-4 bg-themeRed text-white font-medium rounded-md shadow-sm hover:bg-themeDarkRed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700 transition-all duration-300"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                            {/* Modal footer */}
                            {/* <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button
                                    onClick={toggleModal}
                                    type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    I accept
                                </button>
                                <button
                                    onClick={toggleModal}
                                    type="button"
                                    className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                >
                                    Decline
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default EditModal;