import { useState } from "react";

function StatsScene({ scene }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [positions, setPositions] = useState([]);

  const handleClick = () => {
    setVisibleCount(1);

    // Vùng trung tâm cho phép xuất hiện (tránh mép ngoài màn hình)
    const zone = { minTop: 22, maxTop: 78, minLeft: 15, maxLeft: 85 };
    const minDistance = 20; // khoảng cách tối thiểu (%) giữa các ô, hạn chế đè quá kín

    const generatePositions = (count) => {
      const points = [];
      let attempts = 0;

      while (points.length < count && attempts < 300) {
        attempts++;
        const candidate = {
          top: Math.random() * (zone.maxTop - zone.minTop) + zone.minTop,
          left: Math.random() * (zone.maxLeft - zone.minLeft) + zone.minLeft,
        };

        const isFarEnough = points.every((p) => {
          const dx = p.left - candidate.left;
          const dy = p.top - candidate.top;
          return Math.sqrt(dx * dx + dy * dy) >= minDistance;
        });

        // Sau nhiều lần thử mà vẫn không đủ xa, chấp nhận luôn để tránh vòng lặp vô hạn
        if (isFarEnough || attempts > 250) {
          points.push(candidate);
        }
      }

      return points.map((p) => ({ top: `${p.top}%`, left: `${p.left}%` }));
    };

    setPositions(generatePositions(scene.stats.length - 1));

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
                  zIndex: 150 + index, //đè lên cả ô thu nhập
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
