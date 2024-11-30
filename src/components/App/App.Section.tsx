import { PropsWithChildren } from "react";

export const Section = ({
  title,
  children,
  withDivider,
}: PropsWithChildren<Props>) => (
  <>
    <section>
      <h2>{title}</h2>
      {children}
    </section>
    {withDivider && <hr />}
  </>
);

interface Props {
  title: string;
  withDivider?: boolean;
}
