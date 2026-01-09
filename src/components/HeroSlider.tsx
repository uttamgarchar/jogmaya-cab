import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    subtitle: "for rent per day",
    title: "Reserved Now & Get",
    highlight: "10% Off",
    buttonText: "Reserve Now!",
    buttonLink: "https://api.whatsapp.com/send?phone=8460004588&text=Ertiga%20Details",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=80",
  },
  {
    id: 2,
    subtitle: "Premium Cars Available",
    title: "Best Cars at",
    highlight: "Best Price",
    buttonText: "Book Now!",
    buttonLink: "https://api.whatsapp.com/send?phone=8460004588&text=Booking%20Inquiry",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
      {/* Animated Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('${slides[currentSlide].image}')`,
          }}
        />
      </AnimatePresence>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 50
            }}
            animate={{
              y: -50,
              x: Math.random() * window.innerWidth
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left max-w-2xl px-4"
            >
              <motion.p
                className="text-primary-foreground text-base sm:text-lg mb-3 sm:mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {slides[currentSlide].title}{" "}
                <motion.span
                  className="text-primary inline-block"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  {slides[currentSlide].highlight}
                </motion.span>
              </motion.h2>
              <motion.a
                href={slides[currentSlide].buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base sm:text-lg inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -15px rgba(255, 102, 0, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                {slides[currentSlide].buttonText}
              </motion.a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-primary/80 hover:bg-primary rounded-full flex items-center justify-center text-primary-foreground transition-colors"
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.button>
      <motion.button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-primary/80 hover:bg-primary rounded-full flex items-center justify-center text-primary-foreground transition-colors"
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
          key={currentSlide}
        />
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-primary" : "bg-primary-foreground/50"
              }`}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            animate={index === currentSlide ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
