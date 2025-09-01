import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTheme } from "../ThemeContext";
import Heading from "./Heading";

const VisionSection = () => {
  //set LocalStorage isCountFinshed to false
  const [hoveredCard, setHoveredCard] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const cardRefs = useRef([]);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const { theme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(cardRefs.current[0]);

    return () => observer.disconnect();
  }, [controls]);

  const handleMouseMove = (e, index) => {
    if (hoveredCard === index) {
      const card = cardRefs.current[index];
      const rect = card.getBoundingClientRect();
      setCursorPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const cards = [
    {
      icon: (
        <svg
          className="w-16 h-16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#D946EF" />
            </linearGradient>
          </defs>
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="url(#gradient1)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 17L12 22L22 17"
            stroke="url(#gradient1)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="url(#gradient1)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Future-Ready Technology Systems",
      description:
        "Building scalable, adaptable solutions that evolve seamlessly and effortlessly with your unique and continuously growing business needs.",
      delay: 0.2,
    },
    {
      icon: (
        <svg
          className="w-16 h-16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="url(#gradient2)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
            stroke="url(#gradient2)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
            stroke="url(#gradient2)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Technology & Innovation Strategy",
      description:
        "Provide expert guidance on adopting emerging technologies and innovative methodologies to drive sustainable business growth.",
      delay: 0.4,
    },
    {
      icon: (
        <svg
          className="w-16 h-16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
          </defs>
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="url(#gradient3)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 16L16 12L12 8"
            stroke="url(#gradient3)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 12H16"
            stroke="url(#gradient3)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "R&D for Disruptive Innovation",
      description:
        "Conduct cutting-edge research and development to create groundbreaking solutions that challenge conventional approaches",
      delay: 0.6,
    },
  ];

  //eslint-disable-next-line
  const CountUp = ({ end, duration = 2 }) => {
    const [count, setCount] = useState(0);
    const isCountFinshed = localStorage.getItem("countFinished") === "true";
    const animationRef = useRef(null);

    useEffect(() => {
      if (isVisible && !animationRef.current) {
        animationRef.current = true;
        const startTime = Date.now();
        const animate = () => {
          const now = Date.now();
          const progress = Math.min((now - startTime) / (duration * 1000), 1);
          const currentCount = Math.floor(progress * end);

          if (progress < 1) {
            setCount(currentCount);
            requestAnimationFrame(animate);
          } else {
            setCount(end);
            localStorage.setItem("countFinished", true);
          }
        };
        requestAnimationFrame(animate);
      }
    }, [end, duration]);

    return (
      <span className="text-black dark:text-white">
        {isCountFinshed === true ? end : count}
      </span>
    );
  };

  return (
    <section
      id="vision"
      className={`${
        theme === "dark" ? "bg-grid" : "bg-grid-light"
      } relative min-h-screen bg-gradient-to-b from-gray-100 dark:from-purple-900/10 to-gray-100 dark:to-purple-900/20 py-20 lg:pb-44 overflow-hidden`}
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heading
            className="md:max-w-md lg:max-w-2xl"
            title="Our Vision"
            text="Transforming visionary ideas into tangible realities."
          />

          <p className="text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto leading-relaxed"></p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: card.delay },
                },
              }}
              className="group relative bg-white/30 dark:bg-gray-900/30 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20 transition-all duration-300 overflow-hidden"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onMouseMove={(e) => handleMouseMove(e, index)}
            >
              <AnimatePresence>
                {hoveredCard === index && (
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className="absolute inset-0 bg-purple-6s00/5 rounded-2xl"
                      style={{
                        background: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(147, 51, 234, 0.1) 0%, rgba(147, 51, 234, 0) 50%)`,
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="relative z-10">
                <motion.div
                  className="mb-6 transition-all duration-300 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                  style={{
                    filter:
                      hoveredCard === index
                        ? "hue-rotate(45deg) brightness(1.2)"
                        : "none",
                  }}
                >
                  {card.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-4 tracking-wide font-sans cursor-default">
                  {card.title}
                </h3>
                <p className="text-n-4 dark:text-n-3 text-sm mb-6 leading-relaxed cursor-default font-sans">
                  {card.description}
                </p>
                <a href="#expertise">
                  <motion.button
                    className="flex !font-code items-center text-gray-900 dark:text-gray-500 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-300 group"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 500, damping: 25 }}
                  >
                    Explore Further
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, transition: { duration: 0.8, delay: 0.8 } },
          }}
        >
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-purple-800/30 backdrop-blur-sm border border-purple-500/20 mb-12">
            <span className="px-6 py-2 text-sm text-purple-800 dark:text-purple-200 font-medium tracking-wide font-sans">
              Innovating for a Brighter Tomorrow
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-12 font-sans">
            {[
              { value: "20+", label: "Projects Delivered" },
              { value: "97", label: "Client Satisfaction" },
              { value: "24/7", label: "Expert Support" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: index * 0.1 + 0.8 },
                  },
                }}
              >
                <span className="text-6xl font-sans font-bold text-purple-950 dark:text-white mb-2 bg-clip-text text-transparent ">
                  {index === 1 ? (
                    <>
                      <CountUp end={97} />
                      <span className="text-black dark:text-white">%</span>
                    </>
                  ) : index === 0 ? (
                    <>
                      <CountUp end={20} />
                      <span className="text-black dark:text-white">+</span>
                    </>
                  ) : (
                    <span className="text-black dark:text-white">
                      {stat.value}
                    </span>
                  )}
                </span>
                <span className="text-purple-800 dark:text-purple-200 text-lg font-medium font-sans">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
