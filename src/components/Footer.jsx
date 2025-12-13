import { Barrel } from "lucide-react";
export function Footer() {
  return (
    <div className="bg-slate-800 p-12 w-full text-white text-center mt-20">
      <main className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-40">
        <div className="mt-5 text-center md:text-left">
          <h1 className="text-3xl text-semibold mb-4">
            <Barrel className="inline mb-2 size-7" />
            Brand<span className="text-blue-600">Boost</span>
          </h1>
          <p className="text-lg">
            Grow your business with smart online presence. BrandBoost is your
            partner in achieving online success.
          </p>
        </div>

        <div className="mt-5 text-center">
          <h1 className="text-2xl font-semibold mb-4">Quick Links</h1>
          <p
            id="services"
            className="text-md mb-2 cursor-pointer hover:text-blue-400"
          >
            Services
          </p>
          <p className="text-md mb-2 cursor-pointer hover:text-blue-400">
            Testimonials
          </p>
          <p className="text-md mb-2 cursor-pointer hover:text-blue-400">
            Pricing
          </p>
          <p className="text-md mb-2 cursor-pointer hover:text-blue-400">
            About
          </p>
        </div>

        <div className="mt-5 text-center md:text-right">
          <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
          <p className="text-md mb-2">
            1234 Market St, San Francisco, CA 94103
          </p>
          <p className="text-md mb-2">Email: brandboost@gmail.com</p>
          <p className="text-md mb-2">Phone: (123) 456-7890</p>
        </div>
      </main>

      <div className="mt-10 border-t border-slate-600 pt-6">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} BrandBoost. All rights reserved.
        </p>
      </div>
    </div>
  );
}
