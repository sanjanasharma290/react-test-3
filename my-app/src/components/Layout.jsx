import Navbar from "./Navbar"

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col transition-colors duration-200 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <footer className="py-4 text-center border-t dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Notes App</p>
      </footer>
    </div>
  )
}

export default Layout

