import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { setWebListAction } from '../../redux/action/weblist';

const RestaurantForm = () => {

    const dispatch = useDispatch();
    const localUserData = JSON.parse(localStorage.getItem('Profile'));
    const localUserId = localUserData?._id;
    console.log(localUserId);
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
        createdBy: ''
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
        if (!formData.createdBy) {
            toast.error('Session expired Logout and login again');
            return false;
        }
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) {
            return;
        }
        setLoading(true);
        dispatch(setWebListAction(
            formData
        )).then((res) => {
            // toast.success('Data submission successfully')
            if (res.success) {
                toast.success(res.message);
            } else {
                toast.warn(res.message);
            }
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            setLoading(false);
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

        console.log(formData);
    };

    const autofill = () => {
        setFormData({
            restroName: 'Burger King',
            restroImage: 'https://www.burgerking.in/uploads/whopper.jpg',
            deliveryFees: 50,
            deliveryFeesCurrency: 'INR',
            deliveryTime: 30,
            deliveryType: 'Standard',
            restroLocation: 'Kanpurr',
            restroType: 'veg',
            restroRating: 4.5,
            createdBy: localUserId
        });
    }

    useEffect(() => {
        formData.createdBy = localUserId;
    }, [localUserId])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#990100] via-[#fe91a4] to-[#c61f3b] p-4">
            <Toaster />
            {/* <button
                className='bg-red-500 text-white p-2 rounded-md  m-5'
                onClick={autofill}
            >
                autofill
            </button> */}
            <div className="bg-white rounded-xl p-8 shadow-lg w-full max-w-4xl mx-auto">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
                    List Restaurant
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-themeRed text-white font-medium rounded-md shadow-sm hover:bg-themeDarkRed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700 transition-all duration-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RestaurantForm;