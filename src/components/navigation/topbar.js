'use client'
import Image from "next/image";
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
          <Image src={'/logo/tamaduni_logo 1.png'} alt="logo" width={50} height={50} />
          {/* <Image src={'/logo/tamaduni_logo 1.png'} alt="logo" width={50} height={50} /> */}
        </div>
        <h1 className="text-xl font-bold" style={{ fontFamily: '"Inria Serif", serif' }}>
          {title}
        </h1>
        <div className="flex flex-col items-center justify-between space-y-2">
          {
            pathname === "/" ? (
              <>
              
              <button className="bg-custom-gradient text-white px-4 py-1 w-32">Login</button>
              <button className="bg-custom-gradient text-white px-4 py-1 w-32">Sign Up</button>
              </>
            ) : (
              <button className="bg-custom-gradient text-white px-4 py-1 w-32">Back</button>
            )
          }
        </div>
      </nav>
    </div>
  );
}

export default Topbar;
