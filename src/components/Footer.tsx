import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-800 py-8">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-slate-400">© {new Date().getFullYear()} DeployEmploy. All rights reserved.</div>
        <div className="text-slate-400">Privacy · Terms</div>
      </div>
    </footer>
  )
}
