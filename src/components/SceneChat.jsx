import { useState } from "react";

const questions = [
  {
    id: 1,
    text: "Bạn có đóng BHXH tự nguyện không?",
    answer: "Không, vì chạy xe thu nhập lúc có lúc không, đóng thêm thì khó xoay."
  },
  {
    id: 2,
    text: "Thu nhập chạy xe so với lương kỹ sư thế nào?",
    answer: "Chạy xe có tháng được 15-20 triệu, hơn lương kỹ sư mới ra trường."
  },
  {
    id: 3,
    text: "Bạn có nghĩ đến tương lai không?",
    answer: "Cũng có nghĩ... nhưng giờ phải lo trước mắt đã."
  }
];

export default function ChatScene() {
  const [messages, setMessages] = useState([]);

  const handleClick = (q) => {
    // thêm câu hỏi
    setMessages((prev) => [...prev, { type: "user", text: q.text }]);

    // delay giả lập typing
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: q.answer }
      ]);
    }, 800);
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.type === "user" ? "msg user" : "msg bot"}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="question-list">
        {questions.map((q) => (
          <button key={q.id} onClick={() => handleClick(q)}>
            {q.text}
          </button>
        ))}
      </div>
    </div>
  );
}