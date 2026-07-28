import Image from "next/image";
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

      {/* Left */}

      <div className="text-center lg:text-left">

        <span className="inline-block rounded-full bg-blue-600/20 px-4 py-2 text-xs sm:text-sm 
          font-semibold text-blue-300">
          Innovative Software • Websites • Mobile Apps
        </span>

        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">

          Transforming Businesses Through
          <span className="text-blue-500">
            {" "}Innovative Digital Solutions
          </span>

        </h1>

        <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 leading-7 sm:leading-8">

          OFITS Global Concepts Ltd develops custom software,
          business applications, websites and intelligent digital
          solutions that help organisations operate smarter and grow faster.

        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

          <Link href="/request">
            <button className="w-full sm:w-auto border bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl 
            font-semibold transition">
              How May We Serve You?
            </button>
          </Link>

          <Link href="/solutions">
            <button className="w-full sm:w-auto border border-white px-8 py-4 rounded-xl hover:bg-white 
            hover:text-slate-900 transition">
              Explore Our Solutions
            </button>
          </Link>

        </div>

      </div>

      {/* Right */}

      <div className="flex justify-center">

        <Image
          src="/images/ofits-pos-dashboard2.jpg"
          alt="OFITS POS Dashboard"
          width={1200}
          height={700}
          className="w-full h-auto max-w-2xl rounded-3xl shadow-2xl"
        />

      </div>

    </div>

    </div>
    </section>
  );
}
 