import BenefitSection from "@/components/section/benefit";
import BrandSection from "@/components/section/brand";
import FaqSection from "@/components/section/faq";
import FeatureSection from "@/components/section/feature";
import GrowthSection from "@/components/section/growth";
import HeroSection from "@/components/section/hero";
import ShowcaseSection from "@/components/section/showcase";
import NavbarSection from "@/components/section/navbar";
import FooterSection from "@/components/section/footer";

export default function Landing() {
  return (
    <div className="font-poppins">
      <NavbarSection />
      <HeroSection />
      <BrandSection />
      <BenefitSection />
      <GrowthSection />
      <ShowcaseSection />
      <FaqSection />
      <FeatureSection />
      <FooterSection />
    </div>
  );
}
