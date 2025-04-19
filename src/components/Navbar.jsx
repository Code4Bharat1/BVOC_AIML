import { Disclosure } from "@headlessui/react";
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
      className="fixed top-0 left-0 right-0 z-50 bg-black mx-4 sm:mx-10 lg:mx-20 mt-6 rounded-2xl"
    >
      <div className="relative flex h-16 items-center justify-center">
        {/* Logo - stuck to the left corner */}
        <div className="absolute left-0 pl-4 sm:pl-6 lg:pl-8">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="h-8 w-auto"
          />
        </div>

        {/* Centered navigation */}
        <div className="flex space-x-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-500 text-white"
                  : "text-white hover:bg-gray-500 hover:text-white",
                "rounded-md px-3 py-2 text-md font-medium"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Button - stuck to the right corner */}
        <div className="absolute right-0 pr-4 sm:pr-6 lg:pr-8">
          <Button className="bg-[#fafaf3] text-black hover:bg-slate-200">
            Get In Touch
          </Button>
        </div>
      </div>
    </Disclosure>
  );
}
