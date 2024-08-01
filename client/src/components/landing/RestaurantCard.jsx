import React from 'react';
import { MdOutlineStar } from "react-icons/md";

const RestaurantCard = ({ restaurant }) => {
    return (
        <div className="m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 antialiased text-gray-900">
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                <img
                    className="h-48 w-full object-cover object-end"
                    src={restaurant.restroImage}
                    alt={restaurant.restroName}
                />
                <div className="p-6">
                    {/* <div className="flex items-baseline">
                        <span className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">New</span>
                        <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                            3 beds &bull; 2 baths
                        </div>
                    </div> */}
                    <h4 className="mt-2 font-semibold text-lg leading-tight truncate">{restaurant.restroName}</h4>
                    <div className="mt-1">
                        <span>${restaurant.deliveryFees}</span>
                        <span className="text-gray-600 text-sm">/ {restaurant.deliveryFeesCurrency}</span>
                    </div>
                    <div className="mt-2 flex items-center">
                        <span className="text-teal-600 flex font-semibold">
                            <MdOutlineStar />
                            <MdOutlineStar />
                            <MdOutlineStar />
                            <MdOutlineStar />
                            <MdOutlineStar />
                        </span>
                        <span className="ml-2 text-gray-600 text-sm">{restaurant.restroRating} reviews</span>
                    </div>
                    <p className="text-gray-700 text-base mb-4">
                        Location: {restaurant.restroLocation}
                    </p>
                    <p className="text-gray-700 text-base mb-4">
                        Delivery Time: {restaurant.deliveryTime} mins
                    </p>
                    {/* <div className="flex items-center space-x-4 mb-4">
                        <button className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Wifi</button>
                        <button className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Parking</button>
                        <button className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Pets</button>
                    </div> */}
                    <button
                        className="w-full bg-themeRed text-white font-medium mt-4 py-2 px-4 rounded-full"
                        onClick={() => {
                            restaurant.website &&
                                window.open(restaurant?.website, '_blank')
                        }}
                    >
                        Visit Website
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;
