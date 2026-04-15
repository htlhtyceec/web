const questions = [
    {
        question: "Câu 1: Công thức tính diện tích hình tròn có bán kính r là gì?",
        options: ["A. r × 2 × 3,14", "B. r × r × 3,14", "C. r × 3,14", "D. r × r"],
        answer: 1
    },
    {
        question: "Câu 2: Muốn tính diện tích toàn phần của hình lập phương có cạnh a, ta dùng công thức nào?",
        options: ["A. a × a × 4", "B. a × a × 6", "C. a × 4", "D. a × 6"],
        answer: 1
    },
    {
        question: "Câu 3: Gọi a, b là độ dài hai đáy, h là chiều cao hình thang. Công thức tính diện tích hình thang là:",
        options: ["A. (a + b) × h", "B. (a + b) × h : 2", "C. a × b × h : 2", "D. (a + b) : 2"],
        answer: 1
    },
    {
        question: "Câu 4: Nếu biết \"trung bình cộng hai đáy\" của hình thang và chiều cao, diện tích hình thang được tính bằng phép toán nào?",
        options: ["A. Trung bình cộng hai đáy × Chiều cao", "B. Trung bình cộng hai đáy × Chiều cao : 2", "C. Trung bình cộng hai đáy + Chiều cao", "D. Trung bình cộng hai đáy : Chiều cao"],
        answer: 0
    },
    {
        question: "Câu 5: Nửa chu vi của hình chữ nhật cho ta biết thông tin gì về các cạnh?",
        options: ["A. Tích của chiều dài và chiều rộng.", "B. Tổng của chiều dài và chiều rộng.", "C. Hiệu của chiều dài và chiều rộng.", "D. Thương của chiều dài và chiều rộng."],
        answer: 1
    },
    {
        question: "Câu 6: Muốn tính thể tích hình hộp chữ nhật có chiều dài a, chiều rộng b và chiều cao c (cùng đơn vị đo), công thức đúng là:",
        options: ["A. (a + b) × c", "B. (a + b) × 2 × c", "C. a × b × c", "D. (a × b) × 2 × c"],
        answer: 2
    },
    {
        question: "Câu 7: Muốn tìm tỉ số phần trăm của hai số a và b, ta làm theo các bước nào dưới đây?",
        options: [
            "A. Tìm thương của a : b, sau đó nhân thương đó với 100 rồi viết thêm kí hiệu % vào bên phải.",
            "B. Lấy a chia cho b, rồi viết thêm kí hiệu % vào bên phải.",
            "C. Lấy a nhân với b, rồi chia cho 100.",
            "D. Lấy a cộng b rồi chia cho 100."
        ],
        answer: 0
    },
    {
        question: "Câu 8: Để tìm 30% của tổng số 1000 người, ta thực hiện phép tính nào?",
        options: ["A. 1000 : 30", "B. 1000 × 30", "C. 1000 × 30 : 100", "D. 1000 : 30 × 100"],
        answer: 2
    },
    {
        question: "Câu 9: Nếu một bể cá đang chứa lượng nước bằng 70% thể tích bể, lượng nước cần đổ thêm để đầy bể chiếm bao nhiêu phần trăm thể tích bể?",
        options: ["A. 100%", "B. 70%", "C. 30%", "D. 10%"],
        answer: 2
    },
    {
        question: "Câu 10: Khi đặt tính cộng hoặc trừ hai số thập phân, điều kiện quan trọng nhất để kết quả không bị sai là gì?",
        options: [
            "A. Các chữ số tận cùng phải thẳng cột với nhau.",
            "B. Dấu phẩy của các số phải thẳng cột với nhau.",
            "C. Số có nhiều chữ số hơn nằm ở trên.",
            "D. Không cần quan tâm đến dấu phẩy."
        ],
        answer: 1
    },
    {
        question: "Câu 11: Trong phép nhân hai số thập phân, nếu tổng số chữ số ở phần thập phân của cả hai thừa số là 3, thì ở kết quả chung ta đặt dấu phẩy như thế nào?",
        options: [
            "A. Dùng dấu phẩy tách ở tích ra 3 chữ số kể từ trái sang phải.",
            "B. Dùng dấu phẩy tách ở tích ra 3 chữ số kể từ phải sang trái.",
            "C. Đặt dấu phẩy thẳng cột với thừa số thứ nhất.",
            "D. Đặt dấu phẩy ở tận cùng bên phải tích."
        ],
        answer: 1
    },
    {
        question: "Câu 12: Khi chia một số thập phân cho một số tự nhiên, ta đặt dấu phẩy vào thương khi nào?",
        options: [
            "A. Ngay khi bắt đầu phép chia.",
            "B. Khi chia xong phần nguyên của số bị chia.",
            "C. Khi kết thúc phép chia.",
            "D. Khi hạ chữ số đầu tiên của phần nguyên."
        ],
        answer: 1
    },
    {
        question: "Câu 13: Để tìm thời gian trung bình làm 1 câu hỏi khi biết tổng thời gian làm bài và tổng số câu, ta thực hiện phép tính:",
        options: ["A. Tổng thời gian × Tổng số câu", "B. Tổng số câu : Tổng thời gian", "C. Tổng thời gian : Tổng số câu", "D. Tổng thời gian - Tổng số câu"],
        answer: 2
    },
    {
        question: "Câu 14: Khi chia số đo thời gian cho một số tự nhiên, nếu phần dư của đơn vị lớn lớn hơn 0, ta phải làm gì?",
        options: [
            "A. Bỏ qua phần dư và chia tiếp đơn vị nhỏ.",
            "B. Đổi phần dư đó ra đơn vị nhỏ hơn liền kề, cộng gộp với số đơn vị nhỏ rồi chia tiếp.",
            "C. Dừng lại và kết luận phép chia có dư.",
            "D. Thêm chữ số 0 vào phần dư rồi chia tiếp."
        ],
        answer: 1
    },
    {
        question: "Câu 15: Để tính nhanh biểu thức 9,65 × 0,4 × 2,5, ta áp dụng tính chất nào của phép nhân?",
        options: ["A. Tính chất giao hoán.", "B. Tính chất kết hợp.", "C. Tính phân phối của phép nhân đối với phép cộng.", "D. Cả tính chất giao hoán và tính chất kết hợp."],
        answer: 1
    },
    {
        question: "Câu 16: Quy luật tách phân số 1/(2 × 3) thành phép tính giữa hai phân số cơ bản là:",
        options: ["A. 1/2 + 1/3", "B. 1/2 - 1/3", "C. 1/2 × 1/3", "D. 1/3 - 1/2"],
        answer: 1
    },
    {
        question: "Câu 17: Trong bảng đơn vị đo thể tích, hai đơn vị liền kề nhau (ví dụ m³ và dm³) hơn kém nhau bao nhiêu lần?",
        options: ["A. 10 lần", "B. 100 lần", "C. 1000 lần", "D. 10000 lần"],
        answer: 2
    },
    {
        question: "Câu 18: Đơn vị đề-xi-mét khối (dm³) có mối liên hệ như thế nào với đơn vị đo dung tích (lít)?",
        options: ["A. 1 dm³ = 10 lít", "B. 1 dm³ = 1 lít", "C. 1 dm³ = 100 lít", "D. 1 dm³ = 0,1 lít"],
        answer: 1
    },
    {
        question: "Câu 19: Khi giải bài toán dạng \"Tìm hai số khi biết Hiệu và Tỉ số\", bước giải đầu tiên ta thường áp dụng là gì?",
        options: [
            "A. Tìm tổng số phần bằng nhau.",
            "B. Lấy hiệu chia cho tỉ số.",
            "C. Tìm hiệu số phần bằng nhau.",
            "D. Tìm giá trị 1 phần."
        ],
        answer: 2
    },
    {
        question: "Câu 20: Khi giải bài toán dạng \"Tìm hai số khi biết Tổng và Tỉ số\", bước giải đầu tiên ta cần làm là gì?",
        options: ["A. Tìm giá trị 1 phần.", "B. Tìm tổng số phần bằng nhau.", "C. Tìm hiệu số phần bằng nhau.", "D. Lấy tổng chia cho tỉ số."],
        answer: 1
    }
];
