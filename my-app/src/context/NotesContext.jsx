"use client"

import { createContext, useContext, useEffect, useState } from "react"
import axios from "axios"

const NotesContext = createContext(undefined)

export function NotesProvider({ children }) {
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch initial notes from JSONPlaceholder
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        setLoading(true)
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=8")
        setNotes(response.data)
        setError(null)
      } catch (err) {
        setError("Failed to fetch notes")
        console.error("Error fetching notes:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchNotes()
  }, [])

  const addNote = (note) => {
    const newNote = {
      id: Date.now(),
      title: note.title,
      body: note.body,
    }
    setNotes((prevNotes) => [newNote, ...prevNotes])
  }

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id))
  }

  return (
    <NotesContext.Provider value={{ notes, loading, error, addNote, deleteNote }}>{children}</NotesContext.Provider>
  )
}

export function useNotes() {
  const context = useContext(NotesContext)
  if (context === undefined) {
    throw new Error("useNotes must be used within a NotesProvider")
  }
  return context
}

