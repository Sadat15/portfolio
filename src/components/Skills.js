import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SkillCard from "./SkillCard.js";
import hr from "../assets/curve-hr.svg";
import {
  DiNodejs,
  DiReact,
  DiRuby,
  DiPostgresql,
  DiMongodb,
} from "react-icons/di";
import {
  SiExpress,
  SiGithub,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

export default function Skills() {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div id="skills" className="mt-4 text-white">
      <h1 className="text-2xl font-bold">Skills</h1>
      <p className="font-light text-gray-400">
        Technologies I have worked with
      </p>

      <div className="mt-4">
        <Slider {...settings}>
          <SkillCard
            name="JavaScript"
            logo={<SiJavascript size={100} className="w-20 max-h-20 mx-auto" />}
          />
          <SkillCard
            name="Tailwind"
            logo={
              <SiTailwindcss size={100} className="w-20 max-h-20 mx-auto" />
            }
          />
          <SkillCard
            name="React"
            logo={<DiReact size={100} className="w-20 max-h-20 mx-auto" />}
          />
          <SkillCard
            name="Git"
            logo={<SiGithub size={100} className="w-20 max-h-20 mx-auto" />}
          />
          <SkillCard
            name="Express"
            logo={<SiExpress size={100} className="w-20 max-h-20 mx-auto" />}
          />
          <SkillCard
            name="Node.js"
            logo={<DiNodejs size={100} className="w-20 max-h-20 mx-auto" />}
          />
          <SkillCard
            name="Ruby"
            logo={<DiRuby size={100} className="w-20 max-h-20 mx-auto" />}
          />
          <SkillCard
            name="PostgreSQL"
            logo={<DiPostgresql size={100} className="w-20 max-h-20 mx-auto" />}
          />
          <SkillCard
            name="MongoDB"
            logo={<DiMongodb size={100} className="w-20 max-h-20 mx-auto" />}
          />
        </Slider>
      </div>
      <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
    </div>
  );
}
