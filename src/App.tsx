import "./App.css";
import cvData from "./cv.json";
import profileImage from "./profile.jpeg";

const App = () => (
  <div className="page">
    <header>
      <h1>
        {name}
        <br />
        {surname}
      </h1>
      <img src={profileImage} />
    </header>

    <div className="wrapper">
      <aside>
        <section>
          <h2>Contact</h2>
          {contact.map((item) => (
            <div key={item.type} className="space-bottom-sm">
              <h4 className="no-space-bottom">{item.type}</h4>
              <a href={item.link} target="_blank">
                {item.text}
              </a>
            </div>
          ))}
        </section>

        <section>
          <h2>Skills</h2>
          <p>{skills.join(", ")}</p>
        </section>

        <section>
          <h2>Languages</h2>
          {languages.map(({ language, proficiency }) => (
            <ResumeItem key={language} title={language} meta={proficiency} />
          ))}
        </section>
      </aside>

      <main className="content">
        <section>
          <h2>Profile</h2>
          <p>{cvData.profile.description}</p>
        </section>

        <hr />

        <section>
          <h2>Experience</h2>
          {experience.map(
            ({ role, company, period, description, technologies }) => (
              <ResumeItem
                key={description}
                title={`${role}, ${company}`}
                meta={displayDate(period)}
                description={description}
                additionalInfo={technologies
                  .map((item) => item.name)
                  .join(", ")}
              />
            ),
          )}
        </section>

        <hr />

        <section>
          <h2>Employment</h2>
          {employment.map(({ role, company, period }) => (
            <ResumeItem
              key={company}
              title={company}
              meta={displayDate(period)}
              description={role}
            />
          ))}
        </section>

        <hr />

        <section>
          <h2>Education</h2>
          {education.map(({ program, institution, period, level }) => (
            <ResumeItem
              key={program}
              title={`${institution}, ${level}`}
              meta={displayDate(period)}
              description={program}
            />
          ))}
        </section>
      </main>
    </div>
  </div>
);

const ResumeItem = ({
  title,
  meta,
  description,
  additionalInfo,
}: ResumeItemProps) => (
  <div className="space-bottom-md">
    <div className="row">
      <span>
        <strong>{title} </strong>
      </span>
      <span className="date">{meta}</span>
    </div>
    {description ? <p>{description}</p> : null}
    {additionalInfo ? <p className="date">{additionalInfo}</p> : null}
  </div>
);

interface ResumeItemProps {
  title: string;
  meta: string;
  description?: string;
  additionalInfo?: string;
}

const { name, surname, contact, experience, employment, languages, education } =
  cvData;

const skills = [
  ...new Set(
    experience.flatMap((item) =>
      item.technologies
        .filter((item) => !item.hideFromSkills)
        .map((item) => item.name),
    ),
  ),
];

const displayDate = (period: { start: string; end: string }) =>
  Object.values(period)
    .map((value) => {
      if (value === "") {
        return "Now";
      }

      const [year, month] = value.split("-");
      const formattedMonth = monthNames[parseInt(month, 10) - 1];

      return `${formattedMonth} ${year}`;
    })
    .join(" - ");

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default App;
