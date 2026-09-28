import type { CSSProperties } from 'react';

const PHOTOS = [
  'https://res.cloudinary.com/qugyphlv/image/upload/v1789005178/hoat-dong_2.jpg',
  'https://res.cloudinary.com/qugyphlv/image/upload/v1789005185/hoat-dong_4.jpg',
  'https://res.cloudinary.com/qugyphlv/image/upload/v1789005187/hoat-dong_6.jpg',
];

/** Mặt nạ cắt 4 góc lõm (kiểu vé) — r là bán kính lõm, off là độ lệch tâm để viền đều 2px */
function notchMask(r: number, off = 0): CSSProperties {
  const stop = `transparent ${r - 0.5}px, #000 ${r}px`;
  const o = `${off}px`;
  const mask = [
    `radial-gradient(circle at -${o} -${o}, ${stop}) top left / 51% 51% no-repeat`,
    `radial-gradient(circle at calc(100% + ${o}) -${o}, ${stop}) top right / 51% 51% no-repeat`,
    `radial-gradient(circle at -${o} calc(100% + ${o}), ${stop}) bottom left / 51% 51% no-repeat`,
    `radial-gradient(circle at calc(100% + ${o}) calc(100% + ${o}), ${stop}) bottom right / 51% 51% no-repeat`,
  ].join(', ');
  return { WebkitMask: mask, mask };
}

/**
 * Thẻ chữ nhật trang trí vắt ngang ranh giới giữa 2 section.
 * Đặt GIỮA hai section (ngoài overflow-hidden) nên nửa dưới không bị cắt.
 */
export default function OrnamentTag() {
  return (
    <div className="relative z-30 h-0">
      <div
        className="absolute left-1/2 top-0 w-[calc(100%-3rem)] max-w-[720px] drop-shadow-[0_10px_18px_rgba(65,36,2,0.28)]"
        style={{ transform: 'translate(-50%, calc(-50% - 44px))' }}
      >
        {/* lớp ngoài = màu viền vàng */}
        <div className="bg-brand-gold-deep" style={notchMask(16)}>
          {/* lớp trong thụt 2px = nền kem vàng */}
          <div
            className="m-[2px] bg-gradient-to-b from-brand-ivory to-brand-gold-light px-5 py-6 md:px-8 md:py-8"
            style={notchMask(18, 2)}
          >
            <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
              {/* Slogan */}
              <div className="text-center md:text-left">
                <p className="font-script text-lg font-semibold uppercase tracking-[0.28em] text-brand-gold-deep sm:text-xl">
                  Vững Nền Tảng
                </p>
                <div className="my-2 flex items-center justify-center gap-3 md:justify-start">
                  <span className="h-px w-10 bg-gradient-to-r from-transparent to-brand-gold-deep/70" />
                  <span className="h-2 w-2 rotate-45 border border-brand-gold-deep bg-brand-gold/40" />
                  <span className="h-px w-10 bg-gradient-to-l from-transparent to-brand-gold-deep/70 md:hidden" />
                </div>
                <p className="font-display text-2xl leading-tight text-brand-red sm:text-3xl">
                  Bứt Phá Tiếng Trung
                </p>
              </div>

              {/* 3 ảnh */}
              <div className="grid w-full max-w-[300px] shrink-0 grid-cols-3 gap-2 md:w-[290px]">
                {PHOTOS.map((src, i) => (
                  <div
                    key={src}
                    className="overflow-hidden border border-brand-gold-deep/60 bg-white p-[2px]"
                  >
                    <img
                      src={src}
                      alt={`Hoạt động tại ThanhMaiHSK ${i + 1}`}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover md:aspect-[4/5]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
