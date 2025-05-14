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

export default function TheDashboard({ payload }: { payload: any }) {
    const orders = payload.orders;
    const products = payload.products;
    const [activeTab, setActiveTab] = useState("overview")

    return (
        <div className="flex min-h-screen">
            {/* Main Content */}
            <div className="flex flex-1 flex-col">
                {/* Main Dashboard Content */}
                <main className="flex-1 overflow-auto p-6">
                    <div className="flex flex-col gap-6">
                        {/* Page Header */}
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
                            {/* <div className="flex items-center gap-2">
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
                            </div> */}
                        </div>

                        {/* Dashboard Tabs */}
                        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
                            <TabsList className="hidden">
                                <TabsTrigger value="overview">Overview</TabsTrigger>
                            </TabsList>

                            {/* Overview Tab */}
                            <TabsContent value="overview" className="space-y-6">
                                {/* Stats Cards */}
                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
                                            <CreditCard className="h-4 w-4 text-muted-foreground" />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">ETB 0</div>
                                            <p className="text-xs text-muted-foreground">+0% from last month</p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
                                            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">0</div>
                                            <p className="text-xs text-muted-foreground">0 items in cart</p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">Shops</CardTitle>
                                            <TruckIcon className="h-4 w-4 text-muted-foreground" />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">0</div>
                                            <p className="text-xs text-muted-foreground">2 arriving today</p>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Recent Orders and Upcoming Deliveries */}
                                <div className="grid gap-4">
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
                                                    {orders?.length ? orders.map((order) => (
                                                        <TableRow key={order.id}>
                                                            <TableCell className="font-medium">{order.id}</TableCell>
                                                            <TableCell>{order.order_date}</TableCell>
                                                            <TableCell>
                                                                <Badge
                                                                    variant={
                                                                        order.order_status === "Created" || order.order_status === "created"
                                                                            ? "outline"
                                                                            : order.order_status === "Completed" || order.order_status === "completed"
                                                                                ? "secondary"
                                                                                : "default"
                                                                    }
                                                                    className={
                                                                        order.order_status === "completed" || order.order_status === "Completed"
                                                                            ? "bg-green-100 text-green-800 hover:bg-green-100"
                                                                            : order.order_status === "Created" || order.order_status === "created"
                                                                                ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                                                                : "bg-orange-100 text-orange-800 hover:bg-orange-100"
                                                                    }
                                                                >
                                                                    {order.order_status}
                                                                </Badge>
                                                            </TableCell>
                                                            <TableCell className="text-right">ETB {order.order_cost}</TableCell>
                                                        </TableRow>
                                                    )) :

                                                        <div className="w-full h-full flex m-5 items-center justify-center">No Orders. Please make at least one order.</div>}
                                                </TableBody>
                                            </Table>
                                        </CardContent>
                                        <CardFooter>
                                            <Link href="/order/me">
                                                <Button variant="outline" size="sm" className="ml-auto">
                                                    View All Orders
                                                </Button>
                                            </Link>
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
                                            {products?.length ?
                                                products.map((product, index) => (
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
                                                                <span className="font-bold">ETB {product.variations[0].price}</span>
                                                                <Link href={`/product/${product.id}`}>
                                                                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                                                        <ShoppingCart className="h-4 w-4" />
                                                                    </Button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )) : (
                                                    <span>please at least create one product</span>
                                                )
                                            }
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Link href="/product">
                                            <Button variant="outline" size="sm" className="ml-auto">
                                                View All Products
                                            </Button>
                                        </Link>
                                    </CardFooter>
                                </Card>

                                {/* Quick Actions */}
                                <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
                                    {[
                                        {
                                            title: "Find Products",
                                            description: "Find high quality products",
                                            icon: <Search className="h-5 w-5" />,
                                            link: "/product",
                                            color: "bg-blue-100 text-blue-800",
                                        },
                                        {
                                            title: "Find Suppliers",
                                            description: "Browse verified suppliers",
                                            icon: <Users className="h-5 w-5" />,
                                            link: "/shop",
                                            color: "bg-purple-100 text-purple-800",
                                        },
                                        {
                                            title: "Support",
                                            description: "Contact our support team",
                                            icon: <Home className="h-5 w-5" />,
                                            link: "/support",
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
                                                <Link href={action.link} prefetch>
                                                    <Button variant="ghost" size="sm" className="w-full justify-between">
                                                        <span>Go to {action.title}</span>
                                                        <ArrowUpRight className="h-4 w-4" />
                                                    </Button>
                                                </Link>
                                            </CardFooter>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </main>
            </div>
        </div>
    )
}
