import Link from "next/link";

export const metadata = {
  title: "Portfolio - FwdGrow",
};

const projects = [
  {
    title: "Enterprise E-Commerce Platform",
    category: "E-Commerce",
    desc: "A comprehensive multi-vendor e-commerce platform with advanced features including real-time inventory management, AI-powered product recommendations, integrated payment gateway, and analytics dashboard. Built to handle millions of transactions with 99.9% uptime.",
    techs: [
      { name: "React", color: "blue" },
      { name: "Node.js", color: "green" },
      { name: "PostgreSQL", color: "indigo" },
      { name: "AWS", color: "orange" },
      { name: "Stripe", color: "purple" },
    ],
    icon: "fas fa-shopping-cart",
    gradient: "from-primary-600 to-primary-800",
    badgeColor: "bg-primary-100 text-primary-700",
    year: "2024",
    duration: "6 months",
    team: "8-member team",
    live: true,
    full: true,
  },
  {
    title: "Hospital Management System",
    category: "Healthcare",
    desc: "Complete hospital management solution with patient records, appointment scheduling, billing, and pharmacy management.",
    techs: [
      { name: "Java", color: "red" },
      { name: "Spring Boot", color: "green" },
      { name: "Angular", color: "red" },
      { name: "MySQL", color: "blue" },
    ],
    icon: "fas fa-hospital",
    gradient: "from-accent-500 to-accent-700",
    badgeColor: "bg-accent-100 text-accent-700",
    year: "2024",
    duration: "8 months",
  },
  {
    title: "E-Learning Platform",
    category: "Education",
    desc: "Interactive online learning platform with live classes, video courses, assessments, and real-time collaboration features.",
    techs: [
      { name: "Next.js", color: "gray" },
      { name: "Python", color: "blue" },
      { name: "MongoDB", color: "green" },
      { name: "WebRTC", color: "red" },
    ],
    icon: "fas fa-graduation-cap",
    gradient: "from-green-500 to-green-700",
    badgeColor: "bg-green-100 text-green-700",
    year: "2023",
    duration: "5 months",
  },
  {
    title: "Banking Analytics Dashboard",
    category: "Finance",
    desc: "Real-time banking analytics and reporting dashboard with advanced data visualization and predictive analytics capabilities.",
    techs: [
      { name: "React", color: "blue" },
      { name: "Java", color: "red" },
      { name: "Kafka", color: "purple" },
      { name: "Redis", color: "red" },
    ],
    icon: "fas fa-building-columns",
    gradient: "from-purple-500 to-purple-700",
    badgeColor: "bg-purple-100 text-purple-700",
    year: "2023",
    duration: "7 months",
  },
  {
    title: "Fleet Management App",
    category: "Logistics",
    desc: "Comprehensive fleet management mobile application with GPS tracking, route optimization, and driver management features.",
    techs: [
      { name: "Flutter", color: "blue" },
      { name: "Node.js", color: "green" },
      { name: "Firebase", color: "yellow" },
      { name: "Google Maps", color: "red" },
    ],
    icon: "fas fa-truck-fast",
    gradient: "from-red-500 to-red-700",
    badgeColor: "bg-red-100 text-red-700",
    year: "2024",
    duration: "4 months",
  },
  {
    title: "Multi-Vendor Food Delivery Platform",
    category: "Food & Delivery",
    desc: "Advanced food delivery platform connecting customers with multiple restaurants. Features include real-time order tracking, smart matching algorithm, integrated payment processing, and comprehensive admin dashboard for managing vendors and deliveries.",
    techs: [
      { name: "React Native", color: "blue" },
      { name: "Python", color: "blue" },
      { name: "PostgreSQL", color: "indigo" },
      { name: "Redis", color: "red" },
      { name: "Razorpay", color: "blue" },
    ],
    icon: "fas fa-utensils",
    gradient: "from-cyan-500 to-cyan-700",
    badgeColor: "bg-cyan-100 text-cyan-700",
    year: "2024",
    duration: "5 months",
    team: "6-member team",
    full: true,
    reversed: true,
  },
];

function FullProject({ p }) {
  const content = (
    <div className="p-12">
      <div className="flex items-center gap-3 mb-4">
        <span className={`${p.badgeColor} px-3 py-1 rounded-full text-sm font-semibold`}>{p.category}</span>
        {p.live && (
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            <i className="fas fa-circle text-green-500 text-xs" /> Live
          </span>
        )}
      </div>
      <h3 className="text-3xl font-bold text-gray-900 mb-4">{p.title}</h3>
      <p className="text-gray-600 mb-6">{p.desc}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {p.techs.map((t) => (
          <span key={t.name} className={`bg-${t.color}-50 text-${t.color}-700 px-3 py-1 rounded-lg text-sm`}>{t.name}</span>
        ))}
      </div>
      <div className="flex items-center gap-6 text-sm text-gray-500">
        <span><i className="far fa-calendar mr-2" />{p.year}</span>
        <span><i className="far fa-clock mr-2" />{p.duration}</span>
        {p.team && <span><i className="far fa-user mr-2" />{p.team}</span>}
      </div>
    </div>
  );

  const iconSide = (
    <div className={`bg-gradient-to-br ${p.gradient} p-16 flex items-center justify-center`}>
      <div className="bg-white/15 rounded-full p-12 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
        <i className={`${p.icon} text-white text-8xl`} />
      </div>
    </div>
  );

  return (
    <div className="mb-8 group">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
        <div className="grid md:grid-cols-2 gap-0">
          {p.reversed ? (
            <>
              <div className="order-2 md:order-1">{content}</div>
              <div className="order-1 md:order-2">{iconSide}</div>
            </>
          ) : (
            <>
              {iconSide}
              {content}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function GridProject({ p }) {
  return (
    <div className="group">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
        <div className={`bg-gradient-to-br ${p.gradient} p-12 flex items-center justify-center`}>
          <div className="bg-white/15 rounded-full p-8 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
            <i className={`${p.icon} text-white text-7xl`} />
          </div>
        </div>
        <div className="p-8">
          <div className="mb-3">
            <span className={`${p.badgeColor} px-3 py-1 rounded-full text-sm font-semibold`}>{p.category}</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{p.title}</h3>
          <p className="text-gray-600 mb-4">{p.desc}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {p.techs.map((t) => (
              <span key={t.name} className={`bg-${t.color}-50 text-${t.color}-700 px-2 py-1 rounded-lg text-xs`}>{t.name}</span>
            ))}
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span><i className="far fa-calendar mr-1" />{p.year}</span>
            <span><i className="far fa-clock mr-1" />{p.duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const fullProjects = projects.filter((p) => p.full);
  const gridProjects = projects.filter((p) => !p.full);

  return (
    <>
      {/* Banner */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-accent-400">Portfolio</span>
            </h1>
            <div className="flex items-center justify-center space-x-2 text-primary-100">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <i className="fas fa-chevron-right text-xs" />
              <span className="text-white">Portfolio</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">Featured Work</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-lg text-gray-600">
              Explore our portfolio of successful projects delivered to clients across various industries.
            </p>
          </div>

          <FullProject p={fullProjects[0]} />

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {gridProjects.map((p) => (
              <GridProject key={p.title} p={p} />
            ))}
          </div>

          {fullProjects[1] && <FullProject p={fullProjects[1]} />}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Have a Project in Mind?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Let&apos;s discuss how we can bring your vision to life with our expertise and innovative solutions.
            </p>
            <Link href="/contact" className="inline-block bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              Start Your Project <i className="fas fa-arrow-right ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
