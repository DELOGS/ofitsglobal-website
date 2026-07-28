import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RequestPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">
            How May We Serve You?
          </h1>

          <p className="mt-6 text-xl text-slate-300">
            Tell us about your business and the solution you need.
            Our team will review your request and get back to you promptly.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-gray-20 text-slate-500">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10">

          <form className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block mb-2 font-semibold">
                  Full Name
                </label>

                <input
                  type="text"
                  className="w-full border rounded-xl p-4"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">
                  Company Name
                </label>

                <input
                  type="text"
                  className="w-full border rounded-xl p-4"
                />
              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block mb-2 font-semibold">
                  Email Address
                </label>

                <input
                  type="email"
                  className="w-full border rounded-xl p-4"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">
                  Phone Number
                </label>

                <input
                  type="text"
                  className="w-full border rounded-xl p-4"
                />
              </div>

            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Industry
              </label>

              <select className="w-full border rounded-xl p-4">

                <option>Select Industry</option>

                <option>Retail</option>

                <option>Healthcare</option>

                <option>Education</option>

                <option>Hospitality</option>

                <option>Finance</option>

                <option>Manufacturing</option>

                <option>Government</option>

                <option>Other</option>

              </select>
            </div>

            <div>

              <label className="block mb-4 font-semibold">
                What service do you need?
              </label>

              <div className="grid md:grid-cols-2 gap-3">

                <label>
                  <input type="checkbox" /> Website Development
                </label>

                <label>
                  <input type="checkbox" /> Custom Software Development
                </label>

                <label>
                  <input type="checkbox" /> Mobile App Development
                </label>

                <label>
                  <input type="checkbox" /> OFITS POS
                </label>

                <label>
                  <input type="checkbox" /> Business Automation
                </label>

                <label>
                  <input type="checkbox" /> IT Consulting
                </label>

              </div>

            </div>

            <div>

              <label className="block mb-2 font-semibold">
                Tell us about your project
              </label>

              <textarea
                rows={6}
                className="w-full border rounded-xl p-4"
              ></textarea>

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="block mb-2 font-semibold">
                  Estimated Budget
                </label>

                <select className="w-full border rounded-xl p-4">

                  <option>Let&apos;s Discuss</option>

                  <option>Below ₦500,000</option>

                  <option>₦500,000 - ₦2,000,000</option>

                  <option>₦2,000,000 - ₦5,000,000</option>

                  <option>Above ₦5,000,000</option>

                </select>

              </div>

              <div>

                <label className="block mb-2 font-semibold">
                  Preferred Timeline
                </label>

                <select className="w-full border rounded-xl p-4">

                  <option>Immediately</option>

                  <option>Within 1 Month</option>

                  <option>Within 3 Months</option>

                  <option>Flexible</option>

                </select>

              </div>

            </div>

            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-4 text-lg font-semibold transition"
            >
              Submit Request
            </button>

          </form>

        </div>
      </section>

      <Footer />
    </>
  );
}
