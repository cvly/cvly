import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-90">
          <Image width={20} height={20} src="Cvly.svg" alt="Cvly Logo" className="w-8 h-8" />
          <span className="font-semibold">Cvly.me</span>
        </Link>

        <Button variant="ghost" size="sm">
          About
        </Button>
      </div>
    </nav>
  );
}