import React from 'react';

const TooltipButton = ({ position = 'bottom', colors = ['bg-red-300', 'bg-red-500', 'bg-red-700'] }) => {
    const positionClasses = {
        bottom: {
            tooltip: 'bottom-full left-1/2 transform -translate-x-1/2 mb-3', // tooltip below
            arrow: 'left-1/2 transform -translate-x-1/2 -bottom-2 border-t-8 border-t-white/35',
            bubbleWrapper: 'bottom-full mb-5',  // This positions the bubbles above the main button
        },
        top: {
            tooltip: 'top-full left-1/2 transform -translate-x-1/2 mt-3',
            arrow: 'left-1/2 transform -translate-x-1/2 -top-2 border-b-8 border-b-white/35',
            bubbleWrapper: 'top-full mt-5',  // This positions the bubbles below the main button
        },
    };

    return (
        <div className='relative group'>
            <button className='relative p-4 bg-white/25 rounded-full border bg-white text-xl'>
                {/* Circle Button */}
            </button>

            {/* Small Bubbles - Positioned Above the Main Button */}
            <div className={`absolute ${positionClasses[position].bubbleWrapper} left-1/2 transform -translate-x-1/2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                {colors.map((color, index) => (
                    <div key={index} className={`size-6 ${color} border-white rounded-full`}></div>
                ))}
            </div>

            {/* Tooltip */}
            <div className={`hidden absolute ${positionClasses[position].tooltip} space-x-1 p-2 rounded-full bg-white/25 shadow-md group-hover:flex`}>
                {colors.map((color, index) => (
                    <div key={index} className={`size-6 ${color} border-white rounded-full`}></div>
                ))}

                {/* Tooltip Arrow */}
                <div className={`absolute w-0 h-0 border-l-8 border-transparent border-r-8 ${positionClasses[position].arrow}`}></div>
            </div>
        </div>
    );
};

export default TooltipButton;
