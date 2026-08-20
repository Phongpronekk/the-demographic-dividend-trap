import { useState } from "react";

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

      <div className="scene-header">
        {scene.title && (
          <div className="scene-title">{scene.title}</div>
        )}

        {scene.subtitle && (
          <div className="scene-subtitle">{scene.subtitle}</div>
        )}
      </div>

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

export default StatsScene;
