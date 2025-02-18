const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />

      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
function Intro() {
  return (
    <div className="intro">
      <h1>Jonas Schmedtmann</h1>
      <p className="data">
        Full-stack web developer and teacher at Udemy.When not coding or
        preparing a cours,I like to play board games,to cook(and eat),or just
        enjoy the Portuguese sun at the beack
      </p>
    </div>
  );
}
function SkillList({ skill, color, level }) {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}
function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {/*we can not use a ternary operator because we have more than two options so use && operator*/}
        {level === "beginner" && "😒"}
        {level === "intermediate" && "😒"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}
function Avatar() {
  return <img src="jonas.jpg" alt="profile card" className="avatar" />;
}
export default App;
