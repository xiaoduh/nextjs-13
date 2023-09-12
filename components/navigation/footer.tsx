import React from "react";
import PaddingContainer from "../layout/padding-container";
import siteConfig from "@/config/site";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-6 border-t mt-10">
      <PaddingContainer>
        <div>
          <h2>{siteConfig.siteName}</h2>
          <p className="max-w-md mt-2 text-lg text-neutral-700">
            {siteConfig.description}
          </p>
        </div>
        <div className="mt-6 flex justify-between mt-6 gap-4 mt-6">
          <div>
            <div className="font-medium text-lg">#exploretheworld</div>
            <div>Social Links</div>
          </div>
          <div>
            <div className="text-sm text-neutral-400">Currently At</div>
            <div className="px-3 py-2 bg-white shadow-md rounded-md flex items-center gap-2">
              <div className="bg-emerald-400 rounded-full w-2 h-2">
                {siteConfig.currentlyAt}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t py-3 flex items-center gap-4 flex-wrap border-t mt-16">
          <div className="text-sm text-neutral-400">
            All rights are reserved | Copyright {new Date().getFullYear()}
          </div>
          <div className="text-sm">
            Made with love by{" "}
            <Link
              className="underline underline-offset-4"
              href="https://github.com/xiaoduh"
              target="blank"
            >
              @xiaoduh
            </Link>
          </div>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Footer;
