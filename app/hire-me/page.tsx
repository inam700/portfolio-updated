import Link from "next/link";
import PricingSection from "../Pricing";

const ContactPage = () => {
  return (
    <div className="my-10">
      <p className="mt-5 md:text-lg lg:text-3xl">Project Pricing</p>{" "}
      <p className="text-sm text-porcelain/80 mb-10 mt-3">
        Transparent and flexible pricing tailored to your project's needs.
        Choose a package or reach out for a custom quote.
      </p>
      <PricingSection />
      <div
        className="mt-16 border text-center xl:text-left border-darkGray p-5 lg:p-10 rounded-2xl transition-all duration-300 ease-in-out 
              bg-gradient-to-tl from-[#1e1d1d] via-[#2b2b2b] to-[#3a3a3a] 
              hover:bg-gradient-to-tr hover:from-[#242424] hover:via-[#333333] hover:to-[#444444]"
      >
        <h3 className="text-xl lg:text-3xl mb-4">
          Looking for something else?
        </h3>
        <p className="text-sm lg:text-base text-porcelain/80 mb-6">
          Have a unique idea, larger scope, or ongoing collaboration in mind?
          I'm happy to discuss a tailored solution that fits your vision and
          budget.
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-2 text-sm bg-orange text-darkGray font-semibold hover:bg-orangeHover transition-colors duration-300"
        >
          Request a Custom Quote
        </Link>
      </div>
    </div>
  );
};

export default ContactPage;
