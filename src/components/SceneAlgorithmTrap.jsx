import { useState } from "react";

function AlgorithmTrapScene({ scene }) {
  const [view, setView] = useState("incoming");
  const [result, setResult] = useState({ title: "", desc: "" });
  const [videoSrc, setVideoSrc] = useState("");

  const playScenario = (type) => {
    if (type === "day") {
      setVideoSrc("https://res.cloudinary.com/dizimfqyz/video/upload/v1777834836/POV_Bu%E1%BB%95i_s%C3%A1ng_g4vayb.mp4");
      setResult({
        title: "Thuê bao không liên lạc được",
        desc: "Khách gọi điện bị thuê bao, không thể giao được hàng. Hệ thống không tính là hoàn thành cuốc xe. Bạn đã đánh mất chuỗi thưởng 360.000đ.",
      });
    } else {
      setVideoSrc("https://res.cloudinary.com/dizimfqyz/video/upload/v1777835382/POV_Ban_%C4%91%C3%AAm_r03s7q.mp4");
      setResult({
        title: "Vi phạm quy chế nền tảng",
        desc: "Bạn nhận đơn hàng có thông tin không rõ ràng. Nền tảng ghi nhận vi phạm quy chế hoạt động. Trừ điểm tín nhiệm và hủy toàn bộ chuỗi thưởng.",
      });
    }

    setView("video");
  };

  return (
    <div className="algorithm-scene">

      <div className="algorithm-header">
        {scene.title && (
          <div className="scene-title">
            {scene.title}
          </div>
        )}

        {scene.subtitle && (
          <div className="algorithm-subtitle">
            {scene.subtitle}
          </div>
        )}
      </div>

      {view === "incoming" && (
        <div className="phone-frame">
          <div className="notch-speaker"></div>
          <div className="notch-camera"></div>
          <div className="incoming-card">
            <div className="algo-badge">🎯 Chuỗi thưởng trong ngày</div>
            <div className="algo-price">+ 360.000đ</div>
            <div className="algo-distance">
              Chỉ còn 1 cuốc cuối cùng để hoàn thành mốc thưởng!
            </div>
            <button className="btn-green" onClick={() => setView("choice")}>
              Nhận cuốc ngay
            </button>
          </div>
        </div>
      )}

      {view === "choice" && (
        <div className="phone-frame">
          <div className="notch-speaker"></div>
          <div className="notch-camera"></div>
          <div className="choice-text">
            Đang kết nối... Vui lòng xác nhận ca hoạt động:
          </div>
          <button
            className="btn-choice btn-day"
            onClick={() => playScenario("day")}
          >
            ☀️ Chạy Ban Ngày
          </button>

          <button
            className="btn-choice btn-night"
            onClick={() => playScenario("night")}
          >
            🌙 Chạy Ban Đêm
          </button>
        </div>
      )}

      {view === "video" && (
        <div className="pov-fullscreen">
          <video
            key={videoSrc}   // QUAN TRỌNG để đổi video không bị dính
            autoPlay
            muted
            playsInline
            controls
            className="pov-video"
            onEnded={() => setView("result")}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      )}

      {view === "result" && (
        <div className="phone-frame result-red">
          <div className="notch-speaker"></div>
          <div className="notch-camera"></div>
          <div className="icon-x">✕</div>
          <div className="result-title">{result.title}</div>
          <div className="result-desc">{result.desc}</div>
          <button className="btn-reset" onClick={() => setView("incoming")}>
            Trở lại màn hình chờ
          </button>
        </div>
      )}
    </div>
  );
}

export default AlgorithmTrapScene;
