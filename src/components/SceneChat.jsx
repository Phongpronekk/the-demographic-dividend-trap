import { useState } from "react";

function ChatScene({ scene }) {
  const [messages, setMessages] = useState([]);
  const [usedQuestions, setUsedQuestions] = useState([]);

  const handleQuestionClick = (q) => {
    if (usedQuestions.includes(q.id)) return;

    // them cau hoi
    setUsedQuestions((prev) => [...prev, q.id]);
    setMessages((prev) => [...prev, { from: "user", text: q.text }]);

    // thêm trạng thái đang nhập
    setMessages((prev) => [...prev, { from: "typing", text: "Đang nhập..." }]);

    setTimeout(() => {
      setMessages((prev) => {
        // xoá typing
        const filtered = prev.filter((msg) => msg.from !== "typing");

        return [...filtered, { from: "bot", text: q.answer }];
      });
    }, 1000);
  };

  return (
    <div className="scene-content">

      <div className="scene-header">
        {scene.subtitle && (
          <div className="chat-subtitle">
            {scene.subtitle}
          </div>
        )}
      </div>

      <div className="chat-box">
        <div className="chat-header">
          <div className="chat-header-left">
            <div className="avatar"></div>
            <div>
              <div className="chat-name">{scene.character}</div>
              <div className="chat-desc">{scene.role}</div>
            </div>
          </div>
        </div>

        <div className="chat-body">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={
                msg.from === "user"
                  ? "msg user-msg"
                  : msg.from === "typing"
                  ? "msg typing-msg"
                  : "msg bot-msg"
              }
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="quick-questions">
          {scene.questions.map((q) => (
            <button
              key={q.id}
              onClick={() => handleQuestionClick(q)}
              disabled={usedQuestions.includes(q.id)}
            >
              {q.text}
            </button>
          ))}
        </div>

        <div className="fake-chat-input">
          <input
            type="text"
            placeholder="Nhập câu hỏi của bạn..."
            disabled
          />
          <button disabled>Gửi</button>
        </div>

      </div>
    </div>
  );
}

export default ChatScene;
