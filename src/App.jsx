import { useEffect, useState } from "react";
import { storyData } from "./data/storyData";
import "./App.css";
import GlobeScene from "./components/GlobeScene";
import CoverScene from "./components/SceneIntro";
import StatsScene from "./components/SceneStats";
import ChatScene from "./components/SceneChat";
import DriverSimScene from "./components/SceneDriverSim";
import AlgorithmTrapScene from "./components/SceneAlgorithmTrap";
import TimelineScene from "./components/SceneTimeline";
import CompareScene from "./components/SceneSliderCompare";
import CalculatorScene from "./components/SceneCalculator";
import VideoScene from "./components/SceneVideo";
import PictureScene from "./components/ScenePicture";
import DonutScene from "./components/SceneDonut";
import { PrevArrow, NextArrow } from "./components/NavArrows";

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
        <PrevArrow scene={scene} setCurrent={setCurrent} />
      )}

      <div className="scene-wrapper">{renderScene()}</div>

      {current === "intro_title" && (
        <div className="keyboard-hint">
          Dùng dấu mũi tên ← → để điều hướng
        </div>
      )}

      {scene.next && scene.type !== "choices" && (
        <NextArrow scene={scene} setCurrent={setCurrent} />
      )}
    </div>
  );
}