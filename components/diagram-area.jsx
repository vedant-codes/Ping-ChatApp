"use client"

import { useEffect, useRef } from "react"

export default function DiagramArea({ zoom }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw grid dots
    const dotSize = 1
    const spacing = 20
    const scale = zoom / 50
    const adjustedSpacing = spacing * scale

    ctx.fillStyle = "#333"

    for (let x = 0; x < canvas.width; x += adjustedSpacing) {
      for (let y = 0; y < canvas.height; y += adjustedSpacing) {
        ctx.beginPath()
        ctx.arc(x, y, dotSize, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Draw watermark
    ctx.font = `${Math.max(48 * scale, 20)}px Arial`
    ctx.fillStyle = "rgba(30, 30, 30, 0.3)"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("SQurreL", canvas.width / 2, canvas.height / 2)
  }, [zoom])

  return (
    <div className="flex-1 relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ transform: `scale(${zoom / 50})` }} />
    </div>
  )
}

