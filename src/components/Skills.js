const Skills = () => {
  let skills = [
    {
      name: "Ngoding",
      img: "https://th.bing.com/th/id/OIP.itMGCjNIIpQCN8lUKdEt-gHaE8?pid=ImgDet&rs=1",
    },
    {
      name: "Design Grafis",
      img: "https://th.bing.com/th/id/OIP.oUGCTBA0R-ulIETSJeKMXwHaFW?w=229&h=180&c=7&r=0&o=5&pid=1.7",
    },
  ];
  return (
    <div id="skills">
      <h2>My Skills</h2>
      <div className="skills-list">
        {skills.map((x) => (
          <div className="skill-item" onClick={() => alert(x.name)}>
            <img src={x.img} alt="" width="200" />
            <h3>{x.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
