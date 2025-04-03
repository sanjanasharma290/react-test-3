import { Link } from "react-router-dom"

function Hero() {
  return (
    <div className="py-12 text-center space-y-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 rounded-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-16 w-16 mx-auto text-purple-500"
      >
        <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"></path>
        <path d="M15 3v6h6"></path>
      </svg>
      <h1 className="text-4xl font-bold">Welcome to Notes App</h1>
      <p className="text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
        A simple way to keep track of your thoughts, ideas, and reminders.
      </p>
      <div>
        <Link to="/create">
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-4">
            Create a New Note
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Hero

