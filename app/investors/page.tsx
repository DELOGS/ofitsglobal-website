import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { TrendingUp, Handshake, Target, Lightbulb } from "lucide-react";

const reasons = [
  {
    icon: TrendingUp,
    title: "Growing Market",
    description:
      "Africa's demand for business software and digital transformation continues to grow rapidly.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Products",
    description:
      "OFITS is building practical software solutions designed to solve real business challenges.",
  },
  {
    icon: Target,
    title: "Long-Term Vision",
    description:
      "Our goal is to become a leading provider of business software solutions across Africa and beyond.",
  },
  {
    icon: Handshake,
    title: "Strategic Partnership",
    description:
      "We welcome investors and partners who believe in innovation, growth, and sustainable value creation.",
  },
];

export default function InvestorsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Partner With OFITS
          </h1>

          <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto">
            Join us in building innovative technology solutions that empower
            businesses and create lasting impact across Africa.
          </p>

        </div>
      </section>

      {/* Why Invest */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-slate-500">
            Why Invest in OFITS?
          </h2>

          <p className="text-center text-gray-600 mt-4 mb-16">
            We are building more than software—we are building a technology company with long-term growth ambitions.
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            {reasons.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition"
                >
                  <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>

                  <h3 className="text-2xl font-bold mt-6 text-slate-400">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-4 leading-7">
                    {item.description}
                  </p>
                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* Vision */}

      <section className="bg-gray-50 py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-slate-500">
            Our Vision
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            OFITS Global Concepts Ltd is committed to developing scalable,
            reliable and innovative software products that help businesses
            improve productivity and embrace digital transformation.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We believe strategic partnerships can accelerate innovation,
            expand our reach and create sustainable value for all stakeholders.
          </p>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-blue-600 py-20 text-white">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">
            Let&apos;s Build the Future Together
          </h2>

          <p className="mt-6 text-blue-100 text-lg">
            If you&apos;re interested in partnering with OFITS or exploring investment opportunities, we&apos;d love to start the conversation.
          </p>

          <button className="mt-10 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition">
            Contact Our Team
          </button>

        </div>

      </section>

      <Footer />
    </>
  );
}
