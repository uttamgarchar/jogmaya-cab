import { Globe, Clock, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/jay-jogmaya-logo.png";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-background py-3 md:py-4 shadow-sm"
    >
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <img src={logo} alt="Jay Jogmaya Car Rental" className="h-12 sm:h-14 md:h-20 w-auto" />
          </motion.div>

          {/* Info Items */}
          <div className="flex flex-wrap justify-center md:flex-nowrap items-center gap-3 sm:gap-4 md:gap-6">
            <motion.div
              className="flex items-center gap-2 sm:gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-primary flex items-center justify-center">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm sm:text-base">Gujarat, IND</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">National Highway NH-8 <br />lalpar morbi 363642</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 sm:gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-primary flex items-center justify-center">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm sm:text-base">24X7</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Service</p>
              </div>
            </motion.div>

            <motion.a
              href="https://api.whatsapp.com/send?phone=8460004588&text=Hello%20Jay%20Jogmaya%20Car%20Rental"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded flex items-center gap-2 text-sm sm:text-base font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(255, 102, 0, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">CHAT WITH US</span>
              <span className="sm:hidden">CHAT</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
