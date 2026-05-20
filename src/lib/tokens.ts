import designTokens from "@/data/design-tokens-fuse-kiwi.json";

export const tokens = designTokens;

export const categoryColors = [
  { label: "Graphic", cssVar: "--graphic", color: "#5de726" },
  { label: "Photo", cssVar: "--photo", color: "#57c7f5" },
  { label: "Illustration", cssVar: "--illustration", color: "#ffa96c" },
  { label: "3D", cssVar: "--threed", color: "#3bdc5e" },
  { label: "Art", cssVar: "--art", color: "#7ca4ff" },
  { label: "Type", cssVar: "--type", color: "#ef8fdd" },
  { label: "Video", cssVar: "--video", color: "#ffd900" },
  { label: "Music", cssVar: "--music", color: "#b9b2fa" },
  { label: "Reading", cssVar: "--reading", color: "#1de1a1" },
  { label: "Website", cssVar: "--website", color: "#ff909f" },
] as const;

export const showcaseItems = [
  {
    title: "Neon Drift",
    category: "Graphic",
    color: "var(--graphic)",
    span: "md:col-span-7 md:row-span-2",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Soft Horizon",
    category: "Photo",
    color: "var(--photo)",
    span: "md:col-span-5",
    aspect: "aspect-[16/11]",
  },
  {
    title: "Paper Bloom",
    category: "Illustration",
    color: "var(--illustration)",
    span: "md:col-span-4",
    aspect: "aspect-square",
  },
  {
    title: "Glass Garden",
    category: "3D",
    color: "var(--threed)",
    span: "md:col-span-8",
    aspect: "aspect-[21/9]",
  },
  {
    title: "Signal Type",
    category: "Type",
    color: "var(--type)",
    span: "md:col-span-5 md:row-span-2",
    aspect: "aspect-[3/4]",
  },
  {
    title: "Pulse Frame",
    category: "Video",
    color: "var(--video)",
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Typography-first curation that feels like flipping through a living magazine.",
    author: "Mara K.",
    role: "Creative Director",
  },
  {
    quote:
      "Every scroll reveals something unexpected — restrained motion, maximum impact.",
    author: "Jonas L.",
    role: "Design Lead",
  },
  {
    quote:
      "The internet deserves more spaces like this — editorial, bold, and human.",
    author: "Priya S.",
    role: "Art Director",
  },
] as const;

export const marqueeWords = [
  "Interesting",
  "Internet",
  "Curated",
  "Motion",
  "Editorial",
  "Fuse",
  "Discovery",
  "Culture",
] as const;
