import { motion } from "framer-motion";
import { useLanguage } from "../i18n";

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-accent text-sm tracking-[0.3em] mb-4">{t.about.kicker}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.about.title}</h2>
          <p className="text-gray-400 max-w-3xl leading-relaxed mb-16">{t.about.paragraph}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.skillGroups.map((group, idx) => (
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
