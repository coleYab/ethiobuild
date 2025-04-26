"use client"

import { useState } from "react"
import { Check } from "lucide-react"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

interface Variation {
  id: number
  name: string
  sku: string
  price: number
  qty_in_stock: number
  product_id: number
  created_at: string
  updated_at: string
}

interface ProductVariationSelectorProps {
  variations: Variation[]
}

export default function ProductVariationSelector({ variations }: ProductVariationSelectorProps) {
  const [selectedVariation, setSelectedVariation] = useState<number>(variations[0].id)

  const handleVariationChange = (value: string) => {
    setSelectedVariation(Number.parseInt(value))
  }

  const getSelectedVariation = () => {
    return variations.find((v) => v.id === selectedVariation)
  }

  const selected = getSelectedVariation()

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">Select Variation</h2>
        {selected && (
          <div className="flex items-center gap-2">
            <Badge variant="outline">{selected.sku}</Badge>
            <Badge variant="secondary">${selected.price.toFixed(2)}</Badge>
          </div>
        )}
      </div>

      <RadioGroup value={selectedVariation.toString()} onValueChange={handleVariationChange} className="mt-3 space-y-2">
        {variations.map((variation) => (
          <div
            key={variation.id}
            className={`relative flex cursor-pointer items-center justify-between rounded-lg border p-4 transition-all hover:border-gray-400 ${
              selectedVariation === variation.id ? "border-black bg-gray-50" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <RadioGroupItem value={variation.id.toString()} id={`variation-${variation.id}`} className="sr-only" />
              <Label
                htmlFor={`variation-${variation.id}`}
                className="flex cursor-pointer flex-col text-base font-normal"
              >
                <span className="font-medium">{variation.name}</span>
                <span className="text-sm text-gray-500">
                  {variation.sku} · ${variation.price.toFixed(2)} · {variation.qty_in_stock} in stock
                </span>
              </Label>
            </div>
            {selectedVariation === variation.id && <Check className="h-5 w-5 text-black" />}
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}
