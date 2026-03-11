import React from 'react'

export default function AgentCard({ agent }: { agent: any }) {
  return (
    <div className="p-4 bg-slate-800 rounded-md border border-slate-700">
      <h3 className="font-semibold">{agent.name}</h3>
      <p className="mt-2 text-slate-300">{agent.role}</p>
      <p className="mt-3 text-sm text-slate-400">{agent.desc}</p>
    </div>
  )
}
