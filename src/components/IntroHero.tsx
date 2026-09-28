import Header from './Header';

export default function IntroHero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-brand-red">
      <img
        src="https://res.cloudinary.com/qugyphlv/image/upload/v1789005177/hoat-dong_01.jpg"
        alt="Hoạt động tại ThanhMaiHSK"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#3C0A0A]/35 via-[#3C0A0A]/55 to-[#3C0A0A]/85" />
      <Header />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <p className="mb-5 font-sans text-xs uppercase tracking-[0.3em] text-brand-gold sm:text-sm">
          Giới Thiệu
        </p>
        <h1 className="font-display text-4xl leading-tight text-brand-ivory sm:text-5xl lg:text-6xl">
          Khám Phá ThanhMaiHSK
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-sans leading-relaxed text-white/80 sm:text-lg">
          Hành trình 15 năm xây dựng hệ sinh thái đào tạo tiếng Trung toàn diện,
          cùng đội ngũ giảng viên tận tâm và hàng trăm nghìn học viên đồng hành.
        </p>
      </div>

    </section>
  );
}
