import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-accent text-sm tracking-[0.3em] mb-4">PROJETS</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que j'ai construit</h2>
          <p className="text-gray-400 max-w-2xl">
            Du dashboard IA à l'expérimentation RAG — chaque projet documenté avec ses limites, pas
            seulement ses résultats.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`relative bg-panel border rounded-2xl p-7 flex flex-col ${
                p.featured ? "border-accent/30" : "border-white/5"
              } hover:border-accent/50 transition-colors`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-6 text-[10px] font-mono px-2 py-1 rounded-full bg-accent text-ink font-bold tracking-wide">
                  ★ PROJET PHARE
                </span>
              )}
              <span className="font-mono text-[11px] text-accent2 tracking-wider mb-3">{p.status}</span>
              <h3 className="text-xl font-bold mb-1">{p.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{p.subtitle}</p>
              <p className="text-sm text-gray-300 leading-relaxed mb-6 flex-1">{p.description}</p>

              <div className="flex flex-wrap gap-4 mb-6">
                {p.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-xl font-bold text-accent font-mono">{m.value}</div>
                    <div className="text-[11px] text-gray-500">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline mt-auto"
                >
                  GitHub <ExternalLink size={14} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
