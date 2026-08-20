function PrevArrow({ scene, setCurrent }) {
  return (
    <button className="nav-btn left-btn" onClick={() => setCurrent(scene.prev)}>
      ←
    </button>
  );
}

function NextArrow({ scene, setCurrent }) {
  return (
    <button className="nav-btn right-btn" onClick={() => setCurrent(scene.next)}>
      →
    </button>
  );
}

export { PrevArrow, NextArrow };
