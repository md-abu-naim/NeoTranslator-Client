import React from 'react';
import { Link } from 'react-router-dom';

const History = () => {
    return (
        <div className="flex flex-col items-center p-5">
            <img className='h-[250px]' src="/assets/QuestionMark.webp" alt="" />
            <h2 className='text-3xl my-5 font-bold'>History Not Available</h2>
            <Link to="/" className="font-bold bg-blue-500 hover:bg-blue-900 transition duration-300 text-white p-3 mt-3 rounded-lg" >Continue Translating</Link>
        </div>
    );
};

export default History;