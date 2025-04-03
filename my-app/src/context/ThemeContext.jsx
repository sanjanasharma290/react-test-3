"use client"

import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext(undefined)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light")

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme) {
      setTheme(savedTheme)
    } else if (prefersDark) {
      setTheme("dark")
    }
  }, [])

  // Update document when theme changes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

