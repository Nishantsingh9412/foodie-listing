import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWebListAction } from '../../redux/action/weblist';
import RestaurantCard from './RestaurantCard';

const WebsiteListCards = () => {
    const dispatch = useDispatch();
    const allListedWebsites = useSelector((state) => state.webList);
    const allWebsites = allListedWebsites?.weblist;

    useEffect(() => {
        dispatch(getWebListAction());
    }, [dispatch]);

    return (
        <div className="flex flex-wrap justify-center">
            {allWebsites?.map((restaurant) => (
                <RestaurantCard key={restaurant._id} restaurant={restaurant} />
            ))}
        </div>
    );
};

export default WebsiteListCards;
