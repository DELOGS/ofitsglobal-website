import Image from "next/image";
import Button from "./ui/Button";

export default function FeaturedProduct() {
  return (
    <section className="bg-slate-900 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Featured Solution
            </span>

            <h2 className="text-5xl font-bold text-white mt-6">
              OFITS POS
            </h2>

            <p className="text-slate-300 mt-6 text-lg leading-8">
              A complete Point of Sale solution built to help retailers,
              supermarkets, pharmacies, restaurants and hospitality
              businesses simplify operations and grow efficiently.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10 text-slate-200">

              <div>✔ Sales Management</div>
              <div>✔ Inventory Control</div>
              <div>✔ Customer Database</div>
              <div>✔ Reports & Analytics</div>
              <div>✔ Multi-user Access</div>
              <div>✔ Secure Cloud Backup</div>

            </div>

            <Button href="/solutions/ofits-pos" className="mt-10 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition">
              Explore OFITS POS
            </Button>

          </div>

          <div>

            <Image
              src="/images/ofits-pos-dashboard2.jpg"
              alt="OFITS POS Dashboard"
              width={1200}
              height={700}
              className="rounded-2xl shadow-2xl"
            />

          </div>

        </div>

      </div>

    </section>
  );
}
