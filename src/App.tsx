import { PropsWithChildren } from "react";
import "./App.css";
import profileImage from "./profile.jpeg";

export const App = ({
  name,
  profile,
  surname,
  contact,
  experience,
  employment,
  languages,
  education,
}: CvData) => (
  <div className="page">
    <header>
      <h1>
        {name}
        <br />
        {surname}
      </h1>
      <img src={profileImage} alt="profile" />
    </header>

    <div className="wrapper">
      <aside>
        <Section title="Contact">
          {contact.map((item) => (
            <div key={item.type} className="space-bottom-sm">
              <h4 className="no-space-bottom">{item.type}</h4>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.text}
              </a>
            </div>
          ))}
        </Section>

        <Section title="Skills">
          <p>{extractSkills(experience).join(", ")}</p>
        </Section>

        <Section title="Languages">
          {languages.map(({ language, proficiency }) => (
            <ResumeItem key={language} title={language} meta={proficiency} />
          ))}
        </Section>
      </aside>

      <main className="content">
        <Section title="Profile" withDivider>
          <p>{profile.description}</p>
        </Section>

        <Section title="Experience" withDivider>
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
        </Section>

        <Section title="Employment" withDivider>
          {employment.map(({ role, company, period }) => (
            <ResumeItem
              key={company}
              title={company}
              meta={displayDate(period)}
              description={role}
            />
          ))}
        </Section>

        <Section title="Education">
          {education.map(({ program, institution, period, level }) => (
            <ResumeItem
              key={program}
              title={`${institution}, ${level}`}
              meta={displayDate(period)}
              description={program}
            />
          ))}
        </Section>
      </main>
    </div>
  </div>
);

interface CvData {
  name: string;
  surname: string;
  profile: { description: string };
  contact: { type: string; link: string; text: string }[];
  experience: {
    role: string;
    company: string;
    period: { start: string; end: string };
    description: string;
    technologies: { name: string; hideFromSkills?: boolean }[];
  }[];
  employment: {
    role: string;
    company: string;
    period: { start: string; end: string };
  }[];
  languages: { language: string; proficiency: string }[];
  education: {
    program: string;
    institution: string;
    period: { start: string; end: string };
    level: string;
  }[];
}

const Section = ({
  title,
  children,
  withDivider,
}: PropsWithChildren<SectionProps>) => (
  <>
    <section>
      <h2>{title}</h2>
      {children}
    </section>
    {withDivider ? <hr /> : null}
  </>
);

interface SectionProps {
  title: string;
  withDivider?: boolean;
}

const ResumeItem = ({
  title,
  meta,
  description,
  additionalInfo,
}: ResumeItemProps) => (
  <div
    className={
      description || additionalInfo ? "space-bottom-md" : "space-bottom-sm"
    }
  >
    <div className="row">
      <span>
        <strong>{title} </strong>
      </span>
      <span className="meta">{meta}</span>
    </div>
    {description ? <p>{description}</p> : null}
    {additionalInfo ? <p className="meta">{additionalInfo}</p> : null}
  </div>
);

interface ResumeItemProps {
  title: string;
  meta: string;
  description?: string;
  additionalInfo?: string;
}

const displayDate = (period: CvData["experience"][number]["period"]) =>
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

const extractSkills = (experience: CvData["experience"]) => [
  ...new Set(
    experience.flatMap((item) =>
      item.technologies
        .filter((item) => !item.hideFromSkills)
        .map((item) => item.name),
    ),
  ),
];
