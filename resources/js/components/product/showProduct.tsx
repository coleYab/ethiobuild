import { useState } from "react"
import { MinusCircle, PlusCircle, ShoppingCart, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SharedData } from "@/types"
import { router, usePage } from "@inertiajs/react"

export default function ProductPage({ products } : {products : any}) {
    const { auth } = usePage<SharedData>().props;
    const user = auth.user;
    const product = products;
    const [selectedVariation, setSelectedVariation] = useState(product.variations[0])
    const [quantity, setQuantity] = useState(1)
    const [activeImage, setActiveImage] = useState(0)

    const handleQuantityChange = (action: "increase" | "decrease") => {
        if (action === "increase" && quantity < selectedVariation.qty_in_stock) {
            setQuantity(quantity + 1)
        } else if (action === "decrease" && quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(price / 100)
    }

    const handleAddToCart = () => {
        const cart : any = user.cart;
        let val = false;
        const newItem = {product_id: selectedVariation.id, qty : quantity }
        for (let i = 0; i < cart.items.length; i+=1) {
            if (cart.items[i].product_id == newItem.product_id) {
                cart.items[i].qty += newItem.qty;
                val = true;
                break;
            }

        }

        if (!val) {
            cart.items = [...cart.items, newItem];
        }

        const cartPayload = {
            items: cart.items.map((item: any) => {
                return {
                    product_id: item.product_id,
                    qty: item.qty
                }
            } )
        }

        router.put(`/cart/${cart.id}`, cart, {
            onSuccess: () => {
                alert("updated the data sucessfully added to cart");
            },
            onError: (e) => {
                alert(JSON.stringify(e))
            }
        })
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Images Section */}
                <div className="space-y-4">
                    <div className="relative aspect-square overflow-hidden rounded-xl border bg-background">
                        <img
                            src={`/placeholder.svg?height=600&width=600&text=Product+Image+${activeImage + 1}`}
                            alt={product.name}
                            className="object-cover"
                        />
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                        {product.variations.map((variation : any, index: number) => (
                            <div
                                key={variation.id}
                                className={`relative aspect-square cursor-pointer overflow-hidden rounded-md border ${activeImage === index ? "ring-2 ring-primary" : ""}`}
                                onClick={() => {
                                    setActiveImage(index)
                                    setSelectedVariation(variation)
                                }}
                            >
                                <img
                                    src={`/placeholder.svg?height=200&width=200&text=Variation+${index + 1}`}
                                    alt={variation.name}
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Details Section */}
                <div className="space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
                        <div className="flex items-center justify-between mt-2">
                            <p className="text-2xl font-semibold text-primary">{formatPrice(selectedVariation.price)}</p>
                            <Badge variant="outline" className="text-sm">
                                {selectedVariation.qty_in_stock > 100
                                    ? "In Stock"
                                    : selectedVariation.qty_in_stock > 10
                                        ? "Limited Stock"
                                        : `Only ${selectedVariation.qty_in_stock} left`}
                            </Badge>
                        </div>
                    </div>

                    <p className="text-muted-foreground">{product.description}</p>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-medium mb-2">Variation</h3>
                            <Tabs
                                defaultValue={selectedVariation.id.toString()}
                                onValueChange={(value) => {
                                    const variation = product.variations.find((v : any) => v.id.toString() === value)
                                    if (variation) {
                                        setSelectedVariation(variation)
                                        setActiveImage(product.variations.indexOf(variation))
                                    }
                                }}
                            >
                                <TabsList className="flex flex-wrap gap-3 h-auto">
                                    {product.variations.map((variation : any, index : number) => (
                                        <TabsTrigger
                                            key={variation.id}
                                            value={variation.id.toString()}
                                            className="flex flex-col py-3 h-auto"
                                        >
                                            <span>Option {index + 1}</span>
                                            <span className="text-sm font-semibold text-primary mt-1">{formatPrice(variation.price)}</span>
                                            <span className="text-xs text-muted-foreground">{variation.qty_in_stock} in stock</span>
                                        </TabsTrigger>
                                    ))}
                                </TabsList>
                            </Tabs>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mb-2">Quantity</h3>
                            <div className="flex items-center space-x-2">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => handleQuantityChange("decrease")}
                                    disabled={quantity <= 1}
                                >
                                    <MinusCircle className="h-4 w-4" />
                                </Button>
                                <span className="w-12 text-center font-medium">{quantity}</span>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => handleQuantityChange("increase")}
                                    disabled={quantity >= selectedVariation.qty_in_stock}
                                >
                                    <PlusCircle className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button className="flex-1" size="lg" onClick={handleAddToCart}>
                            <ShoppingCart className="mr-2 h-5 w-5" />
                            Add to Cart
                        </Button>
                        <Button variant="outline" size="lg">
                            <Heart className="mr-2 h-5 w-5" />
                            Add to Wishlist
                        </Button>
                    </div>

                    <Card className="p-4 mt-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h3 className="font-medium">SKU</h3>
                                <p className="text-muted-foreground">{selectedVariation.sku}</p>
                            </div>
                            <div>
                                <h3 className="font-medium">Availability</h3>
                                <p className="text-muted-foreground">{selectedVariation.qty_in_stock} in stock</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
