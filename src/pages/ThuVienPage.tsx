import Header from '@/components/Header';
import LatticeIcon from '@/components/LatticeIcon';
import Medallion from '@/components/Medallion';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import CtaSection from '@/components/CtaSection';
import { ArrowRight } from 'lucide-react';

type Article = {
  title: string;
  route: string;
  teaser: string;
  image: string;
};

const articles: Article[] = [
  {
    title: 'Dịch Tên Từ Tiếng Việt Sang Tiếng Trung',
    route: '/thu-vien/dich-ten-tieng-viet-sang-tieng-trung',
    teaser: 'Tra cứu cách viết chữ Hán, phiên âm và nghe phát âm chuẩn các họ phổ biến tại Việt Nam.',
    image: 'https://res.cloudinary.com/qugyphlv/image/upload/v1789005177/hoat-dong_01.jpg',
  },
  {
    title: 'Bảng Chữ Cái Tiếng Trung Pinyin Đầy Đủ Cho Người Mới Bắt Đầu',
    route: '/thu-vien/bang-chu-cai-pinyin',
    teaser: 'Nắm vững hệ thống phiên âm Pinyin — nền tảng đầu tiên khi bắt đầu học tiếng Trung.',
    image: 'https://res.cloudinary.com/qugyphlv/image/upload/v1789005178/hoat-dong_2.jpg',
  },
  {
    title: 'Đề Thi HSK 1 Mới Nhất Có Đáp Án, File PDF Và File Nghe',
    route: '/thu-vien/de-thi-hsk1',
    teaser: 'Tổng hợp đề thi HSK1 mới nhất kèm đáp án, file PDF và file nghe để luyện tập.',
    image: 'https://res.cloudinary.com/qugyphlv/image/upload/v1789005180/hoat-dong_3.jpg',
  },
  {
    title: 'Tổng Hợp Ngữ Pháp Tiếng Trung HSK1 Kèm File PDF',
    route: '/thu-vien/ngu-phap-hsk1',
    teaser: 'Hệ thống hóa toàn bộ điểm ngữ pháp trọng tâm trong chương trình HSK1.',
    image: 'https://res.cloudinary.com/qugyphlv/image/upload/v1789005186/hoat-dong_5.jpg',
  },
  {
    title: '100 Câu Thành Ngữ Tiếng Trung Hay Và Thông Dụng Nhất',
    route: '/thu-vien/thanh-ngu-tieng-trung',
    teaser: 'Bộ sưu tập 100 câu thành ngữ tiếng Trung giúp bạn nói chuyện tự nhiên và sâu sắc hơn.',
    image: 'https://res.cloudinary.com/qugyphlv/image/upload/v1789005190/hoat-dong_8.jpg',
  },
];

function ThuVienHero() {
  return (
    <div className="relative">
      <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-brand-red">
        <img
          src="https://res.cloudinary.com/qugyphlv/image/upload/v1789005186/hoat-dong_5.jpg"
          alt="Thư viện tài liệu tiếng Trung ThanhMaiHSK"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3C0A0A]/45 via-[#3C0A0A]/65 to-[#3C0A0A]/90" />
        <Header />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <p className="mb-5 font-sans text-xs uppercase tracking-[0.3em] text-brand-gold sm:text-sm">
            Thư Viện
          </p>
          <h1 className="font-display text-4xl leading-tight text-brand-ivory sm:text-5xl lg:text-6xl">
            Kho Tài Liệu Học Tiếng Trung
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-sans leading-relaxed text-white/80 sm:text-lg">
            Tổng hợp kiến thức, từ vựng, ngữ pháp và tài liệu luyện thi HSK hữu ích cho hành trình học tiếng Trung của bạn.
          </p>
        </div>
      </section>
      <div className="absolute bottom-0 left-1/2 z-50 -translate-x-1/2 translate-y-1/2">
        <Medallion />
      </div>
    </div>
  );
}

function GoldDivider() {
  return (
    <div className="mb-12 flex items-center justify-center gap-4" aria-hidden="true">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#BA7517]/50 sm:w-24" />
      <LatticeIcon tone="dark" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#BA7517]/50 sm:w-24" />
    </div>
  );
}

function ArticleList() {
  return (
    <section className="relative overflow-hidden bg-brand-cream px-6 py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-10 top-10 select-none font-display text-[16rem] leading-none text-brand-red/[0.04] sm:text-[20rem]" aria-hidden="true">
        书
      </div>
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-[#BA7517]">
            Bài viết hữu ích
          </p>
          <h2 className="font-display text-3xl leading-tight text-brand-red sm:text-4xl lg:text-5xl">
            Các Bài Viết Trong Thư Viện
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-sans leading-relaxed text-gray-600">
            Khám phá các bài viết hướng dẫn, tài liệu học tập và mẹo luyện thi tiếng Trung từ giảng viên ThanhMaiHSK.
          </p>
        </div>

        <div className="mt-12">
          <GoldDivider />
        </div>

        {/* Vertical article list */}
        <div className="divide-y divide-brand-gold/25">
          {articles.map((article) => (
            <a
              key={article.route}
              href={article.route}
              className="group block rounded-lg py-8 transition-colors duration-300 hover:bg-brand-gold/5 sm:py-10"
            >
              <div className="flex flex-col gap-6 px-2 sm:px-4 md:flex-row md:items-center md:gap-8">
                {/* Thumbnail */}
                <div className="relative w-full shrink-0 overflow-hidden rounded-lg border border-brand-gold/50 sm:w-full md:w-[32%]">
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-[#FAC775] via-[#FDE4B0] to-[#FAC775]" />
                </div>

                {/* Text content */}
                <div className="flex flex-1 flex-col">
                  <h3 className="font-display text-xl leading-snug text-brand-red transition-colors duration-300 group-hover:text-brand-gold-deep sm:text-2xl lg:text-3xl">
                    {article.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 font-sans text-sm leading-relaxed text-gray-600 sm:text-base">
                    {article.teaser}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 self-start font-sans text-sm font-semibold text-[#BA7517] transition-colors group-hover:text-brand-red">
                    Đọc Thêm
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ThuVienPage() {
  return (
    <div className="relative w-full">
      <ThuVienHero />
      <div className="h-[130px] bg-brand-cream sm:h-[170px] md:h-[200px]" aria-hidden="true" />
      <ArticleList />
      <CtaSection
        enableFadeIn={false}
        label="Bắt đầu hành trình của bạn"
        heading="Sẵn Sàng Chinh Phục Tiếng Trung Cùng ThanhMaiHSK?"
        paragraph="Đăng ký học thử miễn phí ngay hôm nay để trải nghiệm phương pháp giảng dạy chuẩn quốc tế cùng đội ngũ giảng viên chất lượng cao."
        buttonText="Học Thử Miễn Phí"
      />
      <Footer enableFadeIn={false} />
      <FloatingContact />
    </div>
  );
}
