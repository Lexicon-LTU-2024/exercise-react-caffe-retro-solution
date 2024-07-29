import { ReactElement } from "react";
import { IBlackBox } from "../interfaces";

import "./BlackBox.css";

interface IBlackBoxProps {
  blackBox: IBlackBox;
}

export function BlackBox({ blackBox }: IBlackBoxProps): ReactElement {
  return (
    <div className="black-box">
      {blackBox.data.map((blackBoxRow) => (
        <p className="row" key={blackBoxRow.id}>
          <span>{blackBoxRow.key}</span>
          <span>{blackBoxRow.value}</span>
        </p>
      ))}
    </div>
  );
}
