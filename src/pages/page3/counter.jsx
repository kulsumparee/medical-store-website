import React, { useState } from 'react';

function Counter({ className }) {
    const [count, setCount] = useState(1);

    return (
        <div className={`flex justify-center items-center gap-5 px-3 rounded-full border-2  ${className}`}>
            <button
                onClick={() => count > 0 && setCount(count - 1)}
                className="text-3xl   cursor-pointer"
            >
                -
            </button>
            <span className="text-lg">{count}</span>
            <button
                onClick={() => setCount(count + 1)}
                className="text-xl bg-transparent   cursor-pointer"
            >
                +
            </button>
        </div>
    );
}

export default Counter;