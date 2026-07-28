import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">
            About OFITS Global Concepts Ltd
          </h1>

          <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto">
            We are a technology company committed to helping businesses grow
            through innovative software, web solutions, and digital
            transformation.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          <div>
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>

            <p className="text-gray-600 leading-8">
              OFITS Global Concepts Ltd is a software development company
              focused on building reliable, scalable and user-friendly
              digital solutions for businesses across multiple industries.
            </p>

            <p className="text-gray-600 leading-8 mt-6">
              From custom software and websites to mobile applications and
              enterprise solutions, our mission is to empower businesses
              with technology that delivers measurable results.
            </p>
          </div>

          <div className="bg-gray-100 rounded-3xl p-10">

            <h3 className="text-2xl font-bold text-slate-500">
              Our Mission
            </h3>

            <p className="mt-4 text-gray-600">
              To deliver innovative technology solutions that enable
              businesses to achieve sustainable growth.
            </p>

            <h3 className="text-2xl font-bold mt-10 text-slate-500">
              Our Vision
            </h3>

            <p className="mt-4 text-gray-600">
              To become one of Africa&apos;s leading software and digital
              transformation companies.
            </p>

            <h3 className="text-2xl font-bold mt-10 text-slate-500">
              Our Core Values
            </h3>

            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Innovation</li>
              <li>• Integrity</li>
              <li>• Excellence</li>
              <li>• Customer Success</li>
              <li>• Continuous Improvement</li>
            </ul>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
