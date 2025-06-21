import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectsList from '../components/projects/ProjectsList';

const categories = [
  "All",
  "Education",
  "Agriculture",
  "Water",
  "Energy",
  "Innovation",
];

const projectData = [
  {
    id: 1,
    title: "Democratising Public Policy Education",
    category: "Education",
    color: "#a3b18a",
    description: "Making public policy accessible to students, young professionals, and grassroots communities by 2030.",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80",
    location: "India"
  },
  {
    id: 2,
    title: "Grassroot Research: Problem-Led Inquiry",
    category: "Innovation",
    color: "#3d4d2b",
    description: "Challenging top-down research by empowering communities to become co-creators of knowledge.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    location: "India"
  },
  {
    id: 3,
    title: "RTI Advocacy: Empowering Villages Through Information",
    category: "Education",
    color: "#a3b18a",
    description: "Spreading awareness and demystifying the RTI Act to activate democratic participation in rural India.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    location: "India"
  },
  {
    id: 4,
    title: "Kaam Ka Haq: Labor Rights for Every Worker",
    category: "Innovation",
    color: "#3d4d2b",
    description: "Educating and empowering informal sector workers on legal labor rights and workplace dignity.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    location: "India"
  },
  {
    id: 5,
    title: "Nari Parcham: Grassroots Women’s Leadership Initiative",
    category: "Education",
    color: "#a3b18a",
    description: "Identifying and nurturing local women leaders to influence decision-making from the ground up.",
    image: "https://images.unsplash.com/photo-1526925539332-aa3b66e35444?auto=format&fit=crop&w=800&q=80",
    location: "India"
  }
];


const socialIcons = [
  { href: "#", label: "Twitter", icon: <span role="img" aria-label="Twitter">🐦</span> },
  { href: "#", label: "Facebook", icon: <span role="img" aria-label="Facebook">📘</span> },
  { href: "#", label: "Instagram", icon: <span role="img" aria-label="Instagram">📸</span> },
  { href: "#", label: "LinkedIn", icon: <span role="img" aria-label="LinkedIn">💼</span> },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filtered = selectedCategory === "All"
    ? projectData
    : projectData.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header with panoramic image */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[340px] md:h-[420px] lg:h-[500px] flex items-end justify-center overflow-hidden"
      >
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
          alt="Projects Hero"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80 z-10" />
        <div className="relative z-20 w-full max-w-6xl px-6 py-10 flex flex-col md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg font-serif">Projects</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-xl drop-shadow font-light">
              Explore our diverse range of impactful projects, from education and agriculture to water, energy, and innovation. Each initiative is designed to foster sustainable development and empower communities.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-white/20 backdrop-blur-md rounded-lg p-6 mt-6 md:mt-0 md:ml-8 max-w-xs shadow-lg border border-white/30"
          >
            <h2 className="text-xl font-semibold text-white mb-2">Our Mission</h2>
            <p className="text-white/90 text-sm mb-2">
              To create lasting positive change by supporting projects that nurture people and the planet.
            </p>
            <a href="#learn-more" className="text-lime-300 font-medium hover:text-lime-200 transition-colors duration-300 underline">Learn More →</a>
          </motion.div>
        </div>
      </motion.div>

      {/* Filter Navigation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="bg-[#f4f4f4] py-8 flex justify-center border-b border-gray-200"
      >
        <div className="flex flex-wrap gap-4 px-4">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-sm focus:outline-none ${
                selectedCategory === cat
                  ? 'bg-accent text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="flex-1 bg-white">
        <ProjectsList projects={filtered} />
      </div>

      {/* Wavy Divider */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative w-full overflow-hidden" 
        style={{height:'80px', marginTop:'-40px'}}
      >
        <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#3d4d2b" d="M0,0 C480,80 960,0 1440,80 L1440,80 L0,80 Z"></path>
        </svg>
      </motion.div>
    </div>
  );
};

export default Projects;
