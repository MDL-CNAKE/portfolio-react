import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { Linkedin, Github } from "./BrandIcons";
import { profile } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-mono text-accent text-sm tracking-[0.3em] mb-4">TRAVAILLONS ENSEMBLE</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Disponible pour un stage curriculaire</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10">
            Data (Engineering, Analyse, Science), Business Intelligence ou IA, en Italie ou en France.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a href={`mailto:${profile.email}`} className="px-5 py-3 bg-accent text-ink font-semibold rounded-lg flex items-center gap-2 hover:bg-accent/90 transition-colors">
              <Mail size={18} /> {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="px-5 py-3 border border-white/15 rounded-lg flex items-center gap-2 hover:border-accent/60 hover:text-accent transition-colors">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="px-5 py-3 border border-white/15 rounded-lg flex items-center gap-2 hover:border-accent/60 hover:text-accent transition-colors">
              <Github size={18} /> GitHub
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 font-mono">
            {profile.phones.map((p) => (
              <span key={p} className="flex items-center gap-1.5">
                <Phone size={14} /> {p}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-16 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
        © 2026 {profile.fullName} — {profile.location}
      </div>
    </section>
  );
}
