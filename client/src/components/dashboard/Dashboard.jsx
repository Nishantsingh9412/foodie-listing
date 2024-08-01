import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { setWebListAction } from '../../redux/action/weblist';

const Dashboard = () => {

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
        website: '',
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
        if (!formData.website) {
            toast.error('Please enter website URL');
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
                toast.success('Restaurant added successfully');
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
                website: '',
                restroRating: undefined,
            });
        })

        console.log(formData);
    };

    const autofill = () => {
        setFormData({
            restroName: 'China Town',
            restroImage: 'https://picsum.photos/seed/picsum/200/300',
            deliveryFees: 50,
            deliveryFeesCurrency: 'INR',
            deliveryTime: 30,
            deliveryType: 'Standard',
            restroLocation: 'Kanpurr',
            restroType: 'veg',
            restroRating: 4.5,
            website: 'https://www.google.com',
            createdBy: localUserId
        });
    }

    useEffect(() => {
        formData.createdBy = localUserId;
    }, [localUserId])

    return (
        // <main className="flex-1 p-4">
        //     <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        //         <div className="bg-white p-4 rounded shadow">Card 1</div>
        //         <div className="bg-white p-4 rounded shadow">Card 2</div>
        //         <div className="bg-white p-4 rounded shadow">Card 3</div>
        //     </div>
        // </main>
        <main className='flex-1'>
            <div className=" ">
                <Toaster />
                <div className="bg-white p-8 mt-5 rounded-xl shadow-lg w-full max-w-4xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
                        Add Restaurant
                        <button
                            className='bg-teal-500 text-white p-1 rounded-md  m-2'
                            onClick={autofill}
                        > autofill </button>
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
            </div>
        </main>
    );
};

export default Dashboard;
