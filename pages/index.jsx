// import Image from "next/image";
import Menu from "@/src/components/Menu/Menu";
import Navbar from "@/src/components/Navbar/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
    {/* <main className="w-full min-h-screen p-4 grid grid-cols-[20%_1fr] grid-rows-[3.2rem_1fr] bg-gray-200"> */}
      <Navbar />
      <Menu/>
    </main>
  );
}
