import { useState } from "react";

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

export default DonutScene;
