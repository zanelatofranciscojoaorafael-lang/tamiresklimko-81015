import { Hero } from "@/components/Hero";
import { Authority } from "@/components/Authority";
import { WhatYouGet } from "@/components/WhatYouGet";
import { SocialProof } from "@/components/SocialProof";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Authority />
      <WhatYouGet />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
