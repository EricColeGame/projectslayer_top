export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Project Slayers Wiki",
  shortName: "Project Slayers",
  logoText: "PS",
  tagline: "Complete Guides, Codes, Breathing Styles & Clans",
  description: "Your ultimate guide to Project Slayers on Roblox! Explore active working codes, breathing styles, clans, demon abilities, weapons, and progression guides.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://projectslayer.top",
  supportEmail: "support@projectslayer.top",
  gameUrl: "https://www.roblox.com/games/5954635141/Project-Slayers",
  heroVideoId: "2JBDFU8lsKI", // Project Slayers 2 COMPLETE Beginners Guide
  social: {
    discord: "https://discord.gg/projectslayers",
    youtube: "https://www.youtube.com/results?search_query=Project+Slayers+Roblox+Trailer",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
