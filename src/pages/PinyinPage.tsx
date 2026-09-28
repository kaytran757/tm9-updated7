import ArticleLayout from '@/components/ArticleLayout';

/* ─── Shared premium table frame (matches Article 1 style) ─── */
function CornerOrnaments() {
  return (
    <>
      <span className="absolute left-2 top-2 h-6 w-6 border-l border-t border-brand-gold/60" aria-hidden="true" />
      <span className="absolute right-2 top-2 h-6 w-6 border-r border-t border-brand-gold/60" aria-hidden="true" />
      <span className="absolute bottom-2 left-2 h-6 w-6 border-b border-l border-brand-gold/60" aria-hidden="true" />
      <span className="absolute bottom-2 right-2 h-6 w-6 border-b border-r border-brand-gold/60" aria-hidden="true" />
    </>
  );
}

type Column = {
  label: string;
  align?: 'left' | 'center';
  className?: string;
};

function PremiumTable({ columns, rows }: { columns: Column[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-brand-gold/40 bg-white p-3 shadow-md sm:p-4">
      <CornerOrnaments />
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-brand-gold/50">
              {columns.map((col) => (
                <th
                  key={col.label}
                  className={`px-4 py-3 font-sans text-xs font-bold uppercase tracking-wide text-brand-gold-deep sm:px-6 ${
                    col.align === 'center' ? 'text-center' : 'text-left'
                  } ${col.className ?? ''}`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`border-b border-brand-gold/15 transition-colors hover:bg-brand-gold/5 ${
                  rowIndex % 2 === 0 ? 'bg-white' : 'bg-brand-cream/40'
                }`}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`px-4 py-3.5 font-sans text-sm text-gray-700 sm:px-6 ${
                      columns[cellIndex]?.align === 'center' ? 'text-center' : 'text-left'
                    } ${columns[cellIndex]?.className ?? ''}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function GoldImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="my-8">
      <div className="relative mx-auto max-w-md overflow-hidden rounded-xl border border-brand-gold/60 bg-white p-2 shadow-xl shadow-black/15">
        <img src={src} alt={alt} className="block h-[260px] w-full rounded-lg object-cover sm:h-[340px]" loading="lazy" />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center font-sans text-sm font-semibold text-brand-gold-deep">{caption}</figcaption>
      )}
    </figure>
  );
}

/* ─── Data ─── */

const pinyinExampleRows = [
  ['你', 'nǐ', 'bạn'],
  ['好', 'hǎo', 'tốt'],
  ['学', 'xué', 'học'],
  ['中', 'zhōng', 'giữa — Trung'],
  ['国', 'guó', 'quốc gia'],
  ['人', 'rén', 'người'],
];

const structureRows = [
  ['mā', 'm + a + thanh 1', '妈'],
  ['rén', 'r + en + thanh 2', '人'],
  ['hǎo', 'h + ao + thanh 3', '好'],
  ['ài', 'ai + thanh 4 (không thanh mẫu)', '爱'],
  ['è', 'e + thanh 4 (không thanh mẫu)', '饿'],
];

const thanhMauRows: [string, string, string][] = [
  ['b', 'môi khép rồi bật mở', 'bā 八 (tám)'],
  ['p', 'như b nhưng bật hơi mạnh', 'pā 拍 (vỗ)'],
  ['m', 'môi khép, âm mũi', 'mā 妈 (mẹ)'],
  ['f', 'răng trên chạm môi dưới', 'fā 发 (phát)'],
  ['d', 'đầu lưỡi chạm nướu trên', 'dā 打 (đánh)'],
  ['t', 'như d nhưng bật hơi', 'tā 他 (anh ấy)'],
  ['n', 'đầu lưỡi chạm nướu, âm mũi', 'nǐ 你 (bạn)'],
  ['l', 'đầu lưỡi chạm nướu, âm bên', 'lǐ 里 (trong)'],
  ['g', 'gốc lưỡi chạm ngạc mềm', 'gē 哥 (anh)'],
  ['k', 'như g nhưng bật hơi', 'kā 咖 (cà phê)'],
  ['h', 'gốc lưỡi gần ngạc mềm', 'hǎo 好 (tốt)'],
  ['j', 'lưỡi chạm ngạc cứng', 'jǐ 几 (mấy)'],
  ['q', 'như j nhưng bật hơi', 'qǐ 起 (đứng lên)'],
  ['x', 'lưỡi gần ngạc cứng', 'xǐ 洗 (rửa)'],
  ['zh', 'lưỡi cuộn chạm ngạc', 'zhī 知 (biết)'],
  ['ch', 'như zh nhưng bật hơi', 'chī 吃 (ăn)'],
  ['sh', 'lưỡi cuộn gần ngạc', 'shī 师 (thầy)'],
  ['r', 'như sh nhưng rung thanh quản', 'rén 人 (người)'],
  ['z', 'đầu lưỡi chạm răng trên', 'zì 字 (chữ)'],
  ['c', 'như z nhưng bật hơi', 'cì 次 (lần)'],
  ['s', 'đầu lưỡi gần răng trên', 'sā 三 (ba)'],
];

const vanMauRows: [string, string][] = [
  ['Vận mẫu đơn', 'a, o, e, i, u, ü'],
  ['Vận mẫu kép', 'ai, ei, ao, ou, ia, ie, ua, uo, üe, iao, iou, uai, uei'],
  ['Vận mẫu mũi trước', 'an, en, in, ün, ian, uan, üan, uen'],
  ['Vận mẫu mũi sau', 'ang, eng, ing, ong, iong, iang, uang, ueng'],
  ['Vận mẫu uốn lưỡi', 'er'],
];

const thanhDieuRows: [string, string, string, string][] = [
  ['Thanh 1', 'ā', 'cao và ngang', '妈 mā'],
  ['Thanh 2', 'á', 'đi lên', '麻 má'],
  ['Thanh 3', 'ǎ', 'xuống rồi lên', '马 mǎ'],
  ['Thanh 4', 'à', 'đi xuống nhanh', '骂 mà'],
  ['Thanh nhẹ', 'a', 'ngắn và nhẹ', '吗 ma'],
];

const roadmapRows: [string, string][] = [
  ['Ngày 1', '6 vận mẫu đơn (a, o, e, i, u, ü) + 4 thanh điệu'],
  ['Ngày 2', 'Nhóm b, p, m, f và d, t, n, l'],
  ['Ngày 3', 'Nhóm g, k, h và j, q, x'],
  ['Ngày 4', 'Nhóm z, c, s và zh, ch, sh, r'],
  ['Ngày 5', 'Vận mẫu kép (ai, ei, ao, ou...)'],
  ['Ngày 6', 'Vận mẫu mũi và âm ü'],
  ['Ngày 7', 'Ghép âm, đọc từ, ghi âm kiểm tra'],
];

/* ─── Page ─── */
export default function PinyinPage() {
  return (
    <ArticleLayout
      title="Bảng Chữ Cái Tiếng Trung Pinyin Đầy Đủ Cho Người Mới Bắt Đầu"
      breadcrumbs={[
        { label: 'Trang Chủ', href: '/' },
        { label: 'Thư Viện', href: '/thu-vien' },
        { label: 'Bảng Chữ Cái Tiếng Trung Pinyin Đầy Đủ Cho Người Mới Bắt Đầu' },
      ]}
      updatedAt="26/09/2026"
    >
      {/* 1. Intro */}
      <p className="font-sans text-base leading-[1.85] text-gray-700">
        Bảng chữ cái tiếng Trung mà người mới thường nhắc đến thực chất là Pinyin
        — hệ thống phiên âm bằng chữ Latin giúp ghi lại cách đọc của chữ Hán, chứ
        không phải chữ viết chính thức (chữ Hán mới là chữ viết chính). Bài viết
        này giúp bạn nắm trọn bộ Pinyin, cách ghép âm, thanh điệu và phương pháp
        luyện phát âm chuẩn ngay từ đầu.
      </p>

      <GoldImage
        src="https://res.cloudinary.com/qugyphlv/image/upload/v1789005178/hoat-dong_2.jpg"
        alt="Học viên ThanhMaiHSK trong lớp học tiếng Trung"
        caption="Học Pinyin là bước đầu tiên không thể bỏ qua"
      />

      {/* 2. Pinyin là gì */}
      <h2 className="mt-10 font-display text-2xl text-brand-red sm:text-3xl">
        Bảng Chữ Cái Tiếng Trung Thực Chất Là Gì?
      </h2>
      <p className="mt-4 font-sans text-base leading-[1.85] text-gray-700">
        Pinyin là hệ thống phiên âm dùng chữ Latin để ghi cách đọc của chữ Hán.
        Chữ Hán mới là chữ viết chính thức — Pinyin chỉ đóng vai trò trợ giúp đọc
        và tra cứu, không thay thế chữ Hán trong văn bản.
      </p>

      <div className="mt-6">
        <PremiumTable
          columns={[
            { label: 'Chữ Hán', align: 'center' },
            { label: 'Pinyin' },
            { label: 'Nghĩa' },
          ]}
          rows={pinyinExampleRows.map(([hanzi, pinyin, meaning]) => [
            <span className="font-display text-xl text-brand-red">{hanzi}</span>,
            <span className="font-semibold text-gray-800">{pinyin}</span>,
            meaning,
          ])}
        />
      </div>

      <ul className="mt-6 space-y-2.5">
        {[
          'Giúp đọc đúng chữ Hán mới',
          'Phân biệt các âm gần giống nhau',
          'Thể hiện thanh điệu',
          'Hỗ trợ tra từ điển và gõ chữ Hán trên điện thoại, máy tính',
        ].map((item) => (
          <li key={item} className="flex items-start gap-3 font-sans text-sm leading-relaxed text-gray-700">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-gold-deep" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>

      {/* 3. Cấu tạo âm tiết */}
      <h2 className="mt-12 font-display text-2xl text-brand-red sm:text-3xl">
        Cấu Tạo Một Âm Tiết Tiếng Trung
      </h2>
      <p className="mt-4 font-sans text-base leading-[1.85] text-gray-700">
        Mỗi âm tiết tiếng Trung gồm 3 phần: thanh mẫu (phụ âm đầu), vận mẫu (phần
        âm sau) và thanh điệu. Một số âm tiết không có thanh mẫu, chỉ có vận mẫu
        và thanh điệu.
      </p>

      <div className="mt-6">
        <PremiumTable
          columns={[
            { label: 'Pinyin' },
            { label: 'Cấu Tạo' },
            { label: 'Chữ Hán', align: 'center' },
          ]}
          rows={structureRows.map(([pinyin, structure, hanzi]) => [
            <span className="font-semibold text-gray-800">{pinyin}</span>,
            structure,
            <span className="font-display text-xl text-brand-red">{hanzi}</span>,
          ])}
        />
      </div>

      {/* 4. Bảng thanh mẫu */}
      <h2 className="mt-12 font-display text-2xl text-brand-red sm:text-3xl">
        Bảng Thanh Mẫu (21 Phụ Âm Đầu)
      </h2>
      <p className="mt-4 font-sans text-base leading-[1.85] text-gray-700">
        21 thanh mẫu là 21 phụ âm đầu dùng để khởi đầu một âm tiết tiếng Trung.
      </p>

      <div className="mt-6">
        <PremiumTable
          columns={[
            { label: 'Thanh Mẫu', align: 'center' },
            { label: 'Cách Phát Âm' },
            { label: 'Ví Dụ' },
          ]}
          rows={thanhMauRows.map(([tm, desc, example]) => [
            <span className="font-display text-lg font-bold text-brand-red">{tm}</span>,
            desc,
            <span className="font-semibold text-gray-800">{example}</span>,
          ])}
        />
      </div>

      <p className="mt-4 border-l-2 border-brand-gold-deep pl-4 font-sans text-sm italic leading-relaxed text-gray-600">
        y và w không thuộc 21 thanh mẫu chính — chỉ được dùng khi âm tiết bắt đầu
        bằng i, u, ü mà không có thanh mẫu (ví dụ: i → yi, u → wu, ü → yu).
      </p>

      {/* 5. Bảng vận mẫu */}
      <h2 className="mt-12 font-display text-2xl text-brand-red sm:text-3xl">
        Bảng Vận Mẫu
      </h2>

      <div className="mt-6">
        <PremiumTable
          columns={[
            { label: 'Nhóm Vận Mẫu' },
            { label: 'Danh Sách' },
          ]}
          rows={vanMauRows.map(([group, list]) => [
            <span className="font-bold text-brand-red">{group}</span>,
            <span className="font-semibold text-gray-800">{list}</span>,
          ])}
        />
      </div>

      <p className="mt-4 border-l-2 border-brand-gold-deep pl-4 font-sans text-sm italic leading-relaxed text-gray-600">
        Lưu ý: ü mất 2 dấu chấm khi đi sau j, q, x (viết là ju, qu, xu) nhưng vẫn
        giữ nguyên âm ü khi đọc.
      </p>

      {/* 6. Thanh điệu */}
      <h2 className="mt-12 font-display text-2xl text-brand-red sm:text-3xl">
        Thanh Điệu — 4 Thanh + 1 Thanh Nhẹ
      </h2>

      <div className="mt-6">
        <PremiumTable
          columns={[
            { label: 'Thanh Điệu' },
            { label: 'Ký Hiệu', align: 'center' },
            { label: 'Cách Đọc' },
            { label: 'Ví Dụ' },
          ]}
          rows={thanhDieuRows.map(([name, symbol, read, example]) => [
            <span className="font-bold text-brand-red">{name}</span>,
            <span className="font-display text-2xl text-brand-red">{symbol}</span>,
            read,
            <span className="font-semibold text-gray-800">{example}</span>,
          ])}
        />
      </div>

      <ul className="mt-6 space-y-2.5">
        {[
          'Hai thanh 3 liền nhau → thanh đầu đọc gần giống thanh 2 (ví dụ: 你好 đọc gần như ní hǎo).',
          '不 (bù) đọc thành bú trước thanh 4; 一 (yī) đọc thành yí trước thanh 4, hoặc yì trước thanh 1/2/3.',
        ].map((item) => (
          <li key={item} className="flex items-start gap-3 font-sans text-sm leading-relaxed text-gray-700">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-gold-deep" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>

      {/* 7. Cách học Pinyin */}
      <h2 className="mt-12 font-display text-2xl text-brand-red sm:text-3xl">
        Cách Học Pinyin Hiệu Quả
      </h2>

      <div className="mt-6">
        <PremiumTable
          columns={[
            { label: 'Giai Đoạn' },
            { label: 'Nội Dung' },
          ]}
          rows={roadmapRows.map(([stage, content]) => [
            <span className="font-bold text-brand-red">{stage}</span>,
            content,
          ])}
        />
      </div>

      <p className="mt-8 font-sans text-base leading-[1.85] text-gray-700">
        Nắm chắc Pinyin giúp bạn đọc từ mới dễ hơn, tra từ điển hiệu quả hơn và tự
        tin bước vào giai đoạn học từ vựng, giao tiếp. Nếu bạn cần một lộ trình có
        giảng viên hướng dẫn phát âm và sửa lỗi trực tiếp, các khóa học tại
        ThanhMaiHSK sẽ giúp bạn xây nền tảng vững chắc ngay từ đầu.
      </p>

      {/* CTA */}
      <div className="mt-8 border-t border-brand-gold/30 pt-8">
        <a
          href="https://zalo.me/0398519485"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[48px] items-center rounded-full bg-brand-gold px-8 py-4 font-sans text-base font-bold text-brand-brown shadow-lg shadow-black/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold-deep hover:text-white"
        >
          Đăng Ký Nhận Tư Vấn
        </a>
      </div>
    </ArticleLayout>
  );
}
