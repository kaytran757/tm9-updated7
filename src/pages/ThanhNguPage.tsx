import { useMemo, useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import ArticleLayout from '@/components/ArticleLayout';
import { PremiumTable, GoldImage, GoldBullet, SectionHeading, IntroText, BodyText, CtaButton, normalizeVietnamese } from '@/components/article-ui';

type ThanhNgu = {
  stt: number;
  hanzi: string;
  pinyin: string;
  nghia: string;
};

const thanhNguData: ThanhNgu[] = [
  { stt: 1, hanzi: '一鸣惊人', pinyin: 'yī míng jīng rén', nghia: 'Một tiếng kêu khiến người ta kinh ngạc — bỗng nổi tiếng' },
  { stt: 2, hanzi: '一举两得', pinyin: 'yī jǔ liǎng dé', nghia: 'Một công đôi việc' },
  { stt: 3, hanzi: '一帆风顺', pinyin: 'yī fān fēng shùn', nghia: 'Thuận buồm xuôi gió' },
  { stt: 4, hanzi: '一诺千金', pinyin: 'yī nuò qiān jīn', nghia: 'Lời hứa giá trị ngàn vàng' },
  { stt: 5, hanzi: '一视同仁', pinyin: 'yī shì tóng rén', nghia: 'Đối xử bình đẳng với mọi người' },
  { stt: 6, hanzi: '一丝不苟', pinyin: 'yī sī bù gǒu', nghia: 'Tỉ mỉ, cẩn thận từng chi tiết' },
  { stt: 7, hanzi: '一往无前', pinyin: 'yī wǎng wú qián', nghia: 'Tiến lên không lùi lại' },
  { stt: 8, hanzi: '一意孤行', pinyin: 'yī yì gū xíng', nghia: 'Cố chấp làm theo ý mình' },
  { stt: 9, hanzi: '一目了然', pinyin: 'yī mù liǎo rán', nghia: 'Nhìn qua là hiểu ngay' },
  { stt: 10, hanzi: '一日千里', pinyin: 'yī rì qiān lǐ', nghia: 'Phát triển tiến bộ cực nhanh' },
  { stt: 11, hanzi: '入乡随俗', pinyin: 'rù xiāng suí sú', nghia: 'Đến quê người thì theo phong tục nơi đó' },
  { stt: 12, hanzi: '入木三分', pinyin: 'rù mù sān fēn', nghia: 'Sâu sắc, sắc sảo' },
  { stt: 13, hanzi: '了如指掌', pinyin: 'liǎo rú zhǐ zhǎng', nghia: 'Hiểu rất rõ, rành mạch' },
  { stt: 14, hanzi: '三心二意', pinyin: 'sān xīn èr yì', nghia: 'Thiếu quyết đoán, dao động' },
  { stt: 15, hanzi: '三思而行', pinyin: 'sān sī ér xíng', nghia: 'Suy nghĩ kỹ rồi mới làm' },
  { stt: 16, hanzi: '大公无私', pinyin: 'dà gōng wú sī', nghia: 'Công bằng, không tư lợi' },
  { stt: 17, hanzi: '大材小用', pinyin: 'dà cái xiǎo yòng', nghia: 'Dùng người tài vào việc nhỏ' },
  { stt: 18, hanzi: '大器晚成', pinyin: 'dà qì wǎn chéng', nghia: 'Người tài thường thành công muộn' },
  { stt: 19, hanzi: '千钧一发', pinyin: 'qiān jūn yī fà', nghia: 'Tình thế cực kỳ nguy ngập' },
  { stt: 20, hanzi: '千载难逢', pinyin: 'qiān zǎi nán féng', nghia: 'Cơ hiếm ngàn năm mới có' },
  { stt: 21, hanzi: '千方百计', pinyin: 'qiān fāng bǎi jì', nghia: 'Dùng mọi cách để đạt mục đích' },
  { stt: 22, hanzi: '万无一失', pinyin: 'wàn wú yī shī', nghia: 'Chắc chắn không sai sót' },
  { stt: 23, hanzi: '万事如意', pinyin: 'wàn shì rú yì', nghia: 'Mọi việc như ý muốn' },
  { stt: 24, hanzi: '亡羊补牢', pinyin: 'wáng yáng bǔ láo', nghia: 'Mất bò mới sửa chuồng — vẫn kịp nếu sửa đúng lúc' },
  { stt: 25, hanzi: '井底之蛙', pinyin: 'jǐng dǐ zhī wā', nghia: 'Ếch ngồi đáy giếng — kiến thức hẹp hòi' },
  { stt: 26, hanzi: '天下无双', pinyin: 'tiān xià wú shuāng', nghia: 'Độc nhất vô nhị' },
  { stt: 27, hanzi: '天经地义', pinyin: 'tiān jīng dì yì', nghia: 'Điều hiển nhiên đúng đắn' },
  { stt: 28, hanzi: '无可奈何', pinyin: 'wú kě nài hé', nghia: 'Không còn cách nào khác' },
  { stt: 29, hanzi: '无名小卒', pinyin: 'wú míng xiǎo zú', nghia: 'Kẻ vô danh tiểu tốt' },
  { stt: 30, hanzi: '无济于事', pinyin: 'wú jì yú shì', nghia: 'Không giúp ích được gì' },
  { stt: 31, hanzi: '不可救药', pinyin: 'bù kě jiù yào', nghia: 'Không thể cứu vãn' },
  { stt: 32, hanzi: '不可胜数', pinyin: 'bù kě shèng shǔ', nghia: 'Nhiều không thể đếm hết' },
  { stt: 33, hanzi: '不劳而获', pinyin: 'bù láo ér huò', nghia: 'Không lao động mà có được' },
  { stt: 34, hanzi: '不耻下问', pinyin: 'bù chǐ xià wèn', nghia: 'Không xấu hổ khi hỏi người dưới' },
  { stt: 35, hanzi: '不速之客', pinyin: 'bù sù zhī kè', nghia: 'Khách đến không được mời' },
  { stt: 36, hanzi: '不计其数', pinyin: 'bù jì qí shù', nghia: 'Nhiều không thể đếm' },
  { stt: 37, hanzi: '不翼而飞', pinyin: 'bù yì ér fēi', nghia: 'Bay mất — biến mất không để lại dấu vết' },
  { stt: 38, hanzi: '画蛇添足', pinyin: 'huà shé tiān zú', nghia: 'Vẽ rắn thêm chân — làm thừa' },
  { stt: 39, hanzi: '画龙点睛', pinyin: 'huà lóng diǎn jīng', nghia: 'Nhấn nét điểm nhấn quan trọng' },
  { stt: 40, hanzi: '半途而废', pinyin: 'bàn tú ér fèi', nghia: 'Nửa chừng bỏ dở' },
  { stt: 41, hanzi: '对症下药', pinyin: 'duì zhèng xià yào', nghia: 'Bắt đúng bệnh mới chữa' },
  { stt: 42, hanzi: '对牛弹琴', pinyin: 'duì niú tán qín', nghia: 'Đàn gảy tai trâu — nói chuyện không đối tượng' },
  { stt: 43, hanzi: '自相矛盾', pinyin: 'zì xiāng máo dùn', nghia: 'Tự mâu thuẫn với mình' },
  { stt: 44, hanzi: '自言自语', pinyin: 'zì yán zì yǔ', nghia: 'Tự nói với mình' },
  { stt: 45, hanzi: '自以为是', pinyin: 'zì yǐ wéi shì', nghia: 'Tự cho mình là đúng' },
  { stt: 46, hanzi: '名副其实', pinyin: 'míng fù qí shí', nghia: 'Danh xứng với thực' },
  { stt: 47, hanzi: '名落孙山', pinyin: 'míng luò sūn shān', nghia: 'Thi trượt, không đỗ' },
  { stt: 48, hanzi: '多多益善', pinyin: 'duō duō yì shàn', nghia: 'Càng nhiều càng tốt' },
  { stt: 49, hanzi: '多才多艺', pinyin: 'duō cái duō yì', nghia: 'Nhiều tài nhiều nghệ' },
  { stt: 50, hanzi: '守株待兔', pinyin: 'shǒu zhū dài tù', nghia: 'Này gốc chờ thỏ — ỷ lại may mắn' },
  { stt: 51, hanzi: '安分守己', pinyin: 'ān fèn shǒu jǐ', nghia: 'Sống giữ đúng phận mình' },
  { stt: 52, hanzi: '如鱼得水', pinyin: 'rú yú dé shuǐ', nghia: 'Như cá gặp nước — ở đúng môi trường' },
  { stt: 53, hanzi: '如火如荼', pinyin: 'rú huǒ rú tú', nghia: 'Sôi nổi, mạnh mẽ' },
  { stt: 54, hanzi: '百发百中', pinyin: 'bǎi fā bǎi zhòng', nghia: 'Bách phát bách trúng' },
  { stt: 55, hanzi: '百折不挠', pinyin: 'bǎi zhé bù náo', nghia: 'Trăm lần vấp không chùn bước' },
  { stt: 56, hanzi: '有备无患', pinyin: 'yǒu bèi wú huàn', nghia: 'Chuẩn bị trước thì không lo sau' },
  { stt: 57, hanzi: '有口皆碑', pinyin: 'yǒu kǒu jiē bēi', nghia: 'Ai cũng khen ngợi' },
  { stt: 58, hanzi: '有恃无恐', pinyin: 'yǒu shì wú kǒng', nghia: 'Có chỗ dựa nên không sợ' },
  { stt: 59, hanzi: '老马识途', pinyin: 'lǎo mǎ shí tú', nghia: 'Người giàu kinh nghiệm biết đường' },
  { stt: 60, hanzi: '老当益壮', pinyin: 'lǎo dāng yì zhuàng', nghia: 'Già nhưng càng khỏe mạnh' },
  { stt: 61, hanzi: '耳目一新', pinyin: 'ěr mù yī xīn', nghia: 'Cảm giác mới mẻ, sảng khoái' },
  { stt: 62, hanzi: '舍己为人', pinyin: 'shě jǐ wèi rén', nghia: 'Hy sinh vì người khác' },
  { stt: 63, hanzi: '舍近求远', pinyin: 'shě jìn qiú yuǎn', nghia: 'Bỏ gần tìm xa — làm phiền unnecessarily' },
  { stt: 64, hanzi: '兵贵神速', pinyin: 'bīng guì shén sù', nghia: 'Đánh giáu cốt nhanh chóng' },
  { stt: 65, hanzi: '事半功倍', pinyin: 'shì bàn gōng bèi', nghia: 'Nửa công sức, gấp đôi kết quả' },
  { stt: 66, hanzi: '事与愿违', pinyin: 'shì yǔ yuàn wéi', nghia: 'Việc không như ý muốn' },
  { stt: 67, hanzi: '刻舟求剑', pinyin: 'kè zhōu qiú jiàn', nghia: 'Khắc thuyền tìm gươm — cố chấp, không biết tùy biến' },
  { stt: 68, hanzi: '东山再起', pinyin: 'dōng shān zài qǐ', nghia: 'Phục hồi, trở lại thành công' },
  { stt: 69, hanzi: '束手无策', pinyin: 'shù shǒu wú cè', nghia: 'Bó tay không có cách' },
  { stt: 70, hanzi: '纸上谈兵', pinyin: 'zhǐ shàng tán bīng', nghia: 'Bàn chuyện trên giấy — lý thuyết suông' },
  { stt: 71, hanzi: '花言巧语', pinyin: 'huā yán qiǎo yǔ', nghia: 'Nói ngon nói ngọt' },
  { stt: 72, hanzi: '走马观花', pinyin: 'zǒu mǎ guān huā', nghia: 'Ngắm hoa trên lưng ngựa — xem qua loa' },
  { stt: 73, hanzi: '志同道合', pinyin: 'zhì tóng dào hé', nghia: 'Cùng chí hướng, cùng đường' },
  { stt: 74, hanzi: '劳逸结合', pinyin: 'láo yì jié hé', nghia: 'Kết hợp lao động và nghỉ ngơi' },
  { stt: 75, hanzi: '别具一格', pinyin: 'bié jù yī gé', nghia: 'Có phong cách riêng, độc đáo' },
  { stt: 76, hanzi: '别开生面', pinyin: 'bié kāi shēng miàn', nghia: 'Mở ra một mặt mới, mới mẻ' },
  { stt: 77, hanzi: '妙笔生花', pinyin: 'miào bǐ shēng huā', nghia: 'Bút pháp tài hoa' },
  { stt: 78, hanzi: '弄巧成拙', pinyin: 'nòng qiǎo chéng zhuō', nghia: 'Muốn khéo thành vụng' },
  { stt: 79, hanzi: '投桃报李', pinyin: 'tóu táo bào lǐ', nghia: 'Cho đào trả mận — qua lại tình nghĩa' },
  { stt: 80, hanzi: '杞人忧天', pinyin: 'qǐ rén yōu tiān', nghia: 'Lo thái quá chuyện vô lý' },
  { stt: 81, hanzi: '求之不得', pinyin: 'qiú zhī bù dé', nghia: 'Cầu mà không được' },
  { stt: 82, hanzi: '沉默寡言', pinyin: 'chén mò guǎ yán', nghia: 'Ít nói, trầm mặc' },
  { stt: 83, hanzi: '良药苦口', pinyin: 'liáng yào kǔ kǒu', nghia: 'Thuốc hay đắng miệng — lời khuyên thật khó nghe' },
  { stt: 84, hanzi: '辛苦了', pinyin: 'xīn kǔ le', nghia: 'Cảm ơn vì đã vất vả' },
  { stt: 85, hanzi: '孤注一掷', pinyin: 'gū zhù yī zhì', nghia: 'Cược tất cả vào một lần' },
  { stt: 86, hanzi: '孜孜不倦', pinyin: 'zī zī bù juàn', nghia: 'Học tập chăm chỉ không mệt mỏi' },
  { stt: 87, hanzi: '后来居上', pinyin: 'hòu lái jū shàng', nghia: 'Người đi sau vượt người đi trước' },
  { stt: 88, hanzi: '拔苗助长', pinyin: 'bá miáo zhù zhǎng', nghia: 'Kéo mầm giúp lớn — nóng vội gây hại' },
  { stt: 89, hanzi: '持之以恒', pinyin: 'chí zhī yǐ héng', nghia: 'Kiên trì không bỏ' },
  { stt: 90, hanzi: '狐假虎威', pinyin: 'hú jiǎ hǔ wēi', nghia: 'Chó sói mượn oai hổ — mượn oai người khác' },
  { stt: 91, hanzi: '画饼充饥', pinyin: 'huà bǐng chōng jī', nghia: 'Vẽ bánh lót bụng — tự an ủi viển vông' },
  { stt: 92, hanzi: '削足适履', pinyin: 'xuē zú shì lǚ', nghia: 'Cắt chân vừa giày — nhượng bộ thiển cận' },
  { stt: 93, hanzi: '指鹿为马', pinyin: 'zhǐ lù wéi mǎ', nghia: 'Chỉ hươu thành ngựa — cố ý nói sai sự thật' },
  { stt: 94, hanzi: '点石成金', pinyin: 'diǎn shí chéng jīn', nghia: 'Chạm đá thành vàng — biến hóa tài tình' },
  { stt: 95, hanzi: '顺其自然', pinyin: 'shùn qí zì rán', nghia: 'Để mọi việc tự nhiên theo lẽ' },
  { stt: 96, hanzi: '熟能生巧', pinyin: 'shú néng shēng qiǎo', nghia: 'Tay nghề sinh khéo' },
  { stt: 97, hanzi: '嗷嗷待哺', pinyin: 'áo áo dài bǔ', nghia: 'Chờ đợi được nuôi dưỡng' },
  { stt: 98, hanzi: '锦上添花', pinyin: 'jǐn shàng tiān huā', nghia: 'Trên gấm thêm hoa — tốt上加 tốt' },
  { stt: 99, hanzi: '鹤立鸡群', pinyin: 'hè lì jī qún', nghia: 'Hạc đứng giữa gà — nổi bật hơn hẳn' },
  { stt: 100, hanzi: '黔驴技穷', pinyin: 'qián lǘ jì qióng', nghia: 'Châu chấu hết mẹo — tài năng cạn kiệt' },
];

const faqItems = [
  {
    q: 'Làm sao để nhớ thành ngữ lâu?',
    a: 'Đừng học vẹt — hãy học theo câu chuyện điển tích gắn với mỗi thành ngữ. Não bộ ghi nhớ hình ảnh câu chuyện tốt hơn là học thuộc mặt chữ.',
  },
  {
    q: 'HSK mấy thì cần học thành ngữ?',
    a: 'Từ HSK4 bạn bắt đầu tiếp xúc với thành ngữ đơn giản. Lên HSK5–6, thành ngữ xuất hiện dày đặc trong bài Đọc hiểu và là tiêu chí chấm điểm quan trọng trong Viết / Nói.',
  },
  {
    q: 'Có ứng dụng nào hỗ trợ tra cứu thành ngữ không?',
    a: 'Bạn có thể dùng Pleco để tra cứu nhanh nghĩa và cách đọc của các thành ngữ tiếng Trung.',
  },
];

function ThanhNguTable() {
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const normalized = normalizeVietnamese(search);
    if (!normalized) return thanhNguData;
    return thanhNguData.filter(
      (item) =>
        normalizeVietnamese(item.nghia).includes(normalized) ||
        normalizeVietnamese(item.pinyin).includes(normalized)
    );
  }, [search]);

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
            placeholder="Tìm theo nghĩa tiếng Việt hoặc Pinyin..."
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

      <PremiumTable
        columns={[
          { label: 'STT', align: 'center' },
          { label: 'Chữ Hán', align: 'center' },
          { label: 'Phiên Âm' },
          { label: 'Dịch Nghĩa' },
        ]}
        rows={filtered.map((item) => [
          <span className="font-sans text-sm text-gray-500">{item.stt}</span>,
          <span className="font-display text-lg text-brand-red">{item.hanzi}</span>,
          <span className="font-semibold text-gray-800">{item.pinyin}</span>,
          <span>{item.nghia}</span>,
        ])}
      />

      <p className="mt-4 text-center font-sans text-xs text-gray-500">
        {filtered.length} / {thanhNguData.length} thành ngữ được hiển thị
      </p>
    </div>
  );
}

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="mt-6 border-t border-brand-gold-deep/25">
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border-b border-brand-gold-deep/25">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-6 py-5 text-left font-sans text-base font-semibold text-brand-red transition-colors hover:text-brand-gold-deep focus:outline-none sm:text-lg"
              aria-expanded={isOpen}
            >
              <span>{item.q}</span>
              <ChevronDown className={`h-5 w-5 shrink-0 text-brand-gold-deep transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className="grid transition-[grid-template-rows] duration-300" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
              <div className="overflow-hidden">
                <p className="border-l border-brand-gold-deep/60 pb-5 pl-4 pr-8 font-sans leading-relaxed text-gray-600">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function ThanhNguPage() {
  return (
    <ArticleLayout
      title="100 Câu Thành Ngữ Tiếng Trung Hay Và Thông Dụng Nhất"
      breadcrumbs={[
        { label: 'Trang Chủ', href: '/' },
        { label: 'Thư Viện', href: '/thu-vien' },
        { label: '100 Câu Thành Ngữ Tiếng Trung Hay Và Thông Dụng Nhất' },
      ]}
      updatedAt="26/09/2026"
    >
      <IntroText>
        Thành ngữ tiếng Trung phong phú và đa dạng, chứa đựng nhiều ý nghĩa sâu
        sắc. Vận dụng thành thạo thành ngữ trong giao tiếp sẽ giúp tiếng Trung của
        bạn tự nhiên và ấn tượng hơn. Bài viết tổng hợp 100 câu thành ngữ tiếng
        Trung thông dụng nhất.
      </IntroText>

      <GoldImage
        src="https://res.cloudinary.com/qugyphlv/image/upload/v1789005190/hoat-dong_8.jpg"
        alt="Học viên ThanhMaiHSK học thành ngữ tiếng Trung"
        caption="Thành ngữ giúp giao tiếp tự nhiên và sâu sắc hơn"
      />

      {/* 2. Main table */}
      <SectionHeading>100 Câu Thành Ngữ Tiếng Trung Thông Dụng</SectionHeading>
      <div className="mt-6">
        <ThanhNguTable />
      </div>

      {/* 3. Sách tham khảo */}
      <SectionHeading>Sách Tham Khảo Thêm</SectionHeading>
      <GoldBullet items={[
        'Từ Điển Thành Ngữ Hán – Việt',
        '中华成语大词典 (bản mới nhất)',
        '中华成语故事',
      ]} />

      {/* 4. FAQ */}
      <SectionHeading>Câu Hỏi Thường Gặp</SectionHeading>
      <FaqAccordion />

      {/* 5. Closing */}
      <BodyText>
        100 thành ngữ trên chỉ là một phần nhỏ trong kho tàng văn hóa Trung Hoa —
        hãy tiếp tục cùng ThanhMaiHSK khám phá thêm nhiều thành ngữ hay khác.
      </BodyText>
      <CtaButton href="https://zalo.me/0398519485" label="Đăng Ký Nhận Tư Vấn" />
    </ArticleLayout>
  );
}
