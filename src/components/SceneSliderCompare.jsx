import { useState } from "react";

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

export default CompareScene;
