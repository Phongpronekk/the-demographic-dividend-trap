function PictureScene({ scene }) {
  return (
    <div className="scene-content picture-scene">
      <img src={scene.src} alt="" className="main-image" />
    </div>
  );
}

export default PictureScene;
