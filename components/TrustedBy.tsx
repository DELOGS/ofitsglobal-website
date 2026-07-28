export default function TrustedBy() {
  const companies = [
    "Your Business",
    "Your Vision",
    "Your Growth",
    "Your Success",
    "Future Future",
  ];

  return (
    <section className="bg-white py-16 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <p className="text-blue-700 uppercase tracking-[0.3em] font-semibold">
            Trusted By
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-4">
            Businesses Embracing Digital Transformation
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            We partner with organizations to deliver innovative digital
            solutions that drive efficiency, growth, and long-term success.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-14">

          {companies.map((company) => (

            <div
              key={company}
              className="h-24 rounded-2xl border border-dashed border-gray-300 flex items-center justify-center text-gray-400 font-semibold hover:border-blue-600 hover:text-blue-700 transition"
            >
              {company}
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
