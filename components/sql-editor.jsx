"use client"

import { useState } from "react"
import { X, Copy, Save } from "lucide-react"

export default function SqlEditor({ sql, onClose }) {
  const [editorSql, setEditorSql] = useState(sql)

  const lines = editorSql.split("\n")

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-30">
      <div className="bg-gray-950 w-[80%] max-w-4xl rounded-lg shadow-lg flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h2 className="text-white font-semibold">Edit SQL Code</h2>
          <div className="flex items-center">
            <button className="flex items-center bg-gray-800 hover:bg-gray-700 text-white text-sm rounded px-3 py-1.5 mr-2">
              <Copy size={14} className="mr-1" />
              Copy
            </button>
            <button className="flex items-center bg-gray-800 hover:bg-gray-700 text-white text-sm rounded px-3 py-1.5 mr-2">
              <Save size={14} className="mr-1" />
              Save
            </button>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-4 min-h-[400px]">
          <div className="flex">
            <div className="pr-4 text-right text-gray-500 select-none">
              {lines.map((_, i) => (
                <div key={i} className="h-6">
                  {i + 1}
                </div>
              ))}
            </div>
            <textarea
              value={editorSql}
              onChange={(e) => setEditorSql(e.target.value)}
              className="flex-1 bg-transparent text-white font-mono text-sm outline-none resize-none min-h-[400px]"
              spellCheck="false"
            />
          </div>
        </div>

        <div className="p-4 flex justify-end">
          <button onClick={onClose} className="bg-gray-800 hover:bg-gray-700 text-white text-sm rounded px-4 py-2 mr-2">
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

