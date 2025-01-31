import { useState, useEffect } from "react"

function IndexPopup() {
  const [input, setInput] = useState("")

  useEffect(() => {
    // Create a link tag for Tailwind CDN and append it to the document head
    const link = document.createElement("link")
    link.href = "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
    link.rel = "stylesheet"
    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link) // Cleanup when component unmounts
    }
  }, [])

  return (
    <div className="p-6 w-80 bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-semibold text-gray-800">Sentience Square FrontDesk</h1>
      <p className="text-sm text-gray-600 mt-2 mb-4">Hello and welcome to Sentience Square! What do you want to do today?</p>
      
      <input
        type="text"
        className="mt-4 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Enter your task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Submit</button>
    </div>
  )
}

export default IndexPopup
