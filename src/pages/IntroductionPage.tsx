import IntroHero from '@/components/IntroHero';
import Medallion from '@/components/Medallion';
import AboutUsSection from '@/components/AboutUsSection';
import IntroTeachersSection from '@/components/IntroTeachersSection';
import FeaturedStudentsSection from '@/components/FeaturedStudentsSection';
import ExtracurricularSection from '@/components/ExtracurricularSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

export default function IntroductionPage() {
  return (
    <div className="relative w-full">
      <div className="relative">
        <IntroHero />
        <div className="absolute left-1/2 bottom-0 z-50 -translate-x-1/2 translate-y-1/2">
          <Medallion />
        </div>
      </div>
      <div className="h-[130px] bg-brand-cream sm:h-[170px] md:h-[200px]" aria-hidden="true" />
      <AboutUsSection />
      <IntroTeachersSection />
      <FeaturedStudentsSection sectionId="thanh-tich-hoc-vien" enableFadeIn={false} />
      <ExtracurricularSection />
      <CtaSection enableFadeIn={false} />
      <Footer enableFadeIn={false} />
    </div>
  );
}
