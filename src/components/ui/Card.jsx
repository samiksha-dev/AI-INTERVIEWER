import {
  siJavascript,
  siReact,
  siGithub,
  siGo,
  siTypescript,
} from "simple-icons";

const topics = [
  {
    name: "JavaScript",
    icon: siJavascript,
    questions: 124,
  },
  {
    name: "React",
    icon: siReact,
    questions: 98,
  },
  {
    name: "Go",
    icon: siGo,
    questions: 70,
  },
  {
    name: "GitHub",
    icon: siGithub,
    questions: 90,
  },
  {
    name: "TypeScript",
    icon: siTypescript,
    questions: 85,
  },
];
const Card = () => {
  return (
    <div className="mt-10">
      <section className="mt-10">
        <div className="flex justify-between">
          <h2 className="text-white text-xl font-semibold mb-4">
            Popular Topics
          </h2>
          <h4 className="text-primary text-base">View All</h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-4
                         bg-dark-navy p-4 rounded-lg
                         hover:bg-dark-blue
                         transition-colors duration-300 cursor-pointer"
            >
              {/* Logo */}
              <div className="w-10 h-10 flex items-center justify-center">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="w-8 h-8"
                  fill={`#${item.icon.hex}`}
                >
                  <path d={item.icon.path} />
                </svg>
              </div>

              {/* Topic info */}
              <div>
                <h3 className="text-white font-medium">{item.name}</h3>

                <p className="text-muted text-sm">{item.questions} questions</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Card;
