import hr from "../assets/curve-hr.svg";
import ProjectCard from "./ProjectCard.js";
import faceRecognitionApp from "../assets/projects/face_recognition_app.jpeg";
import acebook from "../assets/projects/acebook.png";
import cocktails from "../assets/projects/cocktail_recipe.jpeg";

export default function Projects() {
  return (
    <div id="projects" className="mt-4 text-white">
      <h1 className="text-2xl font-bold">Projects</h1>
      <p className="font-light text-gray-400">Here are some of my projects</p>

      <div className="flex flex-col md:flex-row mt-4 gap-5">
        <ProjectCard
          name="Face Recognition App"
          screenshot={faceRecognitionApp}
          desc="Web application designed to detect human faces in images and recognise them using artificial intelligence."
          tools="JavaScript, Node.js, Express, PostgreSQL, Tachyons, MUI"
          gitLink={"https://github.com/Sadat15/face-recognition-search"}
        />
        <ProjectCard
          name="Cocktail Recipe Search"
          screenshot={cocktails}
          desc="Recipe app allowing users to search for recipes with given ingredients with the purpose of reducing waste."
          tools="JavaScript, Node.js, Express, MongoDB, Handlebars, Jest, Cypress"
          gitLink={"https://github.com/Sadat15/ingredient-based-recipe-app"}
        />
        <ProjectCard
          name="Acebook"
          screenshot={acebook}
          desc="Social networking app like Facebook, including features such as posting, liking, and commenting."
          tools="Ruby, Sinatra, PostgreSQL, Bootstrap, erb"
          gitLink={"https://github.com/adaoub/acebook"}
        />
      </div>
      <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
    </div>
  );
}
