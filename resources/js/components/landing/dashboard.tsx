"use client"

import { useState } from "react"
import { Link } from "@inertiajs/react"
import {
  ArrowUpRight,
  Bell,
  Building2,
  Calendar,
  ChevronDown,
  CreditCard,
  FileText,
  Home,
  LayoutDashboard,
  LogOut,
  Package,
  Search,
  Settings,
  ShoppingCart,
  TruckIcon,
  User,
  Users,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function TheDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
      <div className="flex min-h-screen w-full bg-gray-50">
        {/* Main Content */}
        <div className="flex flex-1 flex-col">
          {/* Header */}
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-white px-6">
            <div className="flex flex-1 items-center gap-4 md:gap-8">
              <div className="relative flex-1 md:max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search materials, orders..."
                  className="w-full bg-white pl-8 md:max-w-sm"
                />
              </div>
              <nav className="hidden gap-4 md:flex">
                <Link href="#" className="text-sm font-medium hover:text-orange-500 transition-colors">
                  Home
                </Link>
                <Link href="#" className="text-sm font-medium hover:text-orange-500 transition-colors">
                  Products
                </Link>
                <Link href="#" className="text-sm font-medium hover:text-orange-500 transition-colors">
                  Support
                </Link>
              </nav>
              <div className="ml-auto flex items-center gap-4">
                <Button variant="outline" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-medium text-white">
                    3
                  </span>
                </Button>
                <div className="hidden md:block">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32&text=JD" alt="John Doe" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </header>

          {/* Main Dashboard Content */}
          <main className="flex-1 overflow-auto p-6">
            <div className="flex flex-col gap-6">
              {/* Page Header */}
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    Download Reports
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    New Order
                  </Button>
                </div>
              </div>

              {/* Dashboard Tabs */}
              <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="orders">Orders</TabsTrigger>
                  <TabsTrigger value="deliveries">Deliveries</TabsTrigger>
                  <TabsTrigger value="invoices">Invoices</TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-6">
                  {/* Stats Cards */}
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$12,345</div>
                        <p className="text-xs text-muted-foreground">+18% from last month</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
                        <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">8</div>
                        <p className="text-xs text-muted-foreground">3 awaiting delivery</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Deliveries</CardTitle>
                        <TruckIcon className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">5</div>
                        <p className="text-xs text-muted-foreground">2 arriving today</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Saved Items</CardTitle>
                        <Package className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">24</div>
                        <p className="text-xs text-muted-foreground">In your favorites</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Recent Orders and Upcoming Deliveries */}
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                    <Card className="lg:col-span-4">
                      <CardHeader>
                        <CardTitle>Recent Orders</CardTitle>
                        <CardDescription>Your latest 5 orders</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Order ID</TableHead>
                              <TableHead>Date</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {[
                              {
                                id: "ORD-7892",
                                date: "May 2, 2023",
                                status: "Processing",
                                amount: "$1,234.56",
                              },
                              {
                                id: "ORD-7891",
                                date: "Apr 28, 2023",
                                status: "Shipped",
                                amount: "$2,345.67",
                              },
                              {
                                id: "ORD-7890",
                                date: "Apr 25, 2023",
                                status: "Delivered",
                                amount: "$3,456.78",
                              },
                              {
                                id: "ORD-7889",
                                date: "Apr 20, 2023",
                                status: "Delivered",
                                amount: "$4,567.89",
                              },
                              {
                                id: "ORD-7888",
                                date: "Apr 18, 2023",
                                status: "Delivered",
                                amount: "$5,678.90",
                              },
                            ].map((order) => (
                              <TableRow key={order.id}>
                                <TableCell className="font-medium">{order.id}</TableCell>
                                <TableCell>{order.date}</TableCell>
                                <TableCell>
                                  <Badge
                                    variant={
                                      order.status === "Processing"
                                        ? "outline"
                                        : order.status === "Shipped"
                                          ? "secondary"
                                          : "default"
                                    }
                                    className={
                                      order.status === "Delivered"
                                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                                        : order.status === "Shipped"
                                          ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                          : "bg-orange-100 text-orange-800 hover:bg-orange-100"
                                    }
                                  >
                                    {order.status}
                                  </Badge>
                                </TableCell>
                                <TableCell className="text-right">{order.amount}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="ml-auto">
                          View All Orders
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="lg:col-span-3">
                      <CardHeader>
                        <CardTitle>Upcoming Deliveries</CardTitle>
                        <CardDescription>Scheduled for the next 7 days</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {[
                          {
                            id: "DEL-4567",
                            date: "Today, 2:00 PM",
                            items: "Cement (20 bags)",
                            progress: 90,
                          },
                          {
                            id: "DEL-4568",
                            date: "Today, 4:30 PM",
                            items: "Steel Rods (50 units)",
                            progress: 75,
                          },
                          {
                            id: "DEL-4569",
                            date: "Tomorrow, 10:00 AM",
                            items: "Bricks (1000 units)",
                            progress: 45,
                          },
                          {
                            id: "DEL-4570",
                            date: "May 4, 9:00 AM",
                            items: "Lumber (200 ft)",
                            progress: 20,
                          },
                        ].map((delivery) => (
                          <div key={delivery.id} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-medium">{delivery.items}</div>
                                <div className="text-sm text-muted-foreground">{delivery.date}</div>
                              </div>
                              <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                                {delivery.id}
                              </Badge>
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center justify-between text-xs">
                                <span>In Transit</span>
                                <span>{delivery.progress}%</span>
                              </div>
                              <Progress value={delivery.progress} className="h-2" />
                            </div>
                          </div>
                        ))}
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="ml-auto">
                          Track All Deliveries
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>

                  {/* Recommended Products */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Recommended Products</CardTitle>
                      <CardDescription>Based on your previous orders</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {[
                          {
                            name: "Premium Cement",
                            image: "/placeholder.svg?height=200&width=200&text=Cement",
                            price: "$12.99",
                            supplier: "ABC Materials",
                          },
                          {
                            name: "Steel Reinforcement Bars",
                            image: "/placeholder.svg?height=200&width=200&text=Steel",
                            price: "$45.50",
                            supplier: "Steel Masters",
                          },
                          {
                            name: "Ceramic Floor Tiles",
                            image: "/placeholder.svg?height=200&width=200&text=Tiles",
                            price: "$3.99",
                            supplier: "Tile World",
                          },
                          {
                            name: "Waterproof Paint",
                            image: "/placeholder.svg?height=200&width=200&text=Paint",
                            price: "$24.99",
                            supplier: "Color Solutions",
                          },
                        ].map((product, index) => (
                          <div key={index} className="group relative overflow-hidden rounded-lg border">
                            <div className="aspect-square overflow-hidden">
                              <img
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                width={200}
                                height={200}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                            </div>
                            <div className="p-4">
                              <h3 className="font-medium">{product.name}</h3>
                              <p className="text-sm text-muted-foreground">{product.supplier}</p>
                              <div className="mt-2 flex items-center justify-between">
                                <span className="font-bold">{product.price}</span>
                                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                  <ShoppingCart className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="ml-auto">
                        View All Products
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Quick Actions */}
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {[
                      {
                        title: "Schedule Delivery",
                        description: "Set up a new delivery time",
                        icon: <Calendar className="h-5 w-5" />,
                        color: "bg-blue-100 text-blue-800",
                      },
                      {
                        title: "Find Suppliers",
                        description: "Browse verified suppliers",
                        icon: <Users className="h-5 w-5" />,
                        color: "bg-purple-100 text-purple-800",
                      },
                      {
                        title: "Request Quote",
                        description: "Get pricing for bulk orders",
                        icon: <FileText className="h-5 w-5" />,
                        color: "bg-green-100 text-green-800",
                      },
                      {
                        title: "Support",
                        description: "Contact our support team",
                        icon: <Home className="h-5 w-5" />,
                        color: "bg-orange-100 text-orange-800",
                      },
                    ].map((action, index) => (
                      <Card key={index} className="overflow-hidden">
                        <CardHeader className={`${action.color} py-3`}>
                          <div className="flex items-center gap-2">
                            {action.icon}
                            <CardTitle className="text-base">{action.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="p-4">
                          <p className="text-sm text-muted-foreground">{action.description}</p>
                        </CardContent>
                        <CardFooter className="border-t p-3">
                          <Button variant="ghost" size="sm" className="w-full justify-between">
                            <span>Go to {action.title}</span>
                            <ArrowUpRight className="h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Orders Tab */}
                <TabsContent value="orders" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>All Orders</CardTitle>
                      <CardDescription>Manage and track all your orders</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-wrap items-center gap-4">
                          <Input placeholder="Search orders..." className="max-w-xs" />
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="outline">
                                Status: All
                                <ChevronDown className="ml-2 h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem>All</DropdownMenuItem>
                              <DropdownMenuItem>Processing</DropdownMenuItem>
                              <DropdownMenuItem>Shipped</DropdownMenuItem>
                              <DropdownMenuItem>Delivered</DropdownMenuItem>
                              <DropdownMenuItem>Cancelled</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="outline">
                                Date: All Time
                                <ChevronDown className="ml-2 h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem>All Time</DropdownMenuItem>
                              <DropdownMenuItem>Last 7 Days</DropdownMenuItem>
                              <DropdownMenuItem>Last 30 Days</DropdownMenuItem>
                              <DropdownMenuItem>Last 90 Days</DropdownMenuItem>
                              <DropdownMenuItem>Custom Range</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>

                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Order ID</TableHead>
                              <TableHead>Date</TableHead>
                              <TableHead>Items</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead>Supplier</TableHead>
                              <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {[
                              {
                                id: "ORD-7892",
                                date: "May 2, 2023",
                                items: "Cement (20 bags), Sand (2 tons)",
                                status: "Processing",
                                supplier: "ABC Materials",
                                amount: "$1,234.56",
                              },
                              {
                                id: "ORD-7891",
                                date: "Apr 28, 2023",
                                items: "Steel Rods (50 units), Wire Mesh (10 rolls)",
                                status: "Shipped",
                                supplier: "Steel Masters",
                                amount: "$2,345.67",
                              },
                              {
                                id: "ORD-7890",
                                date: "Apr 25, 2023",
                                items: "Bricks (1000 units), Cement (10 bags)",
                                status: "Delivered",
                                supplier: "Brick World",
                                amount: "$3,456.78",
                              },
                              {
                                id: "ORD-7889",
                                date: "Apr 20, 2023",
                                items: "Lumber (200 ft), Nails (5 boxes)",
                                status: "Delivered",
                                supplier: "Wood Supplies",
                                amount: "$4,567.89",
                              },
                              {
                                id: "ORD-7888",
                                date: "Apr 18, 2023",
                                items: "Paint (20 gallons), Brushes (10 sets)",
                                status: "Delivered",
                                supplier: "Color Solutions",
                                amount: "$5,678.90",
                              },
                              {
                                id: "ORD-7887",
                                date: "Apr 15, 2023",
                                items: "Tiles (500 sq ft), Grout (10 bags)",
                                status: "Delivered",
                                supplier: "Tile World",
                                amount: "$2,987.65",
                              },
                              {
                                id: "ORD-7886",
                                date: "Apr 10, 2023",
                                items: "Concrete Mix (30 bags), Rebar (100 units)",
                                status: "Delivered",
                                supplier: "ABC Materials",
                                amount: "$3,654.21",
                              },
                            ].map((order) => (
                              <TableRow key={order.id}>
                                <TableCell className="font-medium">{order.id}</TableCell>
                                <TableCell>{order.date}</TableCell>
                                <TableCell>{order.items}</TableCell>
                                <TableCell>
                                  <Badge
                                    variant={
                                      order.status === "Processing"
                                        ? "outline"
                                        : order.status === "Shipped"
                                          ? "secondary"
                                          : "default"
                                    }
                                    className={
                                      order.status === "Delivered"
                                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                                        : order.status === "Shipped"
                                          ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                          : "bg-orange-100 text-orange-800 hover:bg-orange-100"
                                    }
                                  >
                                    {order.status}
                                  </Badge>
                                </TableCell>
                                <TableCell>{order.supplier}</TableCell>
                                <TableCell className="text-right">{order.amount}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">Showing 7 of 42 orders</div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" disabled>
                          Previous
                        </Button>
                        <Button variant="outline" size="sm">
                          Next
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </TabsContent>

                {/* Deliveries Tab */}
                <TabsContent value="deliveries" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Delivery Tracking</CardTitle>
                      <CardDescription>Track all your incoming deliveries</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {[
                          {
                            id: "DEL-4567",
                            orderId: "ORD-7892",
                            date: "Today, 2:00 PM",
                            items: "Cement (20 bags)",
                            supplier: "ABC Materials",
                            status: "Out for Delivery",
                            progress: 90,
                            location: "2.5 miles away",
                            eta: "30 minutes",
                          },
                          {
                            id: "DEL-4568",
                            orderId: "ORD-7891",
                            date: "Today, 4:30 PM",
                            items: "Steel Rods (50 units)",
                            supplier: "Steel Masters",
                            status: "In Transit",
                            progress: 75,
                            location: "Distribution Center",
                            eta: "2 hours",
                          },
                          {
                            id: "DEL-4569",
                            orderId: "ORD-7890",
                            date: "Tomorrow, 10:00 AM",
                            items: "Bricks (1000 units)",
                            supplier: "Brick World",
                            status: "Processing",
                            progress: 45,
                            location: "Supplier Warehouse",
                            eta: "18 hours",
                          },
                          {
                            id: "DEL-4570",
                            orderId: "ORD-7889",
                            date: "May 4, 9:00 AM",
                            items: "Lumber (200 ft)",
                            supplier: "Wood Supplies",
                            status: "Scheduled",
                            progress: 20,
                            location: "Preparing Shipment",
                            eta: "2 days",
                          },
                        ].map((delivery) => (
                          <div key={delivery.id} className="rounded-lg border p-4">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                              <div>
                                <div className="flex items-center gap-2">
                                  <h3 className="font-medium">{delivery.items}</h3>
                                  <Badge
                                    variant="outline"
                                    className={
                                      delivery.status === "Out for Delivery"
                                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                                        : delivery.status === "In Transit"
                                          ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                          : delivery.status === "Processing"
                                            ? "bg-orange-100 text-orange-800 hover:bg-orange-100"
                                            : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                                    }
                                  >
                                    {delivery.status}
                                  </Badge>
                                </div>
                                <div className="mt-1 text-sm text-muted-foreground">
                                  Order {delivery.orderId} • {delivery.supplier}
                                </div>
                              </div>
                              <div className="flex items-center gap-4">
                                <div className="text-right">
                                  <div className="font-medium">{delivery.date}</div>
                                  <div className="text-sm text-muted-foreground">ETA: {delivery.eta}</div>
                                </div>
                                <Button variant="outline" size="sm">
                                  Track
                                </Button>
                              </div>
                            </div>
                            <div className="mt-4 space-y-1">
                              <div className="flex items-center justify-between text-xs">
                                <span>{delivery.location}</span>
                                <span>{delivery.progress}%</span>
                              </div>
                              <Progress value={delivery.progress} className="h-2" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Invoices Tab */}
                <TabsContent value="invoices" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Invoices & Payments</CardTitle>
                      <CardDescription>Manage your invoices and payment history</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Invoice ID</TableHead>
                            <TableHead>Order ID</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Due Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                            <TableHead></TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {[
                            {
                              id: "INV-5678",
                              orderId: "ORD-7892",
                              date: "May 2, 2023",
                              dueDate: "Jun 1, 2023",
                              status: "Unpaid",
                              amount: "$1,234.56",
                            },
                            {
                              id: "INV-5677",
                              orderId: "ORD-7891",
                              date: "Apr 28, 2023",
                              dueDate: "May 28, 2023",
                              status: "Unpaid",
                              amount: "$2,345.67",
                            },
                            {
                              id: "INV-5676",
                              orderId: "ORD-7890",
                              date: "Apr 25, 2023",
                              dueDate: "May 25, 2023",
                              status: "Paid",
                              amount: "$3,456.78",
                            },
                            {
                              id: "INV-5675",
                              orderId: "ORD-7889",
                              date: "Apr 20, 2023",
                              dueDate: "May 20, 2023",
                              status: "Paid",
                              amount: "$4,567.89",
                            },
                            {
                              id: "INV-5674",
                              orderId: "ORD-7888",
                              date: "Apr 18, 2023",
                              dueDate: "May 18, 2023",
                              status: "Paid",
                              amount: "$5,678.90",
                            },
                          ].map((invoice) => (
                            <TableRow key={invoice.id}>
                              <TableCell className="font-medium">{invoice.id}</TableCell>
                              <TableCell>{invoice.orderId}</TableCell>
                              <TableCell>{invoice.date}</TableCell>
                              <TableCell>{invoice.dueDate}</TableCell>
                              <TableCell>
                                <Badge
                                  variant={invoice.status === "Paid" ? "default" : "outline"}
                                  className={
                                    invoice.status === "Paid"
                                      ? "bg-green-100 text-green-800 hover:bg-green-100"
                                      : "bg-orange-100 text-orange-800 hover:bg-orange-100"
                                  }
                                >
                                  {invoice.status}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right">{invoice.amount}</TableCell>
                              <TableCell>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                      <ChevronDown className="h-4 w-4" />
                                      <span className="sr-only">Actions</span>
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuItem>View Invoice</DropdownMenuItem>
                                    <DropdownMenuItem>Download PDF</DropdownMenuItem>
                                    {invoice.status === "Unpaid" && <DropdownMenuItem>Pay Now</DropdownMenuItem>}
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">Showing 5 of 24 invoices</div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" disabled>
                          Previous
                        </Button>
                        <Button variant="outline" size="sm">
                          Next
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </div>
  )
}
