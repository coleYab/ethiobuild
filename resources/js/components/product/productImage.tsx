"use client"

import { useState } from "react"
// import Image from "next/image"

interface ProductImageGalleryProps {
  productName: string
}

export default function ProductImageGallery({ productName }: ProductImageGalleryProps) {
  // Since we don't have actual images, we'll use placeholders
  const images = [
    "/placeholder.svg?height=600&width=600&text=Product+Image",
    "/placeholder.svg?height=600&width=600&text=View+2",
    "/placeholder.svg?height=600&width=600&text=View+3",
    "/placeholder.svg?height=600&width=600&text=View+4",
  ]

  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
        <img
          src={images[selectedImage] || "/placeholder.svg"}
          alt={`${productName} - Image ${selectedImage + 1}`}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative aspect-square overflow-hidden rounded-md bg-gray-100 ${
              selectedImage === index ? "ring-2 ring-black ring-offset-1" : ""
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`${productName} - Thumbnail ${index + 1}`}
              className="object-cover"
              sizes="(max-width: 768px) 25vw, 10vw"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
