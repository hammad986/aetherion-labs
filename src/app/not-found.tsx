import { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Home } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "404: Page Not Found | Aetherion Labs",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <h1 className="text-8xl font-extrabold text-gray-100 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-500 mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className={buttonVariants({ size: "lg", className: "rounded-full px-8" })}>
            <Home className="mr-2 h-4 w-4" /> Back to Home
          </Link>
          <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-full px-8" })}>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
