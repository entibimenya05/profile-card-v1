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
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" emoji="💪" color="blue" />
      <Skill skill="JavaScript" emoji="💪" color="orange" />
      <Skill skill="React" emoji="😎" color="yellow" />
      <Skill skill="Svelte" emoji="😳" color="orangered" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span> {props.emoji}</span>
    </div>
  );
}
function Avatar() {
  return <img src="jonas.jpg" alt="profile card" className="avatar" />;
}
export default App;
