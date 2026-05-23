import './App.css'

import Sidebar from './components/Sidebar'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 px-6 pt-28 pb-20 md:px-10 lg:px-6 lg:pt-0 lg:pb-0">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 xl:gap-20 items-start">
        
        <Sidebar />

        <section className="space-y-8 sm:pt-28 sm:pb-20 md:pt-20 lg:pt-28 lg:pb-20">
          <About />
          <Projects />
        </section>

      </div>
    </main>
  )
}

export default App