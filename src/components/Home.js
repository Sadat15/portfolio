import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import hr from "../assets/curve-hr.svg";

export default function Home() {
  const [loaded, setLoaded] = useState(true);

  return (
    <>
      {loaded ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center">
          Loading...
        </div>
      ) : null}
      <div
        id="home"
        className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative"
      >
        <div className="md:w-3/6 md:p-4 flex justify-center">
          <img
            data-aos="flip-right"
            data-aos-duration="1500"
            data-aos-offset="200"
            src="https://user-images.githubusercontent.com/72412305/170298791-0d9a31b3-3d12-4c0f-9687-3624d79f7764.gif"
            alt="gif"
            onLoad={() => setLoaded(false)}
          />
        </div>
        <div
          className="md:w-3/6"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="100"
        >
          <div className="flex flex-col w-full mt-8">
            <h1 className="text-xl text-gray-400">Hi, I'm</h1>
            <h1 className="text-2xl font-bold">Sadat</h1>
            <p class="text-xl font-bold text-gray-300">Full Stack Developer</p>
            <p className="text-md font-light text-gray-400 ">
              I'm a Full Stack Software Developer with a passion for technology
              and problem-solving. With a background in finance, I bring a
              unique perspective to my work that combines analytical thinking
              with a creative approach to problem-solving. Throughout my career,
              I have developed a diverse skill set that allows me to tackle
              projects from different angles and deliver high-quality results.
            </p>
          </div>

          <ul className="flex mt-2 gap-4 items-center">
            <li>
              <a
                href="https://github.com/sadat15"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon size="2xl" icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sadat-m/"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon size="2xl" icon={faLinkedinIn} />
              </a>
            </li>
          </ul>
        </div>
        <img
          id="test"
          src={hr}
          className="w-full md:h-2 absolute bottom-0"
          alt="hr"
        />
      </div>
    </>
  );
}
