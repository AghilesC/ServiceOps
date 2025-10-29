import { useMemo } from "react";
import "./index.css";

const haloStops = [
  "rgba(255,255,255,0.7)",
  "rgba(255,255,255,0.3)",
  "rgba(255,255,255,0)"
];

const panels = [
  { id: "vision", title: "Vision", tag: "Ultra", tone: "--tone-a" },
  { id: "clarity", title: "Clarity", tag: "Pro", tone: "--tone-b" },
  { id: "horizon", title: "Horizon", tag: "Max", tone: "--tone-c" },
  { id: "pulse", title: "Pulse", tag: "Studio", tone: "--tone-d" }
];

const modules = [
  {
    name: "A",
    accent: "--tone-a",
    layers: ["neon", "glass", "shadow"],
    glyph: "∞"
  },
  {
    name: "B",
    accent: "--tone-b",
    layers: ["mist", "edge", "flare"],
    glyph: "✦"
  },
  {
    name: "C",
    accent: "--tone-c",
    layers: ["wave", "trace", "veil"],
    glyph: "◌"
  },
  {
    name: "D",
    accent: "--tone-d",
    layers: ["ray", "mesh", "drift"],
    glyph: "○"
  }
];

const tapes = [
  { label: "Carbon", tone: "--tone-a" },
  { label: "Quartz", tone: "--tone-b" },
  { label: "Aurora", tone: "--tone-c" },
  { label: "Lumen", tone: "--tone-d" }
];

const gallery = [
  { cue: "01", theme: "--tone-a" },
  { cue: "02", theme: "--tone-b" },
  { cue: "03", theme: "--tone-c" },
  { cue: "04", theme: "--tone-d" }
];

const matrices = [
  {
    id: "primary",
    code: [
      ["halo", "glow", "pulse"],
      ["sheen", "shine", "calm"],
      ["drift", "aura", "soft"]
    ]
  },
  {
    id: "secondary",
    code: [
      ["luxe", "vibe", "tone"],
      ["void", "flux", "veil"],
      ["ray", "wave", "hush"]
    ]
  },
  {
    id: "tertiary",
    code: [
      ["fine", "mist", "gleam"],
      ["gloss", "muse", "calm"],
      ["aero", "aero", "aero"]
    ]
  }
];

const aurora = [
  { id: "layer-alpha", blur: 60, opacity: 0.4 },
  { id: "layer-beta", blur: 80, opacity: 0.25 },
  { id: "layer-gamma", blur: 120, opacity: 0.2 }
];

const streams = [
  { id: "stream-1", speed: 18, hue: "var(--tone-a)" },
  { id: "stream-2", speed: 22, hue: "var(--tone-b)" },
  { id: "stream-3", speed: 24, hue: "var(--tone-c)" },
  { id: "stream-4", speed: 28, hue: "var(--tone-d)" }
];

const quickLinks = [
  "Overview",
  "Silhouettes",
  "Compositions",
  "Modules",
  "Focus",
  "System"
];

const capsules = [
  { title: "Spatial", meta: "01" },
  { title: "Dynamic", meta: "02" },
  { title: "Silent", meta: "03" },
  { title: "Prismatic", meta: "04" }
];

const accents = ["--tone-a", "--tone-b", "--tone-c", "--tone-d"];

function App() {
  const gradient = useMemo(
    () => haloStops.map((stop, index) => `${stop} ${index * 20 + 20}%`).join(","),
    []
import React, { useMemo } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Aperture,
  ArrowRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  Command,
  Cpu,
  FileText,
  Fingerprint,
  Flame,
  Globe,
  Layers,
  Lightbulb,
  LineChart,
  Lock,
  Mail,
  MessageCircle,
  Monitor,
  Palette,
  PenTool,
  PhoneCall,
  PieChart,
  Radar,
  Shield,
  Sparkle,
  SquareStack,
  Star,
  TabletSmartphone,
  Timer,
  Users,
  Waves
} from "lucide-react";

const brandTokens = {
  name: "ServiceOps Vision",
  mission: "Offrir une expérience digitale inspirée des interfaces les plus raffinées au monde.",
  baseline: "Du design à la donnée, une orchestration impeccable.",
};

const navLinks = [
  { label: "Accueil", href: "/#accueil" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Produits", href: "/#produits" },
  { label: "Innovation", href: "/#innovation" },
  { label: "Contact", href: "/#contact" },
];

const chromaWaves = [
  { id: "wave-1", start: "#390062", end: "#0cce35", accent: "#8cd0a4", blur: 45, scale: 1.22 },
  { id: "wave-2", start: "#347a3f", end: "#2c833f", accent: "#d80623", blur: 32, scale: 1.03 },
  { id: "wave-3", start: "#6ff151", end: "#771f54", accent: "#0d961f", blur: 65, scale: 1.20 },
  { id: "wave-4", start: "#d6cb4d", end: "#70dd97", accent: "#e5feba", blur: 67, scale: 1.28 },
  { id: "wave-5", start: "#0353ce", end: "#51bedd", accent: "#d860ea", blur: 51, scale: 1.28 },
  { id: "wave-6", start: "#6e3d9a", end: "#ac561e", accent: "#3454e7", blur: 35, scale: 1.38 },
  { id: "wave-7", start: "#b7cc25", end: "#b01af6", accent: "#876f47", blur: 81, scale: 1.04 },
  { id: "wave-8", start: "#eb39bc", end: "#3fe936", accent: "#c1cf42", blur: 35, scale: 1.55 },
  { id: "wave-9", start: "#b92839", end: "#6273a6", accent: "#239cbb", blur: 32, scale: 1.66 },
  { id: "wave-10", start: "#942aa8", end: "#28da7e", accent: "#77305d", blur: 85, scale: 1.10 },
  { id: "wave-11", start: "#8e528e", end: "#e82565", accent: "#bacb48", blur: 40, scale: 1.37 },
  { id: "wave-12", start: "#6b4481", end: "#88b151", accent: "#248ede", blur: 68, scale: 1.63 },
  { id: "wave-13", start: "#7d57db", end: "#53a97d", accent: "#ecad5e", blur: 54, scale: 1.27 },
  { id: "wave-14", start: "#707166", end: "#a60862", accent: "#1ca3e6", blur: 44, scale: 1.82 },
  { id: "wave-15", start: "#a1830f", end: "#cd6578", accent: "#891555", blur: 34, scale: 1.21 },
  { id: "wave-16", start: "#a11d75", end: "#6cdd62", accent: "#ff9b3d", blur: 55, scale: 1.88 },
  { id: "wave-17", start: "#eaeea1", end: "#492677", accent: "#879e5f", blur: 38, scale: 1.25 },
  { id: "wave-18", start: "#868611", end: "#db5bad", accent: "#cc7e39", blur: 53, scale: 1.22 },
  { id: "wave-19", start: "#46d36b", end: "#fcae1b", accent: "#2e8bad", blur: 78, scale: 1.05 },
  { id: "wave-20", start: "#3823ee", end: "#4e4137", accent: "#51e929", blur: 80, scale: 1.68 },
  { id: "wave-21", start: "#2086b4", end: "#c50038", accent: "#c3639a", blur: 68, scale: 2.00 },
  { id: "wave-22", start: "#80b959", end: "#05e0d7", accent: "#3aa686", blur: 73, scale: 1.88 },
  { id: "wave-23", start: "#889d4f", end: "#ae2b7a", accent: "#391d5d", blur: 48, scale: 1.43 },
  { id: "wave-24", start: "#e84e79", end: "#01a95e", accent: "#86daed", blur: 62, scale: 1.76 },
  { id: "wave-25", start: "#367b7a", end: "#98cdc1", accent: "#65d7ad", blur: 39, scale: 1.37 },
  { id: "wave-26", start: "#52b68e", end: "#004af5", accent: "#a5f7c8", blur: 61, scale: 1.02 },
  { id: "wave-27", start: "#b9d89d", end: "#9d727d", accent: "#7a997e", blur: 33, scale: 1.24 },
  { id: "wave-28", start: "#2852d8", end: "#2bdac4", accent: "#f8d3bd", blur: 82, scale: 1.07 },
  { id: "wave-29", start: "#4063ae", end: "#41bc86", accent: "#f35836", blur: 90, scale: 1.55 },
  { id: "wave-30", start: "#87b580", end: "#d8a589", accent: "#6c70d0", blur: 89, scale: 1.54 },
  { id: "wave-31", start: "#66fd45", end: "#9f9947", accent: "#cc48b7", blur: 72, scale: 1.65 },
  { id: "wave-32", start: "#e04ea7", end: "#e72931", accent: "#3df443", blur: 45, scale: 1.22 },
  { id: "wave-33", start: "#ad198d", end: "#0ac500", accent: "#75d199", blur: 67, scale: 1.22 },
  { id: "wave-34", start: "#245934", end: "#1e24b3", accent: "#7537db", blur: 34, scale: 1.91 },
  { id: "wave-35", start: "#a92dec", end: "#24476a", accent: "#79dbbe", blur: 47, scale: 1.67 },
  { id: "wave-36", start: "#6db072", end: "#43be60", accent: "#f201ef", blur: 45, scale: 1.78 },
  { id: "wave-37", start: "#d06a29", end: "#617d68", accent: "#304b78", blur: 36, scale: 1.66 },
  { id: "wave-38", start: "#b5667d", end: "#d8df4c", accent: "#d27bff", blur: 59, scale: 1.86 },
  { id: "wave-39", start: "#1bbc53", end: "#3263d3", accent: "#1f089f", blur: 55, scale: 1.73 },
  { id: "wave-40", start: "#37f21c", end: "#7f4fe2", accent: "#621818", blur: 42, scale: 1.54 },
  { id: "wave-41", start: "#47c5f9", end: "#d800de", accent: "#5df224", blur: 47, scale: 1.46 },
  { id: "wave-42", start: "#2698d9", end: "#e2e208", accent: "#322117", blur: 33, scale: 1.65 },
  { id: "wave-43", start: "#078e57", end: "#2fc023", accent: "#7906bb", blur: 40, scale: 1.41 },
  { id: "wave-44", start: "#f6749c", end: "#6d7049", accent: "#cd5527", blur: 87, scale: 1.06 },
  { id: "wave-45", start: "#c208c3", end: "#011a82", accent: "#c7e55c", blur: 46, scale: 1.93 },
  { id: "wave-46", start: "#e8f6db", end: "#920c2f", accent: "#d8946f", blur: 74, scale: 1.96 },
  { id: "wave-47", start: "#f92cfe", end: "#4f4187", accent: "#613a4b", blur: 48, scale: 1.22 },
  { id: "wave-48", start: "#1df185", end: "#1f35d4", accent: "#a090cf", blur: 33, scale: 1.05 },
  { id: "wave-49", start: "#f41d9f", end: "#509b05", accent: "#1d1f51", blur: 62, scale: 1.08 },
  { id: "wave-50", start: "#5f2473", end: "#23153a", accent: "#22cbc4", blur: 73, scale: 1.86 },
  { id: "wave-51", start: "#cebbab", end: "#3d61c7", accent: "#7e0ff0", blur: 67, scale: 1.59 },
  { id: "wave-52", start: "#29f9ba", end: "#d6a4a5", accent: "#a1fb3a", blur: 89, scale: 1.26 },
  { id: "wave-53", start: "#a0dcb5", end: "#7a350b", accent: "#87fea0", blur: 55, scale: 1.13 },
  { id: "wave-54", start: "#999937", end: "#ea1956", accent: "#a1e1fa", blur: 89, scale: 1.75 },
  { id: "wave-55", start: "#25245f", end: "#04c4fe", accent: "#eaa466", blur: 69, scale: 2.00 },
  { id: "wave-56", start: "#3330be", end: "#25826d", accent: "#6d228f", blur: 62, scale: 1.27 },
  { id: "wave-57", start: "#b2b149", end: "#23389d", accent: "#7d12d8", blur: 53, scale: 1.28 },
  { id: "wave-58", start: "#e059ba", end: "#9ae386", accent: "#040163", blur: 72, scale: 1.82 },
  { id: "wave-59", start: "#99482b", end: "#35094a", accent: "#44c1ce", blur: 46, scale: 1.12 },
  { id: "wave-60", start: "#36cd6b", end: "#4f96de", accent: "#8b7139", blur: 48, scale: 1.60 },
  { id: "wave-61", start: "#af8e01", end: "#683de8", accent: "#8728e5", blur: 62, scale: 1.49 },
  { id: "wave-62", start: "#1a0250", end: "#2f41be", accent: "#d8deec", blur: 83, scale: 1.28 },
  { id: "wave-63", start: "#01d0bd", end: "#aac7ec", accent: "#42facb", blur: 70, scale: 1.98 },
  { id: "wave-64", start: "#52badf", end: "#e23843", accent: "#daf9c7", blur: 65, scale: 1.01 },
  { id: "wave-65", start: "#26865c", end: "#4c50d7", accent: "#127247", blur: 83, scale: 1.37 },
  { id: "wave-66", start: "#4bd2f2", end: "#dc0d01", accent: "#41408a", blur: 32, scale: 1.31 },
  { id: "wave-67", start: "#146d19", end: "#b732c5", accent: "#6b8f26", blur: 73, scale: 1.25 },
  { id: "wave-68", start: "#34a15d", end: "#b5155d", accent: "#d010b2", blur: 69, scale: 1.75 },
  { id: "wave-69", start: "#7935a2", end: "#53336e", accent: "#5aa69b", blur: 86, scale: 1.41 },
  { id: "wave-70", start: "#5bd529", end: "#aa1436", accent: "#d2cc11", blur: 81, scale: 1.67 },
  { id: "wave-71", start: "#7f0fc6", end: "#889ac2", accent: "#518261", blur: 80, scale: 1.70 },
  { id: "wave-72", start: "#c3dc82", end: "#13d3b6", accent: "#f0fe48", blur: 44, scale: 1.20 },
  { id: "wave-73", start: "#ebacdd", end: "#b3066d", accent: "#9c41fa", blur: 82, scale: 1.80 },
  { id: "wave-74", start: "#748765", end: "#722309", accent: "#0c1dbe", blur: 72, scale: 1.19 },
  { id: "wave-75", start: "#a811f3", end: "#8ea50f", accent: "#238b1d", blur: 79, scale: 1.28 },
  { id: "wave-76", start: "#cca2a5", end: "#a98c79", accent: "#0e21a8", blur: 37, scale: 1.88 },
  { id: "wave-77", start: "#85bdff", end: "#5b6d3d", accent: "#87eb35", blur: 32, scale: 1.11 },
  { id: "wave-78", start: "#de7f24", end: "#b0fde6", accent: "#a09a50", blur: 57, scale: 1.61 },
  { id: "wave-79", start: "#3b35ec", end: "#c53855", accent: "#615201", blur: 46, scale: 1.04 },
  { id: "wave-80", start: "#df42ee", end: "#00ddad", accent: "#64e1c9", blur: 53, scale: 1.43 },
  { id: "wave-81", start: "#a90ffa", end: "#a0b98d", accent: "#3fcee3", blur: 76, scale: 1.90 },
  { id: "wave-82", start: "#9e5a8f", end: "#d118e0", accent: "#a70172", blur: 55, scale: 1.70 },
  { id: "wave-83", start: "#412bdd", end: "#6238dd", accent: "#d744bd", blur: 72, scale: 1.94 },
  { id: "wave-84", start: "#591a1c", end: "#9a161a", accent: "#cfe915", blur: 65, scale: 1.83 },
  { id: "wave-85", start: "#9b957f", end: "#92e65a", accent: "#6b9d10", blur: 57, scale: 1.79 },
  { id: "wave-86", start: "#a4fdd9", end: "#ee12ee", accent: "#e231c6", blur: 58, scale: 1.68 },
  { id: "wave-87", start: "#f24575", end: "#56e1ca", accent: "#2b6a52", blur: 48, scale: 1.52 },
  { id: "wave-88", start: "#ab9dcb", end: "#2fd072", accent: "#7840b2", blur: 73, scale: 1.31 },
  { id: "wave-89", start: "#65f45b", end: "#4b71fa", accent: "#0c817c", blur: 32, scale: 1.24 },
  { id: "wave-90", start: "#f34512", end: "#2549bd", accent: "#e92c4e", blur: 56, scale: 1.89 },
  { id: "wave-91", start: "#638d03", end: "#c498d3", accent: "#fd1f01", blur: 55, scale: 1.24 },
  { id: "wave-92", start: "#02d6c5", end: "#36929c", accent: "#d9acc3", blur: 44, scale: 1.18 },
  { id: "wave-93", start: "#edd97b", end: "#19b639", accent: "#7f96ea", blur: 88, scale: 1.85 },
  { id: "wave-94", start: "#e9b55d", end: "#444505", accent: "#ede5b7", blur: 72, scale: 1.53 },
  { id: "wave-95", start: "#a274e0", end: "#e298fb", accent: "#da7dc3", blur: 83, scale: 1.91 },
  { id: "wave-96", start: "#e44ec9", end: "#517d25", accent: "#f30887", blur: 58, scale: 1.26 },
  { id: "wave-97", start: "#7e9634", end: "#8dfbc0", accent: "#f81d19", blur: 70, scale: 1.24 },
  { id: "wave-98", start: "#e136fb", end: "#27abe5", accent: "#924af5", blur: 45, scale: 1.27 },
  { id: "wave-99", start: "#a3b0f8", end: "#294179", accent: "#46d8f7", blur: 39, scale: 1.23 },
  { id: "wave-100", start: "#4e3c7d", end: "#6d8b3b", accent: "#20e29a", blur: 56, scale: 1.41 },
  { id: "wave-101", start: "#ee8da1", end: "#d4e05c", accent: "#1fe14a", blur: 43, scale: 1.83 },
  { id: "wave-102", start: "#c76981", end: "#0a0017", accent: "#c2c14d", blur: 60, scale: 1.01 },
  { id: "wave-103", start: "#b419ba", end: "#98e3c1", accent: "#c7ac54", blur: 84, scale: 1.89 },
  { id: "wave-104", start: "#d689f5", end: "#70ea72", accent: "#f9f936", blur: 44, scale: 1.27 },
  { id: "wave-105", start: "#f8a611", end: "#0edc57", accent: "#c7184a", blur: 51, scale: 1.67 },
  { id: "wave-106", start: "#cf0298", end: "#5480be", accent: "#ef4dc2", blur: 88, scale: 1.13 },
  { id: "wave-107", start: "#0dce8b", end: "#c9bd05", accent: "#0de051", blur: 35, scale: 1.64 },
  { id: "wave-108", start: "#457a67", end: "#ec63bd", accent: "#5d0b96", blur: 33, scale: 1.26 },
  { id: "wave-109", start: "#a79ac4", end: "#6c5ebc", accent: "#e8ce59", blur: 50, scale: 1.34 },
  { id: "wave-110", start: "#c21cd4", end: "#8e77a6", accent: "#d7d758", blur: 46, scale: 1.83 },
  { id: "wave-111", start: "#f0cc0e", end: "#09ec9b", accent: "#1aaaf6", blur: 90, scale: 1.35 },
  { id: "wave-112", start: "#2321f2", end: "#149cb6", accent: "#0fe329", blur: 90, scale: 1.25 },
  { id: "wave-113", start: "#0a6f3f", end: "#4e050f", accent: "#7a2290", blur: 38, scale: 1.47 },
  { id: "wave-114", start: "#3a9140", end: "#6f990c", accent: "#ee18ef", blur: 74, scale: 1.26 },
  { id: "wave-115", start: "#bcdfd4", end: "#55e875", accent: "#3aa40d", blur: 79, scale: 1.82 },
  { id: "wave-116", start: "#9f407e", end: "#3758b8", accent: "#0d25b8", blur: 89, scale: 1.31 },
  { id: "wave-117", start: "#c0283b", end: "#cb164a", accent: "#658b7b", blur: 34, scale: 1.59 },
  { id: "wave-118", start: "#7c56c1", end: "#342c68", accent: "#9a690b", blur: 84, scale: 1.68 },
  { id: "wave-119", start: "#3dfaed", end: "#150703", accent: "#b1c4b1", blur: 64, scale: 1.43 },
  { id: "wave-120", start: "#bdbb77", end: "#234e4c", accent: "#aeb5da", blur: 30, scale: 1.85 },
];

const featureCatalogue = [
  {
    id: "feature-1",
    icon: Command,
    title: "Expérience 001",
    tagline: "Une orchestration pixel-perfect 001",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-2",
    icon: Lightbulb,
    title: "Expérience 002",
    tagline: "Une orchestration pixel-perfect 002",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-3",
    icon: Shield,
    title: "Expérience 003",
    tagline: "Une orchestration pixel-perfect 003",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-4",
    icon: Cpu,
    title: "Expérience 004",
    tagline: "Une orchestration pixel-perfect 004",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-5",
    icon: Layers,
    title: "Expérience 005",
    tagline: "Une orchestration pixel-perfect 005",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-6",
    icon: PieChart,
    title: "Expérience 006",
    tagline: "Une orchestration pixel-perfect 006",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-7",
    icon: BarChart3,
    title: "Expérience 007",
    tagline: "Une orchestration pixel-perfect 007",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-8",
    icon: Fingerprint,
    title: "Expérience 008",
    tagline: "Une orchestration pixel-perfect 008",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-9",
    icon: Monitor,
    title: "Expérience 009",
    tagline: "Une orchestration pixel-perfect 009",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-10",
    icon: PhoneCall,
    title: "Expérience 010",
    tagline: "Une orchestration pixel-perfect 010",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-11",
    icon: TabletSmartphone,
    title: "Expérience 011",
    tagline: "Une orchestration pixel-perfect 011",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-12",
    icon: Mail,
    title: "Expérience 012",
    tagline: "Une orchestration pixel-perfect 012",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-13",
    icon: MessageCircle,
    title: "Expérience 013",
    tagline: "Une orchestration pixel-perfect 013",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-14",
    icon: Sparkle,
    title: "Expérience 014",
    tagline: "Une orchestration pixel-perfect 014",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-15",
    icon: Aperture,
    title: "Expérience 015",
    tagline: "Une orchestration pixel-perfect 015",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-16",
    icon: Globe,
    title: "Expérience 016",
    tagline: "Une orchestration pixel-perfect 016",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-17",
    icon: LineChart,
    title: "Expérience 017",
    tagline: "Une orchestration pixel-perfect 017",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-18",
    icon: SquareStack,
    title: "Expérience 018",
    tagline: "Une orchestration pixel-perfect 018",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-19",
    icon: Star,
    title: "Expérience 019",
    tagline: "Une orchestration pixel-perfect 019",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-20",
    icon: Lock,
    title: "Expérience 020",
    tagline: "Une orchestration pixel-perfect 020",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-21",
    icon: Timer,
    title: "Expérience 021",
    tagline: "Une orchestration pixel-perfect 021",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-22",
    icon: PenTool,
    title: "Expérience 022",
    tagline: "Une orchestration pixel-perfect 022",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-23",
    icon: Waves,
    title: "Expérience 023",
    tagline: "Une orchestration pixel-perfect 023",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-24",
    icon: Flame,
    title: "Expérience 024",
    tagline: "Une orchestration pixel-perfect 024",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-25",
    icon: Radar,
    title: "Expérience 025",
    tagline: "Une orchestration pixel-perfect 025",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-26",
    icon: Command,
    title: "Expérience 026",
    tagline: "Une orchestration pixel-perfect 026",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-27",
    icon: Lightbulb,
    title: "Expérience 027",
    tagline: "Une orchestration pixel-perfect 027",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-28",
    icon: Shield,
    title: "Expérience 028",
    tagline: "Une orchestration pixel-perfect 028",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-29",
    icon: Cpu,
    title: "Expérience 029",
    tagline: "Une orchestration pixel-perfect 029",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-30",
    icon: Layers,
    title: "Expérience 030",
    tagline: "Une orchestration pixel-perfect 030",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-31",
    icon: PieChart,
    title: "Expérience 031",
    tagline: "Une orchestration pixel-perfect 031",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-32",
    icon: BarChart3,
    title: "Expérience 032",
    tagline: "Une orchestration pixel-perfect 032",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-33",
    icon: Fingerprint,
    title: "Expérience 033",
    tagline: "Une orchestration pixel-perfect 033",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-34",
    icon: Monitor,
    title: "Expérience 034",
    tagline: "Une orchestration pixel-perfect 034",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-35",
    icon: PhoneCall,
    title: "Expérience 035",
    tagline: "Une orchestration pixel-perfect 035",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-36",
    icon: TabletSmartphone,
    title: "Expérience 036",
    tagline: "Une orchestration pixel-perfect 036",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-37",
    icon: Mail,
    title: "Expérience 037",
    tagline: "Une orchestration pixel-perfect 037",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-38",
    icon: MessageCircle,
    title: "Expérience 038",
    tagline: "Une orchestration pixel-perfect 038",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-39",
    icon: Sparkle,
    title: "Expérience 039",
    tagline: "Une orchestration pixel-perfect 039",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-40",
    icon: Aperture,
    title: "Expérience 040",
    tagline: "Une orchestration pixel-perfect 040",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-41",
    icon: Globe,
    title: "Expérience 041",
    tagline: "Une orchestration pixel-perfect 041",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-42",
    icon: LineChart,
    title: "Expérience 042",
    tagline: "Une orchestration pixel-perfect 042",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-43",
    icon: SquareStack,
    title: "Expérience 043",
    tagline: "Une orchestration pixel-perfect 043",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-44",
    icon: Star,
    title: "Expérience 044",
    tagline: "Une orchestration pixel-perfect 044",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-45",
    icon: Lock,
    title: "Expérience 045",
    tagline: "Une orchestration pixel-perfect 045",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-46",
    icon: Timer,
    title: "Expérience 046",
    tagline: "Une orchestration pixel-perfect 046",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-47",
    icon: PenTool,
    title: "Expérience 047",
    tagline: "Une orchestration pixel-perfect 047",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-48",
    icon: Waves,
    title: "Expérience 048",
    tagline: "Une orchestration pixel-perfect 048",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-49",
    icon: Flame,
    title: "Expérience 049",
    tagline: "Une orchestration pixel-perfect 049",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-50",
    icon: Radar,
    title: "Expérience 050",
    tagline: "Une orchestration pixel-perfect 050",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-51",
    icon: Command,
    title: "Expérience 051",
    tagline: "Une orchestration pixel-perfect 051",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-52",
    icon: Lightbulb,
    title: "Expérience 052",
    tagline: "Une orchestration pixel-perfect 052",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-53",
    icon: Shield,
    title: "Expérience 053",
    tagline: "Une orchestration pixel-perfect 053",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-54",
    icon: Cpu,
    title: "Expérience 054",
    tagline: "Une orchestration pixel-perfect 054",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-55",
    icon: Layers,
    title: "Expérience 055",
    tagline: "Une orchestration pixel-perfect 055",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-56",
    icon: PieChart,
    title: "Expérience 056",
    tagline: "Une orchestration pixel-perfect 056",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-57",
    icon: BarChart3,
    title: "Expérience 057",
    tagline: "Une orchestration pixel-perfect 057",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-58",
    icon: Fingerprint,
    title: "Expérience 058",
    tagline: "Une orchestration pixel-perfect 058",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-59",
    icon: Monitor,
    title: "Expérience 059",
    tagline: "Une orchestration pixel-perfect 059",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-60",
    icon: PhoneCall,
    title: "Expérience 060",
    tagline: "Une orchestration pixel-perfect 060",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-61",
    icon: TabletSmartphone,
    title: "Expérience 061",
    tagline: "Une orchestration pixel-perfect 061",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-62",
    icon: Mail,
    title: "Expérience 062",
    tagline: "Une orchestration pixel-perfect 062",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-63",
    icon: MessageCircle,
    title: "Expérience 063",
    tagline: "Une orchestration pixel-perfect 063",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-64",
    icon: Sparkle,
    title: "Expérience 064",
    tagline: "Une orchestration pixel-perfect 064",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-65",
    icon: Aperture,
    title: "Expérience 065",
    tagline: "Une orchestration pixel-perfect 065",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-66",
    icon: Globe,
    title: "Expérience 066",
    tagline: "Une orchestration pixel-perfect 066",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-67",
    icon: LineChart,
    title: "Expérience 067",
    tagline: "Une orchestration pixel-perfect 067",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-68",
    icon: SquareStack,
    title: "Expérience 068",
    tagline: "Une orchestration pixel-perfect 068",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-69",
    icon: Star,
    title: "Expérience 069",
    tagline: "Une orchestration pixel-perfect 069",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-70",
    icon: Lock,
    title: "Expérience 070",
    tagline: "Une orchestration pixel-perfect 070",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-71",
    icon: Timer,
    title: "Expérience 071",
    tagline: "Une orchestration pixel-perfect 071",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-72",
    icon: PenTool,
    title: "Expérience 072",
    tagline: "Une orchestration pixel-perfect 072",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-73",
    icon: Waves,
    title: "Expérience 073",
    tagline: "Une orchestration pixel-perfect 073",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-74",
    icon: Flame,
    title: "Expérience 074",
    tagline: "Une orchestration pixel-perfect 074",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-75",
    icon: Radar,
    title: "Expérience 075",
    tagline: "Une orchestration pixel-perfect 075",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-76",
    icon: Command,
    title: "Expérience 076",
    tagline: "Une orchestration pixel-perfect 076",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-77",
    icon: Lightbulb,
    title: "Expérience 077",
    tagline: "Une orchestration pixel-perfect 077",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-78",
    icon: Shield,
    title: "Expérience 078",
    tagline: "Une orchestration pixel-perfect 078",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-79",
    icon: Cpu,
    title: "Expérience 079",
    tagline: "Une orchestration pixel-perfect 079",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-80",
    icon: Layers,
    title: "Expérience 080",
    tagline: "Une orchestration pixel-perfect 080",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-81",
    icon: PieChart,
    title: "Expérience 081",
    tagline: "Une orchestration pixel-perfect 081",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-82",
    icon: BarChart3,
    title: "Expérience 082",
    tagline: "Une orchestration pixel-perfect 082",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-83",
    icon: Fingerprint,
    title: "Expérience 083",
    tagline: "Une orchestration pixel-perfect 083",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-84",
    icon: Monitor,
    title: "Expérience 084",
    tagline: "Une orchestration pixel-perfect 084",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-85",
    icon: PhoneCall,
    title: "Expérience 085",
    tagline: "Une orchestration pixel-perfect 085",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-86",
    icon: TabletSmartphone,
    title: "Expérience 086",
    tagline: "Une orchestration pixel-perfect 086",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-87",
    icon: Mail,
    title: "Expérience 087",
    tagline: "Une orchestration pixel-perfect 087",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-88",
    icon: MessageCircle,
    title: "Expérience 088",
    tagline: "Une orchestration pixel-perfect 088",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-89",
    icon: Sparkle,
    title: "Expérience 089",
    tagline: "Une orchestration pixel-perfect 089",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-90",
    icon: Aperture,
    title: "Expérience 090",
    tagline: "Une orchestration pixel-perfect 090",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-91",
    icon: Globe,
    title: "Expérience 091",
    tagline: "Une orchestration pixel-perfect 091",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-92",
    icon: LineChart,
    title: "Expérience 092",
    tagline: "Une orchestration pixel-perfect 092",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-93",
    icon: SquareStack,
    title: "Expérience 093",
    tagline: "Une orchestration pixel-perfect 093",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-94",
    icon: Star,
    title: "Expérience 094",
    tagline: "Une orchestration pixel-perfect 094",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-95",
    icon: Lock,
    title: "Expérience 095",
    tagline: "Une orchestration pixel-perfect 095",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-96",
    icon: Timer,
    title: "Expérience 096",
    tagline: "Une orchestration pixel-perfect 096",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-97",
    icon: PenTool,
    title: "Expérience 097",
    tagline: "Une orchestration pixel-perfect 097",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-98",
    icon: Waves,
    title: "Expérience 098",
    tagline: "Une orchestration pixel-perfect 098",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-99",
    icon: Flame,
    title: "Expérience 099",
    tagline: "Une orchestration pixel-perfect 099",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-100",
    icon: Radar,
    title: "Expérience 100",
    tagline: "Une orchestration pixel-perfect 100",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-101",
    icon: Command,
    title: "Expérience 101",
    tagline: "Une orchestration pixel-perfect 101",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-102",
    icon: Lightbulb,
    title: "Expérience 102",
    tagline: "Une orchestration pixel-perfect 102",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-103",
    icon: Shield,
    title: "Expérience 103",
    tagline: "Une orchestration pixel-perfect 103",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-104",
    icon: Cpu,
    title: "Expérience 104",
    tagline: "Une orchestration pixel-perfect 104",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-105",
    icon: Layers,
    title: "Expérience 105",
    tagline: "Une orchestration pixel-perfect 105",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-106",
    icon: PieChart,
    title: "Expérience 106",
    tagline: "Une orchestration pixel-perfect 106",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-107",
    icon: BarChart3,
    title: "Expérience 107",
    tagline: "Une orchestration pixel-perfect 107",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-108",
    icon: Fingerprint,
    title: "Expérience 108",
    tagline: "Une orchestration pixel-perfect 108",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-109",
    icon: Monitor,
    title: "Expérience 109",
    tagline: "Une orchestration pixel-perfect 109",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-110",
    icon: PhoneCall,
    title: "Expérience 110",
    tagline: "Une orchestration pixel-perfect 110",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-111",
    icon: TabletSmartphone,
    title: "Expérience 111",
    tagline: "Une orchestration pixel-perfect 111",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-112",
    icon: Mail,
    title: "Expérience 112",
    tagline: "Une orchestration pixel-perfect 112",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-113",
    icon: MessageCircle,
    title: "Expérience 113",
    tagline: "Une orchestration pixel-perfect 113",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-114",
    icon: Sparkle,
    title: "Expérience 114",
    tagline: "Une orchestration pixel-perfect 114",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-115",
    icon: Aperture,
    title: "Expérience 115",
    tagline: "Une orchestration pixel-perfect 115",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-116",
    icon: Globe,
    title: "Expérience 116",
    tagline: "Une orchestration pixel-perfect 116",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-117",
    icon: LineChart,
    title: "Expérience 117",
    tagline: "Une orchestration pixel-perfect 117",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-118",
    icon: SquareStack,
    title: "Expérience 118",
    tagline: "Une orchestration pixel-perfect 118",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-119",
    icon: Star,
    title: "Expérience 119",
    tagline: "Une orchestration pixel-perfect 119",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-120",
    icon: Lock,
    title: "Expérience 120",
    tagline: "Une orchestration pixel-perfect 120",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-121",
    icon: Timer,
    title: "Expérience 121",
    tagline: "Une orchestration pixel-perfect 121",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-122",
    icon: PenTool,
    title: "Expérience 122",
    tagline: "Une orchestration pixel-perfect 122",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-123",
    icon: Waves,
    title: "Expérience 123",
    tagline: "Une orchestration pixel-perfect 123",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-124",
    icon: Flame,
    title: "Expérience 124",
    tagline: "Une orchestration pixel-perfect 124",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-125",
    icon: Radar,
    title: "Expérience 125",
    tagline: "Une orchestration pixel-perfect 125",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-126",
    icon: Command,
    title: "Expérience 126",
    tagline: "Une orchestration pixel-perfect 126",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-127",
    icon: Lightbulb,
    title: "Expérience 127",
    tagline: "Une orchestration pixel-perfect 127",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-128",
    icon: Shield,
    title: "Expérience 128",
    tagline: "Une orchestration pixel-perfect 128",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-129",
    icon: Cpu,
    title: "Expérience 129",
    tagline: "Une orchestration pixel-perfect 129",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-130",
    icon: Layers,
    title: "Expérience 130",
    tagline: "Une orchestration pixel-perfect 130",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-131",
    icon: PieChart,
    title: "Expérience 131",
    tagline: "Une orchestration pixel-perfect 131",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-132",
    icon: BarChart3,
    title: "Expérience 132",
    tagline: "Une orchestration pixel-perfect 132",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-133",
    icon: Fingerprint,
    title: "Expérience 133",
    tagline: "Une orchestration pixel-perfect 133",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-134",
    icon: Monitor,
    title: "Expérience 134",
    tagline: "Une orchestration pixel-perfect 134",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-135",
    icon: PhoneCall,
    title: "Expérience 135",
    tagline: "Une orchestration pixel-perfect 135",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-136",
    icon: TabletSmartphone,
    title: "Expérience 136",
    tagline: "Une orchestration pixel-perfect 136",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-137",
    icon: Mail,
    title: "Expérience 137",
    tagline: "Une orchestration pixel-perfect 137",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-138",
    icon: MessageCircle,
    title: "Expérience 138",
    tagline: "Une orchestration pixel-perfect 138",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-139",
    icon: Sparkle,
    title: "Expérience 139",
    tagline: "Une orchestration pixel-perfect 139",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-140",
    icon: Aperture,
    title: "Expérience 140",
    tagline: "Une orchestration pixel-perfect 140",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-141",
    icon: Globe,
    title: "Expérience 141",
    tagline: "Une orchestration pixel-perfect 141",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-142",
    icon: LineChart,
    title: "Expérience 142",
    tagline: "Une orchestration pixel-perfect 142",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-143",
    icon: SquareStack,
    title: "Expérience 143",
    tagline: "Une orchestration pixel-perfect 143",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-144",
    icon: Star,
    title: "Expérience 144",
    tagline: "Une orchestration pixel-perfect 144",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-145",
    icon: Lock,
    title: "Expérience 145",
    tagline: "Une orchestration pixel-perfect 145",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-146",
    icon: Timer,
    title: "Expérience 146",
    tagline: "Une orchestration pixel-perfect 146",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-147",
    icon: PenTool,
    title: "Expérience 147",
    tagline: "Une orchestration pixel-perfect 147",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-148",
    icon: Waves,
    title: "Expérience 148",
    tagline: "Une orchestration pixel-perfect 148",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-149",
    icon: Flame,
    title: "Expérience 149",
    tagline: "Une orchestration pixel-perfect 149",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-150",
    icon: Radar,
    title: "Expérience 150",
    tagline: "Une orchestration pixel-perfect 150",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-151",
    icon: Command,
    title: "Expérience 151",
    tagline: "Une orchestration pixel-perfect 151",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-152",
    icon: Lightbulb,
    title: "Expérience 152",
    tagline: "Une orchestration pixel-perfect 152",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-153",
    icon: Shield,
    title: "Expérience 153",
    tagline: "Une orchestration pixel-perfect 153",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-154",
    icon: Cpu,
    title: "Expérience 154",
    tagline: "Une orchestration pixel-perfect 154",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-155",
    icon: Layers,
    title: "Expérience 155",
    tagline: "Une orchestration pixel-perfect 155",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-156",
    icon: PieChart,
    title: "Expérience 156",
    tagline: "Une orchestration pixel-perfect 156",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-157",
    icon: BarChart3,
    title: "Expérience 157",
    tagline: "Une orchestration pixel-perfect 157",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-158",
    icon: Fingerprint,
    title: "Expérience 158",
    tagline: "Une orchestration pixel-perfect 158",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-159",
    icon: Monitor,
    title: "Expérience 159",
    tagline: "Une orchestration pixel-perfect 159",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
  {
    id: "feature-160",
    icon: PhoneCall,
    title: "Expérience 160",
    tagline: "Une orchestration pixel-perfect 160",
    description: "Nous composons des interfaces sophistiquées et mémorables, mêlant précision fonctionnelle et poésie visuelle pour délivrer une expérience digne des meilleurs sites premium. Ce module gère la synchronisation multi-écran, la clarté éditoriale et l'alignement des flux de données.",
  },
];

const transformationTimeline = [
  {
    phase: "Phase 01",
    title: "Cap vers l'excellence 01",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 01",
  },
  {
    phase: "Phase 02",
    title: "Cap vers l'excellence 02",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 02",
  },
  {
    phase: "Phase 03",
    title: "Cap vers l'excellence 03",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 03",
  },
  {
    phase: "Phase 04",
    title: "Cap vers l'excellence 04",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 04",
  },
  {
    phase: "Phase 05",
    title: "Cap vers l'excellence 05",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 05",
  },
  {
    phase: "Phase 06",
    title: "Cap vers l'excellence 06",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 06",
  },
  {
    phase: "Phase 07",
    title: "Cap vers l'excellence 07",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 07",
  },
  {
    phase: "Phase 08",
    title: "Cap vers l'excellence 08",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 08",
  },
  {
    phase: "Phase 09",
    title: "Cap vers l'excellence 09",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 09",
  },
  {
    phase: "Phase 10",
    title: "Cap vers l'excellence 10",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 10",
  },
  {
    phase: "Phase 11",
    title: "Cap vers l'excellence 11",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 11",
  },
  {
    phase: "Phase 12",
    title: "Cap vers l'excellence 12",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 12",
  },
  {
    phase: "Phase 13",
    title: "Cap vers l'excellence 13",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 13",
  },
  {
    phase: "Phase 14",
    title: "Cap vers l'excellence 14",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 14",
  },
  {
    phase: "Phase 15",
    title: "Cap vers l'excellence 15",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 15",
  },
  {
    phase: "Phase 16",
    title: "Cap vers l'excellence 16",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 16",
  },
  {
    phase: "Phase 17",
    title: "Cap vers l'excellence 17",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 17",
  },
  {
    phase: "Phase 18",
    title: "Cap vers l'excellence 18",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 18",
  },
  {
    phase: "Phase 19",
    title: "Cap vers l'excellence 19",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 19",
  },
  {
    phase: "Phase 20",
    title: "Cap vers l'excellence 20",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 20",
  },
  {
    phase: "Phase 21",
    title: "Cap vers l'excellence 21",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 21",
  },
  {
    phase: "Phase 22",
    title: "Cap vers l'excellence 22",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 22",
  },
  {
    phase: "Phase 23",
    title: "Cap vers l'excellence 23",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 23",
  },
  {
    phase: "Phase 24",
    title: "Cap vers l'excellence 24",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 24",
  },
  {
    phase: "Phase 25",
    title: "Cap vers l'excellence 25",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 25",
  },
  {
    phase: "Phase 26",
    title: "Cap vers l'excellence 26",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 26",
  },
  {
    phase: "Phase 27",
    title: "Cap vers l'excellence 27",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 27",
  },
  {
    phase: "Phase 28",
    title: "Cap vers l'excellence 28",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 28",
  },
  {
    phase: "Phase 29",
    title: "Cap vers l'excellence 29",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 29",
  },
  {
    phase: "Phase 30",
    title: "Cap vers l'excellence 30",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 30",
  },
  {
    phase: "Phase 31",
    title: "Cap vers l'excellence 31",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 31",
  },
  {
    phase: "Phase 32",
    title: "Cap vers l'excellence 32",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 32",
  },
  {
    phase: "Phase 33",
    title: "Cap vers l'excellence 33",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 33",
  },
  {
    phase: "Phase 34",
    title: "Cap vers l'excellence 34",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 34",
  },
  {
    phase: "Phase 35",
    title: "Cap vers l'excellence 35",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 35",
  },
  {
    phase: "Phase 36",
    title: "Cap vers l'excellence 36",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 36",
  },
  {
    phase: "Phase 37",
    title: "Cap vers l'excellence 37",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 37",
  },
  {
    phase: "Phase 38",
    title: "Cap vers l'excellence 38",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 38",
  },
  {
    phase: "Phase 39",
    title: "Cap vers l'excellence 39",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 39",
  },
  {
    phase: "Phase 40",
    title: "Cap vers l'excellence 40",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 40",
  },
  {
    phase: "Phase 41",
    title: "Cap vers l'excellence 41",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 41",
  },
  {
    phase: "Phase 42",
    title: "Cap vers l'excellence 42",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 42",
  },
  {
    phase: "Phase 43",
    title: "Cap vers l'excellence 43",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 43",
  },
  {
    phase: "Phase 44",
    title: "Cap vers l'excellence 44",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 44",
  },
  {
    phase: "Phase 45",
    title: "Cap vers l'excellence 45",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 45",
  },
  {
    phase: "Phase 46",
    title: "Cap vers l'excellence 46",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 46",
  },
  {
    phase: "Phase 47",
    title: "Cap vers l'excellence 47",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 47",
  },
  {
    phase: "Phase 48",
    title: "Cap vers l'excellence 48",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 48",
  },
  {
    phase: "Phase 49",
    title: "Cap vers l'excellence 49",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 49",
  },
  {
    phase: "Phase 50",
    title: "Cap vers l'excellence 50",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 50",
  },
  {
    phase: "Phase 51",
    title: "Cap vers l'excellence 51",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 51",
  },
  {
    phase: "Phase 52",
    title: "Cap vers l'excellence 52",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 52",
  },
  {
    phase: "Phase 53",
    title: "Cap vers l'excellence 53",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 53",
  },
  {
    phase: "Phase 54",
    title: "Cap vers l'excellence 54",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 54",
  },
  {
    phase: "Phase 55",
    title: "Cap vers l'excellence 55",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 55",
  },
  {
    phase: "Phase 56",
    title: "Cap vers l'excellence 56",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 56",
  },
  {
    phase: "Phase 57",
    title: "Cap vers l'excellence 57",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 57",
  },
  {
    phase: "Phase 58",
    title: "Cap vers l'excellence 58",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 58",
  },
  {
    phase: "Phase 59",
    title: "Cap vers l'excellence 59",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 59",
  },
  {
    phase: "Phase 60",
    title: "Cap vers l'excellence 60",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 60",
  },
  {
    phase: "Phase 61",
    title: "Cap vers l'excellence 61",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 61",
  },
  {
    phase: "Phase 62",
    title: "Cap vers l'excellence 62",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 62",
  },
  {
    phase: "Phase 63",
    title: "Cap vers l'excellence 63",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 63",
  },
  {
    phase: "Phase 64",
    title: "Cap vers l'excellence 64",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 64",
  },
  {
    phase: "Phase 65",
    title: "Cap vers l'excellence 65",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 65",
  },
  {
    phase: "Phase 66",
    title: "Cap vers l'excellence 66",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 66",
  },
  {
    phase: "Phase 67",
    title: "Cap vers l'excellence 67",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 67",
  },
  {
    phase: "Phase 68",
    title: "Cap vers l'excellence 68",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 68",
  },
  {
    phase: "Phase 69",
    title: "Cap vers l'excellence 69",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 69",
  },
  {
    phase: "Phase 70",
    title: "Cap vers l'excellence 70",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 70",
  },
  {
    phase: "Phase 71",
    title: "Cap vers l'excellence 71",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 71",
  },
  {
    phase: "Phase 72",
    title: "Cap vers l'excellence 72",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 72",
  },
  {
    phase: "Phase 73",
    title: "Cap vers l'excellence 73",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 73",
  },
  {
    phase: "Phase 74",
    title: "Cap vers l'excellence 74",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 74",
  },
  {
    phase: "Phase 75",
    title: "Cap vers l'excellence 75",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 75",
  },
  {
    phase: "Phase 76",
    title: "Cap vers l'excellence 76",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 76",
  },
  {
    phase: "Phase 77",
    title: "Cap vers l'excellence 77",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 77",
  },
  {
    phase: "Phase 78",
    title: "Cap vers l'excellence 78",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 78",
  },
  {
    phase: "Phase 79",
    title: "Cap vers l'excellence 79",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 79",
  },
  {
    phase: "Phase 80",
    title: "Cap vers l'excellence 80",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 80",
  },
  {
    phase: "Phase 81",
    title: "Cap vers l'excellence 81",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 81",
  },
  {
    phase: "Phase 82",
    title: "Cap vers l'excellence 82",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 82",
  },
  {
    phase: "Phase 83",
    title: "Cap vers l'excellence 83",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 83",
  },
  {
    phase: "Phase 84",
    title: "Cap vers l'excellence 84",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 84",
  },
  {
    phase: "Phase 85",
    title: "Cap vers l'excellence 85",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 85",
  },
  {
    phase: "Phase 86",
    title: "Cap vers l'excellence 86",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 86",
  },
  {
    phase: "Phase 87",
    title: "Cap vers l'excellence 87",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 87",
  },
  {
    phase: "Phase 88",
    title: "Cap vers l'excellence 88",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 88",
  },
  {
    phase: "Phase 89",
    title: "Cap vers l'excellence 89",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 89",
  },
  {
    phase: "Phase 90",
    title: "Cap vers l'excellence 90",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 90",
  },
  {
    phase: "Phase 91",
    title: "Cap vers l'excellence 91",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 91",
  },
  {
    phase: "Phase 92",
    title: "Cap vers l'excellence 92",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 92",
  },
  {
    phase: "Phase 93",
    title: "Cap vers l'excellence 93",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 93",
  },
  {
    phase: "Phase 94",
    title: "Cap vers l'excellence 94",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 94",
  },
  {
    phase: "Phase 95",
    title: "Cap vers l'excellence 95",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 95",
  },
  {
    phase: "Phase 96",
    title: "Cap vers l'excellence 96",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 96",
  },
  {
    phase: "Phase 97",
    title: "Cap vers l'excellence 97",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 97",
  },
  {
    phase: "Phase 98",
    title: "Cap vers l'excellence 98",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 98",
  },
  {
    phase: "Phase 99",
    title: "Cap vers l'excellence 99",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 99",
  },
  {
    phase: "Phase 100",
    title: "Cap vers l'excellence 100",
    description: "Chaque étape est conçue comme une scène immersive : diagnostic, design sonore, prototypage interactif et déploiement assisté. Nous sculptons une expérience audiovisuelle qui donne confiance et révèle la valeur métier.",
    milestone: "Semaine 100",
  },
];

const ecosystemStreams = [
  {
    id: "stream-1",
    label: "Écosystème 001",
    intensity: 0.82,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-2",
    label: "Écosystème 002",
    intensity: 0.11,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-3",
    label: "Écosystème 003",
    intensity: 0.96,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-4",
    label: "Écosystème 004",
    intensity: 0.64,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-5",
    label: "Écosystème 005",
    intensity: 0.83,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-6",
    label: "Écosystème 006",
    intensity: 0.71,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-7",
    label: "Écosystème 007",
    intensity: 0.44,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-8",
    label: "Écosystème 008",
    intensity: 0.73,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-9",
    label: "Écosystème 009",
    intensity: 0.97,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-10",
    label: "Écosystème 010",
    intensity: 0.27,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-11",
    label: "Écosystème 011",
    intensity: 0.81,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-12",
    label: "Écosystème 012",
    intensity: 0.54,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-13",
    label: "Écosystème 013",
    intensity: 0.48,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-14",
    label: "Écosystème 014",
    intensity: 0.44,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-15",
    label: "Écosystème 015",
    intensity: 0.73,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-16",
    label: "Écosystème 016",
    intensity: 0.27,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-17",
    label: "Écosystème 017",
    intensity: 0.85,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-18",
    label: "Écosystème 018",
    intensity: 0.83,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-19",
    label: "Écosystème 019",
    intensity: 0.09,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-20",
    label: "Écosystème 020",
    intensity: 0.88,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-21",
    label: "Écosystème 021",
    intensity: 0.24,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-22",
    label: "Écosystème 022",
    intensity: 0.46,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-23",
    label: "Écosystème 023",
    intensity: 0.61,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-24",
    label: "Écosystème 024",
    intensity: 0.38,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-25",
    label: "Écosystème 025",
    intensity: 0.03,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-26",
    label: "Écosystème 026",
    intensity: 0.85,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-27",
    label: "Écosystème 027",
    intensity: 0.18,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-28",
    label: "Écosystème 028",
    intensity: 0.21,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-29",
    label: "Écosystème 029",
    intensity: 0.80,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-30",
    label: "Écosystème 030",
    intensity: 0.34,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-31",
    label: "Écosystème 031",
    intensity: 0.88,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-32",
    label: "Écosystème 032",
    intensity: 0.70,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-33",
    label: "Écosystème 033",
    intensity: 0.28,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-34",
    label: "Écosystème 034",
    intensity: 0.01,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-35",
    label: "Écosystème 035",
    intensity: 0.95,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-36",
    label: "Écosystème 036",
    intensity: 0.09,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-37",
    label: "Écosystème 037",
    intensity: 0.72,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-38",
    label: "Écosystème 038",
    intensity: 0.49,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-39",
    label: "Écosystème 039",
    intensity: 0.76,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-40",
    label: "Écosystème 040",
    intensity: 0.69,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-41",
    label: "Écosystème 041",
    intensity: 0.65,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-42",
    label: "Écosystème 042",
    intensity: 0.49,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-43",
    label: "Écosystème 043",
    intensity: 0.79,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-44",
    label: "Écosystème 044",
    intensity: 0.09,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-45",
    label: "Écosystème 045",
    intensity: 0.22,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-46",
    label: "Écosystème 046",
    intensity: 0.69,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-47",
    label: "Écosystème 047",
    intensity: 0.31,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-48",
    label: "Écosystème 048",
    intensity: 0.58,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-49",
    label: "Écosystème 049",
    intensity: 0.47,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-50",
    label: "Écosystème 050",
    intensity: 0.53,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-51",
    label: "Écosystème 051",
    intensity: 0.43,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-52",
    label: "Écosystème 052",
    intensity: 0.75,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-53",
    label: "Écosystème 053",
    intensity: 0.33,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-54",
    label: "Écosystème 054",
    intensity: 0.70,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-55",
    label: "Écosystème 055",
    intensity: 0.27,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-56",
    label: "Écosystème 056",
    intensity: 0.25,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-57",
    label: "Écosystème 057",
    intensity: 0.12,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-58",
    label: "Écosystème 058",
    intensity: 0.19,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-59",
    label: "Écosystème 059",
    intensity: 0.12,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-60",
    label: "Écosystème 060",
    intensity: 0.54,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-61",
    label: "Écosystème 061",
    intensity: 0.76,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-62",
    label: "Écosystème 062",
    intensity: 0.19,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-63",
    label: "Écosystème 063",
    intensity: 0.22,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-64",
    label: "Écosystème 064",
    intensity: 0.48,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-65",
    label: "Écosystème 065",
    intensity: 0.72,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-66",
    label: "Écosystème 066",
    intensity: 0.98,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-67",
    label: "Écosystème 067",
    intensity: 0.52,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-68",
    label: "Écosystème 068",
    intensity: 0.28,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-69",
    label: "Écosystème 069",
    intensity: 0.10,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-70",
    label: "Écosystème 070",
    intensity: 0.19,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-71",
    label: "Écosystème 071",
    intensity: 0.23,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-72",
    label: "Écosystème 072",
    intensity: 0.18,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-73",
    label: "Écosystème 073",
    intensity: 0.01,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-74",
    label: "Écosystème 074",
    intensity: 0.53,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-75",
    label: "Écosystème 075",
    intensity: 0.27,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-76",
    label: "Écosystème 076",
    intensity: 0.97,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-77",
    label: "Écosystème 077",
    intensity: 0.55,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-78",
    label: "Écosystème 078",
    intensity: 0.70,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-79",
    label: "Écosystème 079",
    intensity: 0.13,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-80",
    label: "Écosystème 080",
    intensity: 0.87,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-81",
    label: "Écosystème 081",
    intensity: 0.49,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-82",
    label: "Écosystème 082",
    intensity: 0.87,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-83",
    label: "Écosystème 083",
    intensity: 0.57,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-84",
    label: "Écosystème 084",
    intensity: 0.47,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-85",
    label: "Écosystème 085",
    intensity: 0.44,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-86",
    label: "Écosystème 086",
    intensity: 0.18,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-87",
    label: "Écosystème 087",
    intensity: 0.05,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-88",
    label: "Écosystème 088",
    intensity: 0.94,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-89",
    label: "Écosystème 089",
    intensity: 0.48,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-90",
    label: "Écosystème 090",
    intensity: 0.82,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-91",
    label: "Écosystème 091",
    intensity: 0.40,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-92",
    label: "Écosystème 092",
    intensity: 0.07,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-93",
    label: "Écosystème 093",
    intensity: 0.63,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-94",
    label: "Écosystème 094",
    intensity: 0.05,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-95",
    label: "Écosystème 095",
    intensity: 0.15,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-96",
    label: "Écosystème 096",
    intensity: 0.56,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-97",
    label: "Écosystème 097",
    intensity: 0.30,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-98",
    label: "Écosystème 098",
    intensity: 0.99,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-99",
    label: "Écosystème 099",
    intensity: 0.12,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-100",
    label: "Écosystème 100",
    intensity: 0.76,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-101",
    label: "Écosystème 101",
    intensity: 0.61,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-102",
    label: "Écosystème 102",
    intensity: 0.79,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-103",
    label: "Écosystème 103",
    intensity: 0.23,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-104",
    label: "Écosystème 104",
    intensity: 0.52,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-105",
    label: "Écosystème 105",
    intensity: 0.45,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-106",
    label: "Écosystème 106",
    intensity: 0.44,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-107",
    label: "Écosystème 107",
    intensity: 0.86,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-108",
    label: "Écosystème 108",
    intensity: 0.99,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-109",
    label: "Écosystème 109",
    intensity: 0.31,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-110",
    label: "Écosystème 110",
    intensity: 0.62,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-111",
    label: "Écosystème 111",
    intensity: 0.61,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-112",
    label: "Écosystème 112",
    intensity: 0.74,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-113",
    label: "Écosystème 113",
    intensity: 0.95,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-114",
    label: "Écosystème 114",
    intensity: 0.21,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-115",
    label: "Écosystème 115",
    intensity: 0.21,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-116",
    label: "Écosystème 116",
    intensity: 0.66,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-117",
    label: "Écosystème 117",
    intensity: 0.16,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-118",
    label: "Écosystème 118",
    intensity: 0.17,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-119",
    label: "Écosystème 119",
    intensity: 0.08,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-120",
    label: "Écosystème 120",
    intensity: 0.00,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-121",
    label: "Écosystème 121",
    intensity: 0.45,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-122",
    label: "Écosystème 122",
    intensity: 0.59,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-123",
    label: "Écosystème 123",
    intensity: 0.29,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-124",
    label: "Écosystème 124",
    intensity: 0.23,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-125",
    label: "Écosystème 125",
    intensity: 0.71,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-126",
    label: "Écosystème 126",
    intensity: 0.70,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-127",
    label: "Écosystème 127",
    intensity: 0.45,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-128",
    label: "Écosystème 128",
    intensity: 0.69,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-129",
    label: "Écosystème 129",
    intensity: 0.92,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-130",
    label: "Écosystème 130",
    intensity: 0.79,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-131",
    label: "Écosystème 131",
    intensity: 0.63,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-132",
    label: "Écosystème 132",
    intensity: 0.66,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-133",
    label: "Écosystème 133",
    intensity: 0.93,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-134",
    label: "Écosystème 134",
    intensity: 0.43,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-135",
    label: "Écosystème 135",
    intensity: 0.54,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-136",
    label: "Écosystème 136",
    intensity: 0.65,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-137",
    label: "Écosystème 137",
    intensity: 0.91,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-138",
    label: "Écosystème 138",
    intensity: 0.83,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-139",
    label: "Écosystème 139",
    intensity: 0.07,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-140",
    label: "Écosystème 140",
    intensity: 0.17,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-141",
    label: "Écosystème 141",
    intensity: 0.31,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-142",
    label: "Écosystème 142",
    intensity: 0.75,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-143",
    label: "Écosystème 143",
    intensity: 0.57,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-144",
    label: "Écosystème 144",
    intensity: 0.29,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-145",
    label: "Écosystème 145",
    intensity: 0.12,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-146",
    label: "Écosystème 146",
    intensity: 0.69,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-147",
    label: "Écosystème 147",
    intensity: 0.70,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-148",
    label: "Écosystème 148",
    intensity: 0.94,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-149",
    label: "Écosystème 149",
    intensity: 0.50,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
  {
    id: "stream-150",
    label: "Écosystème 150",
    intensity: 0.49,
    narrative: "Nous alignons design system, production applicative et culture de marque pour créer un espace numérique continu. Ce flux met en avant l'harmonie typographique, la diffusion lumineuse et la hiérarchisation des messages clés.",
  },
];

const luminousChapters = [
  {
    id: "chapter-1",
    title: "Chapitre signature 001",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 001",
  },
  {
    id: "chapter-2",
    title: "Chapitre signature 002",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 002",
  },
  {
    id: "chapter-3",
    title: "Chapitre signature 003",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 003",
  },
  {
    id: "chapter-4",
    title: "Chapitre signature 004",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 004",
  },
  {
    id: "chapter-5",
    title: "Chapitre signature 005",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 005",
  },
  {
    id: "chapter-6",
    title: "Chapitre signature 006",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 006",
  },
  {
    id: "chapter-7",
    title: "Chapitre signature 007",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 007",
  },
  {
    id: "chapter-8",
    title: "Chapitre signature 008",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 008",
  },
  {
    id: "chapter-9",
    title: "Chapitre signature 009",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 009",
  },
  {
    id: "chapter-10",
    title: "Chapitre signature 010",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 010",
  },
  {
    id: "chapter-11",
    title: "Chapitre signature 011",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 011",
  },
  {
    id: "chapter-12",
    title: "Chapitre signature 012",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 012",
  },
  {
    id: "chapter-13",
    title: "Chapitre signature 013",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 013",
  },
  {
    id: "chapter-14",
    title: "Chapitre signature 014",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 014",
  },
  {
    id: "chapter-15",
    title: "Chapitre signature 015",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 015",
  },
  {
    id: "chapter-16",
    title: "Chapitre signature 016",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 016",
  },
  {
    id: "chapter-17",
    title: "Chapitre signature 017",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 017",
  },
  {
    id: "chapter-18",
    title: "Chapitre signature 018",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 018",
  },
  {
    id: "chapter-19",
    title: "Chapitre signature 019",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 019",
  },
  {
    id: "chapter-20",
    title: "Chapitre signature 020",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 020",
  },
  {
    id: "chapter-21",
    title: "Chapitre signature 021",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 021",
  },
  {
    id: "chapter-22",
    title: "Chapitre signature 022",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 022",
  },
  {
    id: "chapter-23",
    title: "Chapitre signature 023",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 023",
  },
  {
    id: "chapter-24",
    title: "Chapitre signature 024",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 024",
  },
  {
    id: "chapter-25",
    title: "Chapitre signature 025",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 025",
  },
  {
    id: "chapter-26",
    title: "Chapitre signature 026",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 026",
  },
  {
    id: "chapter-27",
    title: "Chapitre signature 027",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 027",
  },
  {
    id: "chapter-28",
    title: "Chapitre signature 028",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 028",
  },
  {
    id: "chapter-29",
    title: "Chapitre signature 029",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 029",
  },
  {
    id: "chapter-30",
    title: "Chapitre signature 030",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 030",
  },
  {
    id: "chapter-31",
    title: "Chapitre signature 031",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 031",
  },
  {
    id: "chapter-32",
    title: "Chapitre signature 032",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 032",
  },
  {
    id: "chapter-33",
    title: "Chapitre signature 033",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 033",
  },
  {
    id: "chapter-34",
    title: "Chapitre signature 034",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 034",
  },
  {
    id: "chapter-35",
    title: "Chapitre signature 035",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 035",
  },
  {
    id: "chapter-36",
    title: "Chapitre signature 036",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 036",
  },
  {
    id: "chapter-37",
    title: "Chapitre signature 037",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 037",
  },
  {
    id: "chapter-38",
    title: "Chapitre signature 038",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 038",
  },
  {
    id: "chapter-39",
    title: "Chapitre signature 039",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 039",
  },
  {
    id: "chapter-40",
    title: "Chapitre signature 040",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 040",
  },
  {
    id: "chapter-41",
    title: "Chapitre signature 041",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 041",
  },
  {
    id: "chapter-42",
    title: "Chapitre signature 042",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 042",
  },
  {
    id: "chapter-43",
    title: "Chapitre signature 043",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 043",
  },
  {
    id: "chapter-44",
    title: "Chapitre signature 044",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 044",
  },
  {
    id: "chapter-45",
    title: "Chapitre signature 045",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 045",
  },
  {
    id: "chapter-46",
    title: "Chapitre signature 046",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 046",
  },
  {
    id: "chapter-47",
    title: "Chapitre signature 047",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 047",
  },
  {
    id: "chapter-48",
    title: "Chapitre signature 048",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 048",
  },
  {
    id: "chapter-49",
    title: "Chapitre signature 049",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 049",
  },
  {
    id: "chapter-50",
    title: "Chapitre signature 050",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 050",
  },
  {
    id: "chapter-51",
    title: "Chapitre signature 051",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 051",
  },
  {
    id: "chapter-52",
    title: "Chapitre signature 052",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 052",
  },
  {
    id: "chapter-53",
    title: "Chapitre signature 053",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 053",
  },
  {
    id: "chapter-54",
    title: "Chapitre signature 054",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 054",
  },
  {
    id: "chapter-55",
    title: "Chapitre signature 055",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 055",
  },
  {
    id: "chapter-56",
    title: "Chapitre signature 056",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 056",
  },
  {
    id: "chapter-57",
    title: "Chapitre signature 057",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 057",
  },
  {
    id: "chapter-58",
    title: "Chapitre signature 058",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 058",
  },
  {
    id: "chapter-59",
    title: "Chapitre signature 059",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 059",
  },
  {
    id: "chapter-60",
    title: "Chapitre signature 060",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 060",
  },
  {
    id: "chapter-61",
    title: "Chapitre signature 061",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 061",
  },
  {
    id: "chapter-62",
    title: "Chapitre signature 062",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 062",
  },
  {
    id: "chapter-63",
    title: "Chapitre signature 063",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 063",
  },
  {
    id: "chapter-64",
    title: "Chapitre signature 064",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 064",
  },
  {
    id: "chapter-65",
    title: "Chapitre signature 065",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 065",
  },
  {
    id: "chapter-66",
    title: "Chapitre signature 066",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 066",
  },
  {
    id: "chapter-67",
    title: "Chapitre signature 067",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 067",
  },
  {
    id: "chapter-68",
    title: "Chapitre signature 068",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 068",
  },
  {
    id: "chapter-69",
    title: "Chapitre signature 069",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 069",
  },
  {
    id: "chapter-70",
    title: "Chapitre signature 070",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 070",
  },
  {
    id: "chapter-71",
    title: "Chapitre signature 071",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 071",
  },
  {
    id: "chapter-72",
    title: "Chapitre signature 072",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 072",
  },
  {
    id: "chapter-73",
    title: "Chapitre signature 073",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 073",
  },
  {
    id: "chapter-74",
    title: "Chapitre signature 074",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 074",
  },
  {
    id: "chapter-75",
    title: "Chapitre signature 075",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 075",
  },
  {
    id: "chapter-76",
    title: "Chapitre signature 076",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 076",
  },
  {
    id: "chapter-77",
    title: "Chapitre signature 077",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 077",
  },
  {
    id: "chapter-78",
    title: "Chapitre signature 078",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 078",
  },
  {
    id: "chapter-79",
    title: "Chapitre signature 079",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 079",
  },
  {
    id: "chapter-80",
    title: "Chapitre signature 080",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 080",
  },
  {
    id: "chapter-81",
    title: "Chapitre signature 081",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 081",
  },
  {
    id: "chapter-82",
    title: "Chapitre signature 082",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 082",
  },
  {
    id: "chapter-83",
    title: "Chapitre signature 083",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 083",
  },
  {
    id: "chapter-84",
    title: "Chapitre signature 084",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 084",
  },
  {
    id: "chapter-85",
    title: "Chapitre signature 085",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 085",
  },
  {
    id: "chapter-86",
    title: "Chapitre signature 086",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 086",
  },
  {
    id: "chapter-87",
    title: "Chapitre signature 087",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 087",
  },
  {
    id: "chapter-88",
    title: "Chapitre signature 088",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 088",
  },
  {
    id: "chapter-89",
    title: "Chapitre signature 089",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 089",
  },
  {
    id: "chapter-90",
    title: "Chapitre signature 090",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 090",
  },
  {
    id: "chapter-91",
    title: "Chapitre signature 091",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 091",
  },
  {
    id: "chapter-92",
    title: "Chapitre signature 092",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 092",
  },
  {
    id: "chapter-93",
    title: "Chapitre signature 093",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 093",
  },
  {
    id: "chapter-94",
    title: "Chapitre signature 094",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 094",
  },
  {
    id: "chapter-95",
    title: "Chapitre signature 095",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 095",
  },
  {
    id: "chapter-96",
    title: "Chapitre signature 096",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 096",
  },
  {
    id: "chapter-97",
    title: "Chapitre signature 097",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 097",
  },
  {
    id: "chapter-98",
    title: "Chapitre signature 098",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 098",
  },
  {
    id: "chapter-99",
    title: "Chapitre signature 099",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 099",
  },
  {
    id: "chapter-100",
    title: "Chapitre signature 100",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 100",
  },
  {
    id: "chapter-101",
    title: "Chapitre signature 101",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 101",
  },
  {
    id: "chapter-102",
    title: "Chapitre signature 102",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 102",
  },
  {
    id: "chapter-103",
    title: "Chapitre signature 103",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 103",
  },
  {
    id: "chapter-104",
    title: "Chapitre signature 104",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 104",
  },
  {
    id: "chapter-105",
    title: "Chapitre signature 105",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 105",
  },
  {
    id: "chapter-106",
    title: "Chapitre signature 106",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 106",
  },
  {
    id: "chapter-107",
    title: "Chapitre signature 107",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 107",
  },
  {
    id: "chapter-108",
    title: "Chapitre signature 108",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 108",
  },
  {
    id: "chapter-109",
    title: "Chapitre signature 109",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 109",
  },
  {
    id: "chapter-110",
    title: "Chapitre signature 110",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 110",
  },
  {
    id: "chapter-111",
    title: "Chapitre signature 111",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 111",
  },
  {
    id: "chapter-112",
    title: "Chapitre signature 112",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 112",
  },
  {
    id: "chapter-113",
    title: "Chapitre signature 113",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 113",
  },
  {
    id: "chapter-114",
    title: "Chapitre signature 114",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 114",
  },
  {
    id: "chapter-115",
    title: "Chapitre signature 115",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 115",
  },
  {
    id: "chapter-116",
    title: "Chapitre signature 116",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 116",
  },
  {
    id: "chapter-117",
    title: "Chapitre signature 117",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 117",
  },
  {
    id: "chapter-118",
    title: "Chapitre signature 118",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 118",
  },
  {
    id: "chapter-119",
    title: "Chapitre signature 119",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 119",
  },
  {
    id: "chapter-120",
    title: "Chapitre signature 120",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 120",
  },
  {
    id: "chapter-121",
    title: "Chapitre signature 121",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 121",
  },
  {
    id: "chapter-122",
    title: "Chapitre signature 122",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 122",
  },
  {
    id: "chapter-123",
    title: "Chapitre signature 123",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 123",
  },
  {
    id: "chapter-124",
    title: "Chapitre signature 124",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 124",
  },
  {
    id: "chapter-125",
    title: "Chapitre signature 125",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 125",
  },
  {
    id: "chapter-126",
    title: "Chapitre signature 126",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 126",
  },
  {
    id: "chapter-127",
    title: "Chapitre signature 127",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 127",
  },
  {
    id: "chapter-128",
    title: "Chapitre signature 128",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 128",
  },
  {
    id: "chapter-129",
    title: "Chapitre signature 129",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 129",
  },
  {
    id: "chapter-130",
    title: "Chapitre signature 130",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 130",
  },
  {
    id: "chapter-131",
    title: "Chapitre signature 131",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 131",
  },
  {
    id: "chapter-132",
    title: "Chapitre signature 132",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 132",
  },
  {
    id: "chapter-133",
    title: "Chapitre signature 133",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 133",
  },
  {
    id: "chapter-134",
    title: "Chapitre signature 134",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 134",
  },
  {
    id: "chapter-135",
    title: "Chapitre signature 135",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 135",
  },
  {
    id: "chapter-136",
    title: "Chapitre signature 136",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 136",
  },
  {
    id: "chapter-137",
    title: "Chapitre signature 137",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 137",
  },
  {
    id: "chapter-138",
    title: "Chapitre signature 138",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 138",
  },
  {
    id: "chapter-139",
    title: "Chapitre signature 139",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 139",
  },
  {
    id: "chapter-140",
    title: "Chapitre signature 140",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 140",
  },
  {
    id: "chapter-141",
    title: "Chapitre signature 141",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 141",
  },
  {
    id: "chapter-142",
    title: "Chapitre signature 142",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 142",
  },
  {
    id: "chapter-143",
    title: "Chapitre signature 143",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 143",
  },
  {
    id: "chapter-144",
    title: "Chapitre signature 144",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 144",
  },
  {
    id: "chapter-145",
    title: "Chapitre signature 145",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 145",
  },
  {
    id: "chapter-146",
    title: "Chapitre signature 146",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 146",
  },
  {
    id: "chapter-147",
    title: "Chapitre signature 147",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 147",
  },
  {
    id: "chapter-148",
    title: "Chapitre signature 148",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 148",
  },
  {
    id: "chapter-149",
    title: "Chapitre signature 149",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 149",
  },
  {
    id: "chapter-150",
    title: "Chapitre signature 150",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 150",
  },
  {
    id: "chapter-151",
    title: "Chapitre signature 151",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 151",
  },
  {
    id: "chapter-152",
    title: "Chapitre signature 152",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 152",
  },
  {
    id: "chapter-153",
    title: "Chapitre signature 153",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 153",
  },
  {
    id: "chapter-154",
    title: "Chapitre signature 154",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 154",
  },
  {
    id: "chapter-155",
    title: "Chapitre signature 155",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 155",
  },
  {
    id: "chapter-156",
    title: "Chapitre signature 156",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 156",
  },
  {
    id: "chapter-157",
    title: "Chapitre signature 157",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 157",
  },
  {
    id: "chapter-158",
    title: "Chapitre signature 158",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 158",
  },
  {
    id: "chapter-159",
    title: "Chapitre signature 159",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 159",
  },
  {
    id: "chapter-160",
    title: "Chapitre signature 160",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 160",
  },
  {
    id: "chapter-161",
    title: "Chapitre signature 161",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 161",
  },
  {
    id: "chapter-162",
    title: "Chapitre signature 162",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 162",
  },
  {
    id: "chapter-163",
    title: "Chapitre signature 163",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 163",
  },
  {
    id: "chapter-164",
    title: "Chapitre signature 164",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 164",
  },
  {
    id: "chapter-165",
    title: "Chapitre signature 165",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 165",
  },
  {
    id: "chapter-166",
    title: "Chapitre signature 166",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 166",
  },
  {
    id: "chapter-167",
    title: "Chapitre signature 167",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 167",
  },
  {
    id: "chapter-168",
    title: "Chapitre signature 168",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 168",
  },
  {
    id: "chapter-169",
    title: "Chapitre signature 169",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 169",
  },
  {
    id: "chapter-170",
    title: "Chapitre signature 170",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 170",
  },
  {
    id: "chapter-171",
    title: "Chapitre signature 171",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 171",
  },
  {
    id: "chapter-172",
    title: "Chapitre signature 172",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 172",
  },
  {
    id: "chapter-173",
    title: "Chapitre signature 173",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 173",
  },
  {
    id: "chapter-174",
    title: "Chapitre signature 174",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 174",
  },
  {
    id: "chapter-175",
    title: "Chapitre signature 175",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 175",
  },
  {
    id: "chapter-176",
    title: "Chapitre signature 176",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 176",
  },
  {
    id: "chapter-177",
    title: "Chapitre signature 177",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 177",
  },
  {
    id: "chapter-178",
    title: "Chapitre signature 178",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 178",
  },
  {
    id: "chapter-179",
    title: "Chapitre signature 179",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 179",
  },
  {
    id: "chapter-180",
    title: "Chapitre signature 180",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 180",
  },
  {
    id: "chapter-181",
    title: "Chapitre signature 181",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 181",
  },
  {
    id: "chapter-182",
    title: "Chapitre signature 182",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 182",
  },
  {
    id: "chapter-183",
    title: "Chapitre signature 183",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 183",
  },
  {
    id: "chapter-184",
    title: "Chapitre signature 184",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 184",
  },
  {
    id: "chapter-185",
    title: "Chapitre signature 185",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 185",
  },
  {
    id: "chapter-186",
    title: "Chapitre signature 186",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 186",
  },
  {
    id: "chapter-187",
    title: "Chapitre signature 187",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 187",
  },
  {
    id: "chapter-188",
    title: "Chapitre signature 188",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 188",
  },
  {
    id: "chapter-189",
    title: "Chapitre signature 189",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 189",
  },
  {
    id: "chapter-190",
    title: "Chapitre signature 190",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 190",
  },
  {
    id: "chapter-191",
    title: "Chapitre signature 191",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 191",
  },
  {
    id: "chapter-192",
    title: "Chapitre signature 192",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 192",
  },
  {
    id: "chapter-193",
    title: "Chapitre signature 193",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 193",
  },
  {
    id: "chapter-194",
    title: "Chapitre signature 194",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 194",
  },
  {
    id: "chapter-195",
    title: "Chapitre signature 195",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 195",
  },
  {
    id: "chapter-196",
    title: "Chapitre signature 196",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 196",
  },
  {
    id: "chapter-197",
    title: "Chapitre signature 197",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 197",
  },
  {
    id: "chapter-198",
    title: "Chapitre signature 198",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 198",
  },
  {
    id: "chapter-199",
    title: "Chapitre signature 199",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 199",
  },
  {
    id: "chapter-200",
    title: "Chapitre signature 200",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 200",
  },
  {
    id: "chapter-201",
    title: "Chapitre signature 201",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 201",
  },
  {
    id: "chapter-202",
    title: "Chapitre signature 202",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 202",
  },
  {
    id: "chapter-203",
    title: "Chapitre signature 203",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 203",
  },
  {
    id: "chapter-204",
    title: "Chapitre signature 204",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 204",
  },
  {
    id: "chapter-205",
    title: "Chapitre signature 205",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 205",
  },
  {
    id: "chapter-206",
    title: "Chapitre signature 206",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 206",
  },
  {
    id: "chapter-207",
    title: "Chapitre signature 207",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 207",
  },
  {
    id: "chapter-208",
    title: "Chapitre signature 208",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 208",
  },
  {
    id: "chapter-209",
    title: "Chapitre signature 209",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 209",
  },
  {
    id: "chapter-210",
    title: "Chapitre signature 210",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 210",
  },
  {
    id: "chapter-211",
    title: "Chapitre signature 211",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 211",
  },
  {
    id: "chapter-212",
    title: "Chapitre signature 212",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 212",
  },
  {
    id: "chapter-213",
    title: "Chapitre signature 213",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 213",
  },
  {
    id: "chapter-214",
    title: "Chapitre signature 214",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 214",
  },
  {
    id: "chapter-215",
    title: "Chapitre signature 215",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 215",
  },
  {
    id: "chapter-216",
    title: "Chapitre signature 216",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 216",
  },
  {
    id: "chapter-217",
    title: "Chapitre signature 217",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 217",
  },
  {
    id: "chapter-218",
    title: "Chapitre signature 218",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 218",
  },
  {
    id: "chapter-219",
    title: "Chapitre signature 219",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 219",
  },
  {
    id: "chapter-220",
    title: "Chapitre signature 220",
    excerpt: "Une mise en scène narrative qui joue avec la profondeur, la lumière et le rythme visuel. Chaque chapitre révèle une palette de matériaux numériques pour raconter votre histoire avec intensité.",
    focus: "Focus 220",
  },
];

const awardsShowcase = [
  {
    id: "award-1",
    label: "Design Futures",
    year: 2001,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-2",
    label: "Digital Craft",
    year: 2002,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-3",
    label: "Interface Artistry",
    year: 2003,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-4",
    label: "Immersive Story",
    year: 2004,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-5",
    label: "Human Centered",
    year: 2005,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-6",
    label: "Innovation Lab",
    year: 2006,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-7",
    label: "Sonic Vision",
    year: 2007,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-8",
    label: "Cinematic Design",
    year: 2008,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-9",
    label: "Design Futures",
    year: 2009,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-10",
    label: "Digital Craft",
    year: 2010,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-11",
    label: "Interface Artistry",
    year: 2011,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-12",
    label: "Immersive Story",
    year: 2012,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-13",
    label: "Human Centered",
    year: 2013,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-14",
    label: "Innovation Lab",
    year: 2014,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-15",
    label: "Sonic Vision",
    year: 2015,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-16",
    label: "Cinematic Design",
    year: 2016,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-17",
    label: "Design Futures",
    year: 2017,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-18",
    label: "Digital Craft",
    year: 2018,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-19",
    label: "Interface Artistry",
    year: 2019,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-20",
    label: "Immersive Story",
    year: 2020,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-21",
    label: "Human Centered",
    year: 2021,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-22",
    label: "Innovation Lab",
    year: 2022,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-23",
    label: "Sonic Vision",
    year: 2000,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-24",
    label: "Cinematic Design",
    year: 2001,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-25",
    label: "Design Futures",
    year: 2002,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-26",
    label: "Digital Craft",
    year: 2003,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-27",
    label: "Interface Artistry",
    year: 2004,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-28",
    label: "Immersive Story",
    year: 2005,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-29",
    label: "Human Centered",
    year: 2006,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-30",
    label: "Innovation Lab",
    year: 2007,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-31",
    label: "Sonic Vision",
    year: 2008,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-32",
    label: "Cinematic Design",
    year: 2009,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-33",
    label: "Design Futures",
    year: 2010,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-34",
    label: "Digital Craft",
    year: 2011,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-35",
    label: "Interface Artistry",
    year: 2012,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-36",
    label: "Immersive Story",
    year: 2013,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-37",
    label: "Human Centered",
    year: 2014,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-38",
    label: "Innovation Lab",
    year: 2015,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-39",
    label: "Sonic Vision",
    year: 2016,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-40",
    label: "Cinematic Design",
    year: 2017,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-41",
    label: "Design Futures",
    year: 2018,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-42",
    label: "Digital Craft",
    year: 2019,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-43",
    label: "Interface Artistry",
    year: 2020,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-44",
    label: "Immersive Story",
    year: 2021,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-45",
    label: "Human Centered",
    year: 2022,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-46",
    label: "Innovation Lab",
    year: 2000,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-47",
    label: "Sonic Vision",
    year: 2001,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-48",
    label: "Cinematic Design",
    year: 2002,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-49",
    label: "Design Futures",
    year: 2003,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-50",
    label: "Digital Craft",
    year: 2004,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-51",
    label: "Interface Artistry",
    year: 2005,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-52",
    label: "Immersive Story",
    year: 2006,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-53",
    label: "Human Centered",
    year: 2007,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-54",
    label: "Innovation Lab",
    year: 2008,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-55",
    label: "Sonic Vision",
    year: 2009,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-56",
    label: "Cinematic Design",
    year: 2010,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-57",
    label: "Design Futures",
    year: 2011,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-58",
    label: "Digital Craft",
    year: 2012,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-59",
    label: "Interface Artistry",
    year: 2013,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-60",
    label: "Immersive Story",
    year: 2014,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-61",
    label: "Human Centered",
    year: 2015,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-62",
    label: "Innovation Lab",
    year: 2016,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-63",
    label: "Sonic Vision",
    year: 2017,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
  {
    id: "award-64",
    label: "Cinematic Design",
    year: 2018,
    highlight: "Un jury international a salué l'équilibre entre exigence technologique et poésie visuelle.",
  },
];

const artisanVoices = [
  {
    id: "voice-1",
    name: "Artisan numérique 001",
    role: "Spécialiste expérience 001",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-2",
    name: "Artisan numérique 002",
    role: "Spécialiste expérience 002",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-3",
    name: "Artisan numérique 003",
    role: "Spécialiste expérience 003",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-4",
    name: "Artisan numérique 004",
    role: "Spécialiste expérience 004",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-5",
    name: "Artisan numérique 005",
    role: "Spécialiste expérience 005",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-6",
    name: "Artisan numérique 006",
    role: "Spécialiste expérience 006",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-7",
    name: "Artisan numérique 007",
    role: "Spécialiste expérience 007",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-8",
    name: "Artisan numérique 008",
    role: "Spécialiste expérience 008",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-9",
    name: "Artisan numérique 009",
    role: "Spécialiste expérience 009",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-10",
    name: "Artisan numérique 010",
    role: "Spécialiste expérience 010",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-11",
    name: "Artisan numérique 011",
    role: "Spécialiste expérience 011",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-12",
    name: "Artisan numérique 012",
    role: "Spécialiste expérience 012",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-13",
    name: "Artisan numérique 013",
    role: "Spécialiste expérience 013",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-14",
    name: "Artisan numérique 014",
    role: "Spécialiste expérience 014",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-15",
    name: "Artisan numérique 015",
    role: "Spécialiste expérience 015",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-16",
    name: "Artisan numérique 016",
    role: "Spécialiste expérience 016",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-17",
    name: "Artisan numérique 017",
    role: "Spécialiste expérience 017",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-18",
    name: "Artisan numérique 018",
    role: "Spécialiste expérience 018",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-19",
    name: "Artisan numérique 019",
    role: "Spécialiste expérience 019",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-20",
    name: "Artisan numérique 020",
    role: "Spécialiste expérience 020",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-21",
    name: "Artisan numérique 021",
    role: "Spécialiste expérience 021",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-22",
    name: "Artisan numérique 022",
    role: "Spécialiste expérience 022",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-23",
    name: "Artisan numérique 023",
    role: "Spécialiste expérience 023",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-24",
    name: "Artisan numérique 024",
    role: "Spécialiste expérience 024",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-25",
    name: "Artisan numérique 025",
    role: "Spécialiste expérience 025",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-26",
    name: "Artisan numérique 026",
    role: "Spécialiste expérience 026",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-27",
    name: "Artisan numérique 027",
    role: "Spécialiste expérience 027",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-28",
    name: "Artisan numérique 028",
    role: "Spécialiste expérience 028",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-29",
    name: "Artisan numérique 029",
    role: "Spécialiste expérience 029",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-30",
    name: "Artisan numérique 030",
    role: "Spécialiste expérience 030",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-31",
    name: "Artisan numérique 031",
    role: "Spécialiste expérience 031",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-32",
    name: "Artisan numérique 032",
    role: "Spécialiste expérience 032",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-33",
    name: "Artisan numérique 033",
    role: "Spécialiste expérience 033",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-34",
    name: "Artisan numérique 034",
    role: "Spécialiste expérience 034",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-35",
    name: "Artisan numérique 035",
    role: "Spécialiste expérience 035",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-36",
    name: "Artisan numérique 036",
    role: "Spécialiste expérience 036",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-37",
    name: "Artisan numérique 037",
    role: "Spécialiste expérience 037",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-38",
    name: "Artisan numérique 038",
    role: "Spécialiste expérience 038",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-39",
    name: "Artisan numérique 039",
    role: "Spécialiste expérience 039",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-40",
    name: "Artisan numérique 040",
    role: "Spécialiste expérience 040",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-41",
    name: "Artisan numérique 041",
    role: "Spécialiste expérience 041",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-42",
    name: "Artisan numérique 042",
    role: "Spécialiste expérience 042",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-43",
    name: "Artisan numérique 043",
    role: "Spécialiste expérience 043",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-44",
    name: "Artisan numérique 044",
    role: "Spécialiste expérience 044",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-45",
    name: "Artisan numérique 045",
    role: "Spécialiste expérience 045",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-46",
    name: "Artisan numérique 046",
    role: "Spécialiste expérience 046",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-47",
    name: "Artisan numérique 047",
    role: "Spécialiste expérience 047",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-48",
    name: "Artisan numérique 048",
    role: "Spécialiste expérience 048",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-49",
    name: "Artisan numérique 049",
    role: "Spécialiste expérience 049",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-50",
    name: "Artisan numérique 050",
    role: "Spécialiste expérience 050",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-51",
    name: "Artisan numérique 051",
    role: "Spécialiste expérience 051",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-52",
    name: "Artisan numérique 052",
    role: "Spécialiste expérience 052",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-53",
    name: "Artisan numérique 053",
    role: "Spécialiste expérience 053",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-54",
    name: "Artisan numérique 054",
    role: "Spécialiste expérience 054",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-55",
    name: "Artisan numérique 055",
    role: "Spécialiste expérience 055",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-56",
    name: "Artisan numérique 056",
    role: "Spécialiste expérience 056",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-57",
    name: "Artisan numérique 057",
    role: "Spécialiste expérience 057",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-58",
    name: "Artisan numérique 058",
    role: "Spécialiste expérience 058",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-59",
    name: "Artisan numérique 059",
    role: "Spécialiste expérience 059",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-60",
    name: "Artisan numérique 060",
    role: "Spécialiste expérience 060",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-61",
    name: "Artisan numérique 061",
    role: "Spécialiste expérience 061",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-62",
    name: "Artisan numérique 062",
    role: "Spécialiste expérience 062",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-63",
    name: "Artisan numérique 063",
    role: "Spécialiste expérience 063",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-64",
    name: "Artisan numérique 064",
    role: "Spécialiste expérience 064",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-65",
    name: "Artisan numérique 065",
    role: "Spécialiste expérience 065",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-66",
    name: "Artisan numérique 066",
    role: "Spécialiste expérience 066",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-67",
    name: "Artisan numérique 067",
    role: "Spécialiste expérience 067",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-68",
    name: "Artisan numérique 068",
    role: "Spécialiste expérience 068",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-69",
    name: "Artisan numérique 069",
    role: "Spécialiste expérience 069",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-70",
    name: "Artisan numérique 070",
    role: "Spécialiste expérience 070",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-71",
    name: "Artisan numérique 071",
    role: "Spécialiste expérience 071",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-72",
    name: "Artisan numérique 072",
    role: "Spécialiste expérience 072",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-73",
    name: "Artisan numérique 073",
    role: "Spécialiste expérience 073",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-74",
    name: "Artisan numérique 074",
    role: "Spécialiste expérience 074",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-75",
    name: "Artisan numérique 075",
    role: "Spécialiste expérience 075",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-76",
    name: "Artisan numérique 076",
    role: "Spécialiste expérience 076",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-77",
    name: "Artisan numérique 077",
    role: "Spécialiste expérience 077",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-78",
    name: "Artisan numérique 078",
    role: "Spécialiste expérience 078",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-79",
    name: "Artisan numérique 079",
    role: "Spécialiste expérience 079",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
  {
    id: "voice-80",
    name: "Artisan numérique 080",
    role: "Spécialiste expérience 080",
    quote: "Notre équipe sculpte chaque interaction avec une précision artisanale, inspirée par les textures et les lumières des univers premium.",
  },
];

const GradientCanvas = () => {
  return (
    <div className="gradient-canvas" aria-hidden="true">
      {chromaWaves.map((wave) => (
        <span
          key={wave.id}
          className="gradient-canvas__layer"
          style={{
            "--gradient-start": wave.start,
            "--gradient-end": wave.end,
            "--gradient-accent": wave.accent,
            "--gradient-blur": `${wave.blur}px`,
            "--gradient-scale": wave.scale,
          }}
        />
      ))}
    </div>
  );
};

const NavigationBar = () => {
  return (
    <header className="navigation" id="accueil">
      <div className="navigation__inner">
        <Link className="navigation__brand" to="/">
          <span className="navigation__mark" aria-hidden="true" />
          <span className="navigation__name">{brandTokens.name}</span>
        </Link>
        <nav className="navigation__links" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="navigation__link">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="navigation__cta">
          <a className="btn btn--ghost" href="/#contact">
            <PhoneCall className="icon" />
            <span>Réserver une démonstration</span>
          </a>
        </div>
      </div>
    </header>
  );
};

const HeroSection = () => {
  return (
    <section className="hero">
      <GradientCanvas />
      <div className="hero__content">
        <p className="hero__eyebrow">{brandTokens.baseline}</p>
        <h1 className="hero__title">Nous façonnons des expériences digitales inspirées des plus grandes références design.</h1>
        <p className="hero__description">
          Imaginez une plateforme où chaque interaction est fluide, où la lumière semble sortir de l'écran et où la narration est guidée par des transitions cinématographiques. ServiceOps Vision capture cette sensation et la transforme en performances mesurables.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="/#solutions">
            Explorer l'univers
            <ArrowRight className="icon" />
          </a>
          <a className="btn btn--transparent" href="/#innovation">
            Découvrir notre manifeste
          </a>
        </div>
        <div className="hero__meta">
          <span className="hero__meta-item">
            <Sparkle className="icon" /> Qualité studio premium
          </span>
          <span className="hero__meta-item">
            <Fingerprint className="icon" /> Authentification biométrique
          </span>
          <span className="hero__meta-item">
            <Cpu className="icon" /> IA orchestrée
          </span>
        </div>
      </div>
    </section>
  );

  return (
    <div className="app-shell" style={{"--halo-gradient": gradient}}>
      <aside className="nav-rail">
        <button className="brand-core" aria-label="core" />
        <div className="nav-links">
          {quickLinks.map((item) => (
            <span key={item} className="nav-link">
              <span>{item}</span>
            </span>
          ))}
        </div>
        <div className="nav-indicator" />
      </aside>

      <main className="stage">
        <section className="hero">
          <div className="hero-halo" />
          <div className="hero-content">
            <span className="hero-chip">Nova</span>
            <h1 className="hero-title">Light</h1>
            <div className="hero-grid">
              {panels.map((panel) => (
                <article key={panel.id} className="hero-panel" data-tone={panel.tone}>
                  <div className="panel-inner">
                    <header className="panel-header">
                      <span className="panel-tag">{panel.tag}</span>
                      <span className="panel-title">{panel.title}</span>
                    </header>
                    <div className="panel-body">
                      <div className="panel-aurora" />
                      <div className="panel-module">
                        <span className="panel-glyph">{panel.id.slice(0, 2)}</span>
                        <span className="panel-echo" />
                      </div>
                    </div>
                    <footer className="panel-footer">
                      <span className="panel-footer-line" />
                      <span className="panel-footer-dot" />
                    </footer>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <figure className="hero-device">
            <div className="device-shell">
              <div className="device-halo" />
              <div className="device-inner">
                <div className="device-gradient" />
                <div className="device-reflect" />
              </div>
              <div className="device-shadow" />
            </div>
          </figure>
        </section>

        <section className="module-bay">
          <header className="section-header">
            <span className="section-title">Array</span>
            <span className="section-sub">Precision</span>
          </header>
          <div className="module-grid">
            {modules.map((module) => (
              <article key={module.name} className="module-card" data-accent={module.accent}>
                <div className="module-crest">{module.glyph}</div>
                <div className="module-stack">
                  {module.layers.map((layer) => (
                    <span key={layer} className="module-layer">
                      {layer}
                    </span>
                  ))}
                </div>
                <div className="module-meta">{module.name}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="matrix-wall">
          <header className="section-header">
            <span className="section-title">Matrix</span>
            <span className="section-sub">Calibrated</span>
          </header>
          <div className="matrix-grid">
            {matrices.map((matrix) => (
              <article key={matrix.id} className="matrix-card">
                <div className="matrix-title">{matrix.id}</div>
                <div className="matrix-body">
                  {matrix.code.map((row, rowIndex) => (
                    <div key={`${matrix.id}-row-${rowIndex}`} className="matrix-row">
                      {row.map((cell) => (
                        <span key={cell + rowIndex} className="matrix-cell">
                          {cell}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="film">
          <div className="film-track">
            {tapes.map((tape) => (
              <span key={tape.label} className="film-tag" data-tone={tape.tone}>
                {tape.label}
              </span>
            ))}
          </div>
          <div className="film-track reverse">
            {tapes.map((tape) => (
              <span key={`${tape.label}-ghost`} className="film-tag" data-tone={tape.tone}>
                {tape.label}
              </span>
            ))}
          </div>
        </section>

        <section className="gallery">
          <header className="section-header">
            <span className="section-title">Gallery</span>
            <span className="section-sub">Ambient</span>
          </header>
          <div className="gallery-grid">
            {gallery.map((frame) => (
              <figure key={frame.cue} className="gallery-frame" data-theme={frame.theme}>
                <div className="frame-inner">
                  <span className="frame-id">{frame.cue}</span>
                  <span className="frame-beam" />
                </div>
              </figure>
            ))}
          </div>
        </section>

        <section className="aurora">
          <header className="section-header">
            <span className="section-title">Flow</span>
            <span className="section-sub">Harmonic</span>
          </header>
          <div className="aurora-field">
            {aurora.map((layer) => (
              <div
                key={layer.id}
                className="aurora-layer"
                style={{ filter: `blur(${layer.blur}px)`, opacity: layer.opacity }}
              />
            ))}
            <div className="aurora-streams">
              {streams.map((stream) => (
                <span
                  key={stream.id}
                  className="aurora-stream"
                  style={{ animationDuration: `${stream.speed}s`, background: stream.hue }}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="capsule">
          <header className="section-header">
            <span className="section-title">Focus</span>
            <span className="section-sub">Immersive</span>
          </header>
          <div className="capsule-grid">
            {capsules.map((capsule) => (
              <article key={capsule.meta} className="capsule-card">
                <div className="capsule-meta">{capsule.meta}</div>
                <div className="capsule-title">{capsule.title}</div>
                <div className="capsule-sheen" />
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="tray">
        <div className="tray-inner">
          {accents.map((accent) => (
            <span key={accent} className="tray-dot" style={{ background: `var(${accent})` }} />
          ))}
          <span className="tray-brand">Nova</span>
          <span className="tray-glow" />
        </div>
      </footer>
    </div>
const FeatureGrid = () => {
  return (
    <section className="feature-grid" id="solutions">
      <div className="section-heading">
        <p className="section-heading__eyebrow">Solutions orchestrées</p>
        <h2 className="section-heading__title">Une suite pensée comme une expérience immersive</h2>
        <p className="section-heading__description">
          Des modules interconnectés pour couvrir chaque instant du parcours client. Notre approche repose sur un design system modulable, des transitions fines et une attention absolue aux détails.
        </p>
      </div>
      <div className="feature-grid__wrapper">
        {featureCatalogue.map((feature) => {
          const Icon = feature.icon;
          return (
            <article key={feature.id} className="feature-card">
              <div className="feature-card__icon">
                <Icon className="icon" />
              </div>
              <div className="feature-card__content">
                <h3 className="feature-card__title">{feature.title}</h3>
                <p className="feature-card__tagline">{feature.tagline}</p>
                <p className="feature-card__description">{feature.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

const ImmersiveTimeline = () => {
  return (
    <section className="timeline" id="innovation">
      <div className="section-heading">
        <p className="section-heading__eyebrow">Chronologie immersive</p>
        <h2 className="section-heading__title">Un déploiement en scénographie maîtrisée</h2>
        <p className="section-heading__description">
          De la découverte au lancement mondial, chaque phase est illuminée par des animations, un traitement éditorial et des mesures d'impact pour garder le cap.
        </p>
      </div>
      <ol className="timeline__list">
        {transformationTimeline.map((step) => (
          <li key={step.phase} className="timeline__item">
            <div className="timeline__phase">{step.phase}</div>
            <div className="timeline__body">
              <h3 className="timeline__title">{step.title}</h3>
              <p className="timeline__description">{step.description}</p>
              <span className="timeline__milestone">{step.milestone}</span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

const EcosystemSection = () => {
  return (
    <section className="ecosystem" id="produits">
      <div className="section-heading">
        <p className="section-heading__eyebrow">Écosystème</p>
        <h2 className="section-heading__title">Un paysage numérique interconnecté</h2>
        <p className="section-heading__description">
          Un continuum d'expériences où data, design et voix de marque s'harmonisent. Les flux ci-dessous illustrent la profondeur de notre accompagnement.
        </p>
      </div>
      <div className="ecosystem__grid">
        {ecosystemStreams.map((stream) => (
          <article key={stream.id} className="ecosystem__card">
            <div className="ecosystem__topline">
              <span className="ecosystem__label">{stream.label}</span>
              <span className="ecosystem__intensity">Intensité {Math.round(stream.intensity * 100)}%</span>
            </div>
            <p className="ecosystem__narrative">{stream.narrative}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

const NarrativeChapters = () => {
  return (
    <section className="chapters">
      <div className="section-heading">
        <p className="section-heading__eyebrow">Chapitres lumineux</p>
        <h2 className="section-heading__title">Une narration en tableaux successifs</h2>
        <p className="section-heading__description">
          Nous orchestrons votre histoire en scènes. Chaque chapitre associe matière, lumière et interactions pour créer un souvenir fort et cohérent.
        </p>
      </div>
      <div className="chapters__mosaic">
        {luminousChapters.map((chapter) => (
          <article key={chapter.id} className="chapter-card">
            <div className="chapter-card__header">
              <h3 className="chapter-card__title">{chapter.title}</h3>
              <span className="chapter-card__focus">{chapter.focus}</span>
            </div>
            <p className="chapter-card__excerpt">{chapter.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

const AwardsShowcase = () => {
  return (
    <section className="awards">
      <div className="section-heading">
        <p className="section-heading__eyebrow">Récompenses</p>
        <h2 className="section-heading__title">Une reconnaissance internationale</h2>
        <p className="section-heading__description">
          Des jurys de design, de technologie et de narration immersive saluent notre capacité à créer des expériences harmonieuses.
        </p>
      </div>
      <div className="awards__grid">
        {awardsShowcase.map((award) => (
          <article key={award.id} className="awards__card">
            <div className="awards__icon">
              <Star className="icon" />
            </div>
            <div className="awards__content">
              <p className="awards__label">{award.label}</p>
              <p className="awards__year">{award.year}</p>
              <p className="awards__highlight">{award.highlight}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

const ArtisanVoices = () => {
  return (
    <section className="voices">
      <div className="section-heading">
        <p className="section-heading__eyebrow">Voix de l'atelier</p>
        <h2 className="section-heading__title">Des artisans du numérique passionnés</h2>
        <p className="section-heading__description">
          Une équipe pluridisciplinaire, à la croisée des mondes du cinéma, du design, de la musique et de l'ingénierie logicielle.
        </p>
      </div>
      <div className="voices__list">
        {artisanVoices.map((voice) => (
          <article key={voice.id} className="voice-card">
            <div className="voice-card__header">
              <Users className="icon" />
              <div>
                <p className="voice-card__name">{voice.name}</p>
                <p className="voice-card__role">{voice.role}</p>
              </div>
            </div>
            <p className="voice-card__quote">{voice.quote}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer__grid">
        <div className="footer__brand">
          <span className="footer__mark" aria-hidden="true" />
          <p className="footer__mission">{brandTokens.mission}</p>
        </div>
        <div className="footer__contact">
          <h3 className="footer__title">Entrons en contact</h3>
          <p className="footer__description">
            Parlez-nous de votre vision : nous construirons un récit immersif et précis.
          </p>
          <a className="btn btn--primary" href="mailto:contact@serviceops.com">
            <Mail className="icon" /> contact@serviceops.com
          </a>
        </div>
        <div className="footer__links">
          <h3 className="footer__title">Explorer</h3>
          <ul className="footer__list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className="footer__link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__meta">
          <p>© {new Date().getFullYear()} ServiceOps Vision. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const HomeView = () => {
  const totals = useMemo(() => ({
    features: featureCatalogue.length,
    chapters: luminousChapters.length,
    streams: ecosystemStreams.length,
    awards: awardsShowcase.length,
    voices: artisanVoices.length,
  }), []);

  return (
    <main className="app-shell">
      <NavigationBar />
      <HeroSection />
      <section className="metrics">
        <div className="metrics__item">
          <span className="metrics__label">Modules premium</span>
          <span className="metrics__value">{totals.features}</span>
        </div>
        <div className="metrics__item">
          <span className="metrics__label">Chapitres narratifs</span>
          <span className="metrics__value">{totals.chapters}</span>
        </div>
        <div className="metrics__item">
          <span className="metrics__label">Flux d'écosystème</span>
          <span className="metrics__value">{totals.streams}</span>
        </div>
        <div className="metrics__item">
          <span className="metrics__label">Récompenses</span>
          <span className="metrics__value">{totals.awards}</span>
        </div>
        <div className="metrics__item">
          <span className="metrics__label">Voix d'experts</span>
          <span className="metrics__value">{totals.voices}</span>
        </div>
      </section>
      <FeatureGrid />
      <ImmersiveTimeline />
      <EcosystemSection />
      <NarrativeChapters />
      <AwardsShowcase />
      <ArtisanVoices />
      <Footer />
    </main>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </Router>
  );
};

export default App;
