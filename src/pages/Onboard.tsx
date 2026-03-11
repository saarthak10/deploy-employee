import React from 'react'
import { motion } from 'framer-motion'

export default function Onboard() {
  return (
    <main className="min-h-screen">
      <section className="container py-12">
        <h1 className="text-4xl font-bold">Onboard</h1>
        <p className="mt-3 text-slate-300">Start by choosing a basket and telling Jarvis about your business in 2 minutes.</p>

        <div className="mt-8 p-6 bg-slate-800 rounded-lg">
          <ol className="list-decimal pl-6 text-slate-200">
            <li>Choose your basket (Starter / Growth / Empire)</li>
            <li className="mt-2">Choose AI quality (Basic / Premium / Premium Plus)</li>
            <li className="mt-2">Connect via WhatsApp / Telegram — Jarvis will begin onboarding</li>
          </ol>

          <div className="mt-6">
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="px-5 py-3 bg-indigo-600 rounded-md text-white">Begin Onboarding</motion.button>
          </div>
        </div>
      </section>
    </main>
  )
}
