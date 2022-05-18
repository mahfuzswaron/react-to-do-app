import React, { useState } from 'react';

const Task = ({ task }) => {
    const { title, description } = task;
    const [show, setShow] = useState(false);
    return (
        <div  data-tip={show ? 'click to hide' : 'click to expand'} className='text-left my-3 border rounded-lg p-2 hover:bg-gray-50 tooltip  tooltip-info'>
            <h3 onClick={() => setShow(!show)} className='text-2xl p-1 m-1 cursor-pointer'>{title}</h3>
            <div className={show ? 'block' : 'hidden'}>
                <p className='text-xl p-1 m-1'>{description}</p>
             <div class="card-actions justify-end">
                <button className="btn btn-success text-white">Completed</button>
                <button className="btn btn-error text-white">remove</button>
            </div>
            </div>
            
        </div>
    );
};

export default Task;