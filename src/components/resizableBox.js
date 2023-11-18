'use client'
import React from 'react';
import { Rnd } from 'react-rnd';
// import './resizableBox.css';

const ResizableBox = ({ createObjectURL }) => {
    return (
        <Rnd
            bounds="parent"
            className="hover:border border-gray-500 p-4"
        >
            <img className="mask mask-square" src={createObjectURL ? createObjectURL : "/default-logo.png"} />
            {/* <img className="" draggable="false"
                src={createObjectURL ? createObjectURL : "/default-logo.png"} /> */}
        </Rnd>
    );
};

export default ResizableBox;