import { Hero } from "@/components/sections/Hero";
import { FeaturedSolutions } from "@/components/sections/FeaturedSolutions";
import { Services } from "@/components/sections/Services";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Process } from "@/components/sections/Process";
import { WhyUs } from "@/components/sections/WhyUs";
import { AetherionAI } from "@/components/sections/AetherionAI";
import { Industries } from "@/components/sections/Industries";
import { Technology } from "@/components/sections/Technology";
import { Founder } from "@/components/sections/Founder";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedSolutions />
      <Services />
      <Industries />
      <FeaturedWork />
      <Process />
      <WhyUs />
      <Technology />
      <AetherionAI />
      <Founder />
      <ContactCTA />
    </>
  );
}
