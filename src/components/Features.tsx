import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Check, Leaf, ShoppingBag, UtensilsCrossed, type LucideIcon } from 'lucide-react'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'
import Skills from './Skills'

type Project = {
  id: string
  title: string
  icon?: string
  glyph?: LucideIcon
  items: string[]
  tech: string
}

const projects: Project[] = [
  {
    id: '01',
    title: 'AI-Powered Clinic Management',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
    items: [
      'React.js frontend for appointments, patients & billing',
      'FastAPI + Python backend with REST APIs',
      'MySQL/SQLite database integration',
      'AI-assisted prescription & patient summaries',
    ],
    tech: 'React · FastAPI · MySQL · SQLAlchemy',
  },
  {
    id: '02',
    title: 'Library Management System',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
    items: [
      'Next.js structured interactive interface',
      'MongoDB for library data storage',
      'JWT authentication & protected routes',
      'Full CRUD operations for records',
    ],
    tech: 'Next.js · MongoDB · JWT',
  },
  {
    id: '03',
    title: 'Minutes of Meeting (MOM)',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
    items: [
      'ASP.NET MVC with structured modules',
      'SQL Server + stored procedures',
      'CRUD for departments, meetings & members',
      'Login, validation, dashboard & audit logs',
    ],
    tech: 'ASP.NET MVC · C# · SQL Server',
  },
  {
    id: '04',
    title: 'E-Commerce Store',
    glyph: ShoppingBag,
    items: [
      'Product grid with search and category filters',
      'Product pages with price, details, and images',
      'Cart with quantity updates and a checkout summary',
      'Responsive layout for phone and desktop',
    ],
    tech: 'React · JavaScript · CSS',
  },
  {
    id: '05',
    title: 'Environment Consultancy',
    glyph: Leaf,
    items: [
      'Pages for services, case studies, and about',
      'Highlights for audits and field projects',
      'Contact form for consultation requests',
      'Readable layout on any screen size',
    ],
    tech: 'React · HTML · CSS',
  },
  {
    id: '06',
    title: 'Cafe Website',
    glyph: UtensilsCrossed,
    items: [
      'Home, menu, and location pages',
      'Table reservation form',
      'Gallery and opening hours',
      'Simple navigation that works on mobile',
    ],
    tech: 'HTML · CSS · JavaScript',
  },
]

function FeatureCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const Glyph = project.glyph

  return (
    <motion.div
      ref={ref}
      className="bg-[#212121] rounded-2xl p-5 sm:p-6 flex flex-col h-full min-h-[320px] lg:min-h-[480px]"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="flex items-start justify-between mb-4">
        {Glyph ? (
          <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-black/40 flex items-center justify-center">
            <Glyph className="w-5 h-5 text-primary" />
          </span>
        ) : (
          <img
            src={project.icon}
            alt=""
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover"
          />
        )}
        <span className="text-primary/60 text-xs font-medium">{project.id}</span>
      </div>

      <h3 className="text-lg sm:text-xl font-medium mb-1" style={{ color: '#E1E0CC' }}>
        {project.title}
      </h3>
      <p className="text-gray-500 text-xs mb-5">{project.tech}</p>

      <ul className="space-y-3 flex-1">
        {project.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span className="text-gray-400 text-xs sm:text-sm leading-snug">{item}</span>
          </li>
        ))}
      </ul>

      <a
        href="#projects"
        className="mt-6 inline-flex items-center gap-1.5 text-primary text-sm hover:gap-2.5 transition-all duration-300 group"
      >
        Learn more
        <ArrowRight className="w-3.5 h-3.5 -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>
    </motion.div>
  )
}

export default function Features() {
  return (
    <>
    <section id="projects" className="min-h-screen bg-black relative py-16 md:py-24 px-4 md:px-6">
      {/* Noise overlay */}
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight">
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: 'Real projects, built end to end.',
                  className: '',
                },
              ]}
            />
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-gray-500 mt-2">
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: 'Interfaces, APIs, and the data behind them.',
                  className: 'text-gray-500',
                },
              ]}
              delay={0.3}
            />
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-2 md:gap-1">
          {projects.map((project, i) => (
            <FeatureCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>

    <section id="experience" className="bg-black relative py-16 md:py-24 px-4 md:px-6">
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <p className="text-primary text-[10px] sm:text-xs tracking-widest uppercase mb-4">
            Experience
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight"
            style={{ color: '#E1E0CC' }}
          >
            Full Stack Developer Intern
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-500 mt-3">Evenly Tech Solutions</p>
        </div>

        <ul className="max-w-2xl mx-auto space-y-4 text-left text-base sm:text-lg leading-relaxed">
          {[
            'Built responsive interfaces with React.js',
            'Developed backend APIs with FastAPI & Python',
            'Frontend-backend integration, debugging & workflows',
            'Built an AI-powered clinic app for appointments, patients, and billing',
            'Connected the React frontend to FastAPI, with MySQL/SQLite storage and AI-assisted prescription summaries',
          ].map((item) => (
            <li key={item} className="flex gap-3" style={{ color: '#E1E0CC' }}>
              <span className="text-primary" aria-hidden="true">
                •
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <Skills />

    <section id="contact" className="bg-black relative py-16 md:py-24 px-4 md:px-6">
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10 text-center border-t border-white/10 pt-16">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4" style={{ color: '#E1E0CC' }}>
          Let&apos;s build something together
        </h3>
        <p className="text-gray-400 text-sm sm:text-base mb-8 max-w-md mx-auto">
          Open to full-stack opportunities, internships, and collaborative projects.
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <a
            href="mailto:hinsuisha24114@gmail.com"
            className="group inline-flex items-center gap-2 hover:gap-3 transition-all duration-300 bg-primary rounded-full pl-5 pr-1.5 py-1.5"
          >
            <span className="text-black font-medium text-sm sm:text-base">Email me</span>
            <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <ArrowRight className="w-4 h-4 text-primary" />
            </span>
          </a>
          <a
            href="tel:+917874898093"
            className="inline-flex items-center gap-2 border border-primary/40 text-primary rounded-full px-6 py-2.5 text-sm sm:text-base hover:bg-primary/10 transition-colors"
          >
            +91 78748 98093
          </a>
        </div>
        <p className="mt-10 text-gray-600 text-xs">
          Isha Hinsu · Rajkot, Gujarat · English · Hindi · Gujarati
        </p>
      </div>
    </section>
    </>
  )
}
