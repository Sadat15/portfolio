export default function SkillCard({ name, logo }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-offset="100"
      className="w-11/12 mx-auto p-4 text-center justify-center border-2 border-gray-800 bg-dark-200 rounded-md flex flex-col h-48"
    >
      {logo}
      <div className="mt-2">
        <h1 className="font-bold md:text-xl">{name}</h1>
      </div>
    </div>
  );
}
