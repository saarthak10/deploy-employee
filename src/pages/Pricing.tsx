import React from 'react'
import { PRICING_BASKETS } from '../data/content'
import { motion } from 'framer-motion'

export default function Pricing() {
  return (
    <main className="min-h-screen">
      <section className="container py-12">
        <h1 className="text-4xl font-bold">Pricing</h1>
        <p className="mt-3 text-slate-300">Choose a basket (which agents you want), then pick the intelligence level — same team, smarter brain.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRICING_BASKETS.map((b) => (
            <div key={b.id} className="p-6 bg-slate-800 rounded-lg border border-slate-700">
              <h3 className="text-xl font-semibold">{b.title}</h3>
              <p className="mt-2 text-slate-300">{b.subtitle}</p>
              <div className="mt-4">
                <div className="text-3xl font-bold">From ₹2,499</div>
                <div className="mt-3 flex gap-2">
                  <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="px-4 py-2 bg-indigo-600 rounded">Choose</motion.button>
                  <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="px-4 py-2 border border-slate-700 rounded">Details</motion.button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
