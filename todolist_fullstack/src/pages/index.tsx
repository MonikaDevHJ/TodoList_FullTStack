import { useState } from "react";





export default function Home() {

  const [input, setInput] = useState<string>(""); // For the input field
  const [task, setTask] = useState<string[]>([]); // For the list of tasks

  const handleTask = (): void => {
  if(input.trim() === " ") return;
  setTask((prevTasks)=>[...prevTasks, input]);
  setInput("");
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">To-Do List</h1>
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        {/* Add Task Section */}
        <div className="mb-4">
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a new task"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <button
          className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"

          onClick={handleTask}
        >
          Add Task
        </button>

        {/* Task List Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-3">Tasks:</h2>
          <ul className="list-disc pl-5">
            <li className="flex items-center justify-between text-gray-700 mb-2">
              <span>Sample Task 1</span>
              <div className="flex space-x-2">
                <button className="text-blue-500 hover:text-blue-700">
                  Edit
                </button>
                <button className="text-red-500 hover:text-red-700">
                  Delete
                </button>
              </div>
            </li>
            <li className="flex items-center justify-between text-gray-700 mb-2">
              <span>Sample Task 2</span>
              <div className="flex space-x-2">
                <button className="text-blue-500 hover:text-blue-700">
                  Edit
                </button>
                <button className="text-red-500 hover:text-red-700">
                  Delete
                </button>
              </div>
            </li>
            <li className="flex items-center justify-between text-gray-700 mb-2">
              <span>Sample Task 3</span>
              <div className="flex space-x-2">
                <button className="text-blue-500 hover:text-blue-700">
                  Edit
                </button>
                <button className="text-red-500 hover:text-red-700">
                  Delete
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
