import { motion } from "framer-motion";
import { useLanguage } from "../i18n";

export default function Timeline() {
  const { t } = useLanguage();
  return (
    <section id="path" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-accent text-sm tracking-[0.3em] mb-4">{t.timelineSection.kicker}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.timelineSection.title}</h2>
          <p className="text-gray-400 max-w-2xl">{t.timelineSection.paragraph}</p>
        </motion.div>

        <div className="relative border-l border-white/10 ml-3">
          {t.timeline.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative pl-8 pb-10 last:pb-0"
            >
              <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-accent" />
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <span className="font-mono text-[11px] text-accent2 tracking-wider">{item.kind}</span>
                <span className="text-xs text-gray-500">{item.period}</span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                    item.status === "EN COURS" || item.status === "IN CORSO" || item.status === "ONGOING"
                      ? "bg-accent/15 text-accent"
                      : "bg-white/5 text-gray-400"
                  }`}
                >
                  {item.status}
                </span>
              </div>
              <h3 className="font-semibold text-gray-100">{item.title}</h3>
              <p className="text-sm text-gray-400 mt-0.5">{item.place}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
