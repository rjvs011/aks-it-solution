import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <Image src="/images/logo.svg" alt="FwdGrow" width={160} height={48} />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Delivering innovative IT solutions that empower businesses to grow and succeed.
            </p>
            <div className="flex space-x-4">
              {["facebook-f", "twitter", "linkedin-in", "instagram"].map((icon) => (
                <a key={icon} href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                  <i className={`fab fa-${icon} text-gray-400 hover:text-white`} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-400 hover:text-accent-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                "Support & Consultancy",
                "Training & Research",
                "Product Design & Dev",
                "Digital Marketing",
                "Enterprise Management",
              ].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-gray-400 hover:text-accent-400 transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <i className="fas fa-location-dot text-accent-400 mt-1" />
                <span className="text-gray-400 text-sm">
                  NO 167, 37TH Cross 9TH Block, Jaya Nagar, Bengaluru, Karnataka 560035
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-phone text-accent-400" />
                <a href="tel:+918618109835" className="text-gray-400 hover:text-accent-400 text-sm">
                  +91 8618109835
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-envelope text-accent-400" />
                <a href="mailto:support@fwdgrow.com" className="text-gray-400 hover:text-accent-400 text-sm">
                  support@fwdgrow.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">&copy; 2025 FwdGrow. All Rights Reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
