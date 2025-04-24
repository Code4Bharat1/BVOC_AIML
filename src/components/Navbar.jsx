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
      className="bg-black fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden"
    >
      {({ open }) => (
        <>
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
                        ? "bg-gray-700 text-white"
                        : "text-white hover:bg-gray-600 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Button */}
              <div className="hidden md:block">
                <Button className="bg-white text-black hover:bg-gray-200">
                  Get In Touch
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 focus:outline-none">
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

          {/* Mobile Menu Panel */}
          <Disclosure.Panel className="md:hidden bg-black">
            <div className="space-y-1 px-4 pt-2 pb-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-700 text-white"
                      : "text-white hover:bg-gray-600 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </a>
              ))}
              <Button className="w-full mt-2 bg-white text-black hover:bg-gray-200">
                Get In Touch
              </Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
