import Link from "next/link";

const services = [
  {
    title: "Custom Software Development",
    description:
      "Tailor-made software solutions designed to streamline your business processes and improve efficiency.",
    link: "/services#custom-software-development",
  },
  {
    title: "Website Development",
    description:
      "Modern, responsive websites that strengthen your brand and convert visitors into customers.",
    link: "/services#website-development",
  },
  {
    title: "Mobile App Development",
    description:
      "Powerful Android and iOS applications built to keep your customers connected.",
    link: "/services#mobile-app-development",
  },
  {
    title: "Business Management Systems",
    description:
      "Integrated software solutions including POS, HR, CRM and Inventory Management Systems.",
    link: "/services#business-management-systems",
  },
  {
    title: "Cloud Solutions",
    description:
      "Secure and scalable cloud infrastructure to support modern business operations.",
    link: "/services#cloud-solutions",
  },
  {
    title: "IT Consulting",
    description:
      "Expert technology guidance to help your organisation achieve digital transformation.",
    link: "/services#it-consulting",
  },
];

export default function Service() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Our Services
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            We deliver innovative technology solutions that help businesses
            automate operations, improve efficiency and accelerate growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                {service.description}
              </p>

              <Link
                href={service.link}
                className="inline-block mt-8 text-blue-600 font-semibold hover:text-blue-700"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
