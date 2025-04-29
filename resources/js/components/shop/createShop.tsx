"use client"

import React, { useState } from "react"
import { useForm, router, usePage } from "@inertiajs/react"
import { Building2, Mail, Phone, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { json } from "stream/consumers"
import { SharedData } from "@/types"
// import { useToast } from "@/hooks/use-toast"

// Default values for the form
const defaultValues = {
  name: "",
  address: "",
  email: "",
  phone: "",
  description: "",
  image: null,
  cover_image: null,
  logo: null,
  user_id: 0,
  user_id: 0,
}

export default function CreateShopForm({ shopId } : { shopId : number } ) {
  const { auth } = usePage<SharedData>().props;
  const [imagePreview, setImagePreview] = useState<any>("image")
  const [coverImagePreview, setCoverImagePreview] = useState<any>("image")
  const [logoPreview, setLogoPreview] = useState<any>("image")
  defaultValues.user_id = auth.user.id;


  const { data, setData, post, processing, errors } = useForm(defaultValues)

  const handleImageChange = (e: any, imageType: string) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        if (imageType === "image") {
          setImagePreview(reader.result)
        } else if (imageType === "cover_image") {
          setCoverImagePreview(reader.result)
        } else if (imageType === "logo") {
          setLogoPreview(reader.result)
        }
      }
      reader.readAsDataURL(file)
      setData(imageType, file)
    }
  }

  // Handle form submission
  const onSubmit = (e: any) => {
    e.preventDefault()
    console.log(data)
    post("/shop", {
      onError: (e) => {
        console.log(JSON.stringify(e))
      }
    })
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
          <CardDescription>Enter the basic details about your shop.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Shop Name</label>
            <div className="relative">
              <Building2 className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Enter shop name"
                className="pl-10"
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
              />
            </div>
            <p className="mt-1 text-sm text-gray-500">This is the name that will be displayed to customers.</p>
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Shop Address</label>
            <Input
              placeholder="Enter physical address"
              value={data.address}
              onChange={(e) => setData("address", e.target.value)}
            />
            <p className="mt-1 text-sm text-gray-500">The physical location of your shop.</p>
            {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <Textarea
              placeholder="Describe your shop, what you sell, and what makes it special..."
              className="min-h-32 resize-y"
              value={data.description}
              onChange={(e) => setData("description", e.target.value)}
            />
            <p className="mt-1 text-sm text-gray-500">Provide a detailed description of your shop.</p>
            {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>How customers can reach you.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                type="email"
                placeholder="your@email.com"
                className="pl-10"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
              />
            </div>
            <p className="mt-1 text-sm text-gray-500">The email address customers can contact you at.</p>
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                type="tel"
                placeholder="+1 (555) 123-4567"
                className="pl-10"
                value={data.phone}
                onChange={(e) => setData("phone", e.target.value)}
              />
            </div>
            <p className="mt-1 text-sm text-gray-500">The phone number customers can reach you at.</p>
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Shop Images</CardTitle>
          <CardDescription>Upload images for your shop profile.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Shop Logo</label>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <div
                  className={`relative flex h-32 w-32 cursor-pointer flex-col items-center justify-center rounded-full border border-dashed border-gray-300 bg-gray-50 text-center hover:bg-gray-100 ${
                    logoPreview ? "p-0" : "p-8"
                  }`}
                  onClick={() => document.getElementById("shop-logo")?.click()}
                >
                  {logoPreview ? (
                    <img
                      src={logoPreview || "/placeholder.svg"}
                      alt="Logo preview"
                      className="h-full w-full rounded-full object-cover"
                    />
                  ) : (
                    <>
                      <Upload className="h-6 w-6 text-gray-500" />
                      <p className="mt-1 text-xs text-gray-500">Upload Logo</p>
                    </>
                  )}
                  <input
                    id="shop-logo"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageChange(e, "logo")}
                  />
                </div>
                <div className="text-sm text-gray-500">
                  <p>Your shop logo</p>
                  <p>Recommended: Square image, 512x512px</p>
                  <p>This will appear on your shop profile and receipts</p>
                </div>
              </div>
            </div>
            {errors.logo && <p className="mt-1 text-sm text-red-600">{errors.logo}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Cover Image</label>
            <div className="grid w-full items-center gap-4">
              <div
                className={`relative flex h-40 w-full cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-gray-300 bg-gray-50 text-center hover:bg-gray-100 ${
                  coverImagePreview ? "p-0" : "p-12"
                }`}
                onClick={() => document.getElementById("shop-cover-image")?.click()}
              >
                {coverImagePreview ? (
                  <img
                    src={coverImagePreview || "/placeholder.svg"}
                    alt="Cover image preview"
                    className="h-full w-full rounded-md object-cover"
                  />
                ) : (
                  <>
                    <Upload className="h-8 w-8 text-gray-500" />
                    <p className="mt-2 text-sm text-gray-500">Upload Cover Image</p>
                    <p className="text-xs text-gray-400">Banner image for your shop profile</p>
                  </>
                )}
                <input
                  id="shop-cover-image"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageChange(e, "cover_image")}
                />
              </div>
              <p className="text-sm text-gray-500">
                Recommended: Wide image (1200x300px). This will appear at the top of your shop profile.
              </p>
            </div>
            {errors.cover_image && <p className="mt-1 text-sm text-red-600">{errors.cover_image}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Shop Image</label>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <div
                  className={`relative flex h-40 w-40 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-gray-300 bg-gray-50 text-center hover:bg-gray-100 ${
                    imagePreview ? "p-0" : "p-12"
                  }`}
                  onClick={() => document.getElementById("shop-image")?.click()}
                >
                  {imagePreview ? (
                    <img
                      src={imagePreview || "/placeholder.svg"}
                      alt="Shop image preview"
                      className="h-full w-full rounded-md object-cover"
                    />
                  ) : (
                    <>
                      <Upload className="h-8 w-8 text-gray-500" />
                      <p className="mt-2 text-sm text-gray-500">Upload Shop Image</p>
                    </>
                  )}
                  <input
                    id="shop-image"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageChange(e, "image")}
                  />
                </div>
                <div className="text-sm text-gray-500">
                  <p>Main shop image</p>
                  <p>Recommended: Square image, 800x800px</p>
                  <p>This will appear in search results and shop listings</p>
                </div>
              </div>
            </div>
            {errors.image && <p className="mt-1 text-sm text-red-600">{errors.image}</p>}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            type="button"
            onClick={() => router.visit("/shops")}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={processing}>
            {processing ? "Creating..." : "Create Shop"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
