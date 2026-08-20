import { useState } from "react";

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
      
      <h1 className="driver-sim-scene-title">
        {scene.title}
      </h1>

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

export default DriverSimScene;
