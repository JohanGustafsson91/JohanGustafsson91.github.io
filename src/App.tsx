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
          {contact.map(({ type, link, text }) => (
            <div key={type} className="space-bottom-sm">
              <h4 className="no-space-bottom">{type}</h4>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {text}
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
          {sortByPeriod(experience).map(
            ({ role, company, period, description, technologies }) => (
              <ResumeItem
                key={description}
                title={`${role}, ${company}`}
                meta={displayDate(period)}
                description={description}
                additionalInfo={technologies.map(({ name }) => name).join(", ")}
              />
            ),
          )}
        </Section>

        <Section title="Employment" withDivider>
          {sortByPeriod(employment).map(({ role, company, period }) => (
            <ResumeItem
              key={company}
              title={company}
              meta={displayDate(period)}
              description={role}
            />
          ))}
        </Section>

        <Section title="Education">
          {sortByPeriod(education).map(
            ({ program, institution, period, level }) => (
              <ResumeItem
                key={program}
                title={`${institution}, ${level}`}
                meta={displayDate(period)}
                description={program}
              />
            ),
          )}
        </Section>
      </main>
    </div>
  </div>
);

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
    {withDivider && <hr />}
  </>
);

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

const displayDate = (period: Period) =>
  Object.values(period)
    .map((dateStringYearAndMonth) => {
      if (dateStringYearAndMonth === "") {
        return "Now";
      }

      const [year, month] = dateStringYearAndMonth.split("-");
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

const sortByPeriod = <T extends { period: Period }>(list: T[]) =>
  [...list].sort(
    (a, b) =>
      new Date(`${b.period.start}-01`).getTime() -
      new Date(`${a.period.start}-01`).getTime(),
  );

const extractSkills = (experience: CvData["experience"]) => [
  ...new Set(
    experience.flatMap(({ technologies }) =>
      technologies
        .filter(({ hideFromSkills }) => !hideFromSkills)
        .map(({ name }) => name),
    ),
  ),
];

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

interface SectionProps {
  title: string;
  withDivider?: boolean;
}

interface ResumeItemProps {
  title: string;
  meta: string;
  description?: string;
  additionalInfo?: string;
}

type Period = CvData["experience"][number]["period"];
