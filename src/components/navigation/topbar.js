"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Topbar = () => {
  const pathname = usePathname();

  // Map pathnames to titles
  const titleMap = {
    "/migration": "Migration",
    "/afrocelebration": "Afro Celebration",
    "/culturalmapping": "Cultural Mapping",
    "/digitalethnography": "Digital Ethnography",
    "/civilization": "Civilization",
    // Add more routes as needed
  };

  // Get the title based on the current pathname
  const title = titleMap[pathname] || "TAMADUNI"; // Default title if pathname doesn't match

  return (
    <div>
      <nav className="flex justify-between items-center mb-2">
        <div className="flex flex-col items-center justify-between space-y-2">
          <Image
            src={"/logo/tamaduni_logo.png"}
            alt="logo"
            width={50}
            height={50}
          />
        </div>
        <h1
          className="text-xl font-bold"
          style={{ fontFamily: '"Inria Serif", serif' }}
        >
          {title}
        </h1>
        <section className="hidden sm:block">
          <div className="flex flex-col items-center justify-between space-y-2">
            {pathname === "/" ? (
              <>
                <button className="bg-custom-gradient text-white px-4 py-1 w-32">
                  Login
                </button>
                <button className="bg-custom-gradient text-white px-4 py-1 w-32">
                  Sign Up
                </button>
              </>
            ) : (
              <div className="flex space-x-4">
                <Link href="/about" className="text-gray-600 hover:text-black">
                  About
                </Link>
                <Link href="/team" className="text-gray-600 hover:text-black">
                  Team
                </Link>

                <button className="sm:hidden text-gray-600 hover:text-black">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </section>

        <div className="sm:hidden">
          <button className="text-gray-600 hover:text-black">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
