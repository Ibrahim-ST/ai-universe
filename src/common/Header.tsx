import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Squares2X2Icon } from "@heroicons/react/20/solid";
function MyDropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
          />
        </svg>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="flex flex-col absolute right-0 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none p-4">
          <Menu.Item>
            <a className="nav-items" href="/favorites">
              Favorites
            </a>
          </Menu.Item>
          <Menu.Item>
            <a className="nav-items" href="/resources">
              Resources
            </a>
          </Menu.Item>
          <Menu.Item>
            <a className="nav-items" href="/latest-ai-news">
              Latest AI News
            </a>
          </Menu.Item>
          <Menu.Item>
            <a className="nav-items" href="/dashboard">
              Dashboard
            </a>
          </Menu.Item>
          <Menu.Item>
            <button className="nav-items">Join Discord</button>
          </Menu.Item>
          <Menu.Item>
            <button className="inline-block px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700">
              Subscribe
            </button>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

const Header = () => {
  return (
    <header className="bg-white shadow-md flex items-center justify-between px-4 py-2 ">
      <div>
        <h1 className="text-xl space-x-4 font-semibold ">
          AI Awesome Platform
        </h1>
      </div>
      <div className="md:hidden">
        <MyDropdown />
      </div>
      <nav className="hidden md:flex space-x-7">
        <a className="nav-items" href="/favorites">
          Favorites
        </a>
        <a className="nav-items" href="/resources">
          Resources
        </a>
        <a className="nav-items" href="/latest-ai-news">
          Latest AI News
        </a>
        <a className="nav-items" href="/dashboard">
          Dashboard
        </a>
        <button className="nav-items">Join Discord</button>
        <button className="inline-block px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700">
          Subscribe
        </button>
      </nav>
    </header>
  );
};

export default Header;
