const stats = [
  { value: '15+', label: 'năm phát triển' },
  { value: '100K+', label: 'học viên đồng hành' },
  { value: '20+', label: 'cơ sở toàn quốc' },
];

export default function AboutUsSection() {
  return (
    <section
      id="ve-chung-toi"
      className="relative overflow-hidden bg-brand-cream px-6 py-24 sm:py-32"
      style={{ scrollMarginTop: '88px' }}
    >
      {/* Faint calligraphy watermark */}
      <div
        className="pointer-events-none absolute -left-6 top-1/2 -translate-y-1/2 select-none font-display text-[16rem] leading-none text-brand-red/[0.04] sm:text-[22rem]"
        aria-hidden="true"
      >
        信
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
          {/* Left: text content */}
          <div>
            {/* Gold label with vertical accent line */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-px bg-gradient-to-b from-transparent via-[#BA7517] to-transparent" />
              <p className="font-sans text-xs tracking-[0.3em] text-[#BA7517] uppercase">
                Giới Thiệu
              </p>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-red leading-tight mb-8">
              <span className="font-sans font-extrabold tracking-tight">15+</span> Năm Lái Đò
            </h2>

            <p className="font-sans text-lg text-gray-600 leading-[1.85] mb-10 max-w-xl">
              ThanhMaiHSK là trung tâm đào tạo tiếng Trung toàn diện tại Việt Nam
              với 15 năm phát triển, đồng hành cùng 100.000+ học viên và mạng lưới
              20+ cơ sở trên toàn quốc. Chúng tôi xây dựng chương trình học được –
              hành ngay, phát triển toàn diện Nghe – Nói – Đọc – Viết – Dịch, phù
              hợp với người mới bắt đầu, người đi du học, đi làm và doanh nghiệp.
              Giáo trình bám sát khung năng lực tiếng Trung 6 bậc và chuẩn HSK 3.0,
              giúp học viên vừa giỏi thực chiến vừa đạt kết quả cao trong các kỳ thi
              chứng chỉ.
            </p>

            {/* Inline stat strip */}
            <div className="flex items-stretch gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className="flex items-stretch">
                  {index > 0 && (
                    <div className="w-px bg-[#BA7517]/30 mr-6 sm:mr-8" aria-hidden="true" />
                  )}
                  <div>
                    <div className="font-sans text-3xl font-extrabold text-brand-red leading-none tracking-tight">
                      {stat.value}
                    </div>
                    <p className="mt-1.5 font-sans text-xs text-gray-500 leading-snug">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image with decorative framing */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Soft gold glow behind the image */}
            <div
              className="absolute inset-0 -z-10 rounded-3xl bg-brand-gold/15 blur-3xl scale-95"
              aria-hidden="true"
            />
            <div className="relative w-full max-w-[440px]">
              {/* Offset gold border */}
              <div
                className="absolute inset-0 border-2 border-[#BA7517]/60 rounded-xl translate-x-4 translate-y-4"
                aria-hidden
              />
              {/* Corner flourish — top-right */}
              <svg
                viewBox="0 0 44 44"
                fill="none"
                className="absolute -right-3 -top-3 h-11 w-11 text-brand-gold z-20"
                aria-hidden="true"
              >
                <path d="M3 17V3H17M3 3L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M8 3H3V8M3 8L11 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity=".65" />
              </svg>
              {/* Image container */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-black/20">
                <img
                  src="https://res.cloudinary.com/qugyphlv/image/upload/v1789264685/team_6.jpg"
                  alt="Đội ngũ ThanhMaiHSK"
                  className="w-full h-[480px] sm:h-[560px] object-cover"
                />
              </div>
              {/* Red seal stamp accent — bottom-left corner */}
              <img
                src="https://res.cloudinary.com/qugyphlv/image/upload/v1789009070/dau-an-removebg-preview.png"
                alt="Ấn triện ThanhMaiHSK"
                className="absolute -bottom-4 -left-4 w-[80px] h-[80px] object-contain rotate-[-12deg] drop-shadow-lg z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
