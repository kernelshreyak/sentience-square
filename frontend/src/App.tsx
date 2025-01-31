import { useState } from 'react';
import './index.css';

function App() {
  const [input, setInput] = useState("");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-semibold text-gray-800 text-center">
          Sentience Square FrontDesk
        </h1>
        <p className="text-sm text-gray-600 mt-10 mb-4 text-center">
          Hello and welcome to Sentience Square! Happy to serve you today.
        </p>

        <input
          type="text"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="What do you want to do today?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded mt-4 transition duration-300">
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
