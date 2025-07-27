import React from "react";

function Footer() {
  return (
    <div className="bottom-0">
      <div className="container relative z-10 mx-auto px-4">
        <div className="-m-8 flex flex-wrap items-center justify-between">
          <div className="w-auto p-8">
            <a href="/">
              <div className="inline-flex items-center">
                <svg
                  width="40"
                  height="46"
                  viewBox="0 0 50 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.2732 0.2528C20.8078 1.18964..." fill="white" />
                </svg>
                <span className="ml-4 text-2xl font-bold text-white">AlloHealth</span>
              </div>
            </a>
          </div>

          <div className="w-auto p-8">
            <ul className="-m-5 flex flex-wrap items-center">
              <li className="p-5">
                <a className="font-medium text-white hover:text-black" href="/">
                  Privacy Policy
                </a>
              </li>
              <li className="p-5">
                <a className="font-medium text-white hover:text-black" href="/">
                  Terms of Service
                </a>
              </li>
              <li className="p-5">
                <a className="font-medium text-white hover:text-black" href="/">
                  Return Policy
                </a>
              </li>
              <li className="p-5">
                <a className="font-medium text-white hover:text-black" href="/">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="w-auto p-8">
            <div className="-m-1.5 flex flex-wrap">
              <div className="w-auto p-1.5">
                <a href="/">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white-300 hover:border-gray-400">
                  </div>
                </a>
              </div>
              <div className="w-auto p-1.5">
                <a href="/">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                  </div>
                </a>
              </div>
              <div className="w-auto p-1.5">
                <a href="/">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
