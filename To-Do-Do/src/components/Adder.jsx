import React, { useState } from 'react'

const Adder = () => {

    const [addTasks, setAddTasks] = useState([]);

    const [inputValue, setInputValue] = useState({
        task: ""
    });

    const handleChange = (event) => {
        // event.preventDefault
        const { name, value } = event.target;

        setInputValue(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });

    }

    const addTask = () => {
        if (inputValue.task !== "") {
            setAddTasks([...addTasks, inputValue.task]);
            setInputValue({ task: "" });
        }
    }

    const removeTask = () => {

    }

    return (
        <div className='container'>
            <div className='inputs flex items-center justify-center mt-[10rem] w-[100vw] flex-col' >

                <div>

                    <input type="text" className='w-[620px] bg-blue-200 text-red-500 border-emerald-800 p-3 font-bold rounded-md' name="task" placeholder='Add Your Task' onChange={handleChange} value={inputValue.task} />

                    <button className='bg-green-600 text-white px-5 py-3 m-2 rounded-md' onClick={addTask}>Add</button>
                </div>

                <div className='w-[57%]'>

                    <ul className='font-medium w-[41.5vw] text-center'>
                        {
                            addTasks.map((task, index) => (

                                <div className='flex w-[730px] gap-[0.6rem]'>
                                    <li className='bg-emerald-300 w-[615px]  text-lg mt-3 py-3 rounded-md text-white' key={index}>{task}</li>

                                    <button className='bg-red-500 w-[72px] text-white rounded-md mt-3' onClick={() => removeTask(index)}>Remove</button>
                                </div>

                            ))
                        }
                    </ul>

                </div>
            </div>
        </div>

    )
}

export default Adder;
