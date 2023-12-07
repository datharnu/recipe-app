import React from 'react';

export default function Button({ onClick, label }) {
    return (
        <button
            className='bg-primary text-white font-bold w-[101px] h-9 rounded-[10px] shadow'
            onClick={onClick}
        >
            {label}
        </button>
    );
}
