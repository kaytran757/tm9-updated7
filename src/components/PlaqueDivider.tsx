import ChineseFrame from '@/components/ChineseFrame';
import LatticeIcon from '@/components/LatticeIcon';

/**
 * Biển hiệu (匾额) vắt ngang ranh giới giữa section Giảng Viên (kem) và Học Viên (đỏ).
 * 名师出高徒 — "Danh sư xuất cao đồ": thầy giỏi đào tạo nên trò xuất sắc.
 * Đặt GIỮA hai section (ngoài overflow-hidden) nên nửa dưới không bị cắt.
 */
export default function PlaqueDivider() {
  return (
    <div className="relative z-30 h-0">
      <div
        className="absolute left-1/2 top-0 w-[calc(100%-3rem)] max-w-[640px] drop-shadow-[0_10px_18px_rgba(65,36,2,0.28)]"
        style={{ transform: 'translate(-50%, calc(-50% - 44px))' }}
      >
        <ChineseFrame tone="cream" className="px-8 py-6 sm:px-14 sm:py-7">
          <div className="flex items-center justify-center gap-3 sm:gap-7">
            <span className="hidden shrink-0 sm:block">
              <LatticeIcon tone="dark" className="!h-14 !w-14" />
            </span>

            <div className="text-center">
              <p
                className="pl-[0.3em] text-2xl font-bold tracking-[0.3em] text-brand-red sm:text-4xl"
                style={{
                  fontFamily: '"Noto Serif SC","Songti SC","SimSun","Microsoft YaHei",serif',
                }}
                lang="zh-CN"
              >
                名师出高徒
              </p>

              <div className="my-2.5 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-brand-gold-deep/70 sm:w-12" />
                <span className="h-2 w-2 rotate-45 border border-brand-gold-deep bg-brand-gold/40" />
                <span className="h-px w-8 bg-gradient-to-l from-transparent to-brand-gold-deep/70 sm:w-12" />
              </div>

              <p className="font-script text-xs font-semibold uppercase tracking-[0.16em] sm:tracking-[0.22em] text-brand-gold-deep sm:text-lg">
                Danh sư xuất cao đồ
              </p>
            </div>

            <span className="hidden shrink-0 sm:block">
              <LatticeIcon tone="dark" className="!h-14 !w-14" />
            </span>
          </div>
        </ChineseFrame>
      </div>
    </div>
  );
}
