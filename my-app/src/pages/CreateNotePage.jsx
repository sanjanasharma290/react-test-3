"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useNotes } from "../context/NotesContext"

function CreateNotePage() {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const { addNote } = useNotes()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title.trim() || !body.trim()) {
      alert("Please fill in all fields")
      return
    }

    addNote({ title, body })
    navigate("/")
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create New Note</h1>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-lg font-semibold leading-none tracking-tight">Note Details</h3>
          </div>
          <div className="p-6 pt-0 space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-1">
                Title
              </label>
              <input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter note title"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            <div>
              <label htmlFor="body" className="block text-sm font-medium mb-1">
                Content
              </label>
              <textarea
                id="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Enter note content"
                className="flex min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>

          <div className="flex items-center p-6 pt-0 justify-between">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Save Note
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateNotePage

