import React, { JSX } from "react";

interface HompageProps {
    intro: string;
    outtro?: string;
    children?: React.ReactNode;
}
function Homepage({ intro, outtro, children }: HompageProps): JSX.Element {
    return (
        <>
            <div>This is {intro}</div>
            {outtro && <div>This is {outtro}</div>}
            {children}
        </>
    );
  }
export default Homepage;