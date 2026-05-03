import { useEffect, useMemo, useState } from "react";
import { storyData } from "./data/storyData";
import "./App.css";
import GlobeScene from "./components/GlobeScene";

function CoverScene({ scene }) {
  const isIntroTitle = scene.id === "intro_title";

  <h1 className={isIntroTitle ? "title intro-title" : "title"}>
    {scene.title}
  </h1>

  {scene.subtitle && (
    <p className={isIntroTitle ? "subtitle intro-subtitle" : "subtitle"}>
      {scene.subtitle}
    </p>
  )}

  const isIntroSapo = scene.id === "intro_sapo";

  return (
    <div className="scene-content">

      <div className={isIntroSapo ? "intro-sapo-box" : "text-box"}>

        {scene.chapter && <p className="chapter">{scene.chapter}</p>}

        {!isIntroSapo && (
          <h1 className="title">{scene.title}</h1>
        )}

        {scene.subtitle && !isIntroSapo && (
          <p className="subtitle">{scene.subtitle}</p>
        )}

        {scene.text && (
          <p className={isIntroSapo ? "intro-sapo-text" : "text"}>
            {scene.text}
          </p>
        )}

      </div>
    </div>
  );
}

function StatsScene({ scene }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [positions, setPositions] = useState([]);

  const handleClick = () => {
    setVisibleCount(1);

    // chia 3 vùng cố định (không đè nhau)
    const zones = [
      { top: "20%", left: "25%" }, // trái trên
      { top: "20%", left: "75%" }, // phải trên
      { top: "70%", left: "50%" }, // dưới
    ];

    // shuffle để vẫn có random
    const shuffled = zones.sort(() => Math.random() - 0.5);

    setPositions(shuffled);

    setTimeout(() => {
      scene.stats.slice(1).forEach((_, i) => {
        setTimeout(() => {
          setVisibleCount((prev) => prev + 1);
        }, i * 400);
      });
    }, 300);
  };

  const mainStat = scene.stats[0];
  const otherStats = scene.stats.slice(1);

  return (
    <div className="scene-content income-scene">
      <div className="income-main-card" onClick={handleClick}>
        <div className="stat-label">{mainStat.label}</div>
        <div className="stat-value">{mainStat.value}</div>
      </div>

      <div className="income-stats-orbit">
        {otherStats.map((item, index) => {
          if (index + 1 < visibleCount) {
            return (
              <div
                key={item.label}
                className="income-stat-card dim"
                style={{
                  top: positions[index]?.top,
                  left: positions[index]?.left,
                  zIndex: 20 + index, //đè lên cả ô thu nhập
                }}
              >
                <div className="stat-label">{item.label}</div>
                <div className="stat-value">{item.value}</div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

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
      <h1>{scene.title}</h1>

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

function DriverSimScene({ scene }) {
  const [hours, setHours] = useState(14);
  const [gender, setGender] = useState("male");

  let income = 0;
  let health = 0;
  let warningText = "";

  if (hours <= 8) {
    income = 5750000;
    health = 20;
    warningText = "Thời gian làm việc tiêu chuẩn. Mức thu nhập thực tế tương đương chuẩn cận nghèo đô thị.";
  } else if (hours === 10) {
    income = 7750000;
    health = 50;
    warningText = "Vượt thời gian lao động tiêu chuẩn. Bắt đầu suy giảm thời gian nghỉ ngơi và tái tạo sức lao động.";
  } else if (hours === 12) {
    income = 10000000;
    health = 80;
    warningText = "Cường độ làm việc cao. Gia tăng rủi ro tai nạn giao thông và các bệnh lý liên quan đến hệ xương khớp.";
  } else {
    income = 12000000;
    health = 100;
    warningText = "Cường độ rủi ro rất cao. Tỷ lệ mắc bệnh lý nghiêm trọng tăng, chi phí can thiệp y tế có thể vượt mức thu nhập tăng thêm.";
  }

  const months = 120;
  const platformContribution = income * 0.215 * months;
  const voluntaryBHXH = 297000 * months;
  const maternityBenefit = gender === "female" ? income * 6 : 0;
  const totalBHXHGap = platformContribution + voluntaryBHXH + maternityBenefit;

  const formatMoney = (value) =>
    value.toLocaleString("vi-VN") + " VNĐ";

  return (
    <div className="scene-content">
      <h1>{scene.title}</h1>
      <p className="scene-text">{scene.text}</p>

      <div className="driver-sim-card">
        <h3 className="driver-sim-title">Nếu bạn là tài xế công nghệ...</h3>

        <label className="driver-label">Nhóm lao động</label>
        <select
          className="driver-select"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Nam giới</option>
          <option value="female">Nữ giới</option>
        </select>

        <div className="driver-slider-row">
          <span>🏍️</span>
          <input
            type="range"
            min="8"
            max="14"
            step="2"
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
          />
          <span>👮</span>
        </div>

        <p className="driver-hours">⏱ {hours} giờ/ngày</p>

        <div className="driver-result">
          <span>💰 Thu nhập ròng ước tính / tháng</span>
          <strong>{formatMoney(income)}</strong>
        </div>

        <div className="driver-result">
          <span>💔 Tỷ lệ hao mòn sức khỏe sinh học</span>
          <strong className="danger-text">{health}%</strong>
        </div>

        <div className="driver-result">
          <span>🛡️ Khoảng trống BHXH trong 10 năm</span>
          <strong>{formatMoney(totalBHXHGap)}</strong>

          <p className="driver-breakdown">
            - Khoản đóng góp giả định từ nền tảng 21.5%:{" "}
            <b>{formatMoney(platformContribution)}</b><br />
            - Chi phí tự đóng BHXH tự nguyện tối thiểu:{" "}
            <b>{formatMoney(voluntaryBHXH)}</b>
            {gender === "female" && (
              <>
                <br />
                - Trợ cấp thai sản không được hưởng:{" "}
                <b>{formatMoney(maternityBenefit)}</b>
              </>
            )}
          </p>
        </div>

        <p className="driver-warning">⚠️ {warningText}</p>
      </div>
    </div>
  );
}

function AlgorithmTrapScene({ scene }) {
  const [view, setView] = useState("incoming");
  const [result, setResult] = useState({ title: "", desc: "" });
  const [videoSrc, setVideoSrc] = useState("");

  const playScenario = (type) => {
    if (type === "day") {
      setVideoSrc("/videos/POV Buổi sáng.mp4");
      setResult({
        title: "Thuê bao không liên lạc được",
        desc: "Khách gọi điện bị thuê bao, không thể giao được hàng. Hệ thống không tính là hoàn thành cuốc xe. Bạn đã đánh mất chuỗi thưởng 360.000đ.",
      });
    } else {
      setVideoSrc("/videos/POV Ban đêm.mp4");
      setResult({
        title: "Vi phạm quy chế nền tảng",
        desc: "Bạn nhận đơn hàng có thông tin không rõ ràng. Nền tảng ghi nhận vi phạm quy chế hoạt động. Trừ điểm tín nhiệm và hủy toàn bộ chuỗi thưởng.",
      });
    }

    setView("video");
  };

  return (
    <div className="algorithm-scene">
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

function TimelineScene({ scene }) {
  const [active, setActive] = useState(0);
  const [clickedAges, setClickedAges] = useState([]);
  const [typedText, setTypedText] = useState("");

  const finalText =
    "Ba giai đoạn liên kết thành một quỹ đạo xuyên suốt: Các lựa chọn ở giai đoạn đầu có tác động tích lũy theo thời gian, làm gia tăng rủi ro việc làm và an sinh trong các giai đoạn sau của vòng đời lao động.";

  useEffect(() => {
    if (clickedAges.length === 3) {
      setTypedText("");

      let i = 0;
      const timer = setInterval(() => {
        setTypedText(finalText.slice(0, i + 1));
        i++;

        if (i >= finalText.length) {
          clearInterval(timer);
        }
      }, 28);

      return () => clearInterval(timer);
    }
  }, [clickedAges.length]);

  return (
    <div className="scene-content">
      {scene.chapter && <p className="chapter">{scene.chapter}</p>}
      <h1>{scene.title}</h1>
      {scene.subtitle && <p className="timeline-subtitle">{scene.subtitle}</p>}

      <div className="timeline-tabs">
        {scene.timeline.map((item, index) => (
          <button
            key={item.age}
            className={
              active === index
                ? "tab active-tab clicked-tab"
                : clickedAges.includes(item.age)
                ? "tab clicked-tab"
                : "tab"
            }
            onClick={() => {
              setActive(index);

              setClickedAges((prev) => {
                if (prev.includes(item.age)) return prev;
                return [...prev, item.age];
              });
            }}
          >
            {item.age}
          </button>
        ))}
      </div>

      <div className="timeline-panel">
        <h3>{scene.timeline[active].heading}</h3>
        <p>{scene.timeline[active].text}</p>
      </div>

      {clickedAges.length === 3 && (
        <div className="timeline-final">
          {typedText}
          <span className="type-cursor">|</span>
        </div>
      )}
    </div>
  );
}

function CompareScene({ scene }) {
  const [showRight, setShowRight] = useState(false);

  return (
    <div className="scene-content">
      {scene.chapter && <p className="chapter">{scene.chapter}</p>}
      <h1>{scene.title}</h1>
      <p className="scene-text">{scene.text}</p>

      <div className="compare-box">
        <div className="compare-labels">
          <span>{scene.leftLabel}</span>
          <span>{scene.rightLabel}</span>
        </div>
        <button className="choice-btn" onClick={() => setShowRight(!showRight)}>
          {showRight ? "Xem Luật cũ" : "Xem Luật mới"}
        </button>
      </div>
    </div>
  );
}

function ChoicesScene({ scene, onChoose }) {
  return (
    <div className="scene-content">
      <h1>{scene.title}</h1>
      <p className="scene-text">{scene.text}</p>
      <div className="choice-group">
        {scene.choices.map((choice) => (
          <button
            key={choice.label}
            className="choice-btn"
            onClick={() => onChoose(choice.target)}
          >
            {choice.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function CalculatorScene({ scene }) {
  const [income, setIncome] = useState(12000000);
  const [years, setYears] = useState(10);

  const estimate = useMemo(() => {
    const monthly = Math.round(income * 0.105);
    const total = monthly * 12 * years;
    return { monthly, total };
  }, [income, years]);

  return (
    <div className="scene-content">
      <h1>{scene.title}</h1>
      <p className="scene-text">{scene.text}</p>

      <div className="calculator-box">
        <label>Thu nhập / tháng: {income.toLocaleString("vi-VN")} đ</label>
        <input
          type="range"
          min="3000000"
          max="30000000"
          step="500000"
          value={income}
          onChange={(e) => setIncome(Number(e.target.value))}
        />

        <label>Số năm đóng: {years} năm</label>
        <input
          type="range"
          min="1"
          max="35"
          step="1"
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
        />

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-label">Ước tính đóng / tháng</div>
            <div className="stat-value">
              {estimate.monthly.toLocaleString("vi-VN")} đ
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Tổng ước tính</div>
            <div className="stat-value">
              {estimate.total.toLocaleString("vi-VN")} đ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoScene({ scene }) {
  return (
    <div className="scene-content video-scene">
      <video
        className="main-video"
        src={scene.src}
        controls
        autoPlay
      />
    </div>
  );
}

function PictureScene({ scene }) {
  return (
    <div className="scene-content picture-scene">
      <img src={scene.src} alt="" className="main-image" />
    </div>
  );
}

function DonutScene({ scene }) {
  const [hovered, setHovered] = useState(null);

  const data = {
    platform: {
      label: "Công ty ứng dụng",
      value: "21.5%",
      desc: "Phần đóng góp của nền tảng",
    },
    worker: {
      label: "Người lao động",
      value: "10,5%",
      desc: "Phần đóng góp của người lao động",
    },
  };

  return (
    <div className="scene-content donut-scene">
      {scene.title && <h1 className="donut-title">{scene.title}</h1>}

      <div className="donut-card">
        <svg className="donut-svg" viewBox="0 0 100 100">
          {/* Platform 21.5% */}
          <path
            className="donut-segment"
            d="M 50 14 A 36 36 0 1 1 18.88 68"
            fill="none"
            stroke="#5C7CEF"
            strokeWidth="18"
            strokeLinecap="butt"
            onPointerEnter={() => setHovered("platform")}
            onPointerLeave={() => setHovered(null)}
          />

          {/* Worker 10.5% */}
          <path
            className="donut-segment"
            d="M 18.88 68 A 36 36 0 0 1 50 14"
            fill="none"
            stroke="#E2BC74"
            strokeWidth="18"
            strokeLinecap="butt"
            onPointerEnter={() => setHovered("worker")}
            onPointerLeave={() => setHovered(null)}
          />
        </svg>

        <div className="donut-center">
          <div>Tổng số 32%</div>
          <div>tổng thu nhập</div>
        </div>

        {hovered && (
          <div className={`donut-tooltip ${hovered}`}>
            <div>{data[hovered].label}</div>
            <strong>{data[hovered].value}</strong>
            <span>{data[hovered].desc}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [current, setCurrent] = useState("intro_title");
  const scene = storyData[current];

  const chapterScenes = {
    intro: ["intro_title", "intro_sapo"],
    act1: ["act1_cover", "act1_sapo", "act1_income_flip", "act1_stat", "act1_chat"],
    act2: ["act2_cover", "act2_interview", "act2_interview_2", "act2_stat", "act2_interview_3", "act2_timeline", "act2_bhxh", "act2_driver_sim"],
    act3: ["act3_cover", "act3_algorithm_trap", "act3_pressure", "act3_stat"],
    act4: ["act4_law_slider", "act4_sapo", "act4_donut", "act4_global"],
    act5: ["act5_future", "act5_solution"],
  };

  const getChapterKey = () => {
    if (current.startsWith("intro")) return "intro";
    if (current.startsWith("act1")) return "act1";
    if (current.startsWith("act2")) return "act2";
    if (current.startsWith("act3")) return "act3";
    if (current.startsWith("act4")) return "act4";
    if (current.startsWith("act5")) return "act5";

    return "intro";
  };

  const currentChapterKey = getChapterKey();
  const currentChapterScenes = chapterScenes[currentChapterKey];
  const currentChapterIndex = currentChapterScenes.indexOf(current);

  const chapterProgress =
    currentChapterScenes.length > 1
      ? (currentChapterIndex / (currentChapterScenes.length - 1)) * 100
      : 100;

  const getCurrentChapter = () => {
    if (current.startsWith("intro")) return "intro";
    if (current.startsWith("act1")) return "act1_cover";
    if (current.startsWith("act2")) return "act2_cover";
    if (current.startsWith("act3")) return "act3_cover";
    if (current.startsWith("act4")) return "act4_law_slider";
    if (current.startsWith("act5")) return "act5_future";
    return "intro";
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight" && scene.next) {
        e.preventDefault();
        document.activeElement?.blur();  // bỏ focus khỏi dropdown

        setCurrent(scene.next);
      }

      if (e.key === "ArrowLeft" && scene.prev) {
        e.preventDefault();
        document.activeElement?.blur();

        setCurrent(scene.prev);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [scene]);

  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.55)), url(${scene.bg || scene.bgLeft || ""})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const renderScene = () => {
    switch (scene.type) {
      case "cover":
        return <CoverScene scene={scene} />;
      case "stats":
        return <StatsScene scene={scene} />;
      case "chat":
        return <ChatScene scene={scene} />;
      case "timeline":
        return <TimelineScene scene={scene} />;
      case "compare":
        return <CompareScene scene={scene} />;
      case "choices":
        return <GlobeScene scene={scene} onChoose={setCurrent} />;
      case "calculator":
        return <CalculatorScene scene={scene} />;
      case "driverSim":
        return <DriverSimScene scene={scene} />;
      case "algorithmTrap":
        return <AlgorithmTrapScene scene={scene} />;
      case "video":
        return <VideoScene scene={scene} />;
      case "picture":
        return <PictureScene scene={scene} />;
      case "donut":
        return <DonutScene scene={scene} />;
      default:
        return <CoverScene scene={scene} />;
    }
  };

  const isVideoBg = scene.bg?.endsWith(".mp4");

  return (
    <div className="app">

    <div className="top-bar">
      <div className="top-bar-left">
        <span className="brand-mark">RR</span>
        <span className="top-title">Rút ruột dân số vàng</span>
      </div>

      <select
        className="chapter-select"
        value={getCurrentChapter()}
        onChange={(e) => setCurrent(e.target.value)}
      >
        <option value="intro_title">Mở đầu</option>
        <option value="act1_cover">Hồi 1: Cạm bẫy tự do</option>
        <option value="act2_cover">Hồi 2: Tuổi xế chiều chới với</option>
        <option value="act3_cover">Hồi 3: Thuật toán "vắt kiệt"</option>
        <option value="act4_law_slider">Hồi 4: Vá lỗ hổng pháp lý</option>
        <option value="act5_future">Hồi 5: Tương lai</option>
      </select>
    </div>

    <div className="chapter-timeline">
      <div className="chapter-timeline-label">
        {currentChapterKey === "intro"
          ? "Mở đầu"
          : `Hồi ${currentChapterKey.replace("act", "")}`}
      </div>

      <div className="chapter-timeline-track">
        <div
          className="chapter-timeline-fill"
          style={{ width: `${chapterProgress}%` }}
        ></div>
      </div>
    </div>

      {isVideoBg ? (
        <video
          key={current}
          className="bg-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={scene.bg} type="video/mp4" />
        </video>
      ) : (
        <div
          key={current}
          className="bg-image-layer"
          style={{ backgroundImage: `url(${scene.bg})` }}
        />
      )}

      <div className="bg-overlay"></div>

      {scene.prev && (
        <button className="nav-btn left-btn" onClick={() => setCurrent(scene.prev)}>
          ←
        </button>
      )}

      <div className="scene-wrapper">{renderScene()}</div>

      {current === "intro_title" && (
        <div className="keyboard-hint">
          Dùng dấu mũi tên ← → để điều hướng
        </div>
      )}

      {scene.next && scene.type !== "choices" && (
        <button className="nav-btn right-btn" onClick={() => setCurrent(scene.next)}>
          →
        </button>
      )}
    </div>
  );
}