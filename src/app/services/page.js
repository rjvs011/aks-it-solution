"use client";

import { useState } from "react";
import Link from "next/link";

const tabs = [
  {
    id: "support",
    label: "Support and Consultancy",
    icon: "fas fa-headset",
    heroIcon: "fas fa-handshake",
    color: "primary",
    subtitle: "Expert guidance for your IT infrastructure",
    desc: "Our experienced consultants provide strategic IT planning, infrastructure optimization, and round-the-clock technical support to ensure your business operations run smoothly. We help you make informed technology decisions that drive growth and efficiency.",
    features: [
      { icon: "fas fa-lightbulb", title: "IT Strategy & Advisory", desc: "Strategic technology planning aligned with business goals" },
      { icon: "fas fa-server", title: "Infrastructure Management", desc: "Complete IT infrastructure monitoring and optimization" },
      { icon: "fas fa-clock", title: "24/7 Technical Support", desc: "Round-the-clock assistance for critical issues" },
    ],
  },
  {
    id: "training",
    label: "Training and Research",
    icon: "fas fa-graduation-cap",
    heroIcon: "fas fa-chalkboard-teacher",
    color: "accent",
    subtitle: "Empowering teams with cutting-edge skills",
    desc: "Invest in your team's growth with our comprehensive training programs and research services. We offer hands-on technical training, industry-recognized certification programs, and dedicated R&D support to keep your organization at the forefront of technology innovation.",
    features: [
      { icon: "fas fa-laptop-code", title: "Technical Training", desc: "Hands-on workshops in latest technologies and frameworks" },
      { icon: "fas fa-flask", title: "R&D Services", desc: "Innovation-driven research and development support" },
      { icon: "fas fa-certificate", title: "Certification Programs", desc: "Industry-recognized certifications for career advancement" },
    ],
  },
  {
    id: "product",
    label: "Product Design and Development",
    icon: "fas fa-pen-ruler",
    heroIcon: "fas fa-code",
    color: "green",
    subtitle: "Building exceptional digital experiences",
    desc: "Transform your ideas into reality with our full-stack development services. From intuitive UI/UX design to robust web and mobile applications, we deliver scalable, high-performance solutions that engage users and drive business results.",
    features: [
      { icon: "fas fa-paint-brush", title: "UI/UX Design", desc: "User-centered design that delights and engages" },
      { icon: "fas fa-globe", title: "Web Application Dev", desc: "Scalable web applications with modern frameworks" },
      { icon: "fas fa-mobile-alt", title: "Mobile App Dev", desc: "Native and cross-platform mobile solutions" },
    ],
  },
  {
    id: "marketing",
    label: "Digital Marketing",
    icon: "fas fa-bullhorn",
    heroIcon: "fas fa-chart-pie",
    color: "pink",
    subtitle: "Amplify your brand's digital presence",
    desc: "Reach your target audience and drive meaningful engagement with our data-driven digital marketing strategies. We combine SEO, social media marketing, and compelling content to boost your online visibility and generate qualified leads.",
    features: [
      { icon: "fas fa-search", title: "SEO & SEM", desc: "Optimize visibility and drive qualified traffic" },
      { icon: "fas fa-share-alt", title: "Social Media Marketing", desc: "Engage audiences across all major platforms" },
      { icon: "fas fa-pen-fancy", title: "Content Strategy", desc: "Compelling content that converts and retains" },
    ],
  },
  {
    id: "enterprise",
    label: "Enterprise Management",
    icon: "fas fa-building",
    heroIcon: "fas fa-sitemap",
    color: "purple",
    subtitle: "Streamline operations with intelligent systems",
    desc: "Optimize your business processes with our enterprise management solutions. We implement and customize ERP systems, CRM platforms, and business intelligence tools that provide real-time insights and drive operational excellence across your organization.",
    features: [
      { icon: "fas fa-cogs", title: "ERP Solutions", desc: "Integrated enterprise resource planning systems" },
      { icon: "fas fa-users", title: "CRM Systems", desc: "Customer relationship management solutions" },
      { icon: "fas fa-chart-line", title: "Business Intelligence", desc: "Data-driven insights for strategic decisions" },
    ],
  },
];

const techCategories = [
  {
    title: "Frontend & Frameworks",
    color: "text-primary-600",
    items: [
      { icon: "fab fa-react", color: "text-blue-500", name: "React" },
      { icon: "fas fa-cube", color: "text-gray-900", name: "Next.js" },
      { icon: "fas fa-code", color: "text-blue-600", name: "TypeScript" },
      { icon: "fab fa-js", color: "text-yellow-500", name: "JavaScript" },
      { icon: "fas fa-wind", color: "text-cyan-500", name: "Tailwind CSS" },
      { icon: "fab fa-angular", color: "text-red-600", name: "Angular" },
    ],
  },
  {
    title: "Backend & Databases",
    color: "text-green-600",
    items: [
      { icon: "fab fa-node-js", color: "text-green-600", name: "Node.js" },
      { icon: "fab fa-python", color: "text-blue-500", name: "Python" },
      { icon: "fab fa-java", color: "text-red-600", name: "Java" },
      { icon: "fas fa-database", color: "text-blue-700", name: "PostgreSQL" },
      { icon: "fas fa-leaf", color: "text-green-600", name: "MongoDB" },
      { icon: "fas fa-database", color: "text-orange-500", name: "MySQL" },
    ],
  },
  {
    title: "Cloud Platforms",
    color: "text-accent-600",
    items: [
      { icon: "fab fa-aws", color: "text-orange-500", name: "AWS" },
      { icon: "fab fa-microsoft", color: "text-blue-600", name: "Azure" },
      { icon: "fab fa-google", color: "text-blue-500", name: "Google Cloud" },
      { icon: "fas fa-triangle-exclamation", color: "text-gray-900", name: "Vercel" },
      { icon: "fas fa-bolt", color: "text-green-500", name: "Supabase" },
      { icon: "fab fa-docker", color: "text-blue-600", name: "Docker" },
    ],
  },
  {
    title: "DevOps & CI/CD",
    color: "text-purple-600",
    items: [
      { icon: "fas fa-dharmachakra", color: "text-blue-600", name: "Kubernetes" },
      { icon: "fas fa-fire", color: "text-red-600", name: "Jenkins" },
      { icon: "fab fa-github", color: "text-gray-900", name: "GitHub Actions" },
      { icon: "fab fa-gitlab", color: "text-orange-600", name: "GitLab" },
      { icon: "fas fa-cloud", color: "text-purple-600", name: "Terraform" },
      { icon: "fas fa-cog", color: "text-red-500", name: "Ansible" },
    ],
  },
  {
    title: "Data Science & AI",
    color: "text-red-600",
    items: [
      { icon: "fas fa-brain", color: "text-orange-500", name: "TensorFlow" },
      { icon: "fas fa-fire", color: "text-red-600", name: "PyTorch" },
      { icon: "fas fa-bolt", color: "text-orange-600", name: "Apache Spark" },
      { icon: "fas fa-cubes", color: "text-blue-600", name: "Databricks" },
      { icon: "fas fa-snowflake", color: "text-blue-400", name: "Snowflake" },
      { icon: "fas fa-chart-area", color: "text-blue-700", name: "Pandas" },
    ],
  },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("support");
  const current = tabs.find((t) => t.id === activeTab);

  return (
    <>
      {/* Banner */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            Empowering your business with expert Consultancy, Development, Training, and Management solutions.
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <i className="fas fa-chevron-right text-xs" />
            <span className="text-accent-400">Services</span>
          </div>
        </div>
      </section>

      {/* Tabbed Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-6 py-3 rounded-full border-2 font-semibold transition flex items-center gap-2 ${
                  activeTab === t.id
                    ? "active-tab bg-gradient-to-r from-primary-600 to-accent-500 text-white border-transparent shadow-lg"
                    : "border-gray-200 text-gray-600 bg-white"
                }`}
              >
                <i className={t.icon} />
                <span>{t.label}</span>
              </button>
            ))}
          </div>

          {current && (
            <div>
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <div className={`w-16 h-16 bg-${current.color}-100 rounded-full flex items-center justify-center mb-6`}>
                    <i className={`${current.heroIcon} text-3xl text-${current.color}-600`} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{current.label}</h2>
                  <p className={`text-lg text-${current.color}-600 font-semibold mb-4`}>{current.subtitle}</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">{current.desc}</p>
                  <a
                    href={`https://wa.me/918618109835?text=Hi, I'm interested in ${current.label} services`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition shadow-lg"
                  >
                    <i className="fab fa-whatsapp text-xl" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
                <div className={`bg-gradient-to-br from-${current.color}-500 to-${current.color}-700 rounded-2xl p-12 flex items-center justify-center relative overflow-hidden`}>
                  <i className={`${current.heroIcon} text-white text-9xl opacity-20`} />
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {current.features.map((f) => (
                  <div key={f.title} className={`bg-${current.color}-50 rounded-xl p-6 hover:shadow-lg transition`}>
                    <div className={`w-12 h-12 bg-${current.color}-600 rounded-lg flex items-center justify-center mb-4`}>
                      <i className={`${f.icon} text-white text-xl`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
                    <p className="text-gray-700">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies We Master</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise spans across modern frameworks, cloud platforms, and cutting-edge tools
            </p>
          </div>
          <div className="space-y-12">
            {techCategories.map((cat) => (
              <div key={cat.title}>
                <h3 className={`text-2xl font-bold ${cat.color} mb-6`}>{cat.title}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {cat.items.map((item) => (
                    <div key={item.name} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
                      <i className={`${item.icon} text-4xl ${item.color} mb-3`} />
                      <p className="font-semibold text-gray-900">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
