import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import Medallion from '@/components/Medallion';
import AboutSection from '@/components/AboutSection';
import RoadmapSection from '@/components/RoadmapSection';
import OrnamentTag from '@/components/OrnamentTag';
import PlaqueDivider from '@/components/PlaqueDivider';
import CoursesSection from '@/components/CoursesSection';
import CtaSection from '@/components/CtaSection';
import TeachersSection from '@/components/TeachersSection';
import FeaturedStudentsSection from '@/components/FeaturedStudentsSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import IntroductionPage from '@/pages/IntroductionPage';
import HskCoursePage from '@/pages/HskCoursePage';
import DoanhNghiepCoursePage from '@/pages/DoanhNghiepCoursePage';
import TrucTuyenCoursePage from '@/pages/TrucTuyenCoursePage';
import TreEmCoursePage from '@/pages/TreEmCoursePage';
import BranchesPage from '@/pages/BranchesPage';
import ThuVienPage from '@/pages/ThuVienPage';
import DichTenPage from '@/pages/DichTenPage';
import PinyinPage from '@/pages/PinyinPage';
import DeThiHsk1Page from '@/pages/DeThiHsk1Page';
import NguPhapHsk1Page from '@/pages/NguPhapHsk1Page';
import ThanhNguPage from '@/pages/ThanhNguPage';

function HomePage() {
  return (
    <div className="relative w-full">
      <Hero />
      <AboutSection />
      <OrnamentTag />
      <RoadmapSection />
      <CoursesSection />
      <CtaSection />
      <TeachersSection />
      <PlaqueDivider />
      <FeaturedStudentsSection joinAbove />
      <FaqSection />
      <Footer />
      <div className="absolute left-1/2 top-[100vh] z-50 -translate-x-1/2 -translate-y-1/2">
        <Medallion />
      </div>
    </div>
  );
}

function usePathname() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return pathname;
}

export default function App() {
  const pathname = usePathname();
  const isIntroductionPage = pathname.startsWith('/gioi-thieu');
  const isHskCoursePage = pathname === '/khoa-hoc/luyen-thi-hsk-hskk';
  const isDoanhNghiepPage = pathname === '/khoa-hoc/doanh-nghiep';
  const isTrucTuyenPage = pathname === '/khoa-hoc/han-ngu-tich-hop-truc-tuyen';
  const isTreEmPage = pathname === '/khoa-hoc/tre-em';
  const isBranchesPage = pathname === '/chi-nhanh';
  const isThuVienIndex = pathname === '/thu-vien';
  const isDichTenArticle = pathname === '/thu-vien/dich-ten-tieng-viet-sang-tieng-trung';
  const isPinyinArticle = pathname === '/thu-vien/bang-chu-cai-pinyin';
  const isDeThiHsk1Article = pathname === '/thu-vien/de-thi-hsk1';
  const isNguPhapHsk1Article = pathname === '/thu-vien/ngu-phap-hsk1';
  const isThanhNguArticle = pathname === '/thu-vien/thanh-ngu-tieng-trung';
  const isArticlePage = pathname.startsWith('/thu-vien/');

  useEffect(() => {
    if (!isIntroductionPage || !window.location.hash) return;
    const id = window.location.hash.slice(1);
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
    return () => window.clearTimeout(timer);
  }, [isIntroductionPage]);

  return (
    <>
      {isBranchesPage ? (
        <BranchesPage />
      ) : isDichTenArticle ? (
        <DichTenPage />
      ) : isPinyinArticle ? (
        <PinyinPage />
      ) : isDeThiHsk1Article ? (
        <DeThiHsk1Page />
      ) : isNguPhapHsk1Article ? (
        <NguPhapHsk1Page />
      ) : isThanhNguArticle ? (
        <ThanhNguPage />
      ) : isThuVienIndex ? (
        <ThuVienPage />
      ) : isTreEmPage ? (
        <TreEmCoursePage />
      ) : isTrucTuyenPage ? (
        <TrucTuyenCoursePage />
      ) : isDoanhNghiepPage ? (
        <DoanhNghiepCoursePage />
      ) : isHskCoursePage ? (
        <HskCoursePage />
      ) : isIntroductionPage ? (
        <IntroductionPage />
      ) : (
        <HomePage />
      )}
      {!isArticlePage && <FloatingContact />}
    </>
  );
}
