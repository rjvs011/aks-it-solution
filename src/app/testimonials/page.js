import Link from "next/link";
import ReviewForm from "@/components/ReviewForm";

export const metadata = {
  title: "Testimonials - FwdGrow",
};

const testimonials = [
  { initials: "RK", name: "Rajesh Kumar", color: "primary", text: "FwdGrow transformed our retail operations with their innovative POS system. The implementation was smooth, and the ongoing support has been exceptional. Highly recommended!" },
  { initials: "SP", name: "Sunita Patel", color: "accent", text: "The healthcare management system they developed for us has streamlined our operations significantly. Patient satisfaction has improved, and our staff loves the intuitive interface." },
  { initials: "AM", name: "Amit Mehta", color: "green", text: "Outstanding technical expertise and commitment to quality. FwdGrow delivered our fintech platform on time and within budget. Their security implementation is top-notch." },
  { initials: "NK", name: "Neha Kapoor", color: "pink", text: "Their e-commerce solution helped us scale our business exponentially. The platform is robust, user-friendly, and has all the features we needed. Great job, team FwdGrow!" },
  { initials: "DS", name: "Deepak Singh", color: "purple", text: "Professional, responsive, and highly skilled. FwdGrow developed a custom CRM that perfectly fits our sales process. Our team productivity has increased by 40%." },
  { initials: "AR", name: "Anjali Reddy", color: "cyan", text: "Excellent communication throughout the project. They understood our requirements perfectly and delivered an HR management system that has simplified our entire workflow." },
  { initials: "PJ", name: "Priya Joshi", color: "primary", text: "We approached FwdGrow for a complete website overhaul and they exceeded all our expectations. The new design is modern, fast, and our conversion rates have doubled since launch." },
  { initials: "MR", name: "Manish Rao", color: "accent", text: "The mobile app FwdGrow built for us has received amazing feedback from our users. Their attention to detail and focus on user experience truly sets them apart." },
  { initials: "KS", name: "Kavita Sharma", color: "green", text: "FwdGrow delivered a complex inventory management system that handles thousands of SKUs effortlessly. Their technical team is brilliant and always available for support." },
  { initials: "RV", name: "Rahul Verma", color: "pink", text: "From consultation to deployment, FwdGrow made the entire process seamless. Our cloud migration was completed ahead of schedule with zero downtime. Impressive work!" },
  { initials: "SG", name: "Sneha Gupta", color: "purple", text: "The AI-powered analytics dashboard FwdGrow created gives us insights we never had before. It has completely changed how we make business decisions. Truly transformative!" },
  { initials: "AT", name: "Arjun Thakur", color: "cyan", text: "FwdGrow's team is incredibly talented and professional. They built a robust booking platform for us that handles peak traffic without any issues. Highly recommend their services." },
  { initials: "DM", name: "Divya Malhotra", color: "primary", text: "We needed a custom ERP solution and FwdGrow delivered exactly what we envisioned. The system has improved our operational efficiency by over 50%. Excellent partner to work with." },
  { initials: "VS", name: "Varun Saxena", color: "accent", text: "The e-learning platform FwdGrow developed for us supports thousands of concurrent users flawlessly. Their scalable architecture and clean code quality are top-notch." },
  { initials: "PN", name: "Pooja Nair", color: "green", text: "FwdGrow redesigned our entire digital presence and the results speak for themselves. Our online engagement has increased by 300%. They truly understand modern web design." },
  { initials: "HB", name: "Harsh Bhatia", color: "pink", text: "Working with FwdGrow felt like having an in-house tech team. They were responsive, proactive, and always offered creative solutions to our challenges. A pleasure to work with." },
  { initials: "RM", name: "Ritu Mishra", color: "purple", text: "The payment gateway integration FwdGrow handled for us was flawless. Transactions are processed securely and efficiently. Their expertise in fintech is unmatched." },
  { initials: "SK", name: "Sanjay Khanna", color: "cyan", text: "FwdGrow built a real-time tracking system for our logistics company that has reduced delivery times by 25%. Their IoT expertise and backend skills are remarkable." },
  { initials: "AG", name: "Anita Goyal", color: "primary", text: "The customer support chatbot FwdGrow developed handles 70% of our queries automatically. It has reduced our support costs significantly while improving customer satisfaction." },
  { initials: "TB", name: "Tarun Bhatt", color: "accent", text: "FwdGrow migrated our legacy systems to a modern tech stack without any data loss. The new system is faster, more reliable, and much easier to maintain. Outstanding job!" },
  { initials: "MS", name: "Meera Srinivasan", color: "green", text: "Their UI/UX design team created a beautiful and intuitive interface for our SaaS product. User onboarding time dropped by 60% after the redesign. Absolutely brilliant work!" },
  { initials: "VK", name: "Vivek Kulkarni", color: "pink", text: "FwdGrow developed a comprehensive project management tool tailored to our workflow. It has improved team collaboration and we now deliver projects 30% faster." },
  { initials: "NJ", name: "Nisha Jain", color: "purple", text: "The SEO and digital marketing strategy FwdGrow implemented helped us rank on the first page of Google within three months. Our organic traffic has grown exponentially." },
  { initials: "PA", name: "Pranav Agarwal", color: "cyan", text: "FwdGrow's cybersecurity audit identified critical vulnerabilities in our system. They fixed everything promptly and implemented robust security measures. We feel much safer now." },
  { initials: "SS", name: "Shruti Sethi", color: "primary", text: "The warehouse management system FwdGrow built has automated our entire supply chain process. Errors have dropped to near zero and efficiency is at an all-time high." },
  { initials: "KP", name: "Kiran Pandey", color: "accent", text: "FwdGrow delivered a stunning portfolio website that perfectly represents our brand. Their creative team has an incredible eye for design and the site loads blazingly fast." },
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
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={`fas fa-star text-yellow-400${i > 0 ? " ml-1" : ""}`} />
                  ))}
                  <span className="ml-3 text-2xl font-bold text-gray-900">4.9</span>
                  <span className="ml-2 text-gray-500 text-sm">out of 5 — based on 26 reviews</span>
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Review Form & Submitted Reviews */}
      <ReviewForm />

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
