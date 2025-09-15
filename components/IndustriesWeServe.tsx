import Link from "next/link";

export default function IndustriesWeServe() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto" style={{ opacity: 1 }}>
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
          style={{ opacity: 1, transform: "none" }}
        >
          Industries We Serve
        </h2>
        <p
          className="text-lg text-center text-gray-700 mb-12 max-w-4xl mx-auto"
          style={{ opacity: 1, transform: "none" }}
        >
          Our expertise spans multiple sectors, allowing us to provide
          industry-specific IT solutions. Discover how we can support your
          industry:
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ opacity: 1 }}
        >

          <div
            className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-500 rounded-lg p-6 border-l-4 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
            style={{ opacity: 1, transform: "none" }}
          >
            <Link href="/industries/healthcare">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                Healthcare
              </h3>
              <p className="text-gray-700 group-hover:text-gray-700 transition-colors duration-300">
                Support for medical software, patient management systems, secure
                data handling, and HIPAA-compliant solutions.
              </p>
            </Link>
          </div>
          <div
            className="bg-gradient-to-br from-green-50 to-green-100 border-green-500 rounded-lg p-6 border-l-4 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
            style={{ opacity: 1, transform: "none" }}
          >
            <Link href="/industries/finance-banking">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                Finance &amp; Banking
              </h3>
              <p className="text-gray-700 group-hover:text-gray-700 transition-colors duration-300">
                Secure financial transactions, network monitoring,
                cybersecurity, and compliance support.
              </p>
            </Link>
          </div>
          <div
            className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-500 rounded-lg p-6 border-l-4 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
            style={{ opacity: 1, transform: "none" }}
          >
            <Link href="/industries/retail-ecommerce">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                Retail &amp; E-Commerce
              </h3>
              <p className="text-gray-700 group-hover:text-gray-700 transition-colors duration-300">
                Seamless online operations, payment gateway support, and network
                reliability.
              </p>
            </Link>
          </div>
          <div
            className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-500 rounded-lg p-6 border-l-4 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
            style={{ opacity: 1, transform: "none" }}
          >
            <Link href="/industries/manufacturing">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                Manufacturing
              </h3>
              <p className="text-gray-700 group-hover:text-gray-700 transition-colors duration-300">
                Automation, hardware monitoring, and network reliability for
                factories and production lines.
              </p>
            </Link>
          </div>
          <div
            className="bg-gradient-to-br from-red-50 to-red-100 border-red-500 rounded-lg p-6 border-l-4 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
            style={{ opacity: 1, transform: "none" }}
          >
            <Link href="/industries/education">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                Education
              </h3>
              <p className="text-gray-700 group-hover:text-gray-700 transition-colors duration-300">
                IT support for schools, colleges, and online learning platforms.
              </p>
            </Link>
          </div>
          <div
            className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-500 rounded-lg p-6 border-l-4 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
            style={{ opacity: 1, transform: "none" }}
          >
            <Link href="/industries/professional">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                Professional Services
              </h3>
              <p className="text-gray-700 group-hover:text-gray-700 transition-colors duration-300">
                Technical support for law firms, consulting agencies, and
                corporate offices.
              </p>
            </Link>
          </div>
          <div
            className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-500 rounded-lg p-6 border-l-4 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
            style={{ opacity: 1, transform: "none" }}
          >
            <Link href="/industries/travel-hospitality">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                Travel &amp; Hospitality
              </h3>
              <p className="text-gray-700 group-hover:text-gray-700 transition-colors duration-300">
                System management, booking platform support, and network
                solutions for hotels and travel companies.
              </p>
            </Link>
          </div>
          <div
            className="bg-gradient-to-br from-teal-50 to-teal-100 border-teal-500 rounded-lg p-6 border-l-4 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
            style={{ opacity: 1, transform: "none" }}
          >
            <Link href="/industries/construction">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                Construction
              </h3>
              <p className="text-gray-700 group-hover:text-gray-700 transition-colors duration-300">
                Field support, project management tools, and secure data
                communication.
              </p>
            </Link>
          </div>
          <div
            className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-500 rounded-lg p-6 border-l-4 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
            style={{opacity: 1, transform: 'none'}}
          >
            <Link href="/industries/logistics">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                Logistics
              </h3>
              <p className="text-gray-700 group-hover:text-gray-700 transition-colors duration-300">
                Real-time tracking systems, connectivity, and IT support for
                supply chain management.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
