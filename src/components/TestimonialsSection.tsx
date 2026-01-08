import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import testimonial1 from "@/assets/testimonial.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    id: 1,
    text: "Jay Jogmaya Car Rental truly delivers on quality and reliability. The car was comfortable, the pricing was transparent, and customer support was excellent. It made our trip across Gujarat convenient and enjoyable. Would definitely choose their service again.",
    name: "Ram patel",
    role: "Customer",
    image: testimonial1,
    rating: 5,
  },
  {
    id: 2,
    text: "Amazing experience with Jay Jogmaya Car Rental! The booking process was smooth, the vehicle was clean and well-maintained, and the service was punctual. The team was polite and very supportive throughout the journey. Highly recommended for stress-free travel across Gujarat.",
    name: "priyanka Bhimani",
    role: "Customer",
    image: testimonial2,
    rating: 5,
  },
  {
    id: 3,
    text: "Excellent service! The cars were in perfect condition and the staff was very helpful. I would definitely recommend Jay jogmaya Car Rental to anyone looking for reliable transportation in Gujarat.",
    name: "Rajesh Patel",
    role: "Business Customer",
    image: testimonial1,
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-services-bg overflow-hidden">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-8 sm:mb-12">
          <div className="section-heading">
            <h4>Some words</h4>
            <h2 className="text-2xl sm:text-3xl md:text-4xl">testimonial</h2>
          </div>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="testimonial-card text-center relative"
            >
              {/* Quote icon */}
              <motion.div
                className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
              </motion.div>

              {/* Stars */}
              <motion.div
                className="flex justify-center gap-1 mt-4 sm:mt-6 mb-4 sm:mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.svg
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </motion.div>

              <motion.p
                className="text-sm sm:text-base md:text-lg text-muted-foreground italic mb-6 sm:mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                "{testimonials[currentIndex].text}"
              </motion.p>

              <motion.div
                className="flex items-center justify-center gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-4 border-primary/20"
                  whileHover={{ scale: 1.1, borderColor: "rgba(255, 102, 0, 0.5)" }}
                />
                <div className="text-left">
                  <h4 className="font-semibold text-foreground text-sm sm:text-base">{testimonials[currentIndex].name}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-0 sm:-left-12 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg"
            whileHover={{ scale: 1.1, x: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="absolute right-0 sm:-right-12 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg"
            whileHover={{ scale: 1.1, x: 3 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>

          {/* Dots */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-primary w-6 sm:w-8" : "bg-muted-foreground/30"
                  }`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
