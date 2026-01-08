import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    fromAddress: "",
    toAddress: "",
    mobile: "",
    journeyDate: "",
    journeyTime: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi, I want to book a car.%0AEmail: ${encodeURIComponent(formData.email)}%0AFrom: ${encodeURIComponent(formData.fromAddress)}%0ATo: ${encodeURIComponent(formData.toAddress)}%0AMobile: ${encodeURIComponent(formData.mobile)}%0ADate: ${encodeURIComponent(formData.journeyDate)}%0ATime: ${encodeURIComponent(formData.journeyTime)}`;
    window.open(`https://api.whatsapp.com/send?phone=918460004588&text=${message}`, '_blank');
  };

  const inputClass = (name: string) => `
    w-full px-4 py-3 border-2 rounded-lg transition-all duration-300 bg-background text-foreground
    ${focusedField === name ? 'border-primary shadow-lg shadow-primary/20' : 'border-border'}
    focus:outline-none focus:border-primary
  `;

  return (
    <section className="bg-background py-0 -mt-8 sm:-mt-12 md:-mt-16 relative z-10 px-4">
      <AnimatedSection>
        <div className="container-custom">
          <motion.div 
            className="bg-card rounded-xl shadow-2xl p-4 sm:p-6 md:p-8 border border-border"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground text-center lg:text-left">
                  Search Your Best Cars here.
                </h3>
              </motion.div>
              <div className="lg:col-span-3">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={inputClass('email')}
                        required
                      />
                    </motion.div>
                    <input
                      type="text"
                      name="fromAddress"
                      placeholder="From Address"
                      value={formData.fromAddress}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('fromAddress')}
                      onBlur={() => setFocusedField(null)}
                      className={inputClass('fromAddress')}
                      required
                    />
                    <input
                      type="text"
                      name="toAddress"
                      placeholder="To Address"
                      value={formData.toAddress}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('toAddress')}
                      onBlur={() => setFocusedField(null)}
                      className={inputClass('toAddress')}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    <input
                      type="text"
                      name="mobile"
                      placeholder="Mobile No."
                      value={formData.mobile}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('mobile')}
                      onBlur={() => setFocusedField(null)}
                      className={inputClass('mobile')}
                      required
                    />
                    <input
                      type="date"
                      name="journeyDate"
                      placeholder="Journey Date"
                      value={formData.journeyDate}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('journeyDate')}
                      onBlur={() => setFocusedField(null)}
                      className={inputClass('journeyDate')}
                      required
                    />
                    <input
                      type="time"
                      name="journeyTime"
                      placeholder="Journey Time"
                      value={formData.journeyTime}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('journeyTime')}
                      onBlur={() => setFocusedField(null)}
                      className={inputClass('journeyTime')}
                      required
                    />
                    <motion.button
                      type="submit"
                      className="btn-outline w-full font-semibold text-sm sm:text-base py-3"
                      whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px rgba(255, 102, 0, 0.4)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      CALL BACK
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default BookingForm;
