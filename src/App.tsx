import "./App.css";
import cvData from "./cv-data.json";

function App() {
  return (
    <div className="page">
      <header>
        <h1>{cvData.name}</h1>
      </header>

      <h2>Profile</h2>
      <p>{cvData.profile.description}</p>

      <h2>Experience</h2>
      <p>
        {cvData.experience.map((item) => (
          <div key={item.description} className="item">
            <div>
              <span>
                <strong>
                  {item.role}, {item.company}
                </strong>
              </span>
              <span className="period">
                {item.period.start} - {item.period.end}
              </span>
            </div>
            <p className="description">{item.description}</p>
            <p className="italic">{item.technologies.join(", ")}</p>
          </div>
        ))}
      </p>

      <h2>Employment</h2>
      {cvData.employment.map((item) => (
        <p key={item.company}>
          <span>
            <strong>{item.company}</strong>
            <span>, </span>
            {item.role}
          </span>
          <span className="period">
            {item.period.start} - {item.period.end}
          </span>
        </p>
      ))}

      <h2>Education</h2>
      {cvData.education.map((item) => (
        <div key={item.program}>
          <span>
            <strong>{item.institution}</strong>
            <span>, </span>
            {item.level}
          </span>
          <span className="period">
            {item.period.start} - {item.period.end}
          </span>
          <p className="italic">{item.program}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
