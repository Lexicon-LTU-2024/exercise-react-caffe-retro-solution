export interface IBlackBox {
  data: IBlackBoxRow[];
}

interface IBlackBoxRow {
  id: string;
  key: string;
  value: string;
}

export interface IImages {
  hot: string;
  juicy: string;
  cosy: string;
}

export interface ILink {
  id: string;
  label: string;
  href: string;
}

export interface IRedBox {
  id: string;
  content: string;
}

export interface ISection {
  blackBox: IBlackBox;
  id: string;
  image: string;
  redBoxes: IRedBox[];
  title: string;
}
