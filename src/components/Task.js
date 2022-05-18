import React, { useState } from 'react';

const Task = ({ task }) => {
    const { title, description, _id } = task;
    const [show, setShow] = useState(false);
    const [completed, setCompleted] = useState(false);

    const deleteTask = () => {
        fetch(`https://peaceful-hollows-65824.herokuapp.com/tasks/${_id}`, {
            method: 'DELETE', 
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className='text-left my-3 border rounded-lg p-2 hover:bg-gray-50'>
            <h3 onClick={() => setShow(!show)} className='text-2xl p-1 m-1  cursor-pointer'>{completed ? <strike>{title}</strike> : title}</h3>
            
            <div className={show ? 'block' : 'hidden'}>
                <p className='text-xl p-1 m-1'>{description}</p>
             <div className="card-actions justify-end">
                    <button onClick={() => {
                        setShow(!show)
                        setCompleted(!completed)
                    }} className="btn btn-success text-white">{completed ? 'redo task' : 'completed'}</button>
                <button onClick={deleteTask} className="btn btn-error text-white">remove</button>
            </div>
            </div>
            
        </div>
    );
};

export default Task;