import { Copy, Play, Save } from "lucide-react"

export default function CodeTab() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-white rounded text-sm">
            <Copy size={16} />
            Copy
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 hover:bg-green-600 text-white rounded text-sm transition-colors">
            <Play size={16} />
            Run
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-white rounded text-sm">
            <Save size={16} />
            Save
          </button>
        </div>
      </div>

      <div className="bg-gray-900 rounded-lg p-4">
        <pre className="text-sm">
          <code>
            <span className="text-green-500">-- 1. Customers Table</span>
            {"\n"}
            <span className="text-blue-400">CREATE TABLE</span>
            <span className="text-white"> customers (</span>
            {"\n  "}
            <span className="text-white">id</span>
            <span className="text-blue-400"> INT</span>
            <span className="text-green-500"> PRIMARY KEY</span>
            <span className="text-white">,</span>
            {"\n  "}
            <span className="text-white">name</span>
            <span className="text-blue-400"> VARCHAR</span>
            <span className="text-white">(100),</span>
            {"\n  "}
            <span className="text-white">email</span>
            <span className="text-blue-400"> VARCHAR</span>
            <span className="text-white">(100),</span>
            {"\n  "}
            <span className="text-white">created_at</span>
            <span className="text-blue-400"> TIMESTAMP</span>
            {"\n"}
            <span className="text-white">);</span>
            {/* Add other table definitions */}
          </code>
        </pre>
      </div>
    </div>
  )
}

