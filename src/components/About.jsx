export function About() {
  return (
    <div
      id="about"
      className="mt-5 md:mt-10 p-6 md:p-13 w-full text-black text-center text-4xl"
    >
      <h1 className="mb-4 font-semibold">
        Our Commitment to Fast Delivery, Modern Design, and Real Results
      </h1>
      <p className="text-xl">
        BrandBoost is committed to delivering exceptional value to our clients
        through:
      </p>

      <div className="h-1 w-24 bg-gradient-to-r from-blue-800 to-slate-400 mx-auto mt-6 rounded-full gap-8"></div>

      <main className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-20 gap-7">
        <div className="">
          <h1 className="text-2xl font-semibold underline mb-4">
            Fast Delivery
          </h1>
          <p className="text-xl">
            We understand that time is of the essence, and we strive to deliver
            our services quickly and efficiently.
          </p>
        </div>

        <div>
          <h1 className="text-2xl font-semibold underline mb-4">
            Modern Design
          </h1>
          <p className="text-xl">
            We believe that design matters, and we are committed to creating
            websites and marketing materials that are visually stunning and
            engaging.
          </p>
        </div>

        <div>
          <h1 className="text-2xl font-semibold underline mb-4">
            Data-Driven Approach
          </h1>
          <p className="text-xl">
            We use data to inform our decisions and track the success of our
            efforts.
          </p>
        </div>

        <div>
          <h1 className="text-2xl font-semibold underline mb-4">
            Customer Satisfaction
          </h1>
          <p className="text-xl">
            We are committed to providing exceptional customer service and
            ensuring that our clients are satisfied with our work.
          </p>
        </div>
      </main>
    </div>
  );
}
