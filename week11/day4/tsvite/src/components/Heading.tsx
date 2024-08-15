import React, {ReactElement} from 'react'

type HeadingProps = {
    title: string;
    sub: string;
};



export default function Heading({title, sub}: HeadingProps): ReactElement {
  return (
    <>
        <h1>{title}</h1>
        <h2>{sub}</h2>
    </>

  )
}
