import { useMemo, useState } from "react";

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

export default CalculatorScene;
