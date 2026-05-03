import { useEffect, useState } from "react";
import Globe from "react-globe.gl";

const countries = [
  { label: "Singapore", lat: 1.3521, lng: 103.8198, target: "act4_singapore" },
  { label: "Trung Quốc", lat: 35.8617, lng: 104.1954, target: "act4_china" },
  { label: "EU", lat: 50, lng: 10, target: "act4_eu" },
];

export default function GlobeScene({ scene, onChoose }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => setReady(true), 100); // delay để tránh crash
  }, []);

  if (!ready) return <div style={{ color: "white" }}>Loading globe...</div>;

  return (
    <div className="scene-content globe-scene">
      <h1>{scene.title}</h1>
      <p className="scene-text">{scene.text}</p>

      <div className="globe-box">
        <Globe
          width={800}
          height={500}
          globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
          backgroundColor="rgba(0,0,0,0)"

          pointsData={countries}
          pointLat={(d) => d.lat}
          pointLng={(d) => d.lng}
          pointColor={() => "#ff2d55"}
          pointRadius={0.55}
          pointAltitude={0.08}

          pointLabel={(d) => `
               <div style="
                    background: rgba(0,0,0,0.8);
                    padding: 6px 10px;
                    border-radius: 6px;
                    color: white;
                    font-size: 13px;
               ">
               ${d.label}
               </div>
          `}

          onPointClick={(d) => onChoose(d.target)}
          />
      </div>
    </div>
  );
}