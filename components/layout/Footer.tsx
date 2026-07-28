import Link from "next/link";
import { company } from "@/lib/company";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}

          <div>

            <h2 className="text-2xl font-bold text-blue-500">
              {company.name}
            </h2>

            <p className="italic text-gray-400 mt-2">
              {company.slogan}
            </p>

            <p className="text-gray-400 mt-6 leading-7">
              We create innovative software solutions that help businesses
              embrace digital transformation and unlock infinite possibilities.
            </p>

          </div>

          {/* Services */}

          <div>

            <h3 className="font-semibold text-lg mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Custom Software Development</li>
              <li>Website Development</li>
              <li>Mobile App Development</li>
              <li>Cloud Solutions</li>
              <li>IT Consulting</li>

            </ul>

          </div>

          {/* Products */}

          <div>

            <h3 className="font-semibold text-lg mb-5">
              Products
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>OFITS POS</li>
              <li>OFITS HR</li>
              <li>OFITS CRM</li>
              <li>OFITS Inventory</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="font-semibold text-lg mb-5">
              Contact
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Email: {company.email}</li>

              <li>Phone: {company.phone}</li>

              <li>{company.address}</li>

            </ul>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {company.name}. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">

            <Link href="/" className="text-gray-400 hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/" className="text-gray-400 hover:text-white">
              Terms of Service
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}
