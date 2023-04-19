import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";

const logo = "/assets/images/chaindeck-logo-header.svg";

const navigation = [
    // { name: "About", href: "/about" },
    // { name: "Contact", href: "/contact" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
    return (
        <div className="border-b border-b-zinc-700 bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-75">
            <Disclosure
                as="nav"
                className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-zinc-300"
            >
                {({ open }) => (
                    <>
                        <div>
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    {/* <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 hover:text-zinc-600 text-zinc-400 dark:hover:text-zinc-300 hover:bg-zinc-800 focus:outline-none">
                                        <span className="sr-only">
                                            Open main menu
                                        </span>
                                        {open ? (
                                            <XMarkIcon
                                                className="block h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <Bars3BottomLeftIcon
                                                className="block h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </Disclosure.Button> */}
                                </div>
                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex flex-shrink-0 items-center">
                                        <Image
                                            src={logo}
                                            width={160}
                                            height={80}
                                            alt={"Logo"}
                                            className="block lg:hidden"
                                        />
                                        <Link href={"/"} passHref>
                                            <Image
                                                src={logo}
                                                width={160}
                                                height={80}
                                                alt={"Logo"}
                                                className="hidden lg:block"
                                            />
                                        </Link>
                                    </div>
                                    <div className="hidden sm:ml-6 sm:block">
                                        <div className="flex space-x-2 select-none">
                                            {navigation.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    passHref
                                                    className={classNames(
                                                        item.current
                                                            ? "bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                                                            : "text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800",
                                                        "px-3 py-2 rounded-md text-sm font-medium"
                                                    )}
                                                    aria-current={
                                                        item.current
                                                            ? "page"
                                                            : undefined
                                                    }
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-2 pt-2 pb-3 select-none">
                                {navigation.map((item) => (
                                    <Disclosure
                                        as={Link}
                                        key={item.name}
                                        href={item.href}
                                        passHref
                                        className={classNames(
                                            item.current
                                                ? "bg-zinc-900 text-white block"
                                                : "text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800",
                                            "block px-3 py-2 rounded-md text-base font-medium"
                                        )}
                                        aria-current={
                                            item.current ? "page" : undefined
                                        }
                                    >
                                        {item.name}
                                    </Disclosure>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    );
}
