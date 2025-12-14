import { Offer } from "./Offers";
import { Services } from "./Services";
import { About } from "./About";
import { Footer } from "./Footer";
export function Home() {
  return (
    <>
      <div className="flex flex-col text-black h-350 items-center justify-center mt-10">
        <main className="mt-67 md:mt-0">
          {/* Big bold Headline */}
          <h2 className="text-6xl md:text-7xl text-center text-black font-bold p-8">
            Grow Your Business With <br /> Smart
            <span className="text-blue-700"> Online Presence.</span>
          </h2>
          {/* Subtext */}
          <p className="text-xl text-gray-800 px-10 md:px-35 text-center">
            BrandBoost helps businesses stand out with beautiful websites,
            <br />
            SEO strategy, and analytics.
          </p>

          {/* CTA */}
          <div className="flex items-center justify-center gap-3 mb-20">
            <button className="rounded-full bg-slate-900 text-white p-4 px-6 md:p-2 md:px-6 mt-8 font-semibold cursor-pointer hover:bg-slate-800">
              <a href="">Get Started</a>
            </button>
            <button className="text-gray-800 rounded-full border border-slate-300 p-4 px-6 md:p-2 md:px-6 mt-8 font-semibold cursor-pointer hover:border-slate-400">
              See Pricing →
            </button>
          </div>
        </main>
        {/* Introduction */}
        <Offer />

        {/* Creative Image */}
        <div className="bg-blue-100 md:bg-transparent">
          <img
            src="/images/BrandBoost_ Powering Business Growth with Smart Online Presence - visual selection (1).png"
            alt="Business Growth"
            className="w-4/4 md:w-3/4 mx-auto rounded-lg mt-10"
          />
        </div>
      </div>

      {/* Our Servies */}
      <Services />
      <About />
      <Footer />
    </>
  );
}
