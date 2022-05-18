import React from 'react';

const Tasks = () => {
    const tasks = [];

    const addTask = (e) => {
        const title = e.target.title.value;
        const description = e.target.description.value;
        const task = { title, description}
        tasks.unshift(task)
        console.log(tasks);

        e.target.reset();
        e.preventDefault();
    }
    console.log(tasks);
    return (
        <div>
            <form onSubmit={addTask} className='flex flex-col gap-3 w-1/2 mx-auto'>
                <input type="text" placeholder="Title" name='title' className="input input-bordered w-full " />
                <textarea name='description' class="textarea textarea-bordered" placeholder="Description"></textarea>
                <button className="btn btn-outline btn-info btn-wide w-full sm:btn-sm md:btn-md" type='submit'> ADD </button>
            </form>
        </div>
    );
};

export default Tasks;