import ArticleLayout from '@/components/ArticleLayout';
import { PremiumTable, GoldImage, GoldNote, SectionHeading, IntroText, BodyText, CtaButton } from '@/components/article-ui';

/* ─── Data ─── */

const thuTuRows = [
  ['我学习汉语', 'wǒ xuéxí hànyǔ', 'Tôi học tiếng Trung'],
  ['他喝茶', 'tā hē chá', 'Anh ấy uống trà'],
  ['我每天学习汉语', 'wǒ měitiān xuéxí hànyǔ', 'Mỗi ngày tôi học tiếng Trung'],
  ['他今天去学校', 'tā jīntiān qù xuéxiào', 'Hôm nay anh ấy đến trường'],
  ['我们晚上在饭店吃饭', 'wǒmen wǎnshang zài fàndiàn chīfàn', 'Buổi tối chúng tôi ăn cơm ở nhà hàng'],
  ['老师现在在教室上课', 'lǎoshī xiànzài zài jiàoshì shàngkè', 'Bây giờ giáo viên đang dạy trong lớp'],
];

const dongTuBasicRows = [
  ['是', 'Xác định danh tính / nghề nghiệp', '我是学生 (Tôi là học sinh)'],
  ['有', 'Sở hữu / tồn tại', '我有一本书 (Tôi có một quyển sách)'],
  ['在', 'Vị trí', '他在家 (Anh ấy ở nhà)'],
];

const dongTuExampleRows = [
  ['我是学生', 'wǒ shì xuéshēng', 'Tôi là học sinh'],
  ['我有一本书', 'wǒ yǒu yī běn shū', 'Tôi có một quyển sách'],
  ['他在家', 'tā zài jiā', 'Anh ấy ở nhà'],
  ['今天是星期五', 'jīntiān shì xīngqīwǔ', 'Hôm nay là thứ Sáu'],
  ['学校里有很多学生', 'xuéxiào lǐ yǒu hěn duō xuéshēng', 'Trong trường có nhiều học sinh'],
  ['爸爸在北京工作', 'bàba zài Běijīng gōngzuò', 'Bố làm việc ở Bắc Kinh'],
];

const soHuuRows = [
  ['这是我的书', 'zhè shì wǒ de shū', 'Đây là sách của tôi'],
  ['她是我的朋友', 'tā shì wǒ de péngyou', 'Cô ấy là bạn tôi'],
  ['我的汉语老师很好', 'wǒ de hànyǔ lǎoshī hěn hǎo', 'Giáo viên tiếng Trung của tôi rất giỏi'],
  ['他的家在北京', 'tā de jiā zài Běijīng', 'Nhà anh ấy ở Bắc Kinh'],
  ['你的汉语书在哪儿？', 'nǐ de hànyǔ shū zài nǎr', 'Sách tiếng Trung của bạn ở đâu?'],
];

const luongTuRows = [
  ['个', 'Người / đồ vật chung', '一个朋友'],
  ['本', 'Sách / vở', '一本书'],
  ['杯', 'Đồ uống', '一杯茶'],
  ['张', 'Vé / giấy', '一张票'],
  ['块', 'Tiền', '三块钱'],
  ['件', 'Quần áo', '一件衣服'],
  ['口', 'Người trong gia đình', '四口人'],
  ['岁', 'Tuổi', '二十岁'],
];

const luongTuExampleRows = [
  ['我有一个朋友', 'wǒ yǒu yī gè péngyou', 'Tôi có một người bạn'],
  ['她买了一本书', 'tā mǎi le yī běn shū', 'Cô ấy mua một quyển sách'],
  ['我想喝一杯茶', 'wǒ xiǎng hē yī bēi chá', 'Tôi muốn uống một tách trà'],
  ['我们家有四口人', 'wǒmen jiā yǒu sì kǒu rén', 'Nhà tôi có bốn người'],
  ['我今年二十岁', 'wǒ jīnnián èrshí suì', 'Năm nay tôi hai mươi tuổi'],
];

const thoiGianRows = [
  ['现在三点', 'xiànzài sān diǎn', 'Bây giờ 3 giờ'],
  ['我上午八点上课', 'wǒ shàngwǔ bā diǎn shàngkè', 'Buổi sáng 8 giờ tôi lên lớp'],
  ['今天是星期五', 'jīntiān shì xīngqīwǔ', 'Hôm nay là thứ Sáu'],
  ['我的生日是五月十号', 'wǒ de shēngrì shì wǔ yuè shí hào', 'Sinh nhật tôi là 10 tháng 5'],
  ['我今年二十岁', 'wǒ jīnnián èrshí suì', 'Năm nay tôi hai mươi tuổi'],
  ['这个苹果三块钱', 'zhè ge píngguǒ sān kuài qián', 'Quả táo này 3 đồng'],
];

const nghiVanRows = [
  ['谁', 'shéi', 'ai', '他是谁？'],
  ['什么', 'shénme', 'cái gì', '你吃什么？'],
  ['哪儿', 'nǎr', 'ở đâu', '你去哪儿？'],
  ['几', 'jǐ', 'mấy (số nhỏ)', '几点了？'],
  ['多少', 'duōshao', 'bao nhiêu', '这个多少钱？'],
  ['怎么样', 'zěnmeyàng', 'như thế nào', '汉语怎么样？'],
];

const chinhPhanRows = [
  ['你是不是学生？', 'nǐ shì bu shì xuéshēng', 'Bạn có phải học sinh không?'],
  ['他在不在家？', 'tā zài bu zài jiā', 'Anh ấy có ở nhà không?'],
  ['你有没有汉语书？', 'nǐ yǒu méi yǒu hànyǔ shū', 'Bạn có sách tiếng Trung không?'],
  ['你喝茶还是咖啡？', 'nǐ hē chá háishì kāfēi', 'Bạn uống trà hay cà phê?'],
  ['你今天去还是明天去？', 'nǐ jīntiān qù háishì míngtiān qù', 'Hôm nay bạn đi hay ngày mai đi?'],
  ['他是老师还是学生？', 'tā shì lǎoshī háishì xuéshēng', 'Anh ấy là giáo viên hay học sinh?'],
];

const phuDinhRows = [
  ['我不喝咖啡', 'wǒ bù hē kāfēi', 'Tôi không uống cà phê'],
  ['她不是老师', 'tā bú shì lǎoshī', 'Cô ấy không phải giáo viên'],
  ['我没吃饭', 'wǒ méi chīfàn', 'Tôi chưa ăn cơm'],
  ['他昨天没来', 'tā zuótiān méi lái', 'Hôm qua anh ấy không đến'],
  ['我没有电脑', 'wǒ méiyǒu diànnǎo', 'Tôi không có máy tính'],
  ['桌子上没有书', 'zhuōzi shàng méiyǒu shū', 'Trên bàn không có sách'],
];

const phoTuRows = [
  ['很', 'trước tính từ', 'rất', '我很好 (Tôi rất khỏe)'],
  ['也', 'trước động từ / tính từ', 'cũng', '他也去 (Anh ấy cũng đi)'],
  ['都', 'sau chủ ngữ', 'đều', '我们都学习汉语 (Chúng tôi đều học tiếng Trung)'],
  ['太', 'trước tính từ + 了', 'quá', '太好了！ (Quá tốt rồi!)'],
  ['还', 'trước động từ / tính từ', 'vẫn / còn', '他还在家 (Anh ấy vẫn ở nhà)'],
];

const nangNguyenRows = [
  ['会', 'khả năng do học', '我会说汉语 (Tôi biết nói tiếng Trung)'],
  ['能', 'khả năng do điều kiện', '你能帮我吗？ (Bạn có thể giúp tôi không?)'],
  ['想', 'mong muốn', '我想去北京 (Tôi muốn đi Bắc Kinh)'],
  ['要', 'nhu cầu / ý muốn', '我要喝水 (Tôi muốn uống nước)'],
];

const leRows = [
  ['我吃饭了', 'wǒ chīfàn le', 'Tôi đã ăn cơm rồi'],
  ['我买了一本书', 'wǒ mǎi le yī běn shū', 'Tôi đã mua một quyển sách'],
  ['天气冷了', 'tiānqì lěng le', 'Trời lạnh rồi'],
  ['我二十岁了', 'wǒ èrshí suì le', 'Tôi đã 20 tuổi rồi'],
  ['商店关门了', 'shāngdiàn guānmén le', 'Cửa hàng đã đóng cửa'],
];

const viTriRows = [
  ['书在桌子上', 'shū zài zhuōzi shàng', 'Sách ở trên bàn'],
  ['老师在教室里', 'lǎoshī zài jiàoshì lǐ', 'Giáo viên ở trong lớp'],
  ['学校前面有一家商店', 'xuéxiào qiánmiàn yǒu yī jiā shāngdiàn', 'Trước trường có một cửa hàng'],
  ['猫在椅子下', 'māo zài yǐzi xià', 'Con mèo ở dưới ghế'],
  ['房间里有两个 人', 'fángjiān lǐ yǒu liǎng ge rén', 'Trong phòng có hai người'],
];

const haiDongTuRows = [
  ['我去学校学习汉语', 'wǒ qù xuéxiào xuéxí hànyǔ', 'Tôi đến trường học tiếng Trung'],
  ['妈妈去商店买东西', 'māma qù shāngdiàn mǎi dōngxi', 'Mẹ đi cửa hàng mua đồ'],
  ['我坐飞机去北京', 'wǒ zuò fēijī qù Běijīng', 'Tôi ngồi máy bay đi Bắc Kinh'],
  ['她坐公共汽车去学校', 'tā zuò gōnggòng qìchē qù xuéxiào', 'Cô ấy ngồi xe buýt đến trường'],
  ['我回家看书', 'wǒ huí jiā kàn shū', 'Tôi về nhà đọc sách'],
];

const loiRows = [
  ['我学习今天汉语', '我今天学习汉语', 'Thời gian đứng trước động từ'],
  ['我是很好', '我很好', 'Không dùng 是 trước tính từ'],
  ['我不有电脑', '我没有电脑', 'Phủ định 有 dùng 没有'],
  ['我有一书', '我有一本书', 'Cần lượng từ giữa số và danh từ'],
  ['他学校在', '他在学校', '在 đứng trước địa điểm'],
  ['你是不是学生吗？', '你是不是学生？', 'Không thêm 吅 cuối câu A-不-A'],
  ['我昨天不去学校', '我昨天没去学校', 'Phủ định quá khứ dùng 没'],
  ['她会汉语', '她会说汉语', '会 cần động từ đi kèm'],
];

const baiTapRows = [
  ['汉语｜我｜学习', '我学习汉语'],
  ['今天｜他｜学校｜去', '他今天去学校'],
  ['我___学生', '我是学生'],
  ['Tôi có một quyển sách', '我有一本书'],
  ['Anh ấy là ai?', '他是谁？'],
  ['Bạn uống trà hay cà phê?', '你喝茶还是咖啡？'],
  ['Ngày mai tôi không đi Bắc Kinh', '我明天不去北京'],
  ['Giáo viên đến rồi', '老师来了'],
];

/* ─── Page ─── */
export default function NguPhapHsk1Page() {
  return (
    <ArticleLayout
      title="Tổng Hợp Ngữ Pháp Tiếng Trung HSK1 Kèm File PDF"
      breadcrumbs={[
        { label: 'Trang Chủ', href: '/' },
        { label: 'Thư Viện', href: '/thu-vien' },
        { label: 'Tổng Hợp Ngữ Pháp Tiếng Trung HSK1 Kèm File PDF' },
      ]}
      updatedAt="26/09/2026"
    >
      <IntroText>
        Ngữ pháp HSK 1 là nền tảng quan trọng cho người mới bắt đầu học tiếng
        Trung — chủ yếu xoay quanh cách sắp xếp từ, câu khẳng định, phủ định,
        nghi vấn và diễn đạt hoạt động quen thuộc trong đời sống hằng ngày.
      </IntroText>

      <GoldImage
        src="https://res.cloudinary.com/qugyphlv/image/upload/v1789005186/hoat-dong_5.jpg"
        alt="Học viên ThanhMaiHSK học ngữ pháp tiếng Trung"
        caption="Nắm chắc ngữ pháp HSK1 là nền tảng cho mọi trình độ tiếp theo"
      />

      {/* 2. Trật tự câu */}
      <SectionHeading>Trật Tự Câu Cơ Bản</SectionHeading>
      <p className="mt-4 font-sans text-sm leading-relaxed text-gray-600">
        Cấu trúc cơ bản: Chủ ngữ + (thời gian) + (địa điểm) + động từ + tân ngữ.
      </p>
      <div className="mt-4">
        <PremiumTable
          columns={[{ label: 'Chữ Hán', align: 'center' }, { label: 'Pinyin' }, { label: 'Nghĩa' }]}
          rows={thuTuRows.map(([h, p, n]) => [
            <span className="font-display text-lg text-brand-red">{h}</span>,
            <span className="font-semibold text-gray-800">{p}</span>,
            n,
          ])}
        />
      </div>

      {/* 3. 是, 有, 在 */}
      <SectionHeading>是, 有, 在 — 3 Động Từ Cơ Bản</SectionHeading>
      <div className="mt-6">
        <PremiumTable
          columns={[{ label: 'Động Từ', align: 'center' }, { label: 'Cách Dùng' }, { label: 'Ví Dụ' }]}
          rows={dongTuBasicRows.map(([dt, cach, vidu]) => [
            <span className="font-display text-lg font-bold text-brand-red">{dt}</span>,
            cach,
            <span className="font-semibold text-gray-800">{vidu}</span>,
          ])}
        />
      </div>
      <div className="mt-6">
        <PremiumTable
          columns={[{ label: 'Chữ Hán', align: 'center' }, { label: 'Pinyin' }, { label: 'Nghĩa' }]}
          rows={dongTuExampleRows.map(([h, p, n]) => [
            <span className="font-display text-lg text-brand-red">{h}</span>,
            <span className="font-semibold text-gray-800">{p}</span>,
            n,
          ])}
        />
      </div>
      <GoldNote>
        Không dùng 是 trực tiếp trước tính từ: 我是很好 (sai) → 我很好 (đúng, Tôi rất khỏe).
      </GoldNote>

      {/* 4. 的 */}
      <SectionHeading>Trợ Từ 的 (Sở Hữu)</SectionHeading>
      <p className="mt-4 font-sans text-sm leading-relaxed text-gray-600">
        Cấu trúc: Danh từ / đại từ + 的 + danh từ.
      </p>
      <div className="mt-4">
        <PremiumTable
          columns={[{ label: 'Chữ Hán', align: 'center' }, { label: 'Pinyin' }, { label: 'Nghĩa' }]}
          rows={soHuuRows.map(([h, p, n]) => [
            <span className="font-display text-lg text-brand-red">{h}</span>,
            <span className="font-semibold text-gray-800">{p}</span>,
            n,
          ])}
        />
      </div>
      <GoldNote>的 có thể lược bỏ khi nói về người thân gần gũi: 我的妈妈 → 我妈妈.</GoldNote>

      {/* 5. Lượng từ */}
      <SectionHeading>Lượng Từ (Số + Lượng Từ + Danh Từ)</SectionHeading>
      <div className="mt-6">
        <PremiumTable
          columns={[{ label: 'Lượng Từ', align: 'center' }, { label: 'Cách Dùng' }, { label: 'Ví Dụ' }]}
          rows={luongTuRows.map(([lt, cach, vidu]) => [
            <span className="font-display text-lg font-bold text-brand-red">{lt}</span>,
            cach,
            <span className="font-semibold text-gray-800">{vidu}</span>,
          ])}
        />
      </div>
      <div className="mt-6">
        <PremiumTable
          columns={[{ label: 'Chữ Hán', align: 'center' }, { label: 'Pinyin' }, { label: 'Nghĩa' }]}
          rows={luongTuExampleRows.map(([h, p, n]) => [
            <span className="font-display text-lg text-brand-red">{h}</span>,
            <span className="font-semibold text-gray-800">{p}</span>,
            n,
          ])}
        />
      </div>

      {/* 6. Thời gian */}
      <SectionHeading>Thời Gian, Ngày Tháng, Giá Tiền</SectionHeading>
      <div className="mt-6">
        <PremiumTable
          columns={[{ label: 'Chữ Hán', align: 'center' }, { label: 'Pinyin' }, { label: 'Nghĩa' }]}
          rows={thoiGianRows.map(([h, p, n]) => [
            <span className="font-display text-lg text-brand-red">{h}</span>,
            <span className="font-semibold text-gray-800">{p}</span>,
            n,
          ])}
        />
      </div>

      {/* 7. Câu hỏi */}
      <SectionHeading>Câu Hỏi Với 吗, 呢 Và Từ Nghi Vấn</SectionHeading>
      <p className="mt-4 font-sans text-sm leading-relaxed text-gray-600">
        吅 dùng cho câu hỏi có / không. Đại từ nghi vấn đứng đúng vị trí thông tin cần hỏi.
      </p>
      <div className="mt-4">
        <PremiumTable
          columns={[{ label: 'Từ Nghi Vấn', align: 'center' }, { label: 'Pinyin' }, { label: 'Nghĩa' }, { label: 'Ví Dụ' }]}
          rows={nghiVanRows.map(([tv, p, n, vidu]) => [
            <span className="font-display text-lg font-bold text-brand-red">{tv}</span>,
            <span className="font-semibold text-gray-800">{p}</span>,
            n,
            <span className="font-semibold text-gray-800">{vidu}</span>,
          ])}
        />
      </div>

      {/* 8. A-不-A & 还是 */}
      <SectionHeading>Câu Hỏi Chính Phản (A 不 A) Và Câu Hỏi Lựa Chọn (还是)</SectionHeading>
      <div className="mt-6">
        <PremiumTable
          columns={[{ label: 'Chữ Hán', align: 'center' }, { label: 'Pinyin' }, { label: 'Nghĩa' }]}
          rows={chinhPhanRows.map(([h, p, n]) => [
            <span className="font-display text-lg text-brand-red">{h}</span>,
            <span className="font-semibold text-gray-800">{p}</span>,
            n,
          ])}
        />
      </div>
      <GoldNote>Không dùng 吅 ở cuối câu hỏi A-不-A hoặc câu có từ nghi vấn.</GoldNote>

      {/* 9. Phủ định */}
      <SectionHeading>Phủ Định: 不 Và 没</SectionHeading>
      <p className="mt-4 font-sans text-sm leading-relaxed text-gray-600">
        不 phủ định thói quen / trạng thái hiện tại — tương lai; 没 / 没有 phủ định hành động chưa xảy ra hoặc sự sở hữu — tồn tại.
      </p>
      <div className="mt-4">
        <PremiumTable
          columns={[{ label: 'Chữ Hán', align: 'center' }, { label: 'Pinyin' }, { label: 'Nghĩa' }]}
          rows={phuDinhRows.map(([h, p, n]) => [
            <span className="font-display text-lg text-brand-red">{h}</span>,
            <span className="font-semibold text-gray-800">{p}</span>,
            n,
          ])}
        />
      </div>
      <GoldNote>Không dùng 不有 — cấu trúc đúng là 没有.</GoldNote>

      {/* 10. Phó từ */}
      <SectionHeading>Phó Từ Thường Gặp: 很, 也, 都, 太, 还</SectionHeading>
      <div className="mt-6">
        <PremiumTable
          columns={[{ label: 'Phó Từ', align: 'center' }, { label: 'Vị Trí' }, { label: 'Ý Nghĩa' }, { label: 'Ví Dụ' }]}
          rows={phoTuRows.map(([pt, vt, yn, vidu]) => [
            <span className="font-display text-lg font-bold text-brand-red">{pt}</span>,
            vt,
            yn,
            <span className="font-semibold text-gray-800">{vidu}</span>,
          ])}
        />
      </div>

      {/* 11. Động từ năng nguyện */}
      <SectionHeading>Động Từ Năng Nguyện: 会, 能, 想, 要</SectionHeading>
      <div className="mt-6">
        <PremiumTable
          columns={[{ label: 'Từ', align: 'center' }, { label: 'Ý Nghĩa' }, { label: 'Ví Dụ' }]}
          rows={nangNguyenRows.map(([tu, yn, vidu]) => [
            <span className="font-display text-lg font-bold text-brand-red">{tu}</span>,
            yn,
            <span className="font-semibold text-gray-800">{vidu}</span>,
          ])}
        />
      </div>

      {/* 12. 了 */}
      <SectionHeading>Trợ Từ 了 (Hoàn Thành / Thay Đổi)</SectionHeading>
      <div className="mt-6">
        <PremiumTable
          columns={[{ label: 'Chữ Hán', align: 'center' }, { label: 'Pinyin' }, { label: 'Nghĩa' }]}
          rows={leRows.map(([h, p, n]) => [
            <span className="font-display text-lg text-brand-red">{h}</span>,
            <span className="font-semibold text-gray-800">{p}</span>,
            n,
          ])}
        />
      </div>
      <GoldNote>
        Không phải câu nào có thời gian quá khứ cũng cần thêm 了 — tùy vào việc người nói có muốn nhấn mạnh sự hoàn thành / thay đổi hay không.
      </GoldNote>

      {/* 13. Vị trí */}
      <SectionHeading>Vị Trí Với 上, 下, 里, 前面, 后面</SectionHeading>
      <div className="mt-6">
        <PremiumTable
          columns={[{ label: 'Chữ Hán', align: 'center' }, { label: 'Pinyin' }, { label: 'Nghĩa' }]}
          rows={viTriRows.map(([h, p, n]) => [
            <span className="font-display text-lg text-brand-red">{h}</span>,
            <span className="font-semibold text-gray-800">{p}</span>,
            n,
          ])}
        />
      </div>
      <GoldNote>
        Hai cấu trúc khác nhau: "Người / vật + 在 + địa điểm" (书在桌子上) vs "Địa điểm + 有 + người / vật" (桌子上有一本书).
      </GoldNote>

      {/* 14. Hai động từ liên tiếp */}
      <SectionHeading>Hai Động Từ Liên Tiếp (Mục Đích / Phương Tiện)</SectionHeading>
      <div className="mt-6">
        <PremiumTable
          columns={[{ label: 'Chữ Hán', align: 'center' }, { label: 'Pinyin' }, { label: 'Nghĩa' }]}
          rows={haiDongTuRows.map(([h, p, n]) => [
            <span className="font-display text-lg text-brand-red">{h}</span>,
            <span className="font-semibold text-gray-800">{p}</span>,
            n,
          ])}
        />
      </div>

      {/* 15. Lỗi thường gặp */}
      <SectionHeading>Lỗi Ngữ Pháp HSK1 Thường Gặp</SectionHeading>
      <div className="mt-6">
        <PremiumTable
          columns={[{ label: 'Câu Sai', align: 'center' }, { label: 'Câu Đúng', align: 'center' }, { label: 'Giải Thích' }]}
          rows={loiRows.map(([sai, dung, giai]) => [
            <span className="font-sans text-sm text-red-700/80 line-through">{sai}</span>,
            <span className="font-display text-base text-brand-red">{dung}</span>,
            giai,
          ])}
        />
      </div>

      {/* 16. Bài tập nhanh */}
      <SectionHeading>Bài Tập Nhanh</SectionHeading>
      <div className="mt-6">
        <PremiumTable
          columns={[{ label: 'Bài Tập' }, { label: 'Đáp Án', align: 'center' }]}
          rows={baiTapRows.map(([bt, da]) => [
            <span className="font-semibold text-gray-800">{bt}</span>,
            <span className="font-display text-base text-brand-red">{da}</span>,
          ])}
        />
      </div>
      <GoldNote>
        Một cách luyện hiệu quả là lấy một câu mẫu và lần lượt đổi chủ ngữ, thời gian, địa điểm hoặc động từ để tạo câu mới.
      </GoldNote>

      {/* 17. Closing */}
      <BodyText>
        Ngữ pháp HSK1 là nền tảng quyết định khả năng học lên các trình độ tiếp
        theo. Người học nên luyện bằng câu hoàn chỉnh, thay đổi từng thành phần
        thay vì học thuộc công thức máy móc. Kết hợp ngữ pháp với từ vựng, phát
        âm và giao tiếp theo lộ trình bài bản tại ThanhMaiHSK sẽ giúp bạn tiến bộ
        nhanh và vững chắc hơn.
      </BodyText>
      <CtaButton href="https://zalo.me/0398519485" label="Đăng Ký Nhận Tư Vấn" />
    </ArticleLayout>
  );
}
