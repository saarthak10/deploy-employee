import React from 'react'
import Hero3D from '../components/Hero3D'
import AgentCard from '../components/AgentCard'
import { AGENTS, HOME_COPY, PRICING_BASKETS } from '../data/content'
import { motion } from 'framer-motion'

export default function Home() {
  console.log('Home page rendered')
  return (
    <main>
      <section className="relative">
        <div className="container flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold">Your Dream Business. Now Online.</h1>
            <p className="mt-4 text-lg text-slate-200">{HOME_COPY.heroSubtitle}</p>
            <div className="mt-6 flex gap-3">
              <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="px-5 py-3 bg-indigo-600 rounded-md shadow">Get started</motion.a>
              <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="px-5 py-3 border border-slate-700 rounded-md">How it works</motion.a>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-80 md:h-96">
            <Hero3D />
          </div>
        </div>
      </section>

      <section className="container mt-16">
        <h2 className="text-2xl font-semibold">Meet your AI Employees</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AGENTS.map((a) => (
            <AgentCard key={a.id} agent={a} />
          ))}
        </div>
      </section>

      <section className="container mt-16">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <p className="mt-2 text-slate-300">Pick a basket, then choose the intelligence level — same team, smarter brain.</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRICING_BASKETS.map((b) => (
            <div key={b.id} className="p-6 bg-slate-800 rounded-lg">
              <h3 className="font-semibold text-xl">{b.title}</h3>
              <p className="mt-2 text-slate-300">{b.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mt-16 pb-20">
        <h2 className="text-2xl font-semibold">How it works</h2>
        <ol className="mt-4 list-decimal pl-6 text-slate-200">
          <li>{HOME_COPY.how[0]}</li>
          <li className="mt-2">{HOME_COPY.how[1]}</li>
          <li className="mt-2">{HOME_COPY.how[2]}</li>
        </ol>
      </section>
    </main>
  )
}
