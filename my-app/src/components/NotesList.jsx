import { useNotes } from "../context/NotesContext"
import NoteCard from "./NoteCard"
import LoadingSpinner from "./LoadingSpinner"
import { Link } from "react-router-dom"

function NotesList() {
  const { notes, loading, error } = useNotes()

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  if (notes.length === 0) {
    return (
      <div className="text-center py-10">
        <h3 className="text-xl mb-4">No notes yet</h3>
        <Link to="/create">
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
              className="mr-2 h-4 w-4"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            Create Your First Note
          </button>
        </Link>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  )
}

export default NotesList

