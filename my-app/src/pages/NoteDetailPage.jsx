"use client"

import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useNotes } from "../context/NotesContext"
import LoadingSpinner from "../components/LoadingSpinner"

function NoteDetailPage() {
  const { id } = useParams()
  const { notes, deleteNote } = useNotes()
  const navigate = useNavigate()
  const [note, setNote] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (notes.length > 0) {
      const foundNote = notes.find((note) => note.id === Number(id))
      setNote(foundNote || null)
    }
    setLoading(false)
  }, [id, notes])

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      deleteNote(Number(id))
      navigate("/")
    }
  }

  if (loading) {
    return <LoadingSpinner />
  }

  if (!note) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold mb-4">Note not found</h2>
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
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
            className="mr-2 h-4 w-4"
          >
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
          Back to Notes
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <button
        onClick={() => navigate("/")}
        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mb-4"
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
          className="mr-2 h-4 w-4"
        >
          <path d="m12 19-7-7 7-7"></path>
          <path d="M19 12H5"></path>
        </svg>
        Back to Notes
      </button>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">{note.title}</h3>
        </div>
        <div className="p-6 pt-0">
          <p className="whitespace-pre-wrap">{note.body}</p>
        </div>
        <div className="flex items-center p-6 pt-0 justify-end">
          <button
            onClick={handleDelete}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2"
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
              className="mr-2 h-4 w-4"
            >
              <path d="M3 6h18"></path>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            </svg>
            Delete Note
          </button>
        </div>
      </div>
    </div>
  )
}

export default NoteDetailPage

