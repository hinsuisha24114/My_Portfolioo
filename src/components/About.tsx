import { useRef } from 'react'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'
import AnimatedLetter from './AnimatedLetter'

const aboutText =
  'Aspiring Full Stack Developer with practical knowledge of front-end and back-end web development technologies, including React.js, JavaScript, Python, FastAPI, MySQL, MongoDB, HTML, and CSS. Interested in developing responsive, user-friendly, and functional web applications that solve real-world problems. Experienced in working on projects involving frontend development, backend APIs, database integration, authentication, CRUD operations, and application workflows. Passionate about learning new technologies and building practical applications that combine user-friendly interfaces with reliable backend functionality.'

export default function About() {
  const textRef = useRef<HTMLParagraphElement>(null)
  const chars = aboutText.split('')

  return (
    <section id="about" className="bg-black py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#101010] rounded-2xl md:rounded-3xl p-8 sm:p-12 md:p-16 text-center">
          {/* Label */}
          <p className="text-primary text-[10px] sm:text-xs mb-6 tracking-widest uppercase">
            Full Stack Developer
          </p>

          {/* Main heading with multi-style */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] mb-10 md:mb-14">
            <WordsPullUpMultiStyle
              segments={[
                { text: 'I am Isha Hinsu,', className: 'font-normal' },
                {
                  text: 'a full stack developer.',
                  className: 'italic font-serif',
                },
                {
                  text: 'I turn ideas into products people can rely on.',
                  className: 'font-normal',
                },
              ]}
            />
          </h2>

          {/* Scroll-linked character opacity body */}
          <p
            ref={textRef}
            className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed text-primary/90"
          >
            {chars.map((char, i) => (
              <AnimatedLetter
                key={i}
                char={char}
                index={i}
                totalChars={chars.length}
                containerRef={textRef}
              />
            ))}
          </p>

          {/* Education & Contact strip */}
          <div className="mt-12 md:mt-16 flex flex-col items-center gap-2 text-sm sm:text-base font-bold text-primary leading-relaxed">
            <p>B.Sc. (Hons) Computer Science · Darshan University · 2023–2026</p>
            <p className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-1 sm:gap-x-2">
              <a
                href="mailto:hinsuisha24114@gmail.com"
                className="hover:text-white transition-colors"
              >
                hinsuisha24114@gmail.com
              </a>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <a href="tel:+917874898093" className="hover:text-white transition-colors">
                +91 78748 98093
              </a>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <span>Rajkot, Gujarat</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
