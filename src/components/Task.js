import React from 'react';

const Task = ({ task }) => {
    const { title, description } = task;
    return (
        <div className='text-left my-3 '>
            <h3 className='text-2xl border p-1 m-1'>{title}</h3>
            <p className='text-xl border p-1 m-1'>{ description}</p>
        </div>
    );
};

export default Task;