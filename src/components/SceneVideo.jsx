function VideoScene({ scene }) {
  return (
    <div className="scene-content video-scene">
      <video
        className="main-video"
        src={scene.src}
        controls
        autoPlay
      />
    </div>
  );
}

export default VideoScene;
