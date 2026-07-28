export default function Contact() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16 text-slate-900">
          <h2 className="text-4xl font-bold">
            Let&apos;s Build Something Amazing Together
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Whether you need a custom software solution, a professional
            website, a mobile application, or want to discuss a business
            idea, we&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Details */}

          <div className="space-y-8">

            <div>
              <h3 className="text-slate-800 text-2xl font-semibold">
                Contact Information
              </h3>
            </div>

            <div>
              <h4 className="font-semibold text-slate-500">Email</h4>
              <p className="text-gray-600">
                ofitsglobal@gmail.com
              </p>
            </div>

            <div>
              <h4 className="text-slate-500 font-semibold">Phone</h4>
              <p className="text-gray-600">
                +234 906 6053 654
              </p>
            </div>

            <div>
              <h4 className="text-slate-500 font-semibold">Office</h4>
              <p className="text-gray-600">
                Lagos, Nigeria
              </p>
            </div>

          </div>

          {/* Contact Form */}

          <form className="bg-white p-8 rounded-2xl shadow">

            <input  className="w-full border rounded-lg p-4 mb-4 text-slate-500"
              type="text"
              placeholder="Your Name"
            />

            <input  className="w-full border rounded-lg p-4 mb-4 text-slate-500"
              type="email"
              placeholder="Email Address"
            />

            <input className="w-full border rounded-lg p-4 mb-4 text-slate-500"
              type="text"
              placeholder="Subject"
              
            />

            <textarea className="w-full border rounded-lg p-4 mb-6 text-slate-500"
              rows={6}
              placeholder="Tell us about your project..."
            />

            <button className="w-full bg-blue-700 text-white py-4 rounded-xl hover:bg-blue-800 transition">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}
