import Image from "next/image";

const HeroSection = () => {
  return (
    <div className=" flex flex-col gap-20">
      <header className="container mx-auto border-2 border-[#454546] rounded-full p-4 flex justify-between items-center my-5">
        <div className="text-2xl font-bold cursor-pointer">
          <Image src="/logo.svg" alt="logo" width={150} height={150} />
        </div>
        <nav className="space-x-6">
          <a href="#" className="text-white hover:text-gray-400">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            Solutions
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            Products
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            Industries
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            About
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            Contact
          </a>
        </nav>
        <button className="border-2 border-[#454546] text-white px-4 py-2 rounded-full cursor-pointer">
          Request Demo
        </button>
      </header>

      <main className="h-full w-full flex flex-col items-center justify-between gap-10">
        <div className="left flex flex-col justify-center items-center gap-5">
          <h3 className="text-2xl">Intelligence that</h3>
          <h1 className="text-6xl font-bold">Powers Every Space</h1>
        </div>
        <div className="right">
          <Image
            src="/herosection/icon1.svg"
            alt="home page"
            width={900}
            height={700}
          />
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
