// import Image from "next/image"
// import Link from "next/limoprt ink"
import { Link } from "@inertiajs/react"
import {
  Building2,
  TruckIcon,
  ShieldCheck,
  Users,
  Search,
  CreditCard,
  Package,
  BarChart3,
  ChevronRight,
  ArrowRight,
  Star,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ConstructionMarketplace() {
  return (
        <div className="flex flex-col">
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="container relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-full px-3 py-1 text-sm font-medium text-orange-800 dark:text-orange-400">
                  Revolutionizing Construction Material Trading
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  <span className="block text-gray-900 dark:text-gray-700">Build Better with</span>
                  <span className="block bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                    Smart Material Sourcing
                  </span>
                </h1>
                <p className="text-lg text-gray-600 md:text-xl">
                  Connect directly with verified suppliers and buyers. Save time, reduce costs, and get quality
                  construction materials delivered to your site.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 h-12 px-6 text-base">
                    Start Shopping
                  </Button>
                  <Button variant="outline" className="h-12 px-6 text-base dark:bg-gray-500">
                    Become a Seller
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="inline-block h-8 w-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                      >
                        <img
                          src={"https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"}
                          alt="User"
                          width={32}
                          height={32}
                        />
                      </div>
                    ))}
                  </div>
                  <span>Trusted by 5+ construction professionals</span>
                </div>
              </div>
              <div className="relative mx-auto lg:mr-0 w-full max-w-lg">
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 opacity-30 blur-xl"></div>
                  <div className="relative rounded-2xl bg-white p-2 shadow-xl">
                    <img
                      src="https://img.freepik.com/premium-photo/construction-materials-like-steel-beams-bricks-arranged-with-room-copy_1355444-10012.jpg"
                      alt="Construction Materials"
                      width={600}
                      height={600}
                      className="w-full rounded-xl"
                    />
                  </div>
                </div>
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-xl bg-orange-500 p-2 shadow-lg md:-right-8 md:-top-8 md:h-32 md:w-32">
                  <div className="flex h-full w-full items-center justify-center rounded-lg bg-white">
                    <div className="text-center">
                      <div className="text-xl font-bold text-gray-900 md:text-3xl">30%</div>
                      <div className="text-xs text-gray-600 md:text-sm">Cost Saving</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-xl bg-amber-500 p-2 shadow-lg md:-bottom-8 md:-left-8 md:h-32 md:w-32">
                  <div className="flex h-full w-full items-center justify-center rounded-lg bg-white">
                    <div className="text-center">
                      <div className="text-xl font-bold text-gray-900 md:text-3xl">2x</div>
                      <div className="text-xs text-gray-600 md:text-sm">Faster Delivery</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 -z-10 h-full w-1/3 bg-gradient-to-b from-orange-50 to-transparent opacity-70"></div>
          <div className="absolute bottom-0 left-0 -z-10 h-1/3 w-full bg-gradient-to-t from-gray-100 to-transparent"></div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl dark:text-gray-500">
                Everything you need to source and sell construction materials
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Our platform connects buyers directly with verified suppliers, eliminating middlemen and reducing costs.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {[
                {
                  icon: <Search className="h-10 w-10 text-orange-500" />,
                  title: "Smart Inventory Mangement",
                  description: "Manage your invenotry easily and in more elegant way",
                },
                {
                  icon: <ShieldCheck className="h-10 w-10 text-teal-500" />,
                  title: "Verified Suppliers",
                  description: "All suppliers undergo a strict verification process to ensure quality and reliability.",
                },
                {
                  icon: <CreditCard className="h-10 w-10 text-purple-500" />,
                  title: "Secure Payments",
                  description: "We have integrated CHAPA PAY to provide seemless transactions"
                },
                {
                  icon: <BarChart3 className="h-10 w-10 text-green-500" />,
                  title: "Business Analytics",
                  description: "Gain insights into your purchasing patterns and optimize your supply chain.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl border p-6 hover:border-orange-500 hover:shadow-lg transition-all"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold dark:text-gray-500">{feature.title}</h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                  <div className="mt-4 flex items-center text-sm font-medium text-orange-500">
                    <span>Learn more</span>
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="dark:text-gray-500 text-3xl font-bold tracking-tight sm:text-4xl">How EthioBuild Works</h2>
              <p className="mt-4 text-lg text-gray-600">
                Simple, transparent, and efficient process for both buyers and sellers
              </p>
            </div>

            <div className="relative">
              {/* Connection line */}
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-orange-200 hidden md:block"></div>

              <div className="grid gap-8 md:grid-cols-2">
                {[
                  {
                    step: 1,
                    title: "Create an Account",
                    description: "Sign up as a buyer or seller in just a few minutes with simple verification.",
                    align: "right",
                  },
                  {
                    step: 2,
                    title: "Browse or List Products",
                    description: "Search for materials or list your products with detailed specifications and pricing.",
                    align: "left",
                  },
                  {
                    step: 3,
                    title: "Place Orders or Receive Requests",
                    description: "Securely place orders as a buyer or manage incoming requests as a seller.",
                    align: "right",
                  },
                  {
                    step: 4,
                    title: "Secure Payment & Delivery",
                    description: "Pay through our secure system and track your delivery in real-time.",
                    align: "left",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`relative ${item.align === "left" ? "md:col-start-2" : "md:col-start-1"}`}
                  >
                    <div className="rounded-xl border p-6 shadow-sm">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                        <span className="text-xl font-bold">{item.step}</span>
                      </div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="mt-2 text-gray-600">{item.description}</p>
                    </div>

                    {/* Circle connector */}
                    <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500 hidden md:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Users Say</h2>
              <p className="mt-4 text-lg text-gray-600">
                Hear from construction professionals who use EthioBuild every day
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Abebe Kebede",
                  role: "Project Manager, ABC Construction",
                  image: "https://s3.eu-central-1.amazonaws.com/uploads.mangoweb.org/shared-prod/visegradfund.org/uploads/2021/08/placeholder-male.jpg",
                  quote:
                    "EthioBuild has revolutionized how we source materials. We've cut procurement time by 50% and saved thousands on our last project.",
                },
                {
                  name: "Chaltu Ayana",
                  role: "Supplier, GK Building Materials",
                  image: "https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351974-stock-illustration-default-placeholder-woman.jpg",
                  quote:
                    "As a supplier, I've expanded my customer base. The platform makes it easy to showcase our products and manage orders.",
                },
                {
                  name: "Abel Tesfa",
                  role: "Contractor, Awe Builders",
                  image: "https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg",
                  quote:
                    "The quality assurance and verification process gives me confidence that I'm getting exactly what I ordered, every time.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="rounded-xl bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* For Buyers & Sellers Section */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 p-8 text-white md:p-12">
                <Users className="h-12 w-12 mb-6" />
                <h3 className="text-2xl font-bold md:text-3xl">For Buyers</h3>
                <p className="mt-4 text-white/90">
                  Access thousands of verified suppliers, compare prices, and get the best deals on construction
                  materials.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Direct access to manufacturers and suppliers",
                    "Transparent pricing with no hidden fees",
                    "Quality-assured materials with guarantees",
                    "Streamlined procurement process",
                    "Dedicated support team",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/login">
                    <Button className="mt-8 bg-white text-orange-600 hover:bg-white/90">Start Buying</Button>
                </Link>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white md:p-12">
                <Building2 className="h-12 w-12 mb-6" />
                <h3 className="text-2xl font-bold md:text-3xl">For Sellers</h3>
                <p className="mt-4 text-white/90">
                  Expand your market reach, find new customers, and grow your construction materials business.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Nationwide customer base",
                    "Simple inventory management system",
                    "Secure payment processing",
                    "Marketing and visibility tools",
                    "Business analytics and insights",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/login">
                <Button className="mt-8 bg-white text-gray-900 hover:bg-white/90">Start Selling</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Ready to transform how you buy and sell construction materials?
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                Join thousands of construction professionals already using EthioBuild to streamline their material
                sourcing.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
               <Link href="/login">
                <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 h-12 px-8 text-base">
                  Create Free Account
                </Button>
               </Link>
              </div>
              <p className="mt-6 text-sm text-gray-500">
                Free plan available for all operations.
              </p>
            </div>
          </div>
        </section>
    </div>
  )
}
