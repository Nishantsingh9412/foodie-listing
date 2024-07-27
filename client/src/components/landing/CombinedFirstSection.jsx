import React from 'react';

import Header from './Header';
import FirstSection from './FirstSection';
import headImg from '../../assets/img/bg-comp1.png';

const CombinedFirstSection = () => {
    return (
        <div 
            style={{
                backgroundImage: `url(${headImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
            }}
            className='w-full'
        >
            <Header />
            <FirstSection />
        </div>
    );
}

export default CombinedFirstSection;