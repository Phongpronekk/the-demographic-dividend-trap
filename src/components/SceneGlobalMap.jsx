function ChoicesScene({ scene, onChoose }) {
  return (
    <div className="scene-content">
      <h1>{scene.title}</h1>
      <p className="scene-text">{scene.text}</p>
      <div className="choice-group">
        {scene.choices.map((choice) => (
          <button
            key={choice.label}
            className="choice-btn"
            onClick={() => onChoose(choice.target)}
          >
            {choice.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ChoicesScene;
