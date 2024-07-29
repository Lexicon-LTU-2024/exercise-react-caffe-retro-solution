import { ReactElement } from "react";
import { IRedBox } from "../interfaces";

import "./RedBox.css";

interface IRedBoxProps {
  redBox: IRedBox;
}

export function RedBox({ redBox }: IRedBoxProps): ReactElement {
  return <p className="red-box">{redBox.content}</p>;
}
