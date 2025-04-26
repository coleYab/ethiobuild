"use client"

import { useState } from "react"
import { Check } from "lucide-react"

interface ProductColorSelectorProps {
  colors: string[]
}

export default function ProductColorSelector({ colors }: ProductColorSelectorProps) {
  const [selectedColor, setSelectedColor] = useState(colors[0])

  // Map color names to Tailwind classes
  const colorClasses: Record<string, string> = {
    Black: "bg-black",
    White: "bg-white border border-gray-200",
    Navy: "bg-blue-900",
    Gray: "bg-gray-500",
    Red: "bg-red-600",
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Color</span>
        <span className="text-sm text-gray-500">{selectedColor}</span>
      </div>
      <div className="mt-3 flex flex-wrap gap-3">
        {colors.map((color) => (
          <button
            key={color}
            className={`relative h-8 w-8 rounded-full ${colorClasses[color]} ${
              selectedColor === color ? "ring-2 ring-black ring-offset-2" : ""
            }`}
            onClick={() => setSelectedColor(color)}
            aria-label={`Select ${color} color`}
          >
            {selectedColor === color && color === "White" && (
              <Check className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 text-black" />
            )}
            {selectedColor === color && color !== "White" && (
              <Check className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 text-white" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
