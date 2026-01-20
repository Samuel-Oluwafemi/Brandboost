import { SearchCode, Code, LayoutDashboard } from "lucide-react";
export function Services() {
  return (
    <div data-aos="zoom-in"
      id="services"
      className="bg-blue-600 w-full py-14 px-4 md:p-20 text-white text-center text-4xl"
    >
      <h1 className="mt-63 md:m-5 font-semibold">Our Core Services</h1>
      <p className="text-2xl px-10 mt-2">
        BrandBoost offers a suite of interconnected services designed to
        maximize your online impact:
      </p>

      <div className="h-1 w-24 bg-gradient-to-r from-blue-800 to-slate-400 mx-auto mt-6 rounded-full"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 font-semibold mt-10 md:mt-15 gap-6">
        <div
          className="m-2 p-6 bg-gradient-to-b shadow-xl from-blue-400 via-blue-500 to-gray-300 to-slate-400 
        rounded-lg hover:border border-white hover:scale-105 transition-all transition-transform duration-300"
        >
          <h2 className="text-2xl text-black font-semibold mb-4 text-shadow-lg">
            <p>
              <SearchCode className="inline bg-white text-black size-13 p-2 rounded-full" />
            </p>
            SEO Strategy & Optimization
          </h2>
          <main className="text-lg">
            <p>
              Search Engine Optimization (SEO) is the cornerstone of a
              successful online presence.
            </p>
            <p className="mt-5">
              BrandBoost's SEO services are designed to improve your website's
              visibility in search engine results, driving organic traffic and
              attracting qualified leads.
            </p>
          </main>
        </div>

        <div
          className="m-2 p-6 bg-gradient-to-b shadow-xl from-blue-400 via-blue-500 to-gray-300 
        to-slate-400 rounded-lg hover:scale-105 transition-all transition-transform duration-300
        hover:border border-white"
        >
          <h2 className="text-2xl text-black font-semibold mb-4 text-shadow-lg">
            <p>
              <Code className="inline bg-white text-black size-13 p-2 rounded-full" />
            </p>
            Website Design
          </h2>
          <main className="text-lg">
            <p>
              Your website is your digital storefront, and it's crucial to make
              a positive first impression.
            </p>
            <p className="mt-5">
              BrandBoost's web design services focus on creating modern,
              user-friendly websites that are both visually appealing and highly
              functional.
            </p>
          </main>
        </div>

        <div
          className="m-2 p-6 bg-gradient-to-b from-blue-400 via-blue-500 to-gray-300 
        to-slate-400 shadow-xl rounded-lg hover:border border-white hover:scale-105 transition-all
         transition-transform duration-300"
        >
          <h2 className="text-2xl text-black font-semibold mb-4 text-shadow-lg">
            <p>
              <LayoutDashboard className="inline bg-white rounded-full size-13 p-2" />
            </p>
            Analytics Dashboard
          </h2>
          <main className="text-lg">
            <p>
              Data is essential for making informed decisions and tracking the
              success of your online marketing efforts.
            </p>
            <p className="mt-5">
              BrandBoost provides a comprehensive analytics dashboard that gives
              you real-time insights into your website's performance.
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}
