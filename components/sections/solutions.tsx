import Link from "next/link";

const solutions = [
  {
    title: "OFITS POS", description: "Smart Point of Sale solution for retail, supermarkets, pharmacies and restaurants.",
    link: "/solutions/ofits-pos",
    icon: "🛒",
    available: true,
  },
  {
    title: "OFITS HR", description: "Human Resource and Payroll Management System for modern organisations.",
    icon: "👥",
    available: false,
  },
  {
    title: "OFITS CRM", description: "Manage customers, sales, marketing and support from one platform.",
    icon: "🤝",
    available: false,
  },
  {
    title: "Custom Business Solutions", description: "Custom ERP, Inventory, School, Hospital and Business Management Systems.",
    icon: "⚙️",
    available: false,
  },
];

export default function Solutions() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            Our Solutions
          </h2>

          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            Powerful software products designed to simplify operations,
            increase productivity and accelerate business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.title}
                className="rounded-2xl bg-white p-8 shadow-lg border border-slate-200">
                <div className="text-5xl mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900">{solution.title}</h3>
                <p className="mt-3 text-slate-600">{solution.description}</p>
                {solution.available ? (
                  <Link href={solution.link!} className="inline-block mt-6 font-semibold text-blue-600 
                  hover:text-blue-800">
                    Explore OFITS POS
                  </Link>
                  ) : (
                      <span className="inline-block mt-6 rounded-full bg-amber-100 px-4
                      py-2 text-sm font-semibold text-amber-700">Coming Soon</span>
                    )
                }
            </div>
          ))}  
        </div>
      </div>
    </section>
  )
}