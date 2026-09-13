/**
 * DỮ LIỆU TOÁN HỌC & NGÂN HÀNG CÂU HỎI
 * CHINH PHỤC 7 HẰNG ĐẲNG THỨC - LỚP TOÁN EEC (0829120482)
 *
 * Giáo viên có thể dễ dàng thêm hoặc chỉnh sửa câu hỏi trong file này.
 */

const MATH_DATA = {
  // Thông tin thương hiệu cố định
  branding: {
    brandName: "Lớp Toán EEC",
    phone: "0829120482",
    address: "Số 18 ngõ 43 Cầu Cốc, Tây Mỗ",
    slogan: "EEC – Nơi Toán khó hóa Toán vui",
    fbText: "Liên hệ Hotline / Zalo: 0829120482 để được tư vấn lộ trình lấy gốc & nâng cao môn Toán THCS."
  },

  // Danh mục 7 hằng đẳng thức chuẩn mực
  identities: [
    {
      id: 1,
      name: "Bình phương của một tổng",
      shortName: "HĐT 1: (A + B)²",
      formula: "(A + B)^2 = A^2 + 2AB + B^2",
      formulaLatex: "(A + B)^2 = A^2 + 2AB + B^2",
      rhythm: "Bình phương đầu CỘNG hai lần tích CỘNG bình phương cuối",
      tip: "Tất cả các dấu đều là dấu CỘNG (+). Nhớ đừng quên số 2 ở giữa (+2AB)!",
      trapNote: "Lỗi phổ biến: Viết nhầm thành A² + B² (quên mất 2AB).",
      color: "#2563eb",
      badge: "HĐT 1"
    },
    {
      id: 2,
      name: "Bình phương của một hiệu",
      shortName: "HĐT 2: (A - B)²",
      formula: "(A - B)^2 = A^2 - 2AB + B^2",
      formulaLatex: "(A - B)^2 = A^2 - 2AB + B^2",
      rhythm: "Bình phương đầu TRỪ hai lần tích CỘNG bình phương cuối",
      tip: "Chỉ có dấu TRỪ ở giữa (-2AB), còn B² ở cuối luôn mang dấu CỘNG (+B²) vì (-B)² = +B²!",
      trapNote: "Lỗi phổ biến: Nhầm dấu cuối thành -B² hoặc quên hệ số 2AB.",
      color: "#0891b2",
      badge: "HĐT 2"
    },
    {
      id: 3,
      name: "Hiệu hai bình phương",
      shortName: "HĐT 3: A² - B²",
      formula: "A^2 - B^2 = (A - B)(A + B)",
      formulaLatex: "A^2 - B^2 = (A - B)(A + B)",
      rhythm: "Hiệu hai bình bằng TÍCH của HIỆU nhân TỔNG",
      tip: "Hai ngoặc giống hệt nhau, một ngoặc trừ, một ngoặc cộng: (A - B)(A + B).",
      trapNote: "Lỗi phổ biến: Nhầm lẫn giữa A² - B² và (A - B)².",
      color: "#059669",
      badge: "HĐT 3"
    },
    {
      id: 4,
      name: "Lập phương của một tổng",
      shortName: "HĐT 4: (A + B)³",
      formula: "(A + B)^3 = A^3 + 3A^2B + 3AB^2 + B^3",
      formulaLatex: "(A + B)^3 = A^3 + 3A^2B + 3AB^2 + B^3",
      rhythm: "Mũ 3 đầu + 3 bình đầu đuôi + 3 đầu bình đuôi + mũ 3 cuối",
      tip: "Hệ số là 1 - 3 - 3 - 1. Số mũ của A giảm dần (3, 2, 1, 0), số mũ của B tăng dần.",
      trapNote: "Lỗi phổ biến: Quên hệ số 3 hoặc viết nhầm số mũ 3A²B thành 2A²B.",
      color: "#d97706",
      badge: "HĐT 4"
    },
    {
      id: 5,
      name: "Lập phương của một hiệu",
      shortName: "HĐT 5: (A - B)³",
      formula: "(A - B)^3 = A^3 - 3A^2B + 3AB^2 - B^3",
      formulaLatex: "(A - B)^3 = A^3 - 3A^2B + 3AB^2 - B^3",
      rhythm: "Dấu đan xen: CỘNG - TRỪ - CỘNG - TRỪ (+ - + -)",
      tip: "Bắt đầu bằng dấu + trước A³, sau đó đan dấu xen kẽ: + A³ - 3A²B + 3AB² - B³.",
      trapNote: "Lỗi phổ biến: Nhầm tất cả các dấu đều là trừ, hoặc nhầm dấu ở +3AB².",
      color: "#dc2626",
      badge: "HĐT 5"
    },
    {
      id: 6,
      name: "Tổng hai lập phương",
      shortName: "HĐT 6: A³ + B³",
      formula: "A^3 + B^3 = (A + B)(A^2 - AB + B^2)",
      formulaLatex: "A^3 + B^3 = (A + B)(A^2 - AB + B^2)",
      rhythm: "CÙNG DẤU NGOÀI (+) — TRÁI DẤU GIỮA (-)",
      tip: "Ngoặc đầu mang dấu CỘNG (A + B). Ngoặc sau là 'bình phương thiếu' mang dấu TRỪ (-AB, không có số 2)!",
      trapNote: "Lỗi phổ biến: Viết nhầm -AB thành -2AB hoặc nhầm thành (A+B)(A²+AB+B²).",
      color: "#7c3aed",
      badge: "HĐT 6"
    },
    {
      id: 7,
      name: "Hiệu hai lập phương",
      shortName: "HĐT 7: A³ - B³",
      formula: "A^3 - B^3 = (A - B)(A^2 + AB + B^2)",
      formulaLatex: "A^3 - B^3 = (A - B)(A^2 + AB + B^2)",
      rhythm: "CÙNG DẤU NGOÀI (-) — TRÁI DẤU GIỮA (+)",
      tip: "Ngoặc đầu mang dấu TRỪ (A - B). Ngoặc sau là 'bình phương thiếu' toàn dấu CỘNG (+AB + B², không có số 2)!",
      trapNote: "Lỗi phổ biến: Viết nhầm +AB thành +2AB hoặc nhầm dấu giữa ngoặc sau thành -AB.",
      color: "#be185d",
      badge: "HĐT 7"
    }
  ],

  // Bảng nhớ nhanh số mũ cho học sinh mất gốc
  powerTable: [
    { base: 2, sq: 4, cb: 8, note: "2² = 4; 2³ = 8" },
    { base: 3, sq: 9, cb: 27, note: "3² = 9; 3³ = 27" },
    { base: 4, sq: 16, cb: 64, note: "4² = 16; 4³ = 64" },
    { base: 5, sq: 25, cb: 125, note: "5² = 25; 5³ = 125" },
    { base: 6, sq: 36, cb: 216, note: "6² = 36; 6³ = 216" },
    { base: 7, sq: 49, cb: 343, note: "7² = 49" },
    { base: 8, sq: 64, cb: 512, note: "8² = 64" },
    { base: 9, sq: 81, cb: 729, note: "9² = 81" },
    { base: 10, sq: 100, cb: 1000, note: "10² = 100; 10³ = 1000" }
  ],

  // Mẹo nhớ 30 giây tổng hợp
  memoryTips: [
    {
      title: "Mẹo 1: Nhóm Bình phương (HĐT 1, 2, 3)",
      content: "• (A ± B)² luôn có 3 hạng tử: A² ± 2AB + B² (B² luôn CỘNG).\n• A² - B² là TÍCH của HIỆU và TỔNG: (A - B)(A + B).\n• Tuyệt đối KHÔNG nhầm: (A+B)² khác A²+B²!"
    },
    {
      title: "Mẹo 2: Nhóm Lập phương một tổng/hiệu (HĐT 4, 5)",
      content: "• Có 4 hạng tử với hệ số 1 - 3 - 3 - 1.\n• Với (A - B)³, quy tắc đan dấu: CỘNG - TRỪ - CỘNG - TRỪ (+ - + -)."
    },
    {
      title: "Mẹo 3: Nhóm Tổng/Hiệu hai lập phương (HĐT 6, 7)",
      content: "• Quy tắc thần chú: 'CÙNG DẤU NGOÀI — TRÁI DẤU GIỮA'.\n• Ngoặc 2 là BÌNH PHƯƠNG THIẾU: chỉ có ±AB, KHÔNG CÓ SỐ 2!"
    }
  ],

  // =========================================================================
  // NGÂN HÀNG CÂU HỎI ĐẦY ĐỦ VỚI TRÊN 120 CÂU HỎI ĐƯỢC THIẾT KẾ CÔNG PHU
  // =========================================================================
  questions: [
    // -----------------------------------------------------------------------
    // CHẶNG 1: BÌNH PHƯƠNG CỦA MỘT TỔNG (A + B)²
    // -----------------------------------------------------------------------
    {
      id: "q1_01",
      identityId: 1,
      stage: 1,
      level: 1, // Mức 1: Nhớ
      type: "formula",
      prompt: "Khai triển đúng của $(A + B)^2$ là:",
      options: [
        "$A^2 + 2AB + B^2$",
        "$A^2 + B^2$",
        "$A^2 - 2AB + B^2$",
        "$A^2 + AB + B^2$"
      ],
      correctIndex: 0,
      explanation: "Công thức chuẩn: $(A + B)^2 = A^2 + 2AB + B^2$. Nhớ đừng quên hạng tử $+2AB$ ở giữa nhé!"
    },
    {
      id: "q1_02",
      identityId: 1,
      stage: 1,
      level: 1,
      type: "fill_blank",
      prompt: "Điền vào chỗ trống: $(A + B)^2 = A^2 + \\underline{\\quad\\quad} + B^2$",
      options: ["$2AB$", "$AB$", "$3AB$", "$A^2B$"],
      correctIndex: 0,
      explanation: "Hạng tử ở giữa là hai lần tích: $2AB$."
    },
    {
      id: "q1_03",
      identityId: 1,
      stage: 1,
      level: 1,
      type: "true_false",
      prompt: "Khẳng định sau ĐÚNG hay SAI: \"$(x + y)^2 = x^2 + y^2$\"",
      options: ["ĐÚNG", "SAI"],
      correctIndex: 1,
      explanation: "SAI! Đây là bẫy kinh điển nhất. Phải là $(x+y)^2 = x^2 + 2xy + y^2$."
    },
    {
      id: "q1_04",
      identityId: 1,
      stage: 1,
      level: 2, // Mức 2: Nhận biết
      type: "find_error",
      prompt: "Bạn An viết: $(x + 4)^2 = x^2 + 4x + 16$. Bạn An sai ở đâu?",
      options: [
        "Quên nhân đôi ở hạng tử giữa (phải là $8x$)",
        "Tính sai $4^2$",
        "Dấu cộng phải đổi thành dấu trừ",
        "An làm hoàn toàn đúng"
      ],
      correctIndex: 0,
      explanation: "Ở giữa là $2 \\cdot x \\cdot 4 = 8x$, An mới chỉ viết $4x$ (quên nhân 2)."
    },
    {
      id: "q1_05",
      identityId: 1,
      stage: 1,
      level: 2,
      type: "expand",
      prompt: "Khai triển biểu thức $(x + 3)^2$ ta được:",
      options: [
        "$x^2 + 6x + 9$",
        "$x^2 + 9$",
        "$x^2 + 3x + 9$",
        "$x^2 + 6x + 6$"
      ],
      correctIndex: 0,
      explanation: "$(x + 3)^2 = x^2 + 2\\cdot x\\cdot 3 + 3^2 = x^2 + 6x + 9$."
    },
    {
      id: "q1_06",
      identityId: 1,
      stage: 1,
      level: 2,
      type: "factor",
      prompt: "Viết đa thức $x^2 + 10x + 25$ dưới dạng bình phương của một tổng:",
      options: [
        "$(x + 5)^2$",
        "$(x + 25)^2$",
        "$(x + 10)^2$",
        "$(x - 5)^2$"
      ],
      correctIndex: 0,
      explanation: "Vì $25 = 5^2$ và $10x = 2\\cdot x\\cdot 5$, nên $x^2 + 10x + 25 = (x + 5)^2$."
    },
    {
      id: "q1_07",
      identityId: 1,
      stage: 1,
      level: 3, // Mức 3: Vận dụng
      type: "expand_advanced",
      prompt: "Khai triển $(2x + 1)^2$ ta được:",
      options: [
        "$4x^2 + 4x + 1$",
        "$2x^2 + 4x + 1$",
        "$4x^2 + 2x + 1$",
        "$4x^2 + 1$"
      ],
      correctIndex: 0,
      explanation: "$(2x+1)^2 = (2x)^2 + 2(2x)(1) + 1^2 = 4x^2 + 4x + 1$. Chú ý $(2x)^2 = 4x^2$."
    },
    {
      id: "q1_08",
      identityId: 1,
      stage: 1,
      level: 3,
      type: "expand_advanced",
      prompt: "Khai triển $(3x + 2y)^2$ kết quả là:",
      options: [
        "$9x^2 + 12xy + 4y^2$",
        "$9x^2 + 6xy + 4y^2$",
        "$3x^2 + 12xy + 2y^2$",
        "$9x^2 + 4y^2$"
      ],
      correctIndex: 0,
      explanation: "$(3x)^2 + 2(3x)(2y) + (2y)^2 = 9x^2 + 12xy + 4y^2$."
    },
    {
      id: "q1_09",
      identityId: 1,
      stage: 1,
      level: 2,
      type: "compare",
      prompt: "Biểu thức nào sau đây ĐÚNG?",
      options: [
        "$(x + 6)^2 = x^2 + 12x + 36$",
        "$(x + 6)^2 = x^2 + 6x + 36$",
        "$(x + 6)^2 = x^2 + 36$",
        "$(x + 6)^2 = x^2 + 12x + 12$"
      ],
      correctIndex: 0,
      explanation: "$(x+6)^2 = x^2 + 2(6)x + 6^2 = x^2 + 12x + 36$."
    },
    {
      id: "q1_10",
      identityId: 1,
      stage: 1,
      level: 1,
      type: "fast_reflex",
      prompt: "Tính nhanh: $101^2 = (100 + 1)^2 = 10000 + 200 + 1 =$ ?",
      options: ["$10201$", "$10101$", "$10401$", "$10021$"],
      correctIndex: 0,
      explanation: "$100^2 + 2(100)(1) + 1^2 = 10000 + 200 + 1 = 10201$."
    },

    // -----------------------------------------------------------------------
    // CHẶNG 2: BÌNH PHƯƠNG CỦA MỘT HIỆU (A - B)²
    // -----------------------------------------------------------------------
    {
      id: "q2_01",
      identityId: 2,
      stage: 2,
      level: 1,
      type: "formula",
      prompt: "Công thức bình phương của một hiệu $(A - B)^2$ là:",
      options: [
        "$A^2 - 2AB + B^2$",
        "$A^2 - 2AB - B^2$",
        "$A^2 - B^2$",
        "$A^2 + 2AB - B^2$"
      ],
      correctIndex: 0,
      explanation: "Chú ý: $(A - B)^2 = A^2 - 2AB + B^2$. Hạng tử $B^2$ luôn mang dấu CỘNG (+)."
    },
    {
      id: "q2_02",
      identityId: 2,
      stage: 2,
      level: 1,
      type: "sign_trap",
      prompt: "Dấu đúng ở chỗ trống là gì: $(A - B)^2 = A^2 - 2AB \\;\\underline{\\quad}\\; B^2$",
      options: ["$+$", "$-$"],
      correctIndex: 0,
      explanation: "Dấu trước $B^2$ luôn là dấu CỘNG (+) vì $(-B)^2 = +B^2$."
    },
    {
      id: "q2_03",
      identityId: 2,
      stage: 2,
      level: 1,
      type: "true_false",
      prompt: "Khẳng định: \"$(A - B)^2 = (B - A)^2$\" là ĐÚNG hay SAI?",
      options: ["ĐÚNG", "SAI"],
      correctIndex: 0,
      explanation: "ĐÚNG! Vì hai số đối nhau khi bình phương lên đều bằng nhau."
    },
    {
      id: "q2_04",
      identityId: 2,
      stage: 2,
      level: 2,
      type: "find_error",
      prompt: "Bạn Bình viết: $(x - 5)^2 = x^2 - 10x - 25$. Bình đã mắc lỗi gì?",
      options: [
        "Ghi sai dấu ở số $25$ (phải là $+25$)",
        "Ghi sai dấu ở $-10x$",
        "Tính sai $5^2$",
        "Bình không có lỗi nào"
      ],
      correctIndex: 0,
      explanation: "(-5)² = +25, nên phải là $x^2 - 10x + 25$, không thể là $-25$."
    },
    {
      id: "q2_05",
      identityId: 2,
      stage: 2,
      level: 2,
      type: "expand",
      prompt: "Khai triển biểu thức $(x - 4)^2$ được kết quả:",
      options: [
        "$x^2 - 8x + 16$",
        "$x^2 - 4x + 16$",
        "$x^2 - 8x - 16$",
        "$x^2 - 16$"
      ],
      correctIndex: 0,
      explanation: "$(x - 4)^2 = x^2 - 2\\cdot x\\cdot 4 + 4^2 = x^2 - 8x + 16$."
    },
    {
      id: "q2_06",
      identityId: 2,
      stage: 2,
      level: 2,
      type: "factor",
      prompt: "Thu gọn đa thức $x^2 - 6x + 9$ thành hằng đẳng thức:",
      options: [
        "$(x - 3)^2$",
        "$(x + 3)^2$",
        "$(x - 9)^2$",
        "$x^2 - 3^2$"
      ],
      correctIndex: 0,
      explanation: "Vì $9 = 3^2$ và $-6x = -2\\cdot x\\cdot 3$, nên đa thức là $(x - 3)^2$."
    },
    {
      id: "q2_07",
      identityId: 2,
      stage: 2,
      level: 3,
      type: "expand_advanced",
      prompt: "Khai triển $(2x - 3)^2$ ta được:",
      options: [
        "$4x^2 - 12x + 9$",
        "$4x^2 - 6x + 9$",
        "$2x^2 - 12x + 9$",
        "$4x^2 - 12x - 9$"
      ],
      correctIndex: 0,
      explanation: "$(2x)^2 - 2(2x)(3) + 3^2 = 4x^2 - 12x + 9$."
    },
    {
      id: "q2_08",
      identityId: 2,
      stage: 2,
      level: 3,
      type: "expand_advanced",
      prompt: "Khai triển $(x - \\frac{1}{2})^2$ bằng:",
      options: [
        "$x^2 - x + \\frac{1}{4}$",
        "$x^2 - 2x + \\frac{1}{4}$",
        "$x^2 - x - \\frac{1}{4}$",
        "$x^2 - \\frac{1}{4}$"
      ],
      correctIndex: 0,
      explanation: "$x^2 - 2\\cdot x\\cdot \\frac{1}{2} + (\\frac{1}{2})^2 = x^2 - x + \\frac{1}{4}$."
    },
    {
      id: "q2_09",
      identityId: 2,
      stage: 2,
      level: 2,
      type: "find_missing",
      prompt: "Tìm $m$ để đa thức $x^2 - 14x + m$ viết được dưới dạng $(x - 7)^2$:",
      options: ["$49$", "$14$", "$-49$", "$28$"],
      correctIndex: 0,
      explanation: "$(x - 7)^2 = x^2 - 14x + 49$, vậy $m = 49$."
    },
    {
      id: "q2_10",
      identityId: 2,
      stage: 2,
      level: 1,
      type: "fast_reflex",
      prompt: "Tính nhanh: $99^2 = (100 - 1)^2 = 10000 - 200 + 1 =$ ?",
      options: ["$9801$", "$9901$", "$9800$", "$9701$"],
      correctIndex: 0,
      explanation: "$10000 - 200 + 1 = 9801$."
    },

    // -----------------------------------------------------------------------
    // CHẶNG 3: HIỆU HAI BÌNH PHƯƠNG (A² - B²)
    // -----------------------------------------------------------------------
    {
      id: "q3_01",
      identityId: 3,
      stage: 3,
      level: 1,
      type: "formula",
      prompt: "Hiệu hai bình phương $A^2 - B^2$ bằng:",
      options: [
        "$(A - B)(A + B)$",
        "$(A - B)^2$",
        "$(A + B)^2$",
        "$A^2 - 2AB + B^2$"
      ],
      correctIndex: 0,
      explanation: "Công thức: $A^2 - B^2 = (A - B)(A + B)$ (Tích của hiệu và tổng)."
    },
    {
      id: "q3_02",
      identityId: 3,
      stage: 3,
      level: 1,
      type: "true_false",
      prompt: "Khẳng định sau ĐÚNG hay SAI: \"$A^2 - B^2 = (A - B)^2$\"",
      options: ["SAI", "ĐÚNG"],
      correctIndex: 0,
      explanation: "Hoàn toàn SAI! $(A-B)^2$ có thêm $-2AB$, còn $A^2-B^2 = (A-B)(A+B)$."
    },
    {
      id: "q3_03",
      identityId: 3,
      stage: 3,
      level: 1,
      type: "identify",
      prompt: "Biểu thức $x^2 - 25$ thuộc dạng hằng đẳng thức nào?",
      options: [
        "Hiệu hai bình phương",
        "Bình phương của một hiệu",
        "Bình phương của một tổng",
        "Hiệu hai lập phương"
      ],
      correctIndex: 0,
      explanation: "Vì $x^2 - 25 = x^2 - 5^2$, đây là Hiệu hai bình phương."
    },
    {
      id: "q3_04",
      identityId: 3,
      stage: 3,
      level: 2,
      type: "factor",
      prompt: "Phân tích đa thức $x^2 - 49$ thành nhân tử:",
      options: [
        "$(x - 7)(x + 7)$",
        "$(x - 7)^2$",
        "$(x + 7)^2$",
        "$(x - 49)(x + 49)$"
      ],
      correctIndex: 0,
      explanation: "$x^2 - 49 = x^2 - 7^2 = (x - 7)(x + 7)$."
    },
    {
      id: "q3_05",
      identityId: 3,
      stage: 3,
      level: 2,
      type: "expand",
      prompt: "Thực hiện phép nhân $(x - 8)(x + 8)$ ta được:",
      options: [
        "$x^2 - 64$",
        "$x^2 + 64$",
        "$x^2 - 16$",
        "$x^2 - 16x + 64$"
      ],
      correctIndex: 0,
      explanation: "$(x - 8)(x + 8) = x^2 - 8^2 = x^2 - 64$."
    },
    {
      id: "q3_06",
      identityId: 3,
      stage: 3,
      level: 2,
      type: "find_error",
      prompt: "Một bạn tính: $(2x - 1)(2x + 1) = 2x^2 - 1$. Lỗi sai ở đâu?",
      options: [
        "Phải là $(2x)^2 - 1 = 4x^2 - 1$",
        "Phải là $2x^2 + 1$",
        "Phải có thêm hạng tử $4x$",
        "Bạn đó làm đúng"
      ],
      correctIndex: 0,
      explanation: "Bạn quên đóng mở ngoặc $(2x)^2 = 4x^2$, chứ không phải $2x^2$."
    },
    {
      id: "q3_07",
      identityId: 3,
      stage: 3,
      level: 3,
      type: "factor_advanced",
      prompt: "Phân tích $4x^2 - 9y^2$ thành tích:",
      options: [
        "$(2x - 3y)(2x + 3y)$",
        "$(4x - 9y)(4x + 9y)$",
        "$(2x - 3y)^2$",
        "$(4x - 3y)(4x + 3y)$"
      ],
      correctIndex: 0,
      explanation: "$4x^2 - 9y^2 = (2x)^2 - (3y)^2 = (2x - 3y)(2x + 3y)$."
    },
    {
      id: "q3_08",
      identityId: 3,
      stage: 3,
      level: 3,
      type: "expand_advanced",
      prompt: "Thu gọn biểu thức: $(x - 3)(x + 3) - x^2$ được kết quả:",
      options: ["$-9$", "$9$", "$2x^2 - 9$", "$0$"],
      correctIndex: 0,
      explanation: "$(x - 3)(x + 3) - x^2 = (x^2 - 9) - x^2 = -9$."
    },
    {
      id: "q3_09",
      identityId: 3,
      stage: 3,
      level: 2,
      type: "identify_square",
      prompt: "Số $81$ viết dưới dạng bình phương là:",
      options: ["$9^2$", "$8^2$", "$3^3$", "$7^2$"],
      correctIndex: 0,
      explanation: "Ta có $81 = 9^2$."
    },
    {
      id: "q3_10",
      identityId: 3,
      stage: 3,
      level: 1,
      type: "fast_reflex",
      prompt: "Tính nhanh: $52 \\times 48 = (50 + 2)(50 - 2) = 50^2 - 2^2 =$ ?",
      options: ["$2496$", "$2500$", "$2494$", "$2400$"],
      correctIndex: 0,
      explanation: "$50^2 - 2^2 = 2500 - 4 = 2496$."
    },

    // -----------------------------------------------------------------------
    // CHẶNG 4: LẬP PHƯƠNG CỦA MỘT TỔNG (A + B)³
    // -----------------------------------------------------------------------
    {
      id: "q4_01",
      identityId: 4,
      stage: 4,
      level: 1,
      type: "formula",
      prompt: "Khai triển đúng của $(A + B)^3$ là:",
      options: [
        "$A^3 + 3A^2B + 3AB^2 + B^3$",
        "$A^3 + B^3$",
        "$A^3 + 3A^2B - 3AB^2 + B^3$",
        "$A^3 + A^2B + AB^2 + B^3$"
      ],
      correctIndex: 0,
      explanation: "Hệ số chuẩn: 1 - 3 - 3 - 1, tất cả đều dấu CỘNG (+)."
    },
    {
      id: "q4_02",
      identityId: 4,
      stage: 4,
      level: 1,
      type: "fill_blank",
      prompt: "Điền hệ số thích hợp: $(A + B)^3 = A^3 + \\underline{\\quad}A^2B + 3AB^2 + B^3$",
      options: ["$3$", "$2$", "$6$", "$1$"],
      correctIndex: 0,
      explanation: "Hệ số của cả 2 hạng tử giữa đều là số $3$."
    },
    {
      id: "q4_03",
      identityId: 4,
      stage: 4,
      level: 2,
      type: "expand",
      prompt: "Khai triển $(x + 1)^3$ ta được:",
      options: [
        "$x^3 + 3x^2 + 3x + 1$",
        "$x^3 + x^2 + x + 1$",
        "$x^3 + 3x + 1$",
        "$x^3 + 1$"
      ],
      correctIndex: 0,
      explanation: "$(x+1)^3 = x^3 + 3\\cdot x^2\\cdot 1 + 3\\cdot x\\cdot 1^2 + 1^3 = x^3 + 3x^2 + 3x + 1$."
    },
    {
      id: "q4_04",
      identityId: 4,
      stage: 4,
      level: 2,
      type: "find_error",
      prompt: "Bạn Cúc khai triển: $(x + 2)^3 = x^3 + 3x^2 + 6x + 8$. Cúc sai ở đâu?",
      options: [
        "Hạng tử thứ 2 phải là $3\\cdot x^2\\cdot 2 = 6x^2$ và hạng tử thứ 3 là $12x$",
        "Tính sai $2^3$",
        "Phải có dấu trừ",
        "Cúc làm hoàn toàn đúng"
      ],
      correctIndex: 0,
      explanation: "Đúng là: $x^3 + 3(x^2)(2) + 3(x)(2^2) + 2^3 = x^3 + 6x^2 + 12x + 8$."
    },
    {
      id: "q4_05",
      identityId: 4,
      stage: 4,
      level: 2,
      type: "factor",
      prompt: "Viết $x^3 + 6x^2 + 12x + 8$ dưới dạng lập phương một tổng:",
      options: [
        "$(x + 2)^3$",
        "$(x + 8)^3$",
        "$(x + 4)^3$",
        "$(x + 1)^3$"
      ],
      correctIndex: 0,
      explanation: "Vì $8 = 2^3$ và $6x^2 = 3(x^2)(2)$, đây chính là $(x + 2)^3$."
    },
    {
      id: "q4_06",
      identityId: 4,
      stage: 4,
      level: 3,
      type: "expand_advanced",
      prompt: "Khai triển $(2x + 1)^3$ bằng:",
      options: [
        "$8x^3 + 12x^2 + 6x + 1$",
        "$2x^3 + 6x^2 + 6x + 1$",
        "$8x^3 + 6x^2 + 6x + 1$",
        "$8x^3 + 1$"
      ],
      correctIndex: 0,
      explanation: "$(2x)^3 + 3(2x)^2(1) + 3(2x)(1^2) + 1^3 = 8x^3 + 12x^2 + 6x + 1$."
    },
    {
      id: "q4_07",
      identityId: 4,
      stage: 4,
      level: 2,
      type: "identify_cube",
      prompt: "Số $64$ viết dưới dạng lập phương là:",
      options: ["$4^3$", "$8^3$", "$2^3$", "$6^3$"],
      correctIndex: 0,
      explanation: "$4^3 = 4 \\times 4 \\times 4 = 64$."
    },
    {
      id: "q4_08",
      identityId: 4,
      stage: 4,
      level: 1,
      type: "true_false",
      prompt: "\"$(A + B)^3 = A^3 + B^3$\" là khẳng định ĐÚNG hay SAI?",
      options: ["SAI", "ĐÚNG"],
      correctIndex: 0,
      explanation: "Rất SAI! Khai triển lập phương một tổng có tới 4 hạng tử."
    },
    {
      id: "q4_09",
      identityId: 4,
      stage: 4,
      level: 3,
      type: "find_missing",
      prompt: "Biểu thức $(x + 3)^3$ có hệ số của $x$ là bao nhiêu?",
      options: ["$27$", "$9$", "$18$", "$3$"],
      correctIndex: 0,
      explanation: "Hạng tử chứa $x$ là $3\\cdot x\\cdot 3^2 = 3\\cdot x\\cdot 9 = 27x$. Hệ số là 27."
    },
    {
      id: "q4_10",
      identityId: 4,
      stage: 4,
      level: 2,
      type: "fast_reflex",
      prompt: "Có bao nhiêu hạng tử trong khai triển của $(x + y)^3$?",
      options: ["4 hạng tử", "2 hạng tử", "3 hạng tử", "6 hạng tử"],
      correctIndex: 0,
      explanation: "Có 4 hạng tử: $A^3, 3A^2B, 3AB^2, B^3$."
    },

    // -----------------------------------------------------------------------
    // CHẶNG 5: LẬP PHƯƠNG CỦA MỘT HIỆU (A - B)³
    // -----------------------------------------------------------------------
    {
      id: "q5_01",
      identityId: 5,
      stage: 5,
      level: 1,
      type: "formula",
      prompt: "Khai triển đúng của $(A - B)^3$ là:",
      options: [
        "$A^3 - 3A^2B + 3AB^2 - B^3$",
        "$A^3 - 3A^2B - 3AB^2 - B^3$",
        "$A^3 - B^3$",
        "$A^3 + 3A^2B - 3AB^2 + B^3$"
      ],
      correctIndex: 0,
      explanation: "Quy tắc đan dấu: CỘNG - TRỪ - CỘNG - TRỪ (+ - + -). Hạng tử $+3AB^2$ mang dấu CỘNG!"
    },
    {
      id: "q5_02",
      identityId: 5,
      stage: 5,
      level: 1,
      type: "sign_trap",
      prompt: "Dấu của hạng tử $3AB^2$ trong khai triển $(A - B)^3$ là:",
      options: ["Dấu CỘNG (+)", "Dấu TRỪ (-)"],
      correctIndex: 0,
      explanation: "Vì $(-B)^2 = +B^2$, nên dấu ở đây là Dấu CỘNG (+3AB²)."
    },
    {
      id: "q5_03",
      identityId: 5,
      stage: 5,
      level: 2,
      type: "expand",
      prompt: "Khai triển $(x - 1)^3$ ta được:",
      options: [
        "$x^3 - 3x^2 + 3x - 1$",
        "$x^3 - 3x^2 - 3x - 1$",
        "$x^3 - x^2 + x - 1$",
        "$x^3 - 1$"
      ],
      correctIndex: 0,
      explanation: "$(x - 1)^3 = x^3 - 3x^2(1) + 3x(1^2) - 1^3 = x^3 - 3x^2 + 3x - 1$."
    },
    {
      id: "q5_04",
      identityId: 5,
      stage: 5,
      level: 2,
      type: "find_error",
      prompt: "Bạn Nam viết: $(x - 2)^3 = x^3 - 6x^2 - 12x - 8$. Nam đã sai dấu ở đâu?",
      options: [
        "Hạng tử $12x$ phải mang dấu CỘNG ($+12x$)",
        "Số $8$ phải mang dấu cộng",
        "Toàn bộ đều phải mang dấu cộng",
        "Nam không sai"
      ],
      correctIndex: 0,
      explanation: "Quy tắc đan dấu (+ - + -), nên phải là $x^3 - 6x^2 + 12x - 8$."
    },
    {
      id: "q5_05",
      identityId: 5,
      stage: 5,
      level: 2,
      type: "factor",
      prompt: "Viết đa thức $x^3 - 9x^2 + 27x - 27$ về dạng lập phương một hiệu:",
      options: [
        "$(x - 3)^3$",
        "$(x + 3)^3$",
        "$(x - 27)^3$",
        "$(x - 9)^3$"
      ],
      correctIndex: 0,
      explanation: "Vì $27 = 3^3$ và dấu đan xen (+ - + -), đây là $(x - 3)^3$."
    },
    {
      id: "q5_06",
      identityId: 5,
      stage: 5,
      level: 3,
      type: "expand_advanced",
      prompt: "Khai triển $(2x - 1)^3$ bằng:",
      options: [
        "$8x^3 - 12x^2 + 6x - 1$",
        "$8x^3 - 6x^2 + 6x - 1$",
        "$8x^3 - 12x^2 - 6x - 1$",
        "$8x^3 - 1$"
      ],
      correctIndex: 0,
      explanation: "$(2x)^3 - 3(2x)^2(1) + 3(2x)(1^2) - 1^3 = 8x^3 - 12x^2 + 6x - 1$."
    },
    {
      id: "q5_07",
      identityId: 5,
      stage: 5,
      level: 1,
      type: "true_false",
      prompt: "\"$(A - B)^3 = (B - A)^3$\" là ĐÚNG hay SAI?",
      options: ["SAI", "ĐÚNG"],
      correctIndex: 0,
      explanation: "SAI! Với số mũ lẻ (mũ 3), $(A - B)^3 = -(B - A)^3$ (bị đổi dấu, không bằng nhau)."
    },
    {
      id: "q5_08",
      identityId: 5,
      stage: 5,
      level: 3,
      type: "find_missing",
      prompt: "Trong $(x - 2)^3 = x^3 - 6x^2 + kx - 8$, giá trị của $k$ là:",
      options: ["$12$", "$6$", "$-12$", "$8$"],
      correctIndex: 0,
      explanation: "Hạng tử chứa $x$ là $3\\cdot x\\cdot 2^2 = 12x$, nên $k = 12$."
    },
    {
      id: "q5_09",
      identityId: 5,
      stage: 5,
      level: 2,
      type: "compare",
      prompt: "Biểu thức $(x - 3)^3$ có dấu của 4 hạng tử lần lượt là:",
      options: ["$+, -, +, -$ ", "$+, -, -, -$", "$-, -, -, -$", "$+, +, +, +$"],
      correctIndex: 0,
      explanation: "Luôn ghi nhớ quy tắc đan dấu: Cộng, Trừ, Cộng, Trừ."
    },
    {
      id: "q5_10",
      identityId: 5,
      stage: 5,
      level: 1,
      type: "identify_cube",
      prompt: "Số $125$ viết dưới dạng lập phương là:",
      options: ["$5^3$", "$25^3$", "$15^3$", "$3^5$"],
      correctIndex: 0,
      explanation: "$5^3 = 5 \\times 5 \\times 5 = 125$."
    },

    // -----------------------------------------------------------------------
    // CHẶNG 6: TỔNG HAI LẬP PHƯƠNG (A³ + B³)
    // -----------------------------------------------------------------------
    {
      id: "q6_01",
      identityId: 6,
      stage: 6,
      level: 1,
      type: "formula",
      prompt: "Công thức tổng hai lập phương $A^3 + B^3$ là:",
      options: [
        "$(A + B)(A^2 - AB + B^2)$",
        "$(A + B)(A^2 + AB + B^2)$",
        "$(A + B)(A^2 - 2AB + B^2)$",
        "$(A - B)(A^2 - AB + B^2)$"
      ],
      correctIndex: 0,
      explanation: "Thần chú: 'CÙNG DẤU NGOÀI (+) - TRÁI DẤU GIỮA (-)'. Chú ý ngoặc sau là $-AB$ (không có số 2)."
    },
    {
      id: "q6_02",
      identityId: 6,
      stage: 6,
      level: 1,
      type: "sign_trap",
      prompt: "Điền dấu thích hợp: $A^3 + B^3 = (A + B)(A^2 \\;\\underline{\\quad}\\; AB + B^2)$",
      options: ["$-$", "$+$"],
      correctIndex: 0,
      explanation: "Ở ngoặc thứ hai mang dấu TRỪ (trái dấu với ngoặc đầu)."
    },
    {
      id: "q6_03",
      identityId: 6,
      stage: 6,
      level: 2,
      type: "factor",
      prompt: "Phân tích $x^3 + 8$ thành nhân tử:",
      options: [
        "$(x + 2)(x^2 - 2x + 4)$",
        "$(x + 2)(x^2 + 2x + 4)$",
        "$(x + 2)(x^2 - 4x + 4)$",
        "$(x + 8)(x^2 - 8x + 64)$"
      ],
      correctIndex: 0,
      explanation: "Vì $8 = 2^3$, ta có $x^3 + 2^3 = (x + 2)(x^2 - 2x + 2^2) = (x + 2)(x^2 - 2x + 4)$."
    },
    {
      id: "q6_04",
      identityId: 6,
      stage: 6,
      level: 2,
      type: "find_error",
      prompt: "Bạn Hoa viết: $x^3 + 27 = (x + 3)(x^2 - 6x + 9)$. Hoa sai ở đâu?",
      options: [
        "Hạng tử giữa ở ngoặc sau phải là $-3x$ (không nhân 2)",
        "Tính sai $3^2$",
        "Dấu ở ngoặc đầu phải là trừ",
        "Hoa không sai"
      ],
      correctIndex: 0,
      explanation: "Ngoặc sau là 'bình phương thiếu' nên chỉ là $-AB = -3x$, không có hệ số 2."
    },
    {
      id: "q6_05",
      identityId: 6,
      stage: 6,
      level: 2,
      type: "expand",
      prompt: "Thu gọn biểu thức $(x + 1)(x^2 - x + 1)$ ta được:",
      options: [
        "$x^3 + 1$",
        "$x^3 - 1$",
        "$x^3 + 3x + 1$",
        "$(x + 1)^3$"
      ],
      correctIndex: 0,
      explanation: "Đây chính là dạng khai triển ngược của HĐT $A^3 + B^3 = x^3 + 1^3 = x^3 + 1$."
    },
    {
      id: "q6_06",
      identityId: 6,
      stage: 6,
      level: 3,
      type: "factor_advanced",
      prompt: "Phân tích $8x^3 + 27$ thành nhân tử:",
      options: [
        "$(2x + 3)(4x^2 - 6x + 9)$",
        "$(2x + 3)(4x^2 + 6x + 9)$",
        "$(2x + 3)(2x^2 - 6x + 9)$",
        "$(8x + 27)(64x^2 - 216x + 729)$"
      ],
      correctIndex: 0,
      explanation: "$(2x)^3 + 3^3 = (2x + 3)((2x)^2 - (2x)(3) + 3^2) = (2x + 3)(4x^2 - 6x + 9)$."
    },
    {
      id: "q6_07",
      identityId: 6,
      stage: 6,
      level: 1,
      type: "identify",
      prompt: "Biểu thức $x^3 + 64$ bằng dạng nào sau đây?",
      options: [
        "$x^3 + 4^3$",
        "$x^3 + 8^3$",
        "$x^3 + 16^3$",
        "$(x + 4)^3$"
      ],
      correctIndex: 0,
      explanation: "$64 = 4^3$, nên $x^3 + 64 = x^3 + 4^3$."
    },
    {
      id: "q6_08",
      identityId: 6,
      stage: 6,
      level: 3,
      type: "expand_advanced",
      prompt: "Rút gọn $(x + 2)(x^2 - 2x + 4) - x^3$ được:",
      options: ["$8$", "$-8$", "$0$", "$16$"],
      correctIndex: 0,
      explanation: "$(x^3 + 8) - x^3 = 8$."
    },
    {
      id: "q6_09",
      identityId: 6,
      stage: 6,
      level: 1,
      type: "true_false",
      prompt: "\"$A^3 + B^3 = (A + B)^3$\" là ĐÚNG hay SAI?",
      options: ["SAI", "ĐÚNG"],
      correctIndex: 0,
      explanation: "SAI! Tổng hai lập phương $A^3+B^3$ khác hoàn toàn Lập phương của một tổng $(A+B)^3$."
    },
    {
      id: "q6_10",
      identityId: 6,
      stage: 6,
      level: 2,
      type: "fast_reflex",
      prompt: "Tìm hạng tử còn thiếu: $x^3 + 1 = (x + 1)(x^2 - x + \\underline{\\quad})$",
      options: ["$1$", "$2$", "$0$", "$-1$"],
      correctIndex: 0,
      explanation: "$B^2 = 1^2 = 1$."
    },

    // -----------------------------------------------------------------------
    // CHẶNG 7: HIỆU HAI LẬP PHƯƠNG (A³ - B³)
    // -----------------------------------------------------------------------
    {
      id: "q7_01",
      identityId: 7,
      stage: 7,
      level: 1,
      type: "formula",
      prompt: "Công thức hiệu hai lập phương $A^3 - B^3$ là:",
      options: [
        "$(A - B)(A^2 + AB + B^2)$",
        "$(A - B)(A^2 - AB + B^2)$",
        "$(A - B)(A^2 + 2AB + B^2)$",
        "$(A + B)(A^2 + AB + B^2)$"
      ],
      correctIndex: 0,
      explanation: "Thần chú: 'CÙNG DẤU NGOÀI (-) - TRÁI DẤU GIỮA (+)'. Ngoặc thứ 2 toàn dấu CỘNG (+)."
    },
    {
      id: "q7_02",
      identityId: 7,
      stage: 7,
      level: 1,
      type: "sign_trap",
      prompt: "Dấu đúng ở vị trí trống: $A^3 - B^3 = (A - B)(A^2 \\;\\underline{\\quad}\\; AB + B^2)$",
      options: ["$+$", "$-$"],
      correctIndex: 0,
      explanation: "Ngoặc đầu là dấu TRỪ thì ngoặc sau ở giữa phải là dấu CỘNG (+AB)."
    },
    {
      id: "q7_03",
      identityId: 7,
      stage: 7,
      level: 2,
      type: "factor",
      prompt: "Phân tích $x^3 - 8$ thành nhân tử:",
      options: [
        "$(x - 2)(x^2 + 2x + 4)$",
        "$(x - 2)(x^2 - 2x + 4)$",
        "$(x - 2)(x^2 + 4x + 4)$",
        "$(x - 8)(x^2 + 8x + 64)$"
      ],
      correctIndex: 0,
      explanation: "$x^3 - 2^3 = (x - 2)(x^2 + 2\\cdot x + 2^2) = (x - 2)(x^2 + 2x + 4)$."
    },
    {
      id: "q7_04",
      identityId: 7,
      stage: 7,
      level: 2,
      type: "find_error",
      prompt: "Bạn Hùng viết: $x^3 - 27 = (x - 3)(x^2 - 3x + 9)$. Hùng đã sai ở đâu?",
      options: [
        "Dấu ở giữa ngoặc 2 phải là CỘNG ($+3x$)",
        "Ngoặc đầu phải là $x+3$",
        "Tính sai $3^2$",
        "Hùng làm đúng"
      ],
      correctIndex: 0,
      explanation: "Hiệu hai lập phương có ngoặc 2 là $(A^2 + AB + B^2)$ toàn dấu cộng."
    },
    {
      id: "q7_05",
      identityId: 7,
      stage: 7,
      level: 2,
      type: "expand",
      prompt: "Thu gọn $(x - 4)(x^2 + 4x + 16)$ ta được:",
      options: [
        "$x^3 - 64$",
        "$x^3 + 64$",
        "$x^3 - 16$",
        "$(x - 4)^3$"
      ],
      correctIndex: 0,
      explanation: "Đây là dạng $(A - B)(A^2 + AB + B^2) = A^3 - B^3 = x^3 - 4^3 = x^3 - 64$."
    },
    {
      id: "q7_06",
      identityId: 7,
      stage: 7,
      level: 3,
      type: "factor_advanced",
      prompt: "Phân tích $27x^3 - y^3$ thành nhân tử:",
      options: [
        "$(3x - y)(9x^2 + 3xy + y^2)$",
        "$(3x - y)(9x^2 - 3xy + y^2)$",
        "$(3x - y)(3x^2 + 3xy + y^2)$",
        "$(27x - y)(9x^2 + 3xy + y^2)$"
      ],
      correctIndex: 0,
      explanation: "$(3x)^3 - y^3 = (3x - y)((3x)^2 + (3x)y + y^2) = (3x - y)(9x^2 + 3xy + y^2)$."
    },
    {
      id: "q7_07",
      identityId: 7,
      stage: 7,
      level: 3,
      type: "expand_advanced",
      prompt: "Tính giá trị của biểu thức $(x - 1)(x^2 + x + 1) - x^3$ tại $x = 100$:",
      options: ["$-1$", "$1$", "$99$", "$0$"],
      correctIndex: 0,
      explanation: "Rút gọn $(x^3 - 1) - x^3 = -1$. Giá trị luôn là $-1$ với mọi $x$!"
    },
    {
      id: "q7_08",
      identityId: 7,
      stage: 7,
      level: 1,
      type: "true_false",
      prompt: "\"$(A - B)(A^2 + AB + B^2) = A^3 - B^3$\" là ĐÚNG hay SAI?",
      options: ["ĐÚNG", "SAI"],
      correctIndex: 0,
      explanation: "ĐÚNG! Đây chính là vế phải của hằng đẳng thức Hiệu hai lập phương."
    },
    {
      id: "q7_09",
      identityId: 7,
      stage: 7,
      level: 2,
      type: "identify_cube",
      prompt: "Số $216$ viết dưới dạng lập phương là:",
      options: ["$6^3$", "$4^3$", "$8^3$", "$5^3$"],
      correctIndex: 0,
      explanation: "$6^3 = 6 \\times 6 \\times 6 = 216$."
    },
    {
      id: "q7_10",
      identityId: 7,
      stage: 7,
      level: 2,
      type: "fast_reflex",
      prompt: "Điền biểu thức còn thiếu: $x^3 - 1 = (\\underline{\\quad})(x^2 + x + 1)$",
      options: ["$x - 1$", "$x + 1$", "$x - 2$", "$1 - x$"],
      correctIndex: 0,
      explanation: "Ngoặc đầu tiên cùng dấu với đề bài: $(x - 1)$."
    },

    // -----------------------------------------------------------------------
    // CHẶNG 8 / BOSS STAGE: BẬC THẦY 7 HẰNG ĐẲNG THỨC (TỔNG HỢP & BẪY CAO CẤP)
    // -----------------------------------------------------------------------
    {
      id: "qb_01",
      identityId: 3,
      stage: 8,
      level: 3,
      type: "compare",
      prompt: "Cặp biểu thức nào sau đây bằng nhau?",
      options: [
        "$(x - 2)^2$ và $(2 - x)^2$",
        "$(x - 2)^3$ và $(2 - x)^3$",
        "$(x - 2)^2$ và $x^2 - 4$",
        "$(x + 2)^2$ và $x^2 + 4$"
      ],
      correctIndex: 0,
      explanation: "Bình phương của hai số đối nhau luôn bằng nhau: $(A-B)^2 = (B-A)^2$."
    },
    {
      id: "qb_02",
      identityId: 6,
      stage: 8,
      level: 3,
      type: "sign_trap",
      prompt: "Phân biệt dấu: $A^3 + B^3$ và $A^3 - B^3$. Khẳng định nào ĐÚNG?",
      options: [
        "$A^3+B^3$ có ngoặc sau là $(A^2 - AB + B^2)$, còn $A^3-B^3$ có ngoặc sau là $(A^2 + AB + B^2)$",
        "Cả hai đều có ngoặc sau toàn dấu cộng",
        "Cả hai đều có ngoặc sau toàn dấu trừ",
        "Cả hai đều có hệ số $2AB$ ở ngoặc sau"
      ],
      correctIndex: 0,
      explanation: "Quy tắc: 'Cùng dấu ngoài, trái dấu giữa'!"
    },
    {
      id: "qb_03",
      identityId: 1,
      stage: 8,
      level: 3,
      type: "expand_advanced",
      prompt: "Biểu thức $(x + 2y)^2$ khai triển là:",
      options: [
        "$x^2 + 4xy + 4y^2$",
        "$x^2 + 2xy + 4y^2$",
        "$x^2 + 4xy + 2y^2$",
        "$x^2 + 4y^2$"
      ],
      correctIndex: 0,
      explanation: "$x^2 + 2(x)(2y) + (2y)^2 = x^2 + 4xy + 4y^2$."
    },
    {
      id: "qb_04",
      identityId: 5,
      stage: 8,
      level: 3,
      type: "expand_advanced",
      prompt: "Hệ số của $x^2$ trong khai triển $(x - 4)^3$ là bao nhiêu?",
      options: ["$-12$", "$12$", "$-48$", "$48$"],
      correctIndex: 0,
      explanation: "Hạng tử chứa $x^2$ là $-3(x^2)(4) = -12x^2$, hệ số là $-12$."
    },
    {
      id: "qb_05",
      identityId: 2,
      stage: 8,
      level: 3,
      type: "factor_advanced",
      prompt: "Biểu thức $4x^2 - 12x + 9$ là bình phương của biểu thức nào?",
      options: [
        "$(2x - 3)^2$",
        "$(2x + 3)^2$",
        "$(4x - 9)^2$",
        "$(2x - 9)^2$"
      ],
      correctIndex: 0,
      explanation: "$4x^2 = (2x)^2$, $9 = 3^2$, và $-12x = -2(2x)(3)$ nên là $(2x - 3)^2$."
    },
    {
      id: "qb_06",
      identityId: 7,
      stage: 8,
      level: 3,
      type: "expand_advanced",
      prompt: "Khai triển $(3x - 1)(9x^2 + 3x + 1)$ được:",
      options: [
        "$27x^3 - 1$",
        "$27x^3 + 1$",
        "$9x^3 - 1$",
        "$27x^3 - 9x^2 + 1$"
      ],
      correctIndex: 0,
      explanation: "Dạng $A^3 - B^3 = (3x)^3 - 1^3 = 27x^3 - 1$."
    },
    {
      id: "qb_07",
      identityId: 3,
      stage: 8,
      level: 3,
      type: "factor_advanced",
      prompt: "Phân tích $(x + 1)^2 - 4$ thành nhân tử:",
      options: [
        "$(x - 1)(x + 3)$",
        "$(x - 3)(x + 1)$",
        "$(x + 1 - 4)(x + 1 + 4)$",
        "$(x + 3)^2$"
      ],
      correctIndex: 0,
      explanation: "$(x+1)^2 - 2^2 = (x+1-2)(x+1+2) = (x-1)(x+3)$."
    },
    {
      id: "qb_08",
      identityId: 4,
      stage: 8,
      level: 3,
      type: "expand_advanced",
      prompt: "Rút gọn $(x + 1)^3 - (x - 1)^3$ ta được:",
      options: [
        "$6x^2 + 2$",
        "$2x^3 + 6x$",
        "$6x^2$",
        "$2$"
      ],
      correctIndex: 0,
      explanation: "$(x^3 + 3x^2 + 3x + 1) - (x^3 - 3x^2 + 3x - 1) = 6x^2 + 2$."
    },
    {
      id: "qb_09",
      identityId: 1,
      stage: 8,
      level: 3,
      type: "fast_reflex",
      prompt: "Biết $x + y = 5$ và $xy = 6$. Giá trị của $x^2 + y^2$ là:",
      options: ["$13$", "$25$", "$19$", "$37$"],
      correctIndex: 0,
      explanation: "$x^2 + y^2 = (x + y)^2 - 2xy = 5^2 - 2(6) = 25 - 12 = 13$."
    },
    {
      id: "qb_10",
      identityId: 6,
      stage: 8,
      level: 3,
      type: "fast_reflex",
      prompt: "Biểu thức $(x + 2y)(x^2 - 2xy + 4y^2)$ bằng:",
      options: [
        "$x^3 + 8y^3$",
        "$x^3 - 8y^3$",
        "$x^3 + 4y^3$",
        "$(x + 2y)^3$"
      ],
      correctIndex: 0,
      explanation: "$x^3 + (2y)^3 = x^3 + 8y^3$."
    },

    // -----------------------------------------------------------------------
    // BỘ CÂU HỎI CHUYÊN DỤNG: THỢ SĂN LỖI SAI (BUG HUNTER MODE - 15 CÂU)
    // -----------------------------------------------------------------------
    {
      id: "bug_01",
      identityId: 1,
      stage: "hunter",
      level: 2,
      type: "bug_hunt",
      author: "Bạn An",
      written: "$(x + 5)^2 = x^2 + 25$",
      prompt: "Bạn An đã mắc lỗi nghiêm trọng nào?",
      options: [
        "Quên hạng tử ở giữa là $+2AB = +10x$",
        "Tính sai $5^2$",
        "Phải đổi thành dấu trừ",
        "An làm đúng rồi"
      ],
      correctIndex: 0,
      explanation: "Lỗi kinh điển: $(A+B)^2$ không bằng $A^2+B^2$, mà phải có thêm $+2AB = +10x$."
    },
    {
      id: "bug_02",
      identityId: 2,
      stage: "hunter",
      level: 2,
      type: "bug_hunt",
      author: "Bạn Bình",
      written: "$(x - 3)^2 = x^2 - 6x - 9$",
      prompt: "Bình đã nhầm dấu ở đâu trong bài?",
      options: [
        "Hạng tử cuối phải là $+9$ vì $(-3)^2 = +9$",
        "Hạng tử giữa phải là $+6x$",
        "Số đầu phải là $-x^2$",
        "Bình làm hoàn toàn chính xác"
      ],
      correctIndex: 0,
      explanation: "Bình phương luôn không âm, nên $(-3)^2 = +9$, không thể mang dấu trừ."
    },
    {
      id: "bug_03",
      identityId: 3,
      stage: "hunter",
      level: 2,
      type: "bug_hunt",
      author: "Bạn Cúc",
      written: "$(3x - 2)(3x + 2) = 3x^2 - 4$",
      prompt: "Cúc đã quên thao tác quan trọng nào?",
      options: [
        "Quên bình phương hệ số 3: $(3x)^2 = 9x^2$",
        "Tính sai $2^2$",
        "Phải có thêm hạng tử giữa",
        "Cúc làm đúng"
      ],
      correctIndex: 0,
      explanation: "$A = 3x$ nên $A^2 = (3x)^2 = 9x^2$, Cúc quên bình phương số 3."
    },
    {
      id: "bug_04",
      identityId: 6,
      stage: "hunter",
      level: 2,
      type: "bug_hunt",
      author: "Bạn Dũng",
      written: "$x^3 + 8 = (x + 2)(x^2 - 4x + 4)$",
      prompt: "Dũng bị nhầm lẫn giữa HĐT nào?",
      options: [
        "Nhầm 'bình phương thiếu' $-AB$ thành 'bình phương đủ' $-2AB$",
        "Nhầm dấu ngoặc đầu",
        "Tính sai $2^3$",
        "Dũng làm đúng"
      ],
      correctIndex: 0,
      explanation: "Ngoặc sau chỉ là $-AB = -2x$, Dũng đã nhân thêm 2 thành $-4x$ (sai)."
    },
    {
      id: "bug_05",
      identityId: 7,
      stage: "hunter",
      level: 2,
      type: "bug_hunt",
      author: "Bạn Giang",
      written: "$x^3 - 27 = (x - 3)(x^2 - 3x + 9)$",
      prompt: "Giang đã sai quy tắc dấu nào của HĐT $A^3 - B^3$?",
      options: [
        "Quy tắc 'Trái dấu giữa': ngoặc sau phải là $+3x$",
        "Ngoặc đầu phải là $x+3$",
        "Hạng tử 9 phải là $-9$",
        "Giang làm đúng"
      ],
      correctIndex: 0,
      explanation: "Với $A^3 - B^3$, ngoặc sau phải toàn dấu cộng: $(x^2 + 3x + 9)$."
    },
    {
      id: "bug_06",
      identityId: 5,
      stage: "hunter",
      level: 2,
      type: "bug_hunt",
      author: "Bạn Hân",
      written: "$(x - 2)^3 = x^3 - 6x^2 - 12x - 8$",
      prompt: "Hân quên quy tắc đan dấu gì của $(A - B)^3$?",
      options: [
        "Dấu phải là: Cộng - Trừ - CỘNG - Trừ (hạng tử thứ ba phải là $+12x$)",
        "Tất cả đều phải là dấu cộng",
        "Tất cả đều phải là dấu trừ",
        "Hân làm đúng"
      ],
      correctIndex: 0,
      explanation: "Khai triển $(A-B)^3$ là $+A^3 - 3A^2B + 3AB^2 - B^3$, dấu của $12x$ phải là CỘNG."
    },
    {
      id: "bug_07",
      identityId: 3,
      stage: "hunter",
      level: 2,
      type: "bug_hunt",
      author: "Bạn Khang",
      written: "$x^2 - 16 = (x - 16)(x + 16)$",
      prompt: "Khang đã mắc lỗi cơ bản gì?",
      options: [
        "Quên lấy căn bậc hai của 16 (phải là $4^2$)",
        "Viết sai dấu hai ngoặc",
        "Phải là $(x-4)^2$",
        "Khang làm đúng"
      ],
      correctIndex: 0,
      explanation: "$16 = 4^2$, nên $x^2 - 16 = (x - 4)(x + 4)$, không thể là 16."
    },
    {
      id: "bug_08",
      identityId: 4,
      stage: "hunter",
      level: 2,
      type: "bug_hunt",
      author: "Bạn Linh",
      written: "$(2x + 1)^3 = 2x^3 + 6x^2 + 6x + 1$",
      prompt: "Linh đã sai ở hạng tử đầu tiên như thế nào?",
      options: [
        "$(2x)^3$ phải bằng $8x^3$, không phải $2x^3$",
        "Số $1$ phải bằng 3",
        "Dấu phải đổi thành trừ",
        "Linh làm đúng"
      ],
      correctIndex: 0,
      explanation: "$(2x)^3 = 2^3 \\cdot x^3 = 8x^3$. Linh quên lập phương hệ số 2."
    },
    {
      id: "bug_09",
      identityId: 2,
      stage: "hunter",
      level: 2,
      type: "bug_hunt",
      author: "Bạn Minh",
      written: "$(x - 4)^2 = x^2 - 4x + 16$",
      prompt: "Minh đã quên nhân số mấy ở hạng tử giữa?",
      options: [
        "Quên nhân 2: $2 \\cdot x \\cdot 4 = 8x$",
        "Quên nhân 3",
        "Quên nhân 4",
        "Minh làm đúng"
      ],
      correctIndex: 0,
      explanation: "Hạng tử ở giữa là $2AB = 2 \\cdot x \\cdot 4 = 8x$."
    },
    {
      id: "bug_10",
      identityId: 6,
      stage: "hunter",
      level: 2,
      type: "bug_hunt",
      author: "Bạn Nga",
      written: "$x^3 + 1 = (x + 1)^3$",
      prompt: "Nga đã nhầm lẫn tai hại gì?",
      options: [
        "Nhầm Tổng hai lập phương với Lập phương một tổng",
        "Tính sai $1^3$",
        "Quên dấu trừ",
        "Nga làm đúng"
      ],
      correctIndex: 0,
      explanation: "$x^3 + 1 = (x+1)(x^2-x+1)$, còn $(x+1)^3 = x^3+3x^2+3x+1$. Hai biểu thức khác hẳn nhau!"
    },

    // -----------------------------------------------------------------------
    // BỘ CÂU HỎI THỬ THÁCH 60 GIÂY (SPEED ARENA - NHẬN BIẾT & PHẢN XẠ NHANH)
    // -----------------------------------------------------------------------
    {
      id: "sp_01",
      identityId: 1,
      stage: "speed",
      level: 1,
      type: "speed",
      prompt: "$(x + 2)^2$ = ?",
      options: ["$x^2 + 4x + 4$", "$x^2 + 4$", "$x^2 + 2x + 4$", "$x^2 - 4x + 4$"],
      correctIndex: 0,
      explanation: "$(x+2)^2 = x^2 + 4x + 4$."
    },
    {
      id: "sp_02",
      identityId: 2,
      stage: "speed",
      level: 1,
      type: "speed",
      prompt: "$(x - 1)^2$ = ?",
      options: ["$x^2 - 2x + 1$", "$x^2 - 1$", "$x^2 - 2x - 1$", "$x^2 + 2x + 1$"],
      correctIndex: 0,
      explanation: "$(x-1)^2 = x^2 - 2x + 1$."
    },
    {
      id: "sp_03",
      identityId: 3,
      stage: "speed",
      level: 1,
      type: "speed",
      prompt: "$x^2 - 9$ = ?",
      options: ["$(x - 3)(x + 3)$", "$(x - 3)^2$", "$(x + 3)^2$", "$(x - 9)(x + 9)$"],
      correctIndex: 0,
      explanation: "$x^2 - 9 = (x - 3)(x + 3)$."
    },
    {
      id: "sp_04",
      identityId: 3,
      stage: "speed",
      level: 1,
      type: "speed",
      prompt: "$(x - 5)(x + 5)$ = ?",
      options: ["$x^2 - 25$", "$x^2 + 25$", "$x^2 - 10$", "$x^2 - 10x + 25$"],
      correctIndex: 0,
      explanation: "$(x-5)(x+5) = x^2 - 25$."
    },
    {
      id: "sp_05",
      identityId: 6,
      stage: "speed",
      level: 1,
      type: "speed",
      prompt: "$x^3 + 1$ = ?",
      options: [
        "$(x + 1)(x^2 - x + 1)$",
        "$(x + 1)(x^2 + x + 1)$",
        "$(x + 1)^3$",
        "$(x - 1)(x^2 + x + 1)$"
      ],
      correctIndex: 0,
      explanation: "$x^3 + 1 = (x+1)(x^2-x+1)$."
    },
    {
      id: "sp_06",
      identityId: 7,
      stage: "speed",
      level: 1,
      type: "speed",
      prompt: "$x^3 - 1$ = ?",
      options: [
        "$(x - 1)(x^2 + x + 1)$",
        "$(x - 1)(x^2 - x + 1)$",
        "$(x - 1)^3$",
        "$(x + 1)(x^2 - x + 1)$"
      ],
      correctIndex: 0,
      explanation: "$x^3 - 1 = (x-1)(x^2+x+1)$."
    },
    {
      id: "sp_07",
      identityId: 1,
      stage: "speed",
      level: 1,
      type: "speed",
      prompt: "$(2x)^2$ bằng bao nhiêu?",
      options: ["$4x^2$", "$2x^2$", "$4x$", "$2x$"],
      correctIndex: 0,
      explanation: "$(2x)^2 = 4x^2$."
    },
    {
      id: "sp_08",
      identityId: 2,
      stage: "speed",
      level: 1,
      type: "speed",
      prompt: "$x^2 - 4x + 4$ = ?",
      options: ["$(x - 2)^2$", "$(x + 2)^2$", "$x^2 - 4$", "$(x - 4)^2$"],
      correctIndex: 0,
      explanation: "$x^2 - 4x + 4 = (x-2)^2$."
    },
    {
      id: "sp_09",
      identityId: 3,
      stage: "speed",
      level: 1,
      type: "speed",
      prompt: "$4x^2 - 1$ = ?",
      options: ["$(2x - 1)(2x + 1)$", "$(4x - 1)(4x + 1)$", "$(2x - 1)^2$", "$4(x^2 - 1)$"],
      correctIndex: 0,
      explanation: "$(2x)^2 - 1^2 = (2x-1)(2x+1)$."
    },
    {
      id: "sp_10",
      identityId: 1,
      stage: "speed",
      level: 1,
      type: "speed",
      prompt: "$(x + 10)^2$ = ?",
      options: ["$x^2 + 20x + 100$", "$x^2 + 100$", "$x^2 + 10x + 100$", "$x^2 + 20x + 20$"],
      correctIndex: 0,
      explanation: "$x^2 + 2(10)x + 10^2 = x^2 + 20x + 100$."
    },
    {
      id: "sp_11",
      identityId: 2,
      stage: "speed",
      level: 1,
      type: "speed",
      prompt: "$(x - 6)^2$ = ?",
      options: ["$x^2 - 12x + 36$", "$x^2 - 36$", "$x^2 - 6x + 36$", "$x^2 - 12x - 36$"],
      correctIndex: 0,
      explanation: "$x^2 - 2(6)x + 6^2 = x^2 - 12x + 36$."
    },
    {
      id: "sp_12",
      identityId: 3,
      stage: "speed",
      level: 1,
      type: "speed",
      prompt: "$100 - x^2$ = ?",
      options: ["$(10 - x)(10 + x)$", "$(10 - x)^2$", "$(x - 10)(x + 10)$", "$(100 - x)(100 + x)$"],
      correctIndex: 0,
      explanation: "$10^2 - x^2 = (10-x)(10+x)$."
    },
    {
      id: "sp_13",
      identityId: 4,
      stage: "speed",
      level: 2,
      type: "speed",
      prompt: "$(x + 1)^3$ = ?",
      options: [
        "$x^3 + 3x^2 + 3x + 1$",
        "$x^3 + 1$",
        "$x^3 + 3x + 1$",
        "$x^3 + x^2 + x + 1$"
      ],
      correctIndex: 0,
      explanation: "$(x+1)^3 = x^3 + 3x^2 + 3x + 1$."
    },
    {
      id: "sp_14",
      identityId: 5,
      stage: "speed",
      level: 2,
      type: "speed",
      prompt: "$(x - 1)^3$ = ?",
      options: [
        "$x^3 - 3x^2 + 3x - 1$",
        "$x^3 - 1$",
        "$x^3 - 3x^2 - 3x - 1$",
        "$x^3 + 3x^2 - 3x + 1$"
      ],
      correctIndex: 0,
      explanation: "$(x-1)^3 = x^3 - 3x^2 + 3x - 1$."
    },
    {
      id: "sp_15",
      identityId: 6,
      stage: "speed",
      level: 2,
      type: "speed",
      prompt: "$(x + 2)(x^2 - 2x + 4)$ = ?",
      options: ["$x^3 + 8$", "$x^3 - 8$", "$(x + 2)^3$", "$x^3 + 16$"],
      correctIndex: 0,
      explanation: "$x^3 + 2^3 = x^3 + 8$."
    },
    {
      id: "sp_16",
      identityId: 7,
      stage: "speed",
      level: 2,
      type: "speed",
      prompt: "$(x - 2)(x^2 + 2x + 4)$ = ?",
      options: ["$x^3 - 8$", "$x^3 + 8$", "$(x - 2)^3$", "$x^3 - 16$"],
      correctIndex: 0,
      explanation: "$x^3 - 2^3 = x^3 - 8$."
    },
    {
      id: "sp_17",
      identityId: 1,
      stage: "speed",
      level: 1,
      type: "speed",
      prompt: "Hệ số ở giữa của $(x + 7)^2$ là bao nhiêu?",
      options: ["$+14$", "$+7$", "$+49$", "$+28$"],
      correctIndex: 0,
      explanation: "$2 \\cdot x \\cdot 7 = 14x$, hệ số là $+14$."
    },
    {
      id: "sp_18",
      identityId: 2,
      stage: "speed",
      level: 1,
      type: "speed",
      prompt: "Hệ số ở giữa của $(x - 8)^2$ là bao nhiêu?",
      options: ["$-16$", "$-8$", "$+16$", "$-64$"],
      correctIndex: 0,
      explanation: "$-2 \\cdot x \\cdot 8 = -16x$, hệ số là $-16$."
    },
    {
      id: "sp_19",
      identityId: 3,
      stage: "speed",
      level: 1,
      type: "speed",
      prompt: "$x^2 - 1$ = ?",
      options: ["$(x - 1)(x + 1)$", "$(x - 1)^2$", "$(x + 1)^2$", "$x^2 - 2$"],
      correctIndex: 0,
      explanation: "$x^2 - 1^2 = (x-1)(x+1)$."
    },
    {
      id: "sp_20",
      identityId: 1,
      stage: "speed",
      level: 1,
      type: "speed",
      prompt: "$x^2 + 8x + 16$ = ?",
      options: ["$(x + 4)^2$", "$(x - 4)^2$", "$(x + 8)^2$", "$x^2 + 4^2$"],
      correctIndex: 0,
      explanation: "$x^2 + 8x + 16 = (x+4)^2$."
    },

    // -----------------------------------------------------------------------
    // BỔ SUNG CÂU HỎI GHÉP CẶP & LUYỆN TẬP BẢNG MŨ (DẠNG 10, DẠNG 11)
    // -----------------------------------------------------------------------
    {
      id: "extra_01",
      identityId: 1,
      stage: 1,
      level: 2,
      type: "expand",
      prompt: "Khai triển biểu thức $(y + 9)^2$ bằng:",
      options: [
        "$y^2 + 18y + 81$",
        "$y^2 + 9y + 81$",
        "$y^2 + 81$",
        "$y^2 + 18y + 18$"
      ],
      correctIndex: 0,
      explanation: "$y^2 + 2(9)y + 9^2 = y^2 + 18y + 81$."
    },
    {
      id: "extra_02",
      identityId: 2,
      stage: 2,
      level: 2,
      type: "expand",
      prompt: "Khai triển $(2 - x)^2$ ta được:",
      options: [
        "$4 - 4x + x^2$",
        "$4 - 2x + x^2$",
        "$4 - x^2$",
        "$4 + 4x + x^2$"
      ],
      correctIndex: 0,
      explanation: "$2^2 - 2(2)x + x^2 = 4 - 4x + x^2$."
    },
    {
      id: "extra_03",
      identityId: 3,
      stage: 3,
      level: 2,
      type: "factor",
      prompt: "Phân tích đa thức $36 - x^2$ thành nhân tử:",
      options: [
        "$(6 - x)(6 + x)$",
        "$(x - 6)(x + 6)$",
        "$(6 - x)^2$",
        "$(36 - x)(36 + x)$"
      ],
      correctIndex: 0,
      explanation: "$6^2 - x^2 = (6 - x)(6 + x)$."
    },
    {
      id: "extra_04",
      identityId: 4,
      stage: 4,
      level: 2,
      type: "expand",
      prompt: "Biểu thức $(x + 4)^3$ có hệ số của $x^2$ là bao nhiêu?",
      options: ["$12$", "$4$", "$16$", "$48$"],
      correctIndex: 0,
      explanation: "$3(x^2)(4) = 12x^2$, hệ số là 12."
    },
    {
      id: "extra_05",
      identityId: 5,
      stage: 5,
      level: 2,
      type: "expand",
      prompt: "Biểu thức $(x - 5)^3$ có số hạng tự do (không chứa x) là:",
      options: ["$-125$", "$+125$", "$-25$", "$+25$"],
      correctIndex: 0,
      explanation: "$(-5)^3 = -125$."
    },
    {
      id: "extra_06",
      identityId: 6,
      stage: 6,
      level: 2,
      type: "factor",
      prompt: "Phân tích $x^3 + 125$ thành nhân tử:",
      options: [
        "$(x + 5)(x^2 - 5x + 25)$",
        "$(x + 5)(x^2 + 5x + 25)$",
        "$(x + 5)(x^2 - 10x + 25)$",
        "$(x - 5)(x^2 + 5x + 25)$"
      ],
      correctIndex: 0,
      explanation: "$x^3 + 5^3 = (x + 5)(x^2 - 5x + 25)$."
    },
    {
      id: "extra_07",
      identityId: 7,
      stage: 7,
      level: 2,
      type: "factor",
      prompt: "Phân tích $x^3 - 125$ thành nhân tử:",
      options: [
        "$(x - 5)(x^2 + 5x + 25)$",
        "$(x - 5)(x^2 - 5x + 25)$",
        "$(x + 5)(x^2 - 5x + 25)$",
        "$(x - 5)(x^2 + 10x + 25)$"
      ],
      correctIndex: 0,
      explanation: "$x^3 - 5^3 = (x - 5)(x^2 + 5x + 25)$."
    },
    {
      id: "extra_08",
      identityId: 1,
      stage: 1,
      level: 3,
      type: "factor_advanced",
      prompt: "Tìm $x > 0$ biết $x^2 + 4x + 4 = 25$:",
      options: ["$x = 3$", "$x = 5$", "$x = 7$", "$x = 2$"],
      correctIndex: 0,
      explanation: "$(x+2)^2 = 25 = 5^2 \\Rightarrow x + 2 = 5 \\Rightarrow x = 3$."
    },
    {
      id: "extra_09",
      identityId: 2,
      stage: 2,
      level: 3,
      type: "factor_advanced",
      prompt: "Tìm $x > 0$ biết $x^2 - 6x + 9 = 16$:",
      options: ["$x = 7$", "$x = 4$", "$x = 1$", "$x = 9$"],
      correctIndex: 0,
      explanation: "$(x-3)^2 = 16 = 4^2 \\Rightarrow x - 3 = 4 \\Rightarrow x = 7$."
    },
    {
      id: "extra_10",
      identityId: 3,
      stage: 3,
      level: 3,
      type: "fast_reflex",
      prompt: "Tính nhanh: $75^2 - 25^2 = (75 - 25)(75 + 25) =$ ?",
      options: ["$5000$", "$500$", "$2500$", "$10000$"],
      correctIndex: 0,
      explanation: "$50 \\times 100 = 5000$."
    }
  ],

  // Danh sách các cặp ghép (cho mini-game Ghép Cặp)
  matchPairs: [
    { left: "$(A + B)^2$", right: "$A^2 + 2AB + B^2$" },
    { left: "$(A - B)^2$", right: "$A^2 - 2AB + B^2$" },
    { left: "$A^2 - B^2$", right: "$(A - B)(A + B)$" },
    { left: "$(A + B)^3$", right: "$A^3 + 3A^2B + 3AB^2 + B^3$" },
    { left: "$(A - B)^3$", right: "$A^3 - 3A^2B + 3AB^2 - B^3$" },
    { left: "$A^3 + B^3$", right: "$(A + B)(A^2 - AB + B^2)$" },
    { left: "$A^3 - B^3$", right: "$(A - B)(A^2 + AB + B^2)$" }
  ],

  // Hệ thống danh hiệu / huy hiệu
  badges: [
    { minPercent: 91, name: "BẬC THẦY 7 HẰNG ĐẲNG THỨC 👑", icon: "👑", desc: "Xuất sắc tuyệt đối! Bạn đã làm chủ hoàn toàn 7 hằng đẳng thức!", color: "#f59e0b" },
    { minPercent: 76, name: "Cao Thủ Hằng Đẳng Thức 🏆", icon: "🏆", desc: "Rất cừ khôi! Phản xạ nhanh và gần như không dính bẫy!", color: "#3b82f6" },
    { minPercent: 61, name: "Chiến Binh Hằng Đẳng Thức ⚔️", icon: "⚔️", desc: "Nắm vững hầu hết các công thức và khai triển chuẩn xác!", color: "#10b981" },
    { minPercent: 41, name: "Nhớ Được Kha Khá 🌟", icon: "🌟", desc: "Đã nhớ được các công thức cơ bản, luyện thêm một chút sẽ thành cao thủ!", color: "#8b5cf6" },
    { minPercent: 0,  name: "Đang Làm Quen 🌱", icon: "🌱", desc: "Khởi đầu rất tốt! Hãy xem lại 'Mẹo Nhớ 30s' và thử lại để bứt phá nhé!", color: "#64748b" }
  ]
};

// Đảm bảo có thể truy cập qua window object
if (typeof window !== "undefined") {
  window.MATH_DATA = MATH_DATA;
}
