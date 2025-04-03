

import { Link } from "react-router-dom"
import { useNotes } from "../context/NotesContext"

function NoteCard({ note }) {
  const { deleteNote } = useNotes()

  const handleDelete = (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (window.confirm("Are you sure you want to delete this note?")) {
      deleteNote(note.id)
    }
  }

  return (
    <Link to={`/notes/${note.id}`}>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm h-full cursor-pointer hover:shadow-md transition-shadow">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-lg font-semibold leading-none tracking-tight line-clamp-1">{note.title}</h3>
        </div>
        <div className="p-6 pt-0">
          <p className="text-gray-600 dark:text-gray-300 line-clamp-3">{note.body}</p>
        </div>
        <div className="flex items-center p-6 pt-0 justify-end">
          <button
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 text-red-500 hover:text-red-700 hover:bg-red-100 dark:hover:bg-red-900/20"
            onClick={handleDelete}
          >
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
              className="h-4 w-4"
            >
              <path d="M3 6h18"></path>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      </div>
    </Link>
  )
}

export default NoteCard

