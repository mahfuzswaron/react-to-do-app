import React, { useEffect, useMemo, useState } from 'react';
import Task from './Task';

const tasks = [
    {
        title: 'Perform Salat',
        description: 'I have to say all the salats: Fazar, Zuhar, Asar, Magrib and Esha'
    },
    {
        title: 'Complete Module',
        description: 'I have to complete the module in time'
    },
    {
        title: 'Excercise',
        description: 'I have to excercise in the afternoon'
    },
];
const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    
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
            .then(data => console.log(data))


        e.target.reset();
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={addTask} className='flex flex-col gap-3 w-1/2 mx-auto'>
                <input required type="text" placeholder="Title" name='title' className="input input-bordered w-full " />
                <textarea required name='description' class="textarea textarea-bordered" placeholder="Description"></textarea>
                <button className="btn btn-outline btn-info btn-wide w-full sm:btn-sm md:btn-md" type='submit'> ADD </button>
            </form>
            <div className='flex flex-col mx-auto w-1/2 '>
                {
                tasks.map((t) => <Task
                    task={t}
                ></Task>)
            }
            </div>
        </div>
    );
};

export default Tasks;