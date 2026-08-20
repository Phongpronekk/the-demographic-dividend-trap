function CoverScene({ scene }) {
  const isIntroTitle = scene.id === "intro_title";

  <h1 className={isIntroTitle ? "title intro-title" : "title"}>
    {scene.title}
  </h1>

  {scene.subtitle && (
    <p className={isIntroTitle ? "subtitle intro-subtitle" : "subtitle"}>
      {scene.subtitle}
    </p>
  )}

  const isIntroSapo = scene.id === "intro_sapo";

  return (
    <div className="scene-content">

      <div className={isIntroSapo ? "intro-sapo-box" : "text-box"}>

        {scene.chapter && <p className="chapter">{scene.chapter}</p>}

        {!isIntroSapo && (
          <h1 className="title">{scene.title}</h1>
        )}

        {scene.subtitle && !isIntroSapo && (
          <p className="subtitle">{scene.subtitle}</p>
        )}

        {scene.text && (
          <p className={isIntroSapo ? "intro-sapo-text" : "text"}>
            {scene.text}
          </p>
        )}

      </div>
    </div>
  );
}

export default CoverScene;
