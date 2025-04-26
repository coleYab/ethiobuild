"use client"

import { useState } from "react"
import { MinusIcon, PlusIcon, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import { toast } from "@/hooks/use-toast"

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

interface AddToCartSectionProps {
  variations: Variation[]
}

export default function AddToCartSection({ variations }: AddToCartSectionProps) {
  const [selectedVariation, setSelectedVariation] = useState<number>(variations[0].id)
  const [quantity, setQuantity] = useState(1)

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    const variation = variations.find((v) => v.id === selectedVariation)
    if (variation && quantity < variation.qty_in_stock) {
      setQuantity(quantity + 1)
    } else {
    //   toast({
    //     title: "Maximum stock reached",
    //     description: "You've reached the maximum available stock for this variation.",
    //     variant: "destructive",
    //   })
    }
  }

  const handleAddToCart = () => {
    const variation = variations.find((v) => v.id === selectedVariation)
    if (variation) {
    //   toast({
    //     title: "Added to cart",
    //     description: `${quantity} × ${variation.name} added to your cart`,
    //   })
    }
  }

  const variation = variations.find((v) => v.id === selectedVariation)
  const isInStock = variation && variation.qty_in_stock > 0

  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <span className="mr-4 text-sm font-medium">Quantity</span>
        <div className="flex items-center">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-r-none"
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
          >
            <MinusIcon className="h-3 w-3" />
            <span className="sr-only">Decrease quantity</span>
          </Button>
          <Input
            type="number"
            min="1"
            max={variation?.qty_in_stock || 1}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value) || 1)}
            className="h-8 w-16 rounded-none border-x-0 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-l-none"
            onClick={increaseQuantity}
            disabled={!isInStock || (variation && quantity >= variation.qty_in_stock)}
          >
            <PlusIcon className="h-3 w-3" />
            <span className="sr-only">Increase quantity</span>
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row">
        <Button className="flex-1 p-4" size="lg" onClick={handleAddToCart} disabled={!isInStock}>
          <ShoppingCart className="mr-2 h-5 w-5" />
          {isInStock ? "Add to Cart" : "Out of Stock"}
        </Button>
        <Button variant="outline" className="p-4" size="lg">
          Buy Now
        </Button>
      </div>

      {variation && (
        <div className="text-sm text-gray-500">
          {variation.qty_in_stock > 0 ? (
            <p>
              {variation.qty_in_stock > 10
                ? "Plenty in stock"
                : `Only ${variation.qty_in_stock} left in stock - order soon`}
            </p>
          ) : (
            <p className="text-red-500">Currently out of stock</p>
          )}
        </div>
      )}
    </div>
  )
}
