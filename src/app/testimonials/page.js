import Link from "next/link";

export const metadata = {
  title: "Testimonials - FwdGrow",
};

const testimonials = [
  { initials: "RK", name: "Rajesh Kumar", role: "CEO, RetailMax", color: "primary", text: "FwdGrow transformed our retail operations with their innovative POS system. The implementation was smooth, and the ongoing support has been exceptional. Highly recommended!" },
  { initials: "SP", name: "Sunita Patel", role: "Founder, HealthConnect", color: "accent", text: "The healthcare management system they developed for us has streamlined our operations significantly. Patient satisfaction has improved, and our staff loves the intuitive interface." },
  { initials: "AM", name: "Amit Mehta", role: "CTO, FinTech Solutions", color: "green", text: "Outstanding technical expertise and commitment to quality. FwdGrow delivered our fintech platform on time and within budget. Their security implementation is top-notch." },
  { initials: "NK", name: "Neha Kapoor", role: "Marketing Head, FreshBazaar", color: "pink", text: "Their e-commerce solution helped us scale our business exponentially. The platform is robust, user-friendly, and has all the features we needed. Great job, team FwdGrow!" },
  { initials: "DS", name: "Deepak Singh", role: "VP Sales, CloudNine", color: "purple", text: "Professional, responsive, and highly skilled. FwdGrow developed a custom CRM that perfectly fits our sales process. Our team productivity has increased by 40%." },
  { initials: "AR", name: "Anjali Reddy", role: "HR Director, InnoTech", color: "cyan", text: "Excellent communication throughout the project. They understood our requirements perfectly and delivered an HR management system that has simplified our entire workflow." },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Banner */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Client Testimonials</h1>
            <div className="flex items-center justify-center space-x-2 text-white/90">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <i className="fas fa-chevron-right text-sm" />
              <span>Testimonials</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
              <div className="absolute top-8 left-8 text-primary-200">
                <i className="fas fa-quote-left text-6xl" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={`fas fa-star text-yellow-400${i > 0 ? " ml-1" : ""}`} />
                  ))}
                </div>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                  &ldquo;Working with FwdGrow has been an absolute game-changer for our business. Their team delivered a comprehensive enterprise solution that exceeded our expectations in every way. The level of professionalism, technical expertise, and dedication they brought to our project was outstanding. They didn&apos;t just build software; they became a true technology partner invested in our success.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                    VG
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">Vikram Gupta</div>
                    <div className="text-gray-600">Managing Director, TechVentures</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about their experience working with us.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={`fas fa-star text-yellow-400${i > 0 ? " ml-1" : ""}`} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 bg-gradient-to-br from-${t.color}-500 to-${t.color}-700 rounded-full flex items-center justify-center text-white font-bold mr-3`}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-600">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-accent-500 to-accent-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Growing List of Happy Clients</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help transform your business with our innovative technology solutions.
          </p>
          <Link href="/contact" className="inline-block bg-white text-accent-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition duration-300">
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  );
}
