import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Intro from "@/components/intro"
import Projects from "@/components/projects"

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Projects />
    </main>
  )
}
