const tokens = [
  "import pandas", "R²=0.73", "1010", "tensor", "<Node>", "py", "0x4F",
  "GET /v1", "01", "0b1101", "0xAE", "API", "def fit(", "{ }", "JSON",
  "SGD", "json.loads", "SELECT *", "0.918", "RAG", "LLM",
];

function Row({ seed, duration }: { seed: number; duration: number }) {
  const items = Array.from({ length: 24 }, (_, i) => tokens[(i + seed) % tokens.length]);
  return (
    <div
      className="flex gap-8 whitespace-nowrap font-mono text-xs text-white/[0.14] py-3"
      style={{
        animation: `scrollLeft ${duration}s linear infinite`,
      }}
    >
      {items.concat(items).map((t, i) => (
        <span key={i}>{t}</span>
      ))}
    </div>
  );
}

export default function CodeRain() {
  const rows = Array.from({ length: 26 }, (_, row) => row);
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none select-none -z-10 bg-ink">
      <style>{`
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
      <div className="flex flex-col gap-6 h-full py-4">
        {rows.map((row) => (
          <Row key={row} seed={row * 3} duration={28 + (row % 8) * 4} />
        ))}
      </div>
    </div>
  );
}
