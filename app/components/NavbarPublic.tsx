"use client";

import Link from "next/link";

export default function NavbarPublic() {

  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link 
                className="text-lg font-bold text-gray-900 hover:text-indigo-600 transition-colors duration-300" 
                href="/"
              >
                Home
              </Link>
              <Link 
                className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-300" 
                href="/appMenu"
              >
                Apps
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
       );
}

