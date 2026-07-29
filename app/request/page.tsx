"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RequestPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const form = e.currentTarget;

    try {
      console.log("Service:",
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
      console.log("Template:",
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
      console.log("Public:",
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form, 
          {publicKey:
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
          }
      );

      setSuccess(true);
      form.reset();
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (error: unknown) {
        console.error("EmailJS Error:", error);
      
        if (error instanceof Error) {
          alert(error.message);
         } else {
          alert("An unknown error occurred.");
          }
      } finally {
            setLoading(false);
          };
    }

    
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
            {success && (
        <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-5">
          <h3 className="text-lg font-semibold text-green-700">
            ✅ Thank you!
          </h3>

          <p className="mt-2 text-green-700">
            Your request has been received successfully.
            Our team will review your requirements and contact you within
            <strong> 24 hours.</strong>
          </p>
        </div>
      )}
           <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-semibold">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="full_name"
                    required
                    className="w-full border rounded-xl p-4"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold">
                    Company Name
                  </label>

                  <input
                    type="text"
                    name="company"
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
                    name="email"
                    required
                    className="w-full border rounded-xl p-4"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    name="phone"
                    required
                    className="w-full border rounded-xl p-4"
                  />
                </div>

              </div>

              <div>
                <label className="block mb-2 font-semibold">
                  Industry
                </label>

                <select name="industry" required className="w-full border rounded-xl p-4">

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
                    <input 
                    type="checkbox" 
                    name="services"
                    value="Website Development"
                    /> Website Development
                  </label>

                  <label>
                    <input 
                    type="checkbox" 
                    name="services"
                    value="Custom Software Development"
                    /> Custom Software Development
                  </label>

                  <label>
                    <input 
                    type="checkbox" 
                    name="services"
                    value="Mobile App Development"
                    /> Mobile App Development
                  </label>

                  <label>
                    <input 
                    type="checkbox" 
                    name="services"
                    value="OFITS POS"
                    /> OFITS POS
                  </label>

                  <label>
                    <input 
                    type="checkbox" 
                    name="services"
                    value="Business Automation"
                    /> Business Automation
                  </label>

                  <label>
                    <input 
                    type="checkbox" 
                    name="services"
                    value="IT Consulting"
                    /> IT Consulting
                  </label>

                </div>

              </div>

              <div>

                <label className="block mb-2 font-semibold">
                  Tell us about your project
                </label>

                <textarea
                  name="project"
                  required
                  rows={6}
                  className="w-full border rounded-xl p-4"
                ></textarea>

              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <div>

                  <label className="block mb-2 font-semibold">
                    Estimated Budget
                  </label>

                  <select name="budget" className="w-full border rounded-xl p-4">

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

                  <select name="timeline" className="w-full border rounded-xl p-4">

                    <option>Immediately</option>

                    <option>Within 1 Month</option>

                    <option>Within 3 Months</option>

                    <option>Flexible</option>

                  </select>

                </div>

              </div>

              <button
                type="submit"
                  disabled={loading}
                  className={`w-full rounded-xl py-4 text-lg font-semibold transition
                    ${
                      loading
                        ? "bg-blue-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700"
                    } text-white`}
              >
                {loading ? "Submitting..." : "Submit Request"}
              </button>

            </form>

          </div>
        </section>

        <Footer />
      </>
    );    
  } 
