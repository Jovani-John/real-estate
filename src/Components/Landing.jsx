import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaBuilding,
  FaDollarSign,
  FaShoppingCart,
  FaKey,
  FaPlus,
  FaSearch,
} from "react-icons/fa";

const Landing = () => {
  // Animation variants - خفيفة ومودرن
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const searchBoxVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <motion.div 
        className="relative h-[80vh] w-full bg-gradient-to-r from-[#667EEA] to-[#764BA2]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Image Layer */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[80vh] bg-cover bg-center"
          style={{
            backgroundImage: "url('/Background1.png')",
            opacity: 0.2
          }}
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Text Content */}
        <motion.div 
          className="z-10 flex flex-col justify-start items-center pt-12 sm:pt-16 md:pt-20 lg:pt-28 px-2 sm:px-4 text-center relative min-h-screen"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl"
            variants={itemVariants}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Find Your Perfect
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Home{" "}
            </motion.span>
            <motion.span 
              className="opacity-50"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.5, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Across the <br />
              Globe
            </motion.span>
          </motion.h1>

          <motion.p 
            className="mt-3 sm:mt-4 text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl opacity-60 pt-2 sm:pt-3 lg:pt-5 px-1 sm:px-2"
            variants={itemVariants}
          >
            Discover Premium Properties in Egypt, Dubai, Europe, Africa and beyond
            with 3D tours and AI assistance
          </motion.p>

          <motion.div 
            className="mt-4 sm:mt-6 lg:mt-8 flex justify-center w-full px-1 sm:px-2"
            variants={searchBoxVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="bg-white shadow-lg rounded-2xl w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-1 sm:mx-4 md:mx-6 lg:mx-10 px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6 flex flex-col items-center gap-2 sm:gap-3"
              whileHover={{ 
                y: -3,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Top Filters */}
              <motion.div 
                className="flex flex-col sm:flex-col md:flex-col lg:flex-row items-center gap-2 sm:gap-3 lg:gap-4 w-full justify-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Select Location */}
                <motion.div 
                  className="flex items-center gap-2 bg-gray-100 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg w-full lg:w-auto"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: "#f0f4ff"
                  }}
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaMapMarkerAlt className="text-gray-500 flex-shrink-0 text-xs sm:text-sm lg:text-base" />
                  </motion.div>
                  <select className="bg-transparent outline-none text-black w-full text-xs sm:text-sm lg:text-base">
                    <option>Select Location</option>
                    <option>Egypt</option>
                    <option>Dubai</option>
                    <option>Europe</option>
                  </select>
                </motion.div>

                {/* Property Type */}
                <motion.div 
                  className="flex items-center gap-2 bg-gray-100 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg w-full lg:w-auto"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: "#f0f4ff"
                  }}
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    whileHover={{ rotate: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaBuilding className="text-gray-500 flex-shrink-0 text-xs sm:text-sm lg:text-base" />
                  </motion.div>
                  <select className="bg-transparent outline-none text-black w-full text-xs sm:text-sm lg:text-base">
                    <option>Property Type</option>
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>Office</option>
                  </select>
                </motion.div>

                {/* Price Range */}
                <motion.div 
                  className="flex items-center gap-2 bg-gray-100 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg w-full lg:w-auto"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: "#f0f4ff"
                  }}
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaDollarSign className="text-gray-500 flex-shrink-0 text-xs sm:text-sm lg:text-base" />
                  </motion.div>
                  <select className="bg-transparent outline-none text-black w-full text-xs sm:text-sm lg:text-base">
                    <option>Price Range</option>
                    <option>$500 - $1000</option>
                    <option>$1000 - $5000</option>
                  </select>
                </motion.div>

                {/* Search Button */}
                <motion.button 
                  className="flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white w-full sm:w-full md:w-full lg:w-auto px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-lg shadow-md hover:opacity-90 transition text-xs sm:text-sm lg:text-base"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 8px 25px rgba(99, 102, 241, 0.3)"
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaSearch className="text-white text-xs sm:text-sm lg:text-base" />
                  </motion.div>
                  Search
                </motion.button>
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2 w-full sm:w-auto justify-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.button 
                  className="flex items-center justify-center gap-2 bg-blue-100 text-blue-600 px-3 sm:px-4 py-2 rounded-lg shadow hover:scale-105 transition text-xs sm:text-sm lg:text-base"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#dbeafe",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaShoppingCart className="flex-shrink-0 text-xs sm:text-sm lg:text-base" />
                  </motion.div>
                  Buy
                </motion.button>
                
                <motion.button 
                  className="flex items-center justify-center gap-2 bg-green-100 text-green-600 px-3 sm:px-4 py-2 rounded-lg shadow hover:scale-105 transition text-xs sm:text-sm lg:text-base"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#dcfce7",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    whileHover={{ rotate: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaKey className="flex-shrink-0 text-xs sm:text-sm lg:text-base" />
                  </motion.div>
                  Rent
                </motion.button>
                
                <motion.button 
                  className="flex items-center justify-center gap-2 bg-purple-100 text-purple-600 px-3 sm:px-4 py-2 rounded-lg shadow hover:scale-105 transition text-xs sm:text-sm lg:text-base"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#f3e8ff",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaPlus className="flex-shrink-0 text-xs sm:text-sm lg:text-base" />
                  </motion.div>
                  List Property
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Property Action Cards Section */}
      <motion.div 
        className="bg-white py-6 sm:py-8 md:py-12 lg:py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            
            {/* Buy Property Card */}
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 lg:p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300"
              variants={cardVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6"
                whileHover={{ 
                  rotate: 10,
                  scale: 1.05
                }}
                transition={{ duration: 0.3 }}
              >
                <FaShoppingCart className="text-white text-lg sm:text-xl lg:text-2xl" />
              </motion.div>
              <motion.h3 
                className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-2 lg:mb-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                Buy Property
              </motion.h3>
              <motion.p 
                className="text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-base"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                Explore premium properties with 3D tours
              </motion.p>
            </motion.div>

            {/* Rent Property Card */}
            <motion.div 
              className="bg-gradient-to-br from-green-50 to-green-100 p-4 sm:p-6 lg:p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300"
              variants={cardVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6"
                whileHover={{ 
                  rotate: -10,
                  scale: 1.05
                }}
                transition={{ duration: 0.3 }}
              >
                <FaKey className="text-white text-lg sm:text-xl lg:text-2xl" />
              </motion.div>
              <motion.h3 
                className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-2 lg:mb-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                Rent Property
              </motion.h3>
              <motion.p 
                className="text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-base"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                Find your perfect rental <br /> home
              </motion.p>
            </motion.div>

            {/* List Property Card */}
            <motion.div 
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 sm:p-6 lg:p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-1"
              variants={cardVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6"
                whileHover={{ 
                  rotate: 45,
                  scale: 1.05
                }}
                transition={{ duration: 0.3 }}
              >
                <FaPlus className="text-white text-lg sm:text-xl lg:text-2xl" />
              </motion.div>
              <motion.h3 
                className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-2 lg:mb-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                List Property
              </motion.h3>
              <motion.p 
                className="text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-base"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                Sell or rent your property <br /> globally
              </motion.p>
            </motion.div>

          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Landing;