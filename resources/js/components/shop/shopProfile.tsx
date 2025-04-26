import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import { Edit, Mail, MapPin, Phone, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ShopProfilePage({ shop } : { shop : any}) {
  const [isEditing, setIsEditing] = useState(false);
  const { data, setData, patch, processing } = useForm({
    name: shop.name,
    email: shop.email,
    phone: shop.phone,
    address: shop.address,
    description: shop.description,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData(name, value);
  };

  const handleSave = (e : any) => {
    e.preventDefault();
    patch("/shop/profile", {
      onSuccess: () => setIsEditing(false),
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Shop Profile</h2>
        <Button
          onClick={isEditing ? handleSave : () => setIsEditing(true)}
          variant="default"
          disabled={processing}
        >
          {isEditing ? (
            <>
              <Save className="mr-2 h-4 w-4" /> Save Changes
            </>
          ) : (
            <>
              <Edit className="mr-2 h-4 w-4" /> Edit Profile
            </>
          )}
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Shop Information</CardTitle>
            <CardDescription>Manage your shop details and contact information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {isEditing ? (
              <>
                <div className="space-y-2">
                  <Label htmlFor="name">Shop Name</Label>
                  <Input id="name" name="name" value={data.name} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" value={data.email} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" value={data.phone} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={data.address}
                    onChange={handleChange}
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={data.description}
                    onChange={handleChange}
                    rows={5}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="space-y-1">
                  <h3 className="font-medium text-sm text-muted-foreground">Shop Name</h3>
                  <p>{shop.name}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <p>{shop.email}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <p>{shop.phone}</p>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                  <p>{shop.address}</p>
                </div>
                <div className="space-y-1 pt-2">
                  <h3 className="font-medium text-sm text-muted-foreground">Description</h3>
                  <p className="text-sm">{shop.description}</p>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Shop Media</CardTitle>
            <CardDescription>Manage your shop logo and cover image</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Shop Logo</Label>
              <div className="relative h-32 w-32 mx-auto">
                <img
                  src="/placeholder.svg?height=128&width=128"
                  alt="Shop Logo"
                  className="rounded-full object-cover border h-full w-full"
                />
                {isEditing && (
                  <Button variant="secondary" size="sm" className="absolute bottom-0 right-0">
                    Change
                  </Button>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label>Cover Image</Label>
              <div className="relative h-48 w-full">
                <img
                  src="/placeholder.svg?height=192&width=640"
                  alt="Cover Image"
                  className="rounded-md object-cover border h-full w-full"
                />
                {isEditing && (
                  <Button variant="secondary" size="sm" className="absolute bottom-2 right-2">
                    Change
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}