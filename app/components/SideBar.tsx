"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaFilm, FaRegBookmark } from "react-icons/fa";

export default function SideBar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/watchlist") {
      setActiveIndex(1);
    } else {
      setActiveIndex(0);
    }
  }, [pathname]);

  return (
    <aside className="w-64 md:p-6 md:p-1">
      <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#FF8C00] to-[#FFA500] bg-clip-text text-transparent">
        Movie Hunt
      </h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link
              href="/"
              className={`flex items-center space-x-2 px-5 py-2 rounded-lg ${
                activeIndex === 0
                  ? "bg-[#FF8C00] text-white"
                  : "hover:text-orange-500"
              }`}
            >
              <FaFilm className="text-xl" />
              <span>Movies</span>
            </Link>
          </li>
          <li>
            <Link
              href="/watchlist"
              className={`flex items-center space-x-2 px-5 py-2 rounded-lg ${
                activeIndex === 1
                  ? "bg-[#FF8C00] text-white"
                  : "hover:text-orange-500"
              }`}
            >
              <FaRegBookmark className="text-xl" />
              <span>My Watch List</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
