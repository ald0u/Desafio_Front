// import Image from "next/image";
import Menu from "@/src/components/Menu/Menu";
import Navbar from "@/src/components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row items-start justify-center w-full min-h-screen p-4 bg-gray-200">
      <Navbar />
      <Menu />
    </main>
  );
}
