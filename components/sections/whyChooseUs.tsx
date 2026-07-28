const reasons = [
  {
    title: "Innovative Solutions",
    description:
      "We build modern software that helps businesses improve efficiency and stay competitive.",
    icon: "🚀",
  },
  {
    title: "Tailor-Made Development",
    description:
      "Every solution is designed around your business processes and goals.",
    icon: "💡",
  },
  {
    title: "Scalable Technology",
    description:
      "Our systems grow with your business, from startup to enterprise.",
    icon: "📈",
  },
  {
    title: "Reliable Support",
    description:
      "We provide continuous maintenance, updates and technical support.",
    icon: "🛠",
  },
  {
    title: "Secure Solutions",
    description:
      "Security and data protection are built into every solution we develop.",
    icon: "🔒",
  },
  {
    title: "Customer-Centered",
    description:
      "We listen first, understand your needs and deliver solutions that create value.",
    icon: "🤝",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose OFITS?
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
            At OFITS Global Concepts Ltd, we combine innovation,
            technical expertise and business understanding to deliver
            software solutions that make a real difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reasons.map((reason) => (

            <div
              key={reason.title}
              className="text-slate-900 border rounded-2xl p-8 hover:shadow-xl transition duration-300"
            >
              <div className="text-5xl">
                {reason.icon}
              </div>

              <h3 className="text-2xl font-semibold mt-6">
                {reason.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {reason.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
