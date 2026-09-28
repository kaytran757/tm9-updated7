import { useMemo, useRef, useState } from 'react';
import { Volume2, Search } from 'lucide-react';
import ArticleLayout from '@/components/ArticleLayout';

type SurnameRow = {
  surname: string;
  hanzi: string;
  pinyin: string;
  audioUrl: string;
};

const surnameData: SurnameRow[] = [
  { surname: 'Nguyễn', hanzi: '阮', pinyin: 'Ruǎn', audioUrl: 'https://res.cloudinary.com/qugyphlv/video/upload/v1790397124/ho-001.mp3' },
  { surname: 'Trần', hanzi: '陈', pinyin: 'Chén', audioUrl: 'https://res.cloudinary.com/qugyphlv/video/upload/v1790397124/ho-002.mp3' },
  { surname: 'Lê', hanzi: '黎', pinyin: 'Lí', audioUrl: 'https://res.cloudinary.com/qugyphlv/video/upload/v1790397125/ho-003.mp3' },
  { surname: 'Phạm', hanzi: '范', pinyin: 'Fàn', audioUrl: 'https://res.cloudinary.com/qugyphlv/video/upload/v1790397125/ho-004.mp3' },
  { surname: 'Hoàng/Huỳnh', hanzi: '黃', pinyin: 'Huáng', audioUrl: 'https://res.cloudinary.com/qugyphlv/video/upload/v1790397125/ho-005.mp3' },
  { surname: 'Phan', hanzi: '潘', pinyin: 'Pān', audioUrl: 'https://res.cloudinary.com/qugyphlv/video/upload/v1790397125/ho-006.mp3' },
  { surname: 'Vũ/Võ', hanzi: '武', pinyin: 'Wǔ', audioUrl: 'https://res.cloudinary.com/qugyphlv/video/upload/v1790396445/ho-007.mp3' },
  { surname: 'Đặng', hanzi: '邓', pinyin: 'Dèng', audioUrl: 'https://res.cloudinary.com/qugyphlv/video/upload/v1790396444/ho-008.mp3' },
  { surname: 'Bùi', hanzi: '裴', pinyin: 'Péi', audioUrl: 'https://res.cloudinary.com/qugyphlv/video/upload/v1790396444/ho-009.mp3' },
  { surname: 'Đỗ', hanzi: '杜', pinyin: 'Dù', audioUrl: 'https://res.cloudinary.com/qugyphlv/video/upload/v1790396444/ho-010.mp3' },
  { surname: 'Hồ', hanzi: '胡', pinyin: 'Hú', audioUrl: 'https://res.cloudinary.com/qugyphlv/video/upload/v1790396444/ho-011.mp3' },
  { surname: 'Ngô', hanzi: '吴', pinyin: 'Wú', audioUrl: 'https://res.cloudinary.com/qugyphlv/video/upload/v1790396445/ho-012.mp3' },
  { surname: 'Dương', hanzi: '杨', pinyin: 'Yáng', audioUrl: 'https://res.cloudinary.com/qugyphlv/video/upload/v1790396454/ho-013.mp3' },
  { surname: 'Lý', hanzi: '李', pinyin: 'Lǐ', audioUrl: 'https://res.cloudinary.com/qugyphlv/video/upload/v1790396467/ho-014.mp3' },
];

/** Strip Vietnamese diacritics + normalize Đ/đ for case-insensitive, diacritic-insensitive search. */
function normalizeVietnamese(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/Đ/g, 'D')
    .replace(/đ/g, 'd')
    .toLowerCase()
    .trim();
}

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

function SurnameTable() {
  const [search, setSearch] = useState('');
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const filtered = useMemo(() => {
    const normalized = normalizeVietnamese(search);
    if (!normalized) return surnameData.map((row, index) => ({ row, originalIndex: index }));
    return surnameData
      .map((row, index) => ({ row, originalIndex: index }))
      .filter((item) => normalizeVietnamese(item.row.surname).includes(normalized));
  }, [search]);

  const playAudio = (index: number, url: string, event: React.MouseEvent) => {
    event.stopPropagation();

    // If clicking the same row that's already playing, stop it
    if (playingIndex === index && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setPlayingIndex(null);
      return;
    }

    // Stop any currently playing audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const audio = new Audio(url);
    audioRef.current = audio;
    setPlayingIndex(index);

    audio.addEventListener('ended', () => {
      setPlayingIndex(null);
    });
    audio.addEventListener('error', () => {
      setPlayingIndex(null);
    });
    audio.play().catch(() => setPlayingIndex(null));
  };

  return (
    <div>
      {/* Search bar */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-gold-deep/60" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Tìm kiếm theo họ..."
            className="w-full rounded-full border border-brand-gold/50 bg-white px-5 py-3 pl-11 font-sans text-sm text-brand-red placeholder:text-gray-400 outline-none transition-all focus:border-brand-gold-deep focus:ring-2 focus:ring-brand-gold/20"
          />
        </div>
        {search && (
          <button
            type="button"
            onClick={() => setSearch('')}
            className="self-start rounded-full border border-brand-gold/40 px-4 py-2 font-sans text-xs font-semibold text-brand-gold-deep transition-colors hover:bg-brand-gold/10 sm:self-auto"
          >
            Xóa lọc
          </button>
        )}
      </div>

      {/* Table */}
      <div className="relative overflow-hidden rounded-2xl border border-brand-gold/40 bg-white p-3 shadow-md sm:p-4">
        <CornerOrnaments />
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-brand-gold/50">
                <th className="px-4 py-3 text-center font-sans text-xs font-bold uppercase tracking-wide text-brand-gold-deep sm:px-6">
                  Phát Âm
                </th>
                <th className="px-4 py-3 text-left font-sans text-xs font-bold uppercase tracking-wide text-brand-gold-deep sm:px-6">
                  Họ
                </th>
                <th className="px-4 py-3 text-center font-sans text-xs font-bold uppercase tracking-wide text-brand-gold-deep sm:px-6">
                  Chữ Hán
                </th>
                <th className="px-4 py-3 text-left font-sans text-xs font-bold uppercase tracking-wide text-brand-gold-deep sm:px-6">
                  Pinyin
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-10 text-center font-sans text-sm text-gray-500">
                    Không tìm thấy họ phù hợp.
                  </td>
                </tr>
              ) : (
                filtered.map(({ row, originalIndex }, displayIndex) => (
                  <tr
                    key={originalIndex}
                    className={`border-b border-brand-gold/15 transition-colors hover:bg-brand-gold/5 ${
                      displayIndex % 2 === 0 ? 'bg-white' : 'bg-brand-cream/40'
                    }`}
                  >
                    <td className="px-4 py-4 text-center sm:px-6">
                      <button
                        type="button"
                        onClick={(e) => playAudio(originalIndex, row.audioUrl, e)}
                        className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-200 ${
                          playingIndex === originalIndex
                            ? 'border-brand-red bg-brand-red text-brand-gold shadow-md shadow-brand-red/30 animate-pulse'
                            : 'border-brand-gold-deep/50 bg-brand-cream text-brand-gold-deep hover:border-brand-gold-deep hover:bg-brand-gold/15'
                        }`}
                        aria-label={`Nghe phát âm họ ${row.surname}`}
                      >
                        <Volume2 className="h-4 w-4" />
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 font-sans text-sm font-bold text-brand-red sm:px-6">
                      {row.surname}
                    </td>
                    <td className="px-4 py-4 text-center sm:px-6">
                      <span className="font-display text-2xl text-brand-red sm:text-3xl">
                        {row.hanzi}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 font-sans text-sm font-semibold text-gray-700 sm:px-6">
                      {row.pinyin}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <p className="mt-4 text-center font-sans text-xs text-gray-500">
        {filtered.length} / {surnameData.length} họ được hiển thị
      </p>
    </div>
  );
}

export default function DichTenPage() {
  return (
    <ArticleLayout
      title="Dịch Tên Từ Tiếng Việt Sang Tiếng Trung"
      breadcrumbs={[
        { label: 'Trang Chủ', href: '/' },
        { label: 'Thư Viện', href: '/thu-vien' },
        { label: 'Dịch Tên Từ Tiếng Việt Sang Tiếng Trung' },
      ]}
      updatedAt="26/09/2026"
    >
      {/* Intro */}
      <p className="font-sans text-base leading-[1.85] text-gray-700">
        Tên và họ của mỗi người đều mang một ý nghĩa riêng. Khi học tiếng Trung,
        rất nhiều học viên của ThanhMaiHSK thắc mắc họ tên tiếng Việt của mình sẽ
        được viết và đọc như thế nào bằng chữ Hán. Bài viết này giúp bạn tra cứu
        cách viết chữ Hán, cách phiên âm Pinyin và nghe phát âm chuẩn của các họ
        phổ biến nhất tại Việt Nam.
      </p>

      <h2 className="mt-10 font-display text-2xl text-brand-red sm:text-3xl">
        Các Họ Trong Tiếng Trung Được Đọc Như Thế Nào?
      </h2>

      <p className="mt-4 flex items-center gap-2 font-sans text-sm text-gray-600">
        <Volume2 className="h-4 w-4 text-brand-gold-deep" />
        Bấm vào biểu tượng loa cạnh mỗi chữ Hán để nghe phát âm chuẩn.
      </p>

      <div className="mt-8">
        <h3 className="mb-4 font-sans text-lg font-bold text-brand-red">
          Các Họ Phổ Biến Trong Tiếng Trung
        </h3>
        <SurnameTable />
      </div>

      {/* Closing CTA */}
      <div className="mt-14 border-t border-brand-gold/30 pt-8">
        <p className="font-sans text-base leading-relaxed text-gray-700">
          Bạn muốn học phát âm chuẩn và ghi nhớ chữ Hán nhanh hơn? Tham gia khóa
          học tại ThanhMaiHSK để được giảng viên đồng hành từng bước trên hành
 trình chinh phục tiếng Trung.
        </p>
        <a
          href="https://zalo.me/0398519485"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex min-h-[48px] items-center rounded-full bg-brand-gold px-8 py-4 font-sans text-base font-bold text-brand-brown shadow-lg shadow-black/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold-deep hover:text-white"
        >
          Đăng Ký Nhận Tư Vấn
        </a>
      </div>
    </ArticleLayout>
  );
}
