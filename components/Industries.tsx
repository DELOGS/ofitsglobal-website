import { industries } from "@/lib/industries";

export default function Industries() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Industries We Serve
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            We develop software solutions tailored to the unique needs of
            businesses across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {industries.map((industry) => (

            <div
              key={industry.title}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition"
            >
              <div className="text-5xl">{industry.icon}</div>

              <h3 className="text-xl font-bold text-slate-900">
                {industry.title}
              </h3>

              <p className="mt-4 text-gray-700">
                {industry.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
