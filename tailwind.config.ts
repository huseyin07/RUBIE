import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { colors: { ink: "#08080b", panel: "#111118", violet: "#9b6cff" }, boxShadow: { glow: "0 0 45px rgba(139,92,246,.2)" } } }, plugins: [] } satisfies Config;
