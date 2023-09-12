export interface SiteConfig {
  siteName: string;
  description: string;
  currentlyAt: string;
  socialLinks: {
    twitter: string;
    youtube: string;
    facebook: string;
    instagram: string;
  };
}

const siteConfig = {
  siteName: "Explorer",
  description:
    "Bjarne Stroustrup a créé le langage C++ pour produire des logiciels « propres » et efficaces.",
  currentlyAt: "Budapest",
  socialLinks: {
    twitter: "https://twitter.com/home?lang=fr",
    youtube: "https://www.youtube.com/",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
};

export default siteConfig;
