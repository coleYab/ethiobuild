import ConstructionMarketplace from '@/components/landing/landing';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Building2, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-between gap-4">
                        <div className="flex gap-4">
                            <h1 className="sm:text-xl md:text-3xl dark:text-white font-bold">EthioBuild</h1>
                        </div>
                        <div className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                        </div>

                    </nav>
                </header>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <ConstructionMarketplace />
                </div>

                <div className="hidden h-14.5 lg:block"></div>
            </div>
                <footer className="border-t py-12 md:px-12 px-4 md:py-16">
                    <div className="container">
                        <div className="flex items-center justify-center w-full">
                        <div className="grid gap-8 md:grid-cols-2">
                            <div className="max-w-[400px]">
                                <div className="flex items-center gap-2 mb-6">
                                    <Building2 className="h-6 w-6 text-orange-500" />
                                    <span className="text-xl font-bold">Ethio Build</span>
                                </div>
                                <p className="text-gray-600 dark:text-white dark:text-white mb-4">
                                    Connecting construction professionals with quality materials at competitive prices.
                                </p>
                                {/* <div className="flex gap-4">
                                    {[["twitter", Twitter], ["facebook", Facebook], ["instagram", Instagram], ["linkedin", Linkedin]].map((social) => (
                                        icon = social[1]
                                        title = social[0]
                                        <a
                                            key={title}
                                            href="#"
                                            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 dark:text-white hover:bg-orange-500 hover:text-white"
                                        >
                                            <span className="sr-only">{social}</span>
                                            <icon className="h-5 w-5" />
                                        </a>
                                    ))}
                                </div> */}
                            </div>

                            <div className="flex flex-col items-center justify-center">
                                <h3 className="font-bold mb-6">Company</h3>
                                <ul className="space-y-3">
                                    {["About Us", "Careers", "Press", "Blog", "Contact Us"].map((item) => (
                                        <li key={item}>
                                            <Link href="#" className="text-gray-600 dark:text-white hover:text-orange-500">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        </div>

                        <div className="mt-12 border-t pt-8">
                            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                                <p className="text-sm text-gray-600 dark:text-white">© {new Date().getFullYear()} EthioBuild. All rights reserved.</p>
                                <div className="flex gap-6">
                                    <Link prefetch href="/rules" className="text-sm text-gray-600 dark:text-white  dark:text-white hover:text-orange-500">
                                        Privacy Policy
                                    </Link>
                                    <Link prefetch href="/rules" className="text-sm text-gray-600 dark:text-white dark:text-white hover:text-orange-500">
                                        Terms of Service
                                    </Link>
                                    <Link prefetch href="/rules" className="text-sm text-gray-600 dark:text-white dark:text-white hover:text-orange-500">
                                        Cookie Policy
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
        </>
    );
}
