import React, { useEffect, useState } from 'react';
import Task from './Task';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [show, setShow] = useState(false);
    
    useEffect(() => {
        fetch('http://localhost:5000/tasks').then(res=>res.json()).then(data => setTasks(data))
    }, [tasks])
    
    const addTask = (e) => {
        const title = e.target.title.value;
        const description = e.target.description.value;
        const newTask = { title, description}

        fetch('http://localhost:5000/addTask', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setShow(false)
            })

        
        e.target.reset();
        e.preventDefault();
    }

    return (
        <div>
            {
                show 
                ?
                <form onSubmit={addTask} className='flex flex-col gap-3 lg:w-1/2 mx-auto'>
                <input required type="text" placeholder="Title" name='title' className="input input-bordered w-full bg-white " />
                <textarea required name='description' className="textarea textarea-bordered bg-white " placeholder="Description"></textarea>
                <button className="btn btn-outline btn-primary btn-wide w-full sm:btn-sm md:btn-md" type='submit'> ADD </button>
                </form>
                :
                <button onClick={()=> setShow(true)} className='btn btn-primary btn-outline border-dashed lg:w-1/2 '>ADD NEW TASK</button>
            }

            <div className='flex flex-col mx-auto lg:w-1/2  '>
                {
                    tasks.map((task) => <Task
                    key={task._id}
                    task={task}
                ></Task>)
            }
            </div>
        </div>
    );
};

export default Tasks;