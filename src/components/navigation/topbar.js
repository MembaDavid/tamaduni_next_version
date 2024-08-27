import Image from "next/image"

const Topbar = () => {
  return (
    <div>
        <nav className="flex justify-between items-center">
            <div className="flex flex-col items-center justify-between space-y-2">
                <Image src={'/logo/tamaduni_logo 1.png'} alt="logo" width={50} height={50} />
                <Image src={'/logo/tamaduni_logo 1.png'} alt="logo" width={50} height={50} />

            </div>
            <h1 className="text-xl font-bold" style={{ fontFamily: '"Inria Serif", serif' }}>TAMADUNI</h1>
            <div className="flex flex-col items-center justify-between space-y-2">
                <button className="bg-custom-gradient text-white px-4 py-1  w-32">Login</button>
                <button className="bg-custom-gradient text-white px-4 py-1  w-32">Sign Up</button>
            </div>
        </nav>
    </div>
  )
}

export default Topbar