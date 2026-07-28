export default function OfitsPOSPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <span className="bg-blue-900 text-blue-300 px-4 py-1 rounded-full text-sm">
          OFITS POS
        </span>

        <h1 className="text-5xl font-bold mt-6">
          The Smart Point of Sale System for Modern Businesses
        </h1>

        <p className="text-slate-300 mt-6 text-lg max-w-3xl">
          OFITS POS helps retail stores, supermarkets, restaurants,
          pharmacies and hospitality businesses manage sales,
          inventory, customers and reports from one powerful platform.
        </p>

        <div className="flex gap-4 mt-10">
          <button className="bg-blue-600 px-8 py-4 rounded-xl hover:bg-blue-700">
            Request Demo
          </button>

          <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black">
            Contact Sales
          </button>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <img
          src="/images/ofits-pos-dashboard2.jpg"
          alt="OFITS POS Dashboard"
          className="rounded-3xl shadow-2xl"
        />
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-4xl font-bold mb-10">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-3">
              Sales Management
            </h3>

            <p className="text-slate-400">
              Process sales quickly with receipts, discounts,
              multiple payment methods and real-time reporting.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-3">
              Inventory Control
            </h3>

            <p className="text-slate-400">
              Track stock levels automatically and receive
              low-stock notifications before products run out.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-3">
              Business Reports
            </h3>

            <p className="text-slate-400">
              Gain valuable insights into revenue,
              profits, staff performance and customer behaviour.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
