import Hero from "../components/Hero"
import NotesList from "../components/NotesList"
import { Suspense } from "react"
import LoadingSpinner from "../components/LoadingSpinner"

function HomePage() {
  return (
    <div className="space-y-8">
      <Hero />
      <h2 className="text-2xl font-bold mb-4">Your Notes</h2>
      <Suspense fallback={<LoadingSpinner />}>
        <NotesList />
      </Suspense>
    </div>
  )
}

export default HomePage

