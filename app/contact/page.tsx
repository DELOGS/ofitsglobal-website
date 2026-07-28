import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">Contact Us</h1>

          <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto">
            We&apos;d love to hear from you. Whether you need a custom software
            solution, a professional website, or want to discuss a project,
            our team is ready to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* Contact Information */}
          <div>

            <h2 className="text-3xl font-bold mb-8 text-slate-700">
              Get In Touch
            </h2>

            <div className="space-y-8">

              <div className="flex items-start gap-4">
                <Mail className="text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-500">Email</h3>
                  <p className="text-gray-600">
                    ofitsglobal@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-500">Phone</h3>
                  <p className="text-gray-600">
                    +234 906 605 3654
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-500">Office</h3>
                  <p className="text-gray-600">
                    Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-500">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday – Friday
                  </p>
                  <p className="text-gray-600">
                    8:00 AM – 5:00 PM
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-10">

            <h2 className="text-3xl font-bold mb-8 text-slate-700">
              How May We Serve You?
            </h2>

            <form className="space-y-6">

              <input
                className="w-full border rounded-xl p-4 text-slate-300"
                type="text"
                placeholder="Full Name"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl p-4 text-slate-300"
              />

              <input
                type="text"
                placeholder="Company Name"
                className="w-full border rounded-xl p-4 text-slate-300"
              />

              <textarea
                placeholder="Tell us about your project..."
                rows={6}
                className="w-full border rounded-xl p-4 text-slate-300"
              />

              <button
                className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
