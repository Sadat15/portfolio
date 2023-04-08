export default function ProjectCard({
  name,
  desc,
  screenshot,
  tools,
  gitLink,
}) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-offset="100"
      className="w-full md:w-2/6 bg-dark-100 rounded-md py-4 px-4"
    >
      <img
        src={screenshot}
        className="w-full h-35 mx-auto object-cover"
        alt={name}
      ></img>
      <div className="mt-2">
        <h1 className="font-bold md:text-xl">{name}</h1>
        <p className="font-light">Tools: {tools}</p>
        <p className="font-light text-gray-400">{desc}</p>
        <a href={gitLink}>
          <p className="font-light text-gray-400">Click here for GitHub link</p>
        </a>
      </div>
    </div>
  );
}
