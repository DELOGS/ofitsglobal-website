const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We begin by understanding your business, goals and challenges.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "We analyse requirements and prepare a clear project roadmap.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Our designers create intuitive and user-friendly interfaces.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Our engineers build secure, scalable and high-performance software.",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "Every solution undergoes rigorous quality assurance before launch.",
  },
  {
    number: "06",
    title: "Deployment & Support",
    description:
      "We deploy your solution and provide ongoing maintenance and support.",
  },
];

export default function Process() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-widest text-blue-400 font-semibold">
            Our Process
          </p>

          <h2 className="text-4xl font-bold text-white mt-4">
            How We Bring Your Ideas to Life
          </h2>

          <p className="text-gray-300 mt-5 max-w-3xl mx-auto">
            We follow a structured development process that ensures quality,
            transparency and successful project delivery.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {steps.map((step) => (

            <div
              key={step.number}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition"
            >

              <div className="text-5xl font-bold text-blue-500">
                {step.number}
              </div>

              <h3 className="text-2xl text-white font-semibold mt-6">
                {step.title}
              </h3>

              <p className="text-gray-300 mt-4 leading-7">
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
