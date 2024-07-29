import { useState } from "react";

const Input = ({ taskList, setTaskList }) => {
    const [input, setInput] = useState("")
    //console.log(input)

    const handleAddTask = (e) => {
        e.preventDefault()
        setTaskList([...taskList,input])
        setInput("")
    }
    return (
        <>
            <form className="felx flex-row items-center gap-3">
                <input
                className="border rounded-lg py-1.5 px-2.5 text-lg mr-3"
                type="text"
                placeholder="Add a todo task"
                value={input}
                onChange={ (e) => 
                    setInput(e.target.value)
                }
                ></input>

                <button
                className="bg-violet-400 text-white py-2 px-3.5 rounded-lg font-semibold hover:opacity-70"
                onClick={handleAddTask}
                >Add</button>
            </form>
        </>
    )
}

export default Input;