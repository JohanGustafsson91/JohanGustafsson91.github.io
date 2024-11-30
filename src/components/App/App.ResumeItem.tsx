export const ResumeItem = ({
  title,
  meta,
  description,
  additionalInfo,
}: Props) => (
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

interface Props {
  title: string;
  meta: string;
  description?: string;
  additionalInfo?: string;
}
