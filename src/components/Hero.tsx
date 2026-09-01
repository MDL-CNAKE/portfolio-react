import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import CodeRain from "./CodeRain";
import { profile, stats } from "../data";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24">
      <CodeRain />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-accent text-sm tracking-[0.3em] mb-6"
        >
          DATA · IA · BUSINESS INTELLIGENCE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mb-2"
        >
          {profile.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base md:text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap gap-4 mb-16"
        >
          
            href="#projects"
            className="px-6 py-3 bg-accent text-ink font-semibold rounded-lg hover:bg-accent/90 transition-colors"
          >
            Voir les projets
          </a>
          
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-white/15 rounded-lg flex items-center gap-2 hover:border-accent/60 hover:text-accent transition-colors"
          >
            <Github size={18} /> GitHub
          </a>
          
            href="#contact"
            className="px-6 py-3 border border-white/15 rounded-lg flex items-center gap-2 hover:border-accent/60 hover:text-accent transition-colors"
          >
            <Linkedin size={18} /> Me contacter
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-8"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-bold text-accent font-mono">{s.value}</div>
              <div className="text-xs text-gray-400 tracking-wide mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
