import { motion } from "framer-motion";
import { skillGroups } from "../data";

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-accent text-sm tracking-[0.3em] mb-4">PROFIL & COMPÉTENCES</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Un parcours atypique, une exigence constante</h2>
          <p className="text-gray-400 max-w-3xl leading-relaxed mb-16">
            Après plus de 10 ans d'expérience en gestion opérationnelle et management d'équipe dans
            l'hôtellerie, j'ai choisi de me reconvertir dans l'IT. Actuellement étudiante en Business
            Intelligence Software Developer à l'ITS Academy ICT Piemonte de Turin, je répartis volontairement
            mes compétences entre données/BI, développement, IA générative et cloud.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-panel border border-white/5 rounded-xl p-6 hover:border-accent/30 transition-colors"
            >
              <h3 className="font-semibold mb-4 text-gray-200">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
