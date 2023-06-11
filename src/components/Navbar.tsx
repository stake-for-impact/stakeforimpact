import { useState } from "react";
import { Link } from "react-router-dom";
import { useAccount } from "wagmi";
import { ConnectButton } from "./ConnectButton";

export function Navbar() {

  const [open, setOpen] = useState(true);
  const { isConnected } = useAccount();
  return (
    <div className="w-full max-w-7xl">
      <div className="flex flex-col max-w-screen-xl p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between lg:justify-start">
          <Link
            to="/"
            className="text-lg font-bold tracking-tighter text-blue-600 transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8"
          >
            <img src="/logo.svg" alt="logotype" />
          </Link>
          <button
            className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
            onClick={() => setOpen(!open)}
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-8">
              <path

                className={open ? `hidden` : `block`}
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
                className={open ? `block` : `hidden`}
              />
            </svg>
          </button>
        </div>

        <nav className={open ? `justify-center items-center flex-grow pb-4 border-blue-600 md:pb-0 md:flex md:justify-end md:flex-row lg:border-l-2 lg:pl-2 mt-4 bg-gray-50 p-4 md:bg-transparent md:p-0 rounded-3xl md:rounded-none` : `hidden`}>
          <a
            className="px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline"
            href="/about"
          >
            About
          </a>
          <a
            className="px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline"
            href="/contact"
          >
            Contact
          </a>
          <br className="md:hidden"/>
          <div className="inline-flex items-center gap-2 list-none lg:ml-auto mt-4 md:mt-0">
            {isConnected ? (
              <Link
                className="items-center block px-10 py-2.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                to={`create`}
              >
                  Create campaign
              </Link>
            ) : (
              <ConnectButton />
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}