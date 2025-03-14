"use client"

import { useState } from "react"

export default function SchemaTab() {
  const [expanded, setExpanded] = useState({
    customers: true,
    products: true,
    orders: true,
  })

  const toggleExpand = (table) => {
    setExpanded((prev) => ({
      ...prev,
      [table]: !prev[table],
    }))
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl text-white">Database Schema</h2>
        <span className="text-gray-400">4 tables, 18 columns</span>
      </div>

      <div className="space-y-6">
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <div className="bg-gray-800 px-4 py-2">
            <h3 className="text-white font-medium">customers</h3>
          </div>
          <div className="p-4">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-400 text-sm">
                  <th className="py-2">Column</th>
                  <th className="py-2">Type</th>
                  <th className="py-2">Attributes</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="py-2 text-yellow-500">id</td>
                  <td className="py-2 text-blue-400">INT</td>
                  <td className="py-2 text-green-500">PRIMARY KEY</td>
                </tr>
                <tr>
                  <td className="py-2 text-white">name</td>
                  <td className="py-2 text-blue-400">VARCHAR(100)</td>
                  <td className="py-2"></td>
                </tr>
                <tr>
                  <td className="py-2 text-white">email</td>
                  <td className="py-2 text-blue-400">VARCHAR(100)</td>
                  <td className="py-2"></td>
                </tr>
                <tr>
                  <td className="py-2 text-white">created_at</td>
                  <td className="py-2 text-blue-400">TIMESTAMP</td>
                  <td className="py-2"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Add other tables similarly */}
      </div>
    </div>
  )
}

