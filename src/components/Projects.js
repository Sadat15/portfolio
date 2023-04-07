import hr from "../assets/curve-hr.svg";
import ProjectCard from "./ProjectCard.js";

export default function Projects() {
  return (
    <div id="honors" className="mt-4 text-white">
      <h1 className="text-2xl font-bold">Projects</h1>
      <p className="font-light text-gray-400">Here are some of my projects</p>

      <div className="flex flex-col md:flex-row mt-4 gap-5">
        <ProjectCard
          name="Face Recognition App"
          desc="Web application designed to detect human faces in images and recognise them using artificial intelligence."
        />
        <ProjectCard
          name="Cocktail Recipe Search"
          desc="Recipe app allowing users to search for recipes with given ingredients with the purpose of reducing waste."
        />
        <ProjectCard
          name="AceBook"
          desc="Social networking app like Facebook, including features such as posting, liking, and commenting."
        />
      </div>
      <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
    </div>
  );
}
