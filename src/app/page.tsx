import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";
import { BusinessWebsitesSection } from "@/components/sections/BusinessWebsitesSection";
import { CustomSoftwareSection } from "@/components/sections/CustomSoftwareSection";
import { AIAutomationSection } from "@/components/sections/AIAutomationSection";
import { StudentPrototypesSection } from "@/components/sections/StudentPrototypesSection";
import { Process } from "@/components/sections/Process";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { WhyUs } from "@/components/sections/WhyUs";
import { Technology } from "@/components/sections/Technology";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function Home() {
  return (
    <>
      {/* 1. HERO */}
      <Hero />

      {/* 2. TRUST / CREDIBILITY STRIP */}
      <TrustStrip />

      {/* 3. WHAT WE BUILD */}
      <WhatWeBuild />

      {/* 4. WHO WE HELP */}
      <WhoWeHelp />

      {/* 5. BUSINESS WEBSITE SECTION */}
      <BusinessWebsitesSection />

      {/* 6. CUSTOM SOFTWARE / WEB APP SECTION */}
      <CustomSoftwareSection />

      {/* 7. AI & AUTOMATION SECTION */}
      <AIAutomationSection />

      {/* 8. STUDENT PROJECTS & PROTOTYPES */}
      <StudentPrototypesSection />

      {/* 9. HOW IT WORKS */}
      <Process />

      {/* 10. SELECTED WORK */}
      <SelectedWork />

      {/* 11. WHY AETHERION LABS */}
      <WhyUs />

      {/* 12. TECHNOLOGY SECTION */}
      <Technology />

      {/* 13. FINAL CTA */}
      <FinalCTASection />
    </>
  );
}
