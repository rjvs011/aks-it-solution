import Link from "next/link";

export const metadata = {
  title: "About Us - AKS IT SOLUTION",
};

export default function AboutPage() {
  return (
    <>
      {/* PAGE BANNER */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500">Us</span>
          </h1>
          <div className="flex items-center justify-center space-x-3 text-primary-200">
            <Link href="/" className="hover:text-accent-400 transition-colors">Home</Link>
            <i className="fas fa-chevron-right text-xs" />
            <span className="text-accent-400">About Us</span>
          </div>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-primary-600 to-accent-500 rounded-3xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: "50+", label: "Team Members" },
                  { num: "25+", label: "Awards Won" },
                  { num: "10+", label: "Countries Served" },
                  { num: "99%", label: "Client Satisfaction" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                    <div className="text-4xl font-bold mb-2">{s.num}</div>
                    <div className="text-primary-100 text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="inline-flex items-center bg-primary-50 rounded-full px-4 py-2 mb-4">
                <span className="text-primary-600 text-sm font-semibold">Who We Are</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                A Leading <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">IT Solutions</span> Company
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                AKS IT Solution is a premier technology partner dedicated to delivering innovative IT solutions that drive business growth. Since our founding in 2020, we have been at the forefront of digital transformation, helping businesses navigate the complex landscape of modern technology.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our team of experienced professionals combines technical expertise with industry knowledge to deliver solutions that not only meet but exceed our clients&apos; expectations. We pride ourselves on our commitment to quality, innovation, and customer satisfaction.
              </p>
              <div className="space-y-3 mb-8">
                {["Expert Development Team", "24/7 Customer Support", "Agile Methodology", "Cost-Effective Solutions"].map((f) => (
                  <div key={f} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-check text-green-600 text-xs" />
                    </div>
                    <span className="text-gray-700 font-medium">{f}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="inline-flex items-center bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/30">
                Get In Touch <i className="fas fa-arrow-right ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">Principles</span>
            </h2>
            <p className="text-gray-600 text-lg">What drives us to deliver excellence every day.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "fas fa-bullseye", title: "Our Mission", desc: "To empower businesses through innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.", color: "primary" },
              { icon: "fas fa-eye", title: "Our Vision", desc: "To be the leading IT solutions provider globally, recognized for innovation, excellence, and the transformative impact we create for our clients.", color: "accent" },
              { icon: "fas fa-heart", title: "Our Values", desc: "Integrity, innovation, excellence, and customer success are at the heart of everything we do. We build lasting relationships through trust and quality.", color: "green" },
            ].map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-br from-${p.color}-500 to-${p.color}-700 rounded-2xl flex items-center justify-center mb-6`}>
                  <i className={`${p.icon} text-white text-2xl`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center bg-primary-50 rounded-full px-4 py-2 mb-4">
              <span className="text-primary-600 text-sm font-semibold">Our Team</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">Leadership</span>
            </h2>
            <p className="text-gray-600 text-lg">Experienced professionals driving innovation and excellence.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { initials: "AK", name: "Amit Kumar", role: "CEO & Founder", desc: "Visionary leader with 15+ years of experience in technology and business strategy.", color: "primary", roleColor: "text-primary-600" },
              { initials: "SP", name: "Sneha Patel", role: "CTO", desc: "Technical expert specializing in cloud architecture and enterprise solutions.", color: "accent", roleColor: "text-accent-600" },
              { initials: "RS", name: "Ravi Sharma", role: "Head of Development", desc: "Full-stack developer with expertise in modern frameworks and agile practices.", color: "green", roleColor: "text-green-600" },
              { initials: "PM", name: "Priya Mehta", role: "Head of Marketing", desc: "Digital marketing strategist with proven track record in brand growth.", color: "purple", roleColor: "text-purple-600" },
            ].map((m) => (
              <div key={m.name} className="text-center group">
                <div className="relative mb-6">
                  <div className={`w-40 h-40 bg-gradient-to-br from-${m.color}-500 to-${m.color}-700 rounded-full flex items-center justify-center mx-auto group-hover:scale-105 transition-transform duration-300`}>
                    <span className="text-white text-5xl font-bold">{m.initials}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{m.name}</h3>
                <p className={`${m.roleColor} font-medium mb-3`}>{m.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
