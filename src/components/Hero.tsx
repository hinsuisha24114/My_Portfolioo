import { motion } from 'framer-motion'
import WordsPullUp from './WordsPullUp'

const navItems = ['About', 'Experience', 'Projects', 'Skills', 'Contact']

export default function Hero() {
  return (
    <section className="relative p-4 md:h-screen md:p-6">
      <div className="relative flex w-full flex-col overflow-hidden rounded-2xl md:block md:h-full md:rounded-[2rem]">
        <div className="relative w-full pt-11 md:absolute md:inset-0 md:pt-0">
          {/* Background video: full frame on phones, cinematic crop on desktop */}
          <video
            className="aspect-video w-full bg-black object-contain object-center md:absolute md:inset-0 md:aspect-auto md:h-full md:object-cover md:object-[64%_center]"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Noise overlay */}
          <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />

          {/* Gradient overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        </div>

        {/* Navbar */}
        <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8">
            <ul className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-[10px] sm:text-xs md:text-sm transition-colors duration-200"
                    style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#E1E0CC')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 px-5 pb-8 pt-5 md:absolute md:bottom-[16vh] md:left-0 md:right-0 md:p-10 md:px-10 lg:p-14">
          <div className="max-w-2xl">
            <h1
              className="font-medium leading-[0.85] tracking-[-0.07em] relative"
              style={{ color: '#E1E0CC' }}
            >
              <span className="block text-[14vw] sm:text-[12vw] md:text-[12.5vw] lg:text-[11vw] xl:text-[10.5vw]">
                <WordsPullUp text="ISHA" />
              </span>
              <span className="block text-[14vw] sm:text-[12vw] md:text-[12.5vw] lg:text-[11vw] xl:text-[10.5vw] -mt-1 sm:-mt-2">
                <WordsPullUp text="HINSU" delay={0.16} />
              </span>
            </h1>

            <motion.p
              className="mt-4 md:mt-5 max-w-xl text-xs sm:text-sm md:text-[15px] text-primary/85 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              I am a passionate and aspiring Full-Stack Developer who enjoys building creative,
              interactive, and user-friendly web applications. I have hands-on experience with
              React.js, JavaScript, HTML, CSS, Python, and FastAPI. I enjoy exploring new
              technologies, solving problems, and turning ideas into practical projects. I
              continuously work on improving my development skills and creating engaging digital
              experiences. My goal is to build innovative applications that combine functionality,
              creativity, and great user experience.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
