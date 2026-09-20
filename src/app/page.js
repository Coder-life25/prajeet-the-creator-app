import HeroSection from "@/components/home/HeroSection";
import WhatWeDo from "@/components/home/WhatWeDo";
import LatestUpdates from "@/components/home/LatestUpdates";
import FeaturedVideos from "@/components/home/FeaturedVideos";

export const metadata = {
  // Canonical is set per page. Setting it in the root layout made every page
  // that did not override `alternates` declare itself a duplicate of "/".
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="section-divider" />
      <WhatWeDo />
      <div className="section-divider" />
      <LatestUpdates />
      <div className="section-divider" />
      <FeaturedVideos />
    </>
  );
}
