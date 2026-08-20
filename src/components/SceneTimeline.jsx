import { useEffect, useState } from "react";

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

export default TimelineScene;
