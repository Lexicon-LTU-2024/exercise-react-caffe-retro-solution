import { ReactElement } from "react";
import { Navbar, Section } from ".";
import { cosy, hot, juicy, sections } from "../data";

import "./App.css";

export function App(): ReactElement {
  return (
    <>
      <Navbar />
      <main>
        <Section data={hot} />
        <Section data={juicy} />
        <Section data={cosy} />

        {/* {sections.map((section) => (
          <Section key={section.id} data={section} />
        ))} */}
      </main>
    </>
  );
}
