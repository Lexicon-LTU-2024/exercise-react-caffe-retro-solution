import { IImages, ILink, ISection } from "./interfaces";

import hotBg from "./assets/hot.jpg";
import juicyBg from "./assets/juicy.jpg";
import cosyBg from "./assets/cosy.jpg";

export const images: IImages = {
  hot: hotBg,
  juicy: juicyBg,
  cosy: cosyBg,
};

export const links: ILink[] = [
  {
    id: "1",
    label: "hot",
    href: "#hot",
  },
  {
    id: "2",
    label: "juicy",
    href: "#juicy",
  },
  {
    id: "3",
    label: "cosy",
    href: "#cosy",
  },
];

export const hot: ISection = {
  blackBox: {
    data: [
      { id: "a", key: "Mocha Latte", value: "€ 7.50" },
      { id: "b", key: "Caffe Formaggio", value: "€ 5.00" },
      { id: "c", key: "Espresso", value: "€ 3.50" },
      { id: "d", key: "Chai Verde Latte", value: "€ 5.50" },
    ],
  },
  id: "hot",
  image: images.hot,
  redBoxes: [
    { content: "Hot freshly ground black coffee or a cup of exquisite tea?", id: "1" },
    { content: "We give you that perfect cup every time.", id: "2" },
  ],
  title: "hot",
};

export const juicy: ISection = {
  blackBox: {
    data: [
      { id: "a", key: "Branched Apricots", value: "€ 4.20" },
      { id: "b", key: "Deep Rasberries", value: "€ 3.50" },
      { id: "c", key: "Espresso", value: "6.50" },
    ],
  },
  id: "juicy",
  image: images.juicy,
  redBoxes: [
    { content: "Ripe fruit - freshly squeezed.", id: "1" },
    { content: "It's as simple as that. Chunky or smooth - it's your choice", id: "2" },
  ],
  title: "juicy",
};

export const cosy: ISection = {
  blackBox: {
    data: [
      { id: "a", key: "Mon-Sun ", value: "8am - 11pm" },
      { id: "b", key: "Caffe Retro", value: "Canto VI" },
      { id: "c", key: "0123-45 67 89", value: "caffe@lorem.pge" },
    ],
  },
  id: "cosy",
  image: images.cosy,
  redBoxes: [
    { content: "Hang around. Enjoy the settings", id: "1" },
    { content: "Use our fast WiFi. Borrow a newspaper or a novel.", id: "2" },
  ],
  title: "cosy",
};

export const sections: ISection[] = [hot, juicy, cosy];
