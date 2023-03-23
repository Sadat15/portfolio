import "bulma/css/bulma.css";

function Home() {
  return (
    <div className="container">
      <div className="column is-three-fifths is-offset-one-fifth">
        <div className="card is-shadowless">
          <div className="title is-1 has-text-centered">Sadat Manjur</div>
          <h2 className="has-text-centered is-size-3">
            Full Stack Software Developer
          </h2>
          <div className="card-image is-flex is-justify-content-center">
            <figure className="">
              <img
                className=""
                src="https://user-images.githubusercontent.com/72412305/170298791-0d9a31b3-3d12-4c0f-9687-3624d79f7764.gif"
                alt=""
              />
            </figure>
          </div>
          <div className="card-content is-size-5">
            I am a full-stack software developer with a passion for technology
            and problem-solving. With a background in finance, I bring a unique
            perspective to my work that combines analytical thinking with a
            creative approach to problem-solving. Throughout my career, I have
            developed a diverse skill set that allows me to tackle projects from
            different angles and deliver high-quality results.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
