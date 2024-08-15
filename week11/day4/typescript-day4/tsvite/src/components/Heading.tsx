import React, { ReactElement } from "react";

export type HeadingProps = {
  title: string;
  sub: string;
};

const Heading = ({ title, sub }: HeadingProps): ReactElement => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{sub}</h2>
    </>
  );
};

export default Heading;
