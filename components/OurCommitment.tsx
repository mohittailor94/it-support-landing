import Link from "next/link";

export default function OurCommitment() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-[#f4f7fa]">
      <div className="max-w-4xl mx-auto text-center" style={{ opacity: 1 }}>
        <h2
          className="text-3xl sm:text-4xl font-bold mb-8"
          style={{ opacity: 1, transform: "none" }}
        >
          Our Commitment
        </h2>
        <p
          className="text-lg text-gray-700 mb-6 leading-relaxed"
          style={{ opacity: 1, transform: "none" }}
        >
          At{" "}
          <Link
            href="/"
            className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300"
          >
            {" "}
            ITSupport.net.in
          </Link>
          , we are dedicated to delivering unmatched IT support and customer
          service. Whether you need emergency troubleshooting, preventive
          maintenance, or strategic IT consultation, our team is ready to ensure
          your technology infrastructure operates flawlessly.
        </p>
        <p
          className="text-lg text-gray-700 mb-8 leading-relaxed"
          style={{ opacity: 1, transform: "none" }}
        >
          Our mission is to empower businesses to focus on growth while we take
          care of their IT needs with efficiency, reliability, and expertise.
        </p>
        <div tabIndex={0} style={{ opacity: 1, transform: "none" }}>
          <Link
            className="inline-block bg-gradient-to-r from-[#61CE70] to-blue-500 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
            href="/pricing"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </section>
  );
}
