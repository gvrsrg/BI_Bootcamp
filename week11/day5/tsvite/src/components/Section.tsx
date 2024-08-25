import React, { ReactElement, ReactNode } from 'react'

interface SectionProps {
  content: string;
  children: ReactElement
}

export default function Section({content, children}: SectionProps): ReactElement {
  return (
    <>
      <h3>{content}</h3>
      <div>
        {children}
      </div>

    </>
  )
}
