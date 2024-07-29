import { ReactElement } from "react";
import { ISection } from "../interfaces";
import { BlackBox, RedBox } from ".";
import { images } from "../data";

import "./Section.css";

interface ISectionProps {
  data: ISection;
}

export function Section({ data }: ISectionProps): ReactElement {
  // ########## alternative 1 (easiest) - using style attribute and image data ##########

  // const bgImage = `url(${data.image})`;
  // add this to the element => style={{ backgroundImage: bgImage}}

  // return (
  //   <section className="section" style={{ backgroundImage: bgImage }}>
  //     <h1 className="header">{data.title}</h1>
  //     {data.redBoxes.map((redBox) => (
  //       <RedBox key={redBox.id} redBox={redBox} />
  //     ))}
  //     <BlackBox blackBox={data.blackBox} />
  //   </section>
  // );

  // ########## alternative 2 (also easy but more code) - using classes and css ##########
  const classes = ["section"];

  switch (data.image) {
    case images.hot:
      classes.push("hot");
      break;
    case images.juicy:
      classes.push("juicy");
      break;
    case images.cosy:
      classes.push("cosy");
      break;
  }

  return (
    <section className={classes.join(" ")} id={data.id}>
      <h1 className="header">{data.title}</h1>
      {data.redBoxes.map((redBox) => (
        <RedBox key={redBox.id} redBox={redBox} />
      ))}
      <BlackBox blackBox={data.blackBox} />
    </section>
  );
}
