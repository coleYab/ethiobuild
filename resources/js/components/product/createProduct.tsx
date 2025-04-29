import React, { useState } from "react"
import { Edit, Plus, PlusIcon, Trash2, Upload } from "lucide-react"
import { useForm, usePage } from "@inertiajs/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

let defaultValues = {
  name: "",
  shop_id: 1,
  description: "",
  image: "thisis image",
  variations: [{ name: "", sku: "", price: 0, qty_in_stock: 0 }],
}

export default function CreateProductForm({ product, shop_id }: {product: any, shop_id: any}) {
    const [imagePreview, setImagePreview] = useState<any>(null);
    const { errors } = usePage().props
    if (shop_id) {
        defaultValues.shop_id = shop_id;
    }

    defaultValues = {
        ...defaultValues,
        ...product
    }

    // Initialize Inertia form
    const { data, setData, post, processing, reset, put } = useForm(defaultValues)

    // Handle variations array
    const addVariation = () => {
        setData("variations", [
            ...data.variations,
            { name: "", sku: "", price: 0, qty_in_stock: 0 },
        ])
    }

    const removeVariation = (index: any) => {
        if (data.variations.length > 1) {
            setData("variations", data.variations.filter((_: any, i: number) => i !== index))
        }
    }

    // Handle image change
    const handleImageChange = (e: any) => {
        const file = e.target.files?.[0]
        if (file) {
            setData("image", "tthis is image")
            const reader = new FileReader()
            reader.onloadend = () => {
                setImagePreview(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    // Handle form submission
    const onSubmit = (e: any) => {
        e.preventDefault()

        if (product) {
            put(`/product/${product.id}`)
            return;
        }

        console.log("posting: ", data)
        post("/product", {
            onError: (e) => {
                alert("ERror fucj youu");
                console.log(`error happend ${JSON.stringify(e)}`)
            }
        })
    }

    return (
        <form onSubmit={onSubmit} className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Product Information</CardTitle>
                    <CardDescription>Enter the basic information about your product.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium">
                            Product Name
                        </label>
                        <Input
                            id="name"
                            placeholder="Enter product name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            className={errors.name ? "border-red-500" : ""}
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                        <p className="mt-1 text-sm text-gray-500">
                            This is the name that will be displayed to customers.
                        </p>
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-medium">
                            Description
                        </label>
                        <Textarea
                            id="description"
                            placeholder="Enter product description"
                            className={`min-h-32 resize-y ${errors.description ? "border-red-500" : ""}`}
                            value={data.description}
                            onChange={(e) => setData("description", e.target.value)}
                        />
                        {errors.description && (
                            <p className="mt-1 text-sm text-red-500">{errors.description}</p>
                        )}
                        <p className="mt-1 text-sm text-gray-500">
                            Provide a detailed description of your product.
                        </p>
                    </div>

                    <div>
                        <label htmlFor="product-image" className="block text-sm font-medium">
                            Product Image
                        </label>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <div
                                    className={`relative flex h-40 w-40 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-gray-300 bg-gray-50 text-center hover:bg-gray-100 ${
imagePreview ? "p-0" : "p-12"
}`}
                                    onClick={() => document.getElementById("product-image")?.click()}
                                >
                                    {imagePreview ? (
                                        <img
                                            src={imagePreview}
                                            alt="Product preview"
                                            className="h-full w-full rounded-md object-cover"
                                        />
                                    ) : (
                                            <>
                                                <Upload className="h-8 w-8 text-gray-500" />
                                                <p className="mt-2 text-sm text-gray-500">Click to upload</p>
                                            </>
                                        )}
                                    <input
                                        id="product-image"
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={handleImageChange}
                                    />
                                </div>
                                <div className="text-sm text-gray-500">
                                    <p>Recommended size: 1000x1000px</p>
                                    <p>Max file size: 5MB</p>
                                    <p>Supported formats: JPEG, PNG</p>
                                </div>
                            </div>
                        </div>
                        {errors.image && <p className="mt-1 text-sm text-red-500">{errors.image}</p>}
                        <p className="mt-1 text-sm text-gray-500">
                            Upload a high-quality image of your product.
                        </p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Product Variations</CardTitle>
                    <CardDescription>
                        Add different variations of your product (e.g., sizes, colors, etc.)
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {data.variations.map((variation: any, index: number) => (
                        <div key={index}>
                            {index > 0 && <Separator className="my-6" />}
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-medium">Variation {index + 1}</h3>
                                {data.variations.length > 1 && (
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="icon"
                                        onClick={() => removeVariation(index)}
                                    >
                                        <Trash2 className="h-4 w-4" />
                                        <span className="sr-only">Remove variation {index + 1}</span>
                                    </Button>
                                )}
                            </div>
                            <div className="mt-4 grid gap-6 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor={`variations.${index}.name`}
                                        className="block text-sm font-medium"
                                    >
                                        Variation Name
                                    </label>
                                    <Input
                                        id={`variations.${index}.name`}
                                        placeholder="e.g., Small, Red, etc."
                                        value={variation.name}
                                        onChange={(e) => {
                                            const newVariations = [...data.variations]
                                            newVariations[index].name = e.target.value
                                            setData("variations", newVariations)
                                        }}
                                        className={errors[`variations.${index}.name`] ? "border-red-500" : ""}
                                    />
                                    {errors[`variations.${index}.name`] && (
                                        <p className="mt-1 text-sm text-red-500">
                                            {errors[`variations.${index}.name`]}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor={`variations.${index}.sku`}
                                        className="block text-sm font-medium"
                                    >
                                        SKU (Store Keeping Unit)
                                    </label>
                                    <Input
                                        id={`variations.${index}.sku`}
                                        placeholder="e.g., kg, piece, dozen"
                                        value={variation.sku}
                                        onChange={(e) => {
                                            const newVariations = [...data.variations]
                                            newVariations[index].sku = e.target.value
                                            setData("variations", newVariations)
                                        }}
                                        className={errors[`variations.${index}.sku`] ? "border-red-500" : ""}
                                    />
                                    {errors[`variations.${index}.sku`] && (
                                        <p className="mt-1 text-sm text-red-500">
                                            {errors[`variations.${index}.sku`]}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor={`variations.${index}.price`}
                                        className="block text-sm font-medium"
                                    >
                                        Price
                                    </label>
                                    <Input
                                        id={`variations.${index}.price`}
                                        type="number"
                                        step="0.01"
                                        min="0"
                                        placeholder="0.00"
                                        value={variation.price}
                                        onChange={(e) => {
                                            const newVariations = [...data.variations]
                                            newVariations[index].price = parseFloat(e.target.value) || 0
                                            setData("variations", newVariations)
                                        }}
                                        className={errors[`variations.${index}.price`] ? "border-red-500" : ""}
                                    />
                                    {errors[`variations.${index}.price`] && (
                                        <p className="mt-1 text-sm text-red-500">
                                            {errors[`variations.${index}.price`]}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor={`variations.${index}.qty_in_stock`}
                                        className="block text-sm font-medium"
                                    >
                                        Quantity in Stock
                                    </label>
                                    <Input
                                        id={`variations.${index}.qty_in_stock`}
                                        type="number"
                                        min="0"
                                        placeholder="0"
                                        value={variation.qty_in_stock}
                                        onChange={(e) => {
                                            const newVariations = [...data.variations]
                                            newVariations[index].qty_in_stock = parseInt(e.target.value) || 0
                                            setData("variations", newVariations)
                                        }}
                                        className={
                                            errors[`variations.${index}.qty_in_stock`] ? "border-red-500" : ""
                                        }
                                    />
                                    {errors[`variations.${index}.qty_in_stock`] && (
                                        <p className="mt-1 text-sm text-red-500">
                                            {errors[`variations.${index}.qty_in_stock`]}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                    <Button
                        type="button"
                        variant="outline"
                        className="mt-4 w-full"
                        onClick={addVariation}
                    >
                        <Plus className="mr-2 h-4 w-4" />
                        Add Another Variation
                    </Button>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button
                        variant="outline"
                        type="button"
                        onClick={() => window.history.back()}
                    >
                        Cancel
                    </Button>
                    <Button type="submit" disabled={processing}>
                        {product && !processing ? <Edit /> : !processing && <PlusIcon /> }
                        { !product ? processing ? "Creating..." : "Create Product" : processing ? "Editing..." : "Edit Product" }
                    </Button>
                </CardFooter>
            </Card>
        </form>
    )
}
