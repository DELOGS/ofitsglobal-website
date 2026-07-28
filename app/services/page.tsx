import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-24">

  {/* Hero */}
  <section className="mb-24">
    <h1 className="text-5xl md:text-6xl font-bold">
      Technology Services That Drive Business Growth
    </h1>

    <p className="mt-8 text-lg text-gray-600 max-w-4xl leading-8">
      At OFITS Global Concepts Ltd, we help businesses embrace digital
      transformation through innovative software, websites, mobile
      applications and cloud solutions designed for long-term growth.
    </p>
  </section>

  {/* Custom Software Development */}
  <section
    id="custom-software-development"
    className="py-20 border-t"
  >
    <h2 className="text-4xl font-bold">
      Custom Software Development
    </h2>

    <h3 className="text-2xl text-blue-600 mt-4">
      Tailored Software Built Around Your Business
    </h3>

    <p className="mt-6 text-lg leading-8 text-gray-600">
      Every organisation operates differently. We develop secure,
      scalable and high-performance software tailored specifically to
      your operational processes, improving productivity, efficiency
      and profitability.
    </p>

    <ul className="mt-8 space-y-3 text-lg">
      <li>✔ Enterprise Resource Planning (ERP)</li>
      <li>✔ Human Resource Management Systems</li>
      <li>✔ CRM Solutions</li>
      <li>✔ Inventory Systems</li>
      <li>✔ Hospital Management Systems</li>
      <li>✔ School Management Systems</li>
    </ul>

    <a
      href="/request"
      className="inline-block mt-10 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition"
    >
      Request This Service
    </a>
  </section>

  <section
  id="website-development"
  className="py-20 border-t"
>
  <h2 className="text-4xl font-bold">
    Website Development
  </h2>

  <h3 className="text-2xl text-blue-600 mt-4">
    Building Websites That Inspire Confidence
  </h3>

  <p className="mt-6 text-lg leading-8 text-gray-600">
    Your website is often the first impression customers have of your business.
    We design modern, responsive and high-performance websites that showcase
    your brand, generate leads and convert visitors into customers.
  </p>

  <ul className="mt-8 space-y-3 text-lg">
    <li>✔ Corporate Websites</li>
    <li>✔ E-commerce Websites</li>
    <li>✔ School Websites</li>
    <li>✔ Hotel Websites</li>
    <li>✔ Landing Pages</li>
    <li>✔ Website Maintenance & Support</li>
  </ul>

  <a
    href="/request"
    className="inline-block mt-10 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition"
  >
    Request This Service
  </a>
</section>

<section
  id="mobile-app-development"
  className="py-20 border-t"
>
  <h2 className="text-4xl font-bold">
    Mobile App Development
  </h2>

  <h3 className="text-2xl text-blue-600 mt-4">
    Mobile Experiences That Keep Customers Connected
  </h3>

  <p className="mt-6 text-lg leading-8 text-gray-600">
    We develop intuitive Android and iOS applications that improve customer
    engagement, streamline operations and extend your business beyond the web.
  </p>

  <ul className="mt-8 space-y-3 text-lg">
    <li>✔ Android Applications</li>
    <li>✔ iOS Applications</li>
    <li>✔ Cross-platform Apps</li>
    <li>✔ Business Productivity Apps</li>
    <li>✔ E-commerce Apps</li>
    <li>✔ Booking Applications</li>
  </ul>

  <a
    href="/request"
    className="inline-block mt-10 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition"
  >
    Request This Service
  </a>
</section>

<section
  id="business-management-systems"
  className="py-20 border-t"
>
  <h2 className="text-4xl font-bold">
    Business Management Systems
  </h2>

  <h3 className="text-2xl text-blue-600 mt-4">
    Integrated Solutions That Simplify Operations
  </h3>

  <p className="mt-6 text-lg leading-8 text-gray-600">
    Our business systems automate everyday processes, giving you better control,
    improved reporting and real-time visibility across your organisation.
  </p>

  <ul className="mt-8 space-y-3 text-lg">
    <li>✔ OFITS POS</li>
    <li>✔ OFITS HR</li>
    <li>✔ OFITS CRM</li>
    <li>✔ Inventory Management</li>
    <li>✔ Business Analytics</li>
    <li>✔ User Role Management</li>
  </ul>

  <a
    href="/request"
    className="inline-block mt-10 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition"
  >
    Request This Service
  </a>
</section>

<section
  id="cloud-solutions"
  className="py-20 border-t"
>
  <h2 className="text-4xl font-bold">
    Cloud Solutions
  </h2>

  <h3 className="text-2xl text-blue-600 mt-4">
    Secure, Reliable & Scalable Cloud Infrastructure
  </h3>

  <p className="mt-6 text-lg leading-8 text-gray-600">
    We help businesses migrate to the cloud, improve collaboration, strengthen
    security and ensure reliable access to applications and business data from
    anywhere.
  </p>

  <ul className="mt-8 space-y-3 text-lg">
    <li>✔ Cloud Migration</li>
    <li>✔ Cloud Hosting</li>
    <li>✔ Database Management</li>
    <li>✔ Disaster Recovery</li>
    <li>✔ Cloud Security</li>
    <li>✔ Infrastructure Monitoring</li>
  </ul>

  <a
    href="/request"
    className="inline-block mt-10 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition"
  >
    Request This Service
  </a>
</section>

<section
  id="it-consulting"
  className="py-20 border-t"
>
  <h2 className="text-4xl font-bold">
    IT Consulting
  </h2>

  <h3 className="text-2xl text-blue-600 mt-4">
    Strategic Technology Advice for Sustainable Growth
  </h3>

  <p className="mt-6 text-lg leading-8 text-gray-600">
    Our experienced consultants help organisations make informed technology
    decisions, optimise existing systems and implement digital strategies that
    deliver measurable business results.
  </p>

  <ul className="mt-8 space-y-3 text-lg">
    <li>✔ Digital Transformation</li>
    <li>✔ IT Infrastructure Assessment</li>
    <li>✔ Technology Roadmaps</li>
    <li>✔ Cybersecurity Advisory</li>
    <li>✔ Project Management</li>
    <li>✔ Technical Support</li>
  </ul>

  <a
    href="/request"
    className="inline-block mt-10 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition"
  >
    Request This Service
  </a>
</section>


</main>
      <Footer />
    </>
  );
}
