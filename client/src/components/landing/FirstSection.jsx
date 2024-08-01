import React from 'react';

import chairTable from '../../assets/img/chair-table.png';
import CSS from './firstsection.module.css'


const FirstSection = () => {
        
    return (
        <div className='flex flex-col md:flex-row h-screen m-28  '>
            {/* Section first */}
            <div className={CSS.headingdiv}
            >
                <h1
                    className={CSS.heading}
                >
                    We provide the best food for you
                </h1>
            </div>

            {/* Section second */}
            <div className='flex-1 flex items-center justify-center p-4'>
                <img
                    src={chairTable}
                    className='max-w-full h-auto'
                    alt='Chair and Table'
                />
            </div>
        </div >
    );
};

export default FirstSection;