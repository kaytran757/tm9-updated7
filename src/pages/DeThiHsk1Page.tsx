import ArticleLayout from '@/components/ArticleLayout';
import { PremiumTable, GoldImage, GoldNote, GoldBullet, SectionHeading, IntroText, BodyText, CtaButton } from '@/components/article-ui';

const cauTrucRows = [
  ['Tổng số câu hỏi', '40 câu'],
  ['Phần nghe', '20 câu'],
  ['Phần đọc', '20 câu'],
  ['Tổng điểm', '200 điểm'],
  ['Điểm đạt', 'Từ 120 điểm'],
  ['Kỹ năng kiểm tra', 'Nghe hiểu và đọc hiểu'],
];

const dangCauHoiRows = [
  ['Phần Nghe', 'Xác định hình ảnh đúng', 'Nghe hiểu cơ bản'],
  ['Phần Nghe', 'Chọn đáp án theo hội thoại', 'Nắm bắt thông tin'],
  ['Phần Nghe', 'Xác định người / thời gian / địa điểm', 'Chi tiết cụ thể'],
  ['Phần Đọc', 'Đối chiếu câu với hình ảnh', 'Đọc hiểu cơ bản'],
  ['Phần Đọc', 'Ghép câu hỏi — trả lời', 'Logic giao tiếp'],
  ['Phần Đọc', 'Chọn từ / câu phù hợp', 'Từ vựng & ngữ pháp'],
];

const stepList = [
  'Kiểm tra mã đề & file nghe',
  'Chuẩn bị đầy đủ trước khi bấm giờ',
  'Không dùng từ điển khi làm bài',
  'Không dừng / tua lại file nghe',
  'Làm phần đọc ngay sau phần nghe',
  'Dừng khi hết giờ',
  'Chỉ xem đáp án sau khi hoàn thành',
];

const chuaDeSteps = [
  'Chấm riêng từng phần',
  'Ghi lại câu sai và nguyên nhân',
  'Nghe / đọc lại nội dung câu sai',
  'Làm lại sau 2–3 ngày',
];

const nguyenNhanRows = [
  ['Thiếu từ vựng', 'Ôn từ vựng theo chủ đề trước khi làm đề'],
  ['Nghe nhầm âm', 'Luyện nghe từng câu, đối chiếu phiên âm'],
  ['Bỏ qua từ phủ định', 'Chú ý 不, 没, 没有 khi nghe và đọc'],
  ['Đọc quá chậm', 'Luyện quét nhanh, nắm ý chính trước chi tiết'],
];

const lienHeRows = [
  ['现在几点？', 'Bây giờ mấy giờ?'],
  ['这个多少钱？', 'Cái này bao nhiêu tiền?'],
  ['这是我妈妈。', 'Đây là mẹ tôi.'],
  ['你想喝什么？', 'Bạn muốn uống gì?'],
];

const loiMeoRows = [
  ['Không xem trước hình ảnh', 'Quan sát nhanh trước khi nghe'],
  ['Chọn đáp án khi chưa nghe hết câu', 'Chờ câu kết thúc rồi mới chọn'],
  ['Dịch từng chữ khi đọc', 'Xác định ý chính thay vì dịch word-by-word'],
  ['Không ghi nguyên nhân sai', 'Lập bảng theo dõi lỗi để khắc phục'],
  ['Làm quá nhiều đề trong ngày', 'Ưu tiên ít nhưng chữa kỹ'],
  ['Dừng file để nghe lại khi thi thử', 'Chỉ nghe lại lúc chữa đề'],
];

function DeThiGrid() {
  return (
    <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-5">
      {Array.from({ length: 13 }, (_, i) => i + 1).map((num) => (
        <a
          key={num}
          href="#"
          onClick={(e) => e.preventDefault()}
          className="group flex aspect-square flex-col items-center justify-center rounded-lg border border-brand-gold/50 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-gold-deep hover:bg-brand-gold/5 hover:shadow-md"
        >
          <span className="font-display text-lg font-bold text-brand-red transition-colors group-hover:text-brand-gold-deep sm:text-xl">
            Đề {String(num).padStart(2, '0')}
          </span>
          <span className="mt-1 font-sans text-[10px] text-gray-400 transition-colors group-hover:text-brand-gold-deep">
            PDF + Audio
          </span>
        </a>
      ))}
    </div>
  );
}

function StepList({ steps, accent = false }: { steps: string[]; accent?: boolean }) {
  return (
    <ol className="mt-6 space-y-3">
      {steps.map((step, index) => (
        <li key={index} className="flex items-start gap-4">
          <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-sans text-sm font-bold ${accent ? 'border border-brand-gold-deep bg-brand-gold/15 text-brand-gold-deep' : 'bg-brand-red text-brand-gold'}`}>
            {index + 1}
          </span>
          <span className="pt-1 font-sans text-sm leading-relaxed text-gray-700">{step}</span>
        </li>
      ))}
    </ol>
  );
}

export default function DeThiHsk1Page() {
  return (
    <ArticleLayout
      title="Đề Thi HSK 1 Mới Nhất Có Đáp Án, File PDF Và File Nghe"
      breadcrumbs={[
        { label: 'Trang Chủ', href: '/' },
        { label: 'Thư Viện', href: '/thu-vien' },
        { label: 'Đề Thi HSK 1 Mới Nhất Có Đáp Án, File PDF Và File Nghe' },
      ]}
      updatedAt="26/09/2026"
    >
      <IntroText>
        Đề thi HSK 1 là tài liệu cần thiết cho người mới học tiếng Trung chuẩn bị
        tham gia kỳ thi năng lực Hán ngữ cấp độ đầu tiên. Luyện đề giúp bạn làm
        quen cấu trúc bài thi, dạng câu hỏi, tốc độ file nghe và cách phân bổ
        thời gian.
      </IntroText>

      <GoldImage
        src="https://res.cloudinary.com/qugyphlv/image/upload/v1789005180/hoat-dong_3.jpg"
        alt="Học viên luyện thi HSK tại ThanhMaiHSK"
        caption="Luyện đề thường xuyên là chìa khóa tự tin trước kỳ thi"
      />

      {/* 2. Cấu trúc đề thi */}
      <SectionHeading>Cấu Trúc Đề Thi HSK 1</SectionHeading>
      <div className="mt-6">
        <PremiumTable
          columns={[{ label: 'Tiêu Chí' }, { label: 'Chi Tiết' }]}
          rows={cauTrucRows.map(([k, v]) => [
            <span className="font-bold text-brand-red">{k}</span>,
            <span className="font-semibold text-gray-800">{v}</span>,
          ])}
        />
      </div>
      <GoldNote>
        Thí sinh không cần viết chữ Hán ở cấp độ HSK1. Từ 2026, chương trình thử
        nghiệm HSK 3.0 cũng đang được triển khai tại một số điểm thi — nên kiểm tra
        thông báo cụ thể trước khi đăng ký.
      </GoldNote>

      {/* 3. Các dạng câu hỏi */}
      <SectionHeading>Các Dạng Câu Hỏi Thường Gặp</SectionHeading>
      <div className="mt-6">
        <PremiumTable
          columns={[{ label: 'Phần Thi' }, { label: 'Dạng Bài' }, { label: 'Năng Lực Kiểm Tra' }]}
          rows={dangCauHoiRows.map(([phan, dang, nangluc]) => [
            <span className="font-bold text-brand-red">{phan}</span>,
            dang,
            nangluc,
          ])}
        />
      </div>

      {/* 4. Bộ 13 đề */}
      <SectionHeading>Bộ 13 Đề Thi HSK1 PDF Kèm File Nghe Và Đáp Án</SectionHeading>
      <div className="mt-6">
        <DeThiGrid />
      </div>
      <GoldNote>
        Một đề được làm nghiêm túc và chữa kỹ mang lại hiệu quả tốt hơn nhiều đề
        chỉ làm để kiểm tra điểm số.
      </GoldNote>

      {/* 5. Cách làm đề thử đúng chuẩn */}
      <SectionHeading>Cách Làm Đề Thi Thử Đúng Chuẩn</SectionHeading>
      <StepList steps={stepList} />

      {/* 6. Chữa đề theo 4 bước */}
      <SectionHeading>Chữa Đề Theo 4 Bước</SectionHeading>
      <StepList steps={chuaDeSteps} accent />
      <div className="mt-6">
        <PremiumTable
          columns={[{ label: 'Nguyên Nhân Sai' }, { label: 'Cách Khắc Phục' }]}
          rows={nguyenNhanRows.map(([nguyen, khacphuc]) => [
            <span className="font-bold text-brand-red">{nguyen}</span>,
            khacphuc,
          ])}
        />
      </div>

      {/* 7. Liên hệ thực tế */}
      <SectionHeading>Liên Hệ Thực Tế Từ Đề Thi</SectionHeading>
      <div className="mt-6">
        <PremiumTable
          columns={[{ label: 'Chữ Hán', align: 'center' }, { label: 'Dịch Nghĩa' }]}
          rows={lienHeRows.map(([hanzi, nghia]) => [
            <span className="font-display text-lg text-brand-red">{hanzi}</span>,
            <span className="font-semibold text-gray-800">{nghia}</span>,
          ])}
        />
      </div>

      {/* 8. Lỗi & mẹo */}
      <SectionHeading>Lỗi Thường Gặp & Mẹo Làm Bài</SectionHeading>
      <div className="mt-6">
        <PremiumTable
          columns={[{ label: 'Lỗi' }, { label: 'Mẹo Khắc Phục' }]}
          rows={loiMeoRows.map(([loi, meo]) => [
            <span className="font-bold text-brand-red">{loi}</span>,
            meo,
          ])}
        />
      </div>
      <GoldBullet items={[
        'Với dạng nối câu hỏi — trả lời, chú ý từ để hỏi: 什么 (sự vật / hành động), 谁 (người), 哪儿 (địa điểm), 几 / 多少 (số lượng).',
      ]} />

      {/* 9. Closing */}
      <BodyText>
        Nếu bạn cần một lộ trình ôn thi bài bản, được hướng dẫn kỹ từng dạng câu
        hỏi và sửa lỗi trực tiếp, khóa{' '}
        <a href="/khoa-hoc/luyen-thi-hsk-hskk" className="font-semibold text-brand-gold-deep underline decoration-brand-gold-deep/40 underline-offset-4 hover:text-brand-red">
          luyện thi HSK tại ThanhMaiHSK
        </a>{' '}
        sẽ giúp bạn tự tin hơn trước kỳ thi chính thức.
      </BodyText>
      <CtaButton href="https://zalo.me/0398519485" label="Đăng Ký Nhận Tư Vấn" />
    </ArticleLayout>
  );
}
