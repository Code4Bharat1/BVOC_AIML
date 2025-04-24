"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "About", href: "#", current: true },
  { name: "Career Opportunities", href: "#", current: false },
  { name: "Syllabus", href: "#", current: false },
  { name: "C4B", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden"
    >
      {({ open }) => (
        <>
          <div className="backdrop-blur-md bg-black/80 border-b border-gray-800/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Logo"
                  />
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-white/10 text-white"
                          : "text-white/90 hover:bg-white/10 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium transition-all duration-300"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                {/* Button */}
                <div className="hidden md:block">
                  <Button className="bg-white/90 text-black hover:bg-white backdrop-blur-sm shadow-lg shadow-purple-500/20 transition-all duration-300">
                    Get In Touch
                  </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none transition-all duration-300">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          <Disclosure.Panel className="md:hidden backdrop-blur-md bg-black/70 border-b border-gray-800/50">
            <div className="space-y-1 px-4 pt-2 pb-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-white/10 text-white"
                      : "text-white/90 hover:bg-white/10 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium transition-all duration-300"
                  )}
                >
                  {item.name}
                </a>
              ))}
              <Button className="w-full mt-4 bg-white/90 text-black hover:bg-white backdrop-blur-sm shadow-lg shadow-purple-500/20 transition-all duration-300">
                Get In Touch
              </Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
