import Link from "next/link";
import Counter from "@/components/Counter";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        </div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="hero-content">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Innovative{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500">
                  IT Solutions
                </span>{" "}
                for Your Business Growth
              </h1>
              <p className="text-lg text-primary-200 mb-8 max-w-xl leading-relaxed">
                We deliver cutting-edge technology solutions that transform businesses. From web development to cloud infrastructure, we are your trusted technology partner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services" className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full font-semibold text-center transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/30 hover:-translate-y-0.5">
                  Explore Services <i className="fas fa-arrow-right ml-2" />
                </Link>
                <Link href="/contact" className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full font-semibold text-center transition-all duration-300 hover:bg-white/10">
                  Contact Us
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
                <Counter target={150} label="Projects Completed" />
                <Counter target={50} label="Happy Clients" />
                <Counter target={5} label="Years Experience" />
              </div>
            </div>
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-primary-600/40 to-accent-500/40 rounded-3xl backdrop-blur-sm border border-white/10 flex items-center justify-center rotate-6 hover:rotate-0 transition-transform duration-700">
                  <div className="w-72 h-72 bg-gradient-to-br from-primary-700/60 to-accent-600/30 rounded-2xl -rotate-6 hover:rotate-0 transition-transform duration-700 flex items-center justify-center">
                    <div className="text-center">
                      <i className="fas fa-rocket text-6xl text-accent-400 mb-4" />
                      <p className="text-white font-bold text-2xl">FwdGrow</p>
                      <p className="text-primary-200 text-sm">IT SOLUTION</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-accent-500/20 backdrop-blur-sm rounded-2xl border border-accent-500/30 flex items-center justify-center floating-animation">
                  <i className="fas fa-code text-accent-400 text-xl" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary-500/20 backdrop-blur-sm rounded-2xl border border-primary-400/30 flex items-center justify-center floating-animation" style={{ animationDelay: "1s" }}>
                  <i className="fas fa-cloud text-primary-300 text-xl" />
                </div>
                <div className="absolute top-1/2 -right-10 w-14 h-14 bg-green-500/20 backdrop-blur-sm rounded-2xl border border-green-400/30 flex items-center justify-center floating-animation" style={{ animationDelay: "2s" }}>
                  <i className="fas fa-shield-halved text-green-400 text-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center bg-primary-50 rounded-full px-4 py-2 mb-4">
              <span className="text-primary-600 text-sm font-semibold">What We Do</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">Services</span>
            </h2>
            <p className="text-gray-600 text-lg">End-to-end IT solutions tailored to your business needs.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "fas fa-headset", title: "Support & Consultancy", desc: "Expert IT consulting and 24/7 support to keep your operations running smoothly.", color: "primary" },
              { icon: "fas fa-graduation-cap", title: "Training & Research", desc: "Upskill your team with industry-leading training programs and R&D services.", color: "accent" },
              { icon: "fas fa-pen-ruler", title: "Product Design & Dev", desc: "From concept to deployment - full-cycle product development with modern tech.", color: "green" },
              { icon: "fas fa-bullhorn", title: "Digital Marketing", desc: "Data-driven strategies to boost your online presence and grow your brand.", color: "pink" },
              { icon: "fas fa-building", title: "Enterprise Management", desc: "Streamline operations with custom ERP, CRM, and enterprise solutions.", color: "purple" },
            ].map((s) => (
              <Link key={s.title} href="/services" className={`group bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-${s.color}-200 hover:-translate-y-2`}>
                <div className={`w-14 h-14 bg-gradient-to-br from-${s.color}-500 to-${s.color}-700 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <i className={`${s.icon} text-white text-xl`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
            <div className="group bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-cyan-200 hover:-translate-y-2 flex flex-col items-center justify-center text-center">
              <Link href="/services" className="text-primary-600 hover:text-primary-700 font-bold text-lg transition-colors">
                View All Services <i className="fas fa-arrow-right ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500">FwdGrow</span>
            </h2>
            <p className="text-primary-200 text-lg">We combine technical expertise with a client-first approach.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "fas fa-lightbulb", title: "Innovation First", desc: "Latest technologies for future-proof solutions." },
              { icon: "fas fa-clock", title: "On-Time Delivery", desc: "Projects on schedule without compromising quality." },
              { icon: "fas fa-headset", title: "24/7 Support", desc: "Round-the-clock technical support." },
              { icon: "fas fa-hand-holding-dollar", title: "Best Value", desc: "Competitive pricing with premium quality." },
            ].map((item) => (
              <div key={item.title} className="text-center group">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-500/20 transition-all border border-white/10">
                  <i className={`${item.icon} text-accent-400 text-3xl`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-primary-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-accent-500 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how FwdGrow can help you achieve your technology goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-accent-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              Start a Project <i className="fas fa-arrow-right ml-2" />
            </Link>
            <a href="tel:+918618109835" className="border-2 border-white text-white hover:bg-white hover:text-accent-600 px-8 py-4 rounded-full font-semibold transition-all duration-300">
              <i className="fas fa-phone mr-2" /> +91 8618109835
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
