"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import SchemaTab from "./schema-tabs/schema-tab"
import CodeTab from "./schema-tabs/code-tab"
import DocumentationTab from "./schema-tabs/documentation-tab"
import MockDataTab from "./schema-tabs/mock-data-tab"
import ExportTab from "./schema-tabs/export-tab"

export default function SchemaInspector({ onClose, currentPrompt, isOpen }) {
  const [activeTab, setActiveTab] = useState("schema")
  const [generationStatus, setGenerationStatus] = useState({
    connecting: false,
    generating: false,
    flowchart: false,
    documentation: false,
    complete: false,
  })

  useEffect(() => {
    if (isOpen && currentPrompt) {
      // Start generation process
      generateContent()
    }
  }, [isOpen, currentPrompt])

  const generateContent = async () => {
    setGenerationStatus({
      connecting: true,
      generating: false,
      flowchart: false,
      documentation: false,
      complete: false,
    })
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API delay

    setGenerationStatus({ connecting: true, generating: true, flowchart: false, documentation: false, complete: false })
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setGenerationStatus({ connecting: true, generating: true, flowchart: true, documentation: false, complete: false })
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setGenerationStatus({ connecting: true, generating: true, flowchart: true, documentation: true, complete: false })
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setGenerationStatus({ connecting: true, generating: true, flowchart: true, documentation: true, complete: true })
  }

  return (
    <div
      className={cn(
        "fixed right-0 top-0 bottom-0 w-[500px] bg-black border-l border-gray-800 flex flex-col z-20 transition-transform duration-300",
        isOpen ? "translate-x-0" : "translate-x-full",
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <div>
          <h2 className="text-green-500 font-semibold text-xl">Schema Inspector</h2>
          <p className="text-gray-400 text-sm">View and manage your database schema</p>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <X size={18} />
        </button>
      </div>

      {currentPrompt && !generationStatus.complete ? (
        <div className="p-4 space-y-4">
          <h3 className="text-white font-semibold">Generating Schema...</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "w-5 h-5 rounded-full flex items-center justify-center",
                  generationStatus.connecting ? "bg-green-500" : "bg-gray-700",
                )}
              >
                {generationStatus.connecting && "✓"}
              </div>
              <span className="text-white">Connecting to Open AI server for SQL</span>
            </div>

            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "w-5 h-5 rounded-full flex items-center justify-center",
                  generationStatus.generating ? "bg-green-500" : "bg-gray-700",
                )}
              >
                {generationStatus.generating && "✓"}
              </div>
              <span className="text-white">Generating content</span>
            </div>

            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "w-5 h-5 rounded-full flex items-center justify-center",
                  generationStatus.flowchart ? "bg-green-500" : "bg-gray-700",
                )}
              >
                {generationStatus.flowchart && "✓"}
              </div>
              <span className="text-white">Generating flow diagram for the solution</span>
            </div>

            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "w-5 h-5 rounded-full flex items-center justify-center",
                  generationStatus.documentation ? "bg-green-500" : "bg-gray-700",
                )}
              >
                {generationStatus.documentation && "✓"}
              </div>
              <span className="text-white">Generating documentation</span>
            </div>

            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "w-5 h-5 rounded-full flex items-center justify-center",
                  generationStatus.complete ? "bg-green-500" : "bg-gray-700",
                )}
              >
                {generationStatus.complete && "✓"}
              </div>
              <span className="text-white">Complete</span>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex border-b border-gray-800">
            <button
              onClick={() => setActiveTab("schema")}
              className={cn(
                "px-4 py-3 text-sm border-b-2 transition-colors",
                activeTab === "schema" ? "text-white border-green-500" : "text-gray-400 border-transparent",
              )}
            >
              Schema
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={cn(
                "px-4 py-3 text-sm border-b-2 transition-colors",
                activeTab === "code" ? "text-white border-green-500" : "text-gray-400 border-transparent",
              )}
            >
              Code
            </button>
            <button
              onClick={() => setActiveTab("documentation")}
              className={cn(
                "px-4 py-3 text-sm border-b-2 transition-colors",
                activeTab === "documentation" ? "text-white border-green-500" : "text-gray-400 border-transparent",
              )}
            >
              Documentation
            </button>
            <button
              onClick={() => setActiveTab("mockData")}
              className={cn(
                "px-4 py-3 text-sm border-b-2 transition-colors",
                activeTab === "mockData" ? "text-white border-green-500" : "text-gray-400 border-transparent",
              )}
            >
              Mock Data
            </button>
            <button
              onClick={() => setActiveTab("export")}
              className={cn(
                "px-4 py-3 text-sm border-b-2 transition-colors",
                activeTab === "export" ? "text-white border-green-500" : "text-gray-400 border-transparent",
              )}
            >
              Export
            </button>
          </div>

          <div className="flex-1 overflow-auto">
            {activeTab === "schema" && <SchemaTab />}
            {activeTab === "code" && <CodeTab />}
            {activeTab === "documentation" && <DocumentationTab />}
            {activeTab === "mockData" && <MockDataTab />}
            {activeTab === "export" && <ExportTab />}
          </div>
        </>
      )}
    </div>
  )
}

