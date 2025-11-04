import { ModeToggle } from "@/src/components/ui/theme-toggle";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Boutique - Next.js Demo",
  description: "Boutique de livres créée avec Next.js 13.4 et l'App Router",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl font-bold">learning Next.js 13.4 with the new App Router!</h1>
      <ModeToggle />  
      <Link href="/boutique" className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
        <span>Go to Boutique</span>
      </Link>
    </div>
  );
}