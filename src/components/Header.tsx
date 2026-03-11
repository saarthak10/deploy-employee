import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Lock scroll when mobile menu is open
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="py-4 border-b border-slate-800 bg-transparent">
      <div className="container flex items-center justify-between">
        <Link to="/" className="text-2xl font-extrabold text-white">DeployEmploy</Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4">
          <Link to="/pricing" className="text-slate-200 hover:text-white">Pricing</Link>
          <Link to="/onboard" className="px-4 py-2 bg-indigo-600 rounded-md text-white">Get Started</Link>
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md bg-slate-800/50"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Mobile menu overlay */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/70 flex"
              onClick={() => setOpen(false)}
            >
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="ml-auto w-3/4 max-w-sm bg-slate-900 p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold">DeployEmploy</div>
                  <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2">
                    ✕
                  </button>
                </div>

                <nav className="mt-6 flex flex-col gap-4">
                  <Link to="/pricing" onClick={() => setOpen(false)} className="text-white text-lg">Pricing</Link>
                  <Link to="/onboard" onClick={() => setOpen(false)} className="px-4 py-2 bg-indigo-600 rounded-md text-white inline-block w-max">Get Started</Link>
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
